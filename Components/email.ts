import { Transporter, createTransport } from "nodemailer";

// Configure Nodemailer with your email service credentials
export const emailTransporter: Transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.FEEDBACK_EMAIL,
    pass: process.env.FEEDBACK_PASSWORD,
  },
});
