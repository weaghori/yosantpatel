import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    
    const {
      fullName, email, phone, city, occupation,
      services, budget, businessDetails, inquiryDetails,
      selectedDate
    } = data;

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
    const SMTP_PORT = process.env.SMTP_PORT || '587';
    const SMTP_USER = process.env.SMTP_USER;
    const BREVO_API_KEY = process.env.BREVO_API_KEY; // Used as SMTP password
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'iam@yosantpatel.com';

    if (!BREVO_API_KEY || !SMTP_USER) {
      console.error("Missing SMTP credentials");
      return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px;">
        <h2 style="color: #203b72;">New Consultation Request</h2>
        <p>You have received a new consultation request from your website.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Full Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${fullName || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">City</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${city || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Occupation</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${occupation || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Date</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${selectedDate ? new Date(selectedDate).toDateString() : 'None selected'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Services Needed</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${services && services.length > 0 ? services.join(', ') : 'None selected'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Budget</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${budget || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Business Details</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${businessDetails || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Inquiry</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${inquiryDetails || 'N/A'}</td>
          </tr>
        </table>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: BREVO_API_KEY,
      },
    });

    const mailOptions = {
      from: `"Yosant Patel Website" <${SENDER_EMAIL}>`,
      to: SENDER_EMAIL,
      replyTo: email ? `"${fullName || 'Website Visitor'}" <${email}>` : undefined,
      subject: `New Consultation Request from ${fullName || 'Website Visitor'}`,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
