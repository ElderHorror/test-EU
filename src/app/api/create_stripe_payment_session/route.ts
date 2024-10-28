import { NextResponse } from "next/server";
import Stripe from "stripe";

function generateRandomString(length: number = 6, prefix = ""): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = prefix;
  for (let i = 0; i < length - prefix.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

const stripe = new Stripe(process.env.STRIPE_KEY ?? "");

async function upsertCustomer(email: string) {
  // Search for customers with the given userId in metadata
  const existingCustomers = await stripe.customers.list({
    email,
  });

  let customer;

  if (existingCustomers.data.length > 0) {
    // Customer exists, update if necessary
    customer = existingCustomers.data[0];
    // Here you can add code to update the customer if needed
  } else {
    // No customer found, create a new one
    customer = await stripe.customers.create({
      email,
    });
  }

  return customer;
}

const getStripeOrder = async (email: string, metadata: any) => {
  const paymentID = generateRandomString();
  const customer = await upsertCustomer(email);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    phone_number_collection: {
      enabled: true,
    },
    invoice_creation: {
      enabled: true,
      invoice_data: {
        metadata: metadata,
      },
    },
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `R for Research`,
            description: `A purchase of "R for Research"`,
            metadata: metadata,
          },
          unit_amount: Math.round(74.99 * 100),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    custom_fields: [
      {
        key: "occupation",
        type: "text",
        label: {
          type: "custom",
          custom: "Occupation",
        },
        optional: false,
      },
      {
        key: "first-name",
        type: "text",
        label: {
          type: "custom",
          custom: "First Name",
        },
        optional: false,
      },
      {
        key: "last-name",
        type: "text",
        label: {
          type: "custom",
          custom: "Last Name",
        },
        optional: false,
      },
    ],
    customer: customer.id,
    success_url: `https://eustudyassist.com/courses`,
    cancel_url: `https://eustudyassist.com/courses`,
  });
  return { url: session.url };
};

export async function GET(req: Request) {
  return NextResponse.json({ message: "welcome" });
}

export async function POST(request: Request) {
  try {

    console.log({ email, metadata });
    const { url } = await getStripeOrder(email, metadata);
    return NextResponse.json({ message: "success", url });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
