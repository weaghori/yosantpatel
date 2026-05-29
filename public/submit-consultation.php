<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
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

// Parse request payload (support JSON and urlencoded Form Data)
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if (strpos($contentType, 'application/json') !== false) {
    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true) ?: [];
} else {
    $data = $_POST;
}

if (empty($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Empty form payload"]);
    exit();
}

// Verify Google reCAPTCHA v3
$recaptchaSecret = "6LcRzfgsAAAAAEfFQDIBKC7SAsCAVOmD1gs03mSo";
$recaptchaResponse = $data['g-recaptcha-response'] ?? '';

if (empty($recaptchaResponse)) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "reCAPTCHA verification failed: No token provided"]);
    exit();
}

$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptchaSecret . '&response=' . $recaptchaResponse);
$responseData = json_decode($verifyResponse);

if (!$responseData || !$responseData->success || $responseData->score < 0.5) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "reCAPTCHA verification failed: Bot detected"]);
    exit();
}

// Decode services array if it was stringified
$services = $data['services'] ?? [];
if (is_string($services)) {
    $decoded = json_decode($services, true);
    if (is_array($decoded)) {
        $services = $decoded;
    } else {
        $services = [$services];
    }
}

$fullName = $data['fullName'] ?? 'Website Visitor';
$email = $data['email'] ?? 'N/A';
$phone = $data['phone'] ?? 'N/A';
$city = $data['city'] ?? 'N/A';
$occupation = $data['occupation'] ?? 'N/A';
$selectedDate = !empty($data['selectedDate']) ? date("D M d Y", strtotime($data['selectedDate'])) : 'None selected';
$servicesList = !empty($services) ? implode(", ", $services) : 'None selected';
$budget = $data['budget'] ?? 'N/A';
$businessDetails = $data['businessDetails'] ?? 'N/A';
$inquiryDetails = $data['inquiryDetails'] ?? 'N/A';


$htmlContent = '
<html>
<head>
  <title>New Consultation Request</title>
</head>
<body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px;">
    <h2 style="color: #203b72;">New Consultation Request</h2>
    <p>You have received a new consultation request from your website.</p>
    
    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px; background-color: #f9f9f9;">Full Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . htmlspecialchars($fullName) . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . htmlspecialchars($email) . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Phone</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . htmlspecialchars($phone) . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">City</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . htmlspecialchars($city) . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Occupation</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . htmlspecialchars($occupation) . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Preferred Date</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . htmlspecialchars($selectedDate) . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Services Needed</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . htmlspecialchars($servicesList) . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Budget</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . htmlspecialchars($budget) . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Business Details</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . nl2br(htmlspecialchars($businessDetails)) . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Inquiry</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">' . nl2br(htmlspecialchars($inquiryDetails)) . '</td>
        </tr>
    </table>
</body>
</html>';

$to = "iam@yosantpatel.com";
$subject = "New Consultation Request from " . $fullName;

// Standard email headers for HTML sending
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Yosant Patel Website <no-reply@" . $_SERVER['HTTP_HOST'] . ">" . "\r\n";

if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers .= "Reply-To: " . $email . "\r\n";
}

$mailSent = mail($to, $subject, $htmlContent, $headers);

if ($mailSent) {
    echo json_encode(["success" => true, "message" => "Email sent successfully using local mail server"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send email. Please check your cPanel hosting email settings."]);
}
?>
