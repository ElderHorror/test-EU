import { readFileSync } from "fs";
import { NextResponse, NextRequest } from "next/server";
import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

const data = readFileSync("/email.ics", "utf8");

console.log({ data });
type Feedback = {
  email: string;
};
var string = "Hello World!";
const encodedString = Buffer.from(string).toString("base64");

async function POST(request: Request) {
  try {
    const data: Feedback = await request.json();

    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    // Configure Nodemailer with your email service credentials
    const transporter: Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FEEDBACK_EMAIL,
        pass: process.env.FEEDBACK_PASSWORD,
      },
    });

    // Define the email content
    const mailOptions: SendMailOptions = {
      from: process.env.FEEDBACK_EMAILL,
      to: email,
      subject:
        "Invitation to The Introduction to R for Research. Although with that link they'll still need to register on zoom",
      text: `Hi there, 

    You are invited to a Zoom meeting. 
    When: Jun 15, 2024 02:00 PM Copenhagen 
    
    Register in advance for this meeting:https://ucph-ku.zoom.us/meeting/register/u5wodu-urTMvHtJGkqeDMWpBaoxW8gm1v9cT 
    
    After registering, you will receive a confirmation email containing information about joining the meeting.`,
      attachments: [
        {
          filename: "bootcamp_event_detail.ics",
          contentTransferEncoding: "base64",
          contentDisposition: "attachment",
          contentType: "text/calendar",
          raw: encodedString,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

export default function handler(req: NextRequest, res: any) {
  if (req.method == "POST") {
    return POST(req);
  }
  res.status(200).json({ message: "Hello from Next.js!" });
}
