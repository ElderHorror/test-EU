import { NextResponse } from "next/server";
import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

type Feedback = {
    name?: string;
    email?: string;
    message?: string;
};

export async function POST(request: Request) {
    const data: Feedback = await request.json();
    console.log('data: ', data);

    const { name, email, message } = data;

    // Configure Nodemailer with your email service credentials
    const transporter: Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.FEEDBACK_EMAIL,
            pass: process.env.FEEDBACK_PASSWORD
        },
    });

    // Define the email content
    const mailOptions: SendMailOptions = {
        from: process.env.FEEDBACK_EMAILL,
        to: process.env.T0_EMAIL,
        subject: 'New Feedback Received',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ name, email, message });
}