import { NextResponse } from "next/server";
import { SendMailOptions } from "nodemailer";
import { buildMail, emailTransporter } from "../../../../Components/email";
import { createHmac } from "crypto";



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
