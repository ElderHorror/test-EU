import { NextResponse } from "next/server";
import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

// Configure Nodemailer with your email service credentials
export const emailTransporter: Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.FEEDBACK_EMAIL,
    pass: process.env.FEEDBACK_PASSWORD,
  },
});
export async function POST(request: Request) {
  try {
    const data: Feedback = await request.json();

    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Define the email content
    const mailOptions: SendMailOptions = {
      from: process.env.FEEDBACK_EMAILL,
      to: process.env.T0_EMAIL,
      subject: "New Feedback Received",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await emailTransporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
