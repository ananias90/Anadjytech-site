import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = "force-dynamic";

interface ContactFormData {
  topic: string;
  fullName: string;
  email: string;
  orderId: string;
  message: string;
  consent: boolean;
  marketing: boolean;
  honeypot: string;
}

export async function POST(req: Request) {
  const { 
    topic, 
    fullName,  
    email, 
    orderId, 
    message, 
    consent, 
    marketing, 
    honeypot 
  }: ContactFormData = await req.json();

  // Check honeypot field for spam
  if (honeypot) {
    return NextResponse.json({ status: "success" }); // Silent success for bots
  }

  // Check if consent is given
  if (!consent) {
    return NextResponse.json(
      {
        message: "Consent is required",
        isSuccess: false,
      },
      { status: 400 }
    );
  }

  let mailOptions;

  mailOptions = {
    from: `${email}`,
    to: `contact@anadjytech.com`,
    subject: `AnadjyTech Contact - ${topic}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #4a5568;">New Contact Form Submission</h2>
        <div style="background-color: #f7fafc; padding: 1.5rem; border-radius: 0.5rem;">
          <p><strong style="color: #4a5568;">Topic:</strong> ${topic}</p>
          <p><strong style="color: #4a5568;">Full Name:</strong> ${fullName}</p>
          <p><strong style="color: #4a5568;">Email Address:</strong> ${email}</p>
          ${orderId ? `<p><strong style="color: #4a5568;">Order ID:</strong> ${orderId}</p>` : ''}
          ${message ? `
            <p><strong style="color: #4a5568;">Message:</strong></p>
            <div style="white-space: pre-wrap; background-color: #fff; padding: 1rem; border-radius: 0.25rem; border-left: 4px solid #4299e1;">
              ${message}
            </div>
          ` : ''}
          <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
            <strong style="color: #4a5568;">Preferences:</strong><br/>
            <strong>Consent Given:</strong> ${consent ? 'Yes' : 'No'}<br/>
            <strong>Marketing Emails:</strong> ${marketing ? 'Opted In' : 'Opted Out'}
          </p>
        </div>
      </div>
    `,
  };

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'atifhameed2002@gmail.com',
        pass: 'hewm gdiv molg vfvx',
      },
    });

    let isSent = false;

    await transporter
      .sendMail(mailOptions)
      .then((info:any) => {
        console.log("Email sent:", info.messageId);
        isSent = true;
      })
      .catch((error :any) => {
        console.log("Email not sent:", error);
      });

    if (isSent) {
      return NextResponse.json({ 
        status: "sent",
        message: "Email sent successfully",
        isSuccess: true 
      });
    } else {
      return NextResponse.json({ 
        status: "error",
        message: "Failed to send email",
        isSuccess: false 
      });
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : 'Unknown error',
        isSuccess: false,
      },
      { status: 500 }
    );
  }
}