import { NextResponse } from "next/server";
import nodemailer, { Transporter, SendMailOptions } from "nodemailer";
import { emailTransporter } from "@/lib/email";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

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
      from: process.env.FEEDBACK_EMAIL,
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
