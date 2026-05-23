<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

// Standard FormData (multipart/form-data) is used to bypass WAF JSON rules
$data = $_POST;

if (empty($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Empty form payload"]);
    exit();
}

// Verify Google reCAPTCHA v3
$recaptchaSecret = "6LcRzfgsAAAAAEfFQDIBKC7SAsCAVOmD1gs03mSo";
if (empty($data['g-recaptcha-response'])) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "reCAPTCHA verification failed: No token provided"]);
    exit();
}

$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptchaSecret . '&response=' . $data['g-recaptcha-response']);
$responseData = json_decode($verifyResponse);

// score usually ranges from 0.0 (bot) to 1.0 (human)
if (!$responseData->success || $responseData->score < 0.5) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "reCAPTCHA verification failed: Bot detected"]);
    exit();
}

// Decode services array if it was stringified
if (!empty($data['services']) && is_string($data['services'])) {
    $data['services'] = json_decode($data['services'], true);
}

$to = "iam@yosantpatel.com";
$subject = "New Consultation Request from " . ($data['fullName'] ?? 'Website Visitor');

$message = "You have received a new consultation request from your website.\n\n";
$message .= "Full Name: " . ($data['fullName'] ?? 'N/A') . "\n";
$message .= "Email: " . ($data['email'] ?? 'N/A') . "\n";
$message .= "Phone: " . ($data['phone'] ?? 'N/A') . "\n";
$message .= "City: " . ($data['city'] ?? 'N/A') . "\n";
$message .= "Occupation: " . ($data['occupation'] ?? 'N/A') . "\n";
if (!empty($data['selectedDate'])) {
    $message .= "Preferred Date: " . date("D M d Y", strtotime($data['selectedDate'])) . "\n";
} else {
    $message .= "Preferred Date: None selected\n";
}
if (!empty($data['services']) && is_array($data['services'])) {
    $message .= "Services Needed: " . implode(", ", $data['services']) . "\n";
} else {
    $message .= "Services Needed: None selected\n";
}
$message .= "Budget: " . ($data['budget'] ?? 'N/A') . "\n";
$message .= "Business Details: " . ($data['businessDetails'] ?? 'N/A') . "\n";
$message .= "Inquiry Details: " . ($data['inquiryDetails'] ?? 'N/A') . "\n";

$headers = "From: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n";
if (!empty($data['email'])) {
    $headers .= "Reply-To: " . $data['email'] . "\r\n";
}

$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send email. Check cPanel mail settings."]);
}
?>
