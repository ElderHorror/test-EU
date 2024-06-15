import { NextResponse } from "next/server";
import { SendMailOptions } from "nodemailer";
import { emailTransporter } from "../../../../Components/email";
import { createHmac } from "crypto";

const buildMail = (firstName: string) =>
  `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to the “R for Research” Course</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
 .email-container {
    width: 80%;
    max-width: 600px;
    margin: auto;
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 10px;
  }
  p {
    line-height: 1.6;
    margin-bottom: 10px;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    margin-bottom: 5px;
  }
 .signature {
    text-align: center;
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }
 .signature-name {
    display: block;
    font-weight: bold;
  }
 .signature-title {
    color: #666;
  }
</style>
</head>
<body>
<div class="email-container">
  <h1>Welcome to the “R for Research” Course</h1>
  <p>Dear <strong>${firstName},</strong></p>
  <p>Congratulations on successfully purchasing the “R for Research” course We are thrilled to have you on board and can’t wait to help you build a solid foundation in R programming for your research projects.</p>
  <p>Thank you for taking this important step towards enhancing your research skills. This course is designed to provide you with the essential tools and knowledge needed to excel in your academic and professional journey.</p>
  <h2>What to Expect:</h2>
  <ul>
    <li>Data processing and exploratory data analysis</li>
    <li>Inferential Statistics (Hypothesis Testing)</li>
    <li>Data Visualization</li>
    <li>Using R for article, thesis, and business reporting</li>
    <li>Fundamental GitHub for collaboration</li>
    <li>Portfolio project and many more</li>
  </ul>
  <p>Further instructions and detailed information about the course will be sent to you soon. Please keep an eye on your inbox for updates, including access details, course materials, and important dates.</p>
  <p>If you have any questions in the meantime, feel free to reach out to us at <a href="mailto:eustudyassist@gmail.com">eustudyassist@gmail.com</a>.</p>
  <div class="signature">
    <span class="signature-name">Olamide Adu</span><br>
    <span class="signature-title">R Team Lead</span><br>
    <span>eustudyassist</span>
  </div>
</div>
</body>
</html>
`;

interface PaystackData {
  id: number;
  domain: string;
  status: string;
  reference: string;
  amount: number;
  message: null | string;
  gateway_response: string;
  paid_at: string;
  created_at: string;
  channel: string;
  currency: string;
  ip_address: string;
  metadata: {
    firstName: string;
    email: string;
  };
  fees: null;
  plan: {}; // Type it appropriately if needed
}

export interface PaystackChargeSuccessEvent {
  event: "charge.success";
  data: PaystackData;
}

export async function GET(req: Request) { 
  return NextResponse.json({ message: "welcome" });
}

export async function POST(req: Request) {
  const data: PaystackChargeSuccessEvent = await req.json();
  const signature = req.headers.get("x-paystack-signature") as string;

  function verify(eventData: any, signature: string): boolean {
    const hmac = createHmac("sha512", process.env.PAYSTACK_SECRET ?? "");
    const expectedSignature = hmac
      .update(JSON.stringify(eventData))
      .digest("hex");
    return expectedSignature === signature;
  }
  console.log({ fullData: JSON.stringify(data) });

  if (!verify(data, signature)) {
    return NextResponse.json({ message: "Email sent successfully" });
  }

  try {
    if (data.event === "charge.success") {
      const reference = data.data.reference;

      // Define the email content
      const mailOptions: SendMailOptions = {
        from: process.env.FEEDBACK_EMAILL,
        to: data.data.metadata.email,
        subject: "Welcome to the “R for Research",
        html: buildMail(data.data.metadata.firstName),
      };
      // Send the email
      await emailTransporter.sendMail(mailOptions);
    }
  } catch (e) {
    console.log(e);
  }
  return NextResponse.json({ message: "Email sent successfully" });
}
