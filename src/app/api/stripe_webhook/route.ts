import { NextResponse } from "next/server";
import { SendMailOptions } from "nodemailer";
import Stripe from "stripe";
import { buildMail, emailTransporter } from "../../../../Components/email";

const stripe = new Stripe(process.env.STRIPE_KEY ?? "");

const processStripePayment = async (data: any, eventType: any) => {
  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then(async (customer) => {
        try {
          const { email, firstName } =
            data.invoice_creation.invoice_data.metadata;
          console.log({
            invoice_metadata: data.invoice_creation.invoice_data.metadata,
          });

          // Define the email content
          const mailOptions: SendMailOptions = {
            from: process.env.FEEDBACK_EMAILL,
            to: email,
            subject: "Welcome to the “R for Research",
            html: buildMail(firstName),
          };
          console.log({
            from: process.env.FEEDBACK_EMAILL,
            to: email,
            subject: "Welcome to the “R for Research",
          });
          // Send the email
          console.log("execute:", await emailTransporter.sendMail(mailOptions));
        } catch (err: any) {
          console.log({ err });
        }
      })
      .catch((err: any) => console.log(err));
  }
};

const validateStripPayload = async (req: Request) => {
  const webhookSecret = process.env.STRIPE_WEBHOOK;
  let event: any;

  const receive = await req.text();
  console.log({ receive });
  if (webhookSecret) {
    try {
      event = await stripe.webhooks.constructEvent(
        receive,
        req.headers.get("stripe-signature") as any,
        webhookSecret
      );
      return { data: event.data.object, eventType: event.type };
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed:  ${err}`);
      return { data: null, eventType: null };
    }
  }
  return { data: null, eventType: null };
};

export async function GET(req: Request) {
  return NextResponse.json({ message: "welcome" });
}

const helperStripePayment = async (email: string, firstName: string) => {};
export async function POST(request: Request) {
  try {
    const { data: stripeData, eventType } = await validateStripPayload(request);
    console.log({ data: stripeData, eventType });

    await processStripePayment(stripeData, eventType);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: `Failed: ${error}` }, { status: 500 });
  }
}
