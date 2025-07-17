import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import crypto from "crypto";

// Contentful webhook handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-contentful-signature");
    const secret = process.env.CONTENTFUL_WEBHOOK_SECRET;

    // Validate secret configuration in production
    if (process.env.NODE_ENV === "production" && !secret) {
      return NextResponse.json(
        { error: "Webhook secret not configured - required in production" },
        { status: 500 }
      );
    }

    const expectedSignature = process.env.CONTENTFUL_WEBHOOK_SECRET;
    // Validate signature if secret is configured
    if (secret) {
      if (request.headers.get("x-contentful-signature") !== expectedSignature) {
        return NextResponse.json(
          { error: "Invalid signature" },
          { status: 401 }
        );
      }

      // Validate signature
      const hmac = crypto.createHmac("sha256", secret);
      hmac.update(body);
      const computedSignature = hmac.digest("base64");

      // Convert base64 strings to Uint8Array for secure comparison
      const signatureBytes = new TextEncoder().encode(signature ?? '');
      const computedBytes = new TextEncoder().encode(computedSignature);

      if (signatureBytes.length !== computedBytes.length) {
        return NextResponse.json(
          { error: "Invalid signature" },
          { status: 401 }
        );
      }

      if (!crypto.timingSafeEqual(signatureBytes, computedBytes)) {
        return NextResponse.json(
          { error: "Invalid signature" },
          { status: 401 }
        );
      }
    } else if (process.env.NODE_ENV !== "production") {
      console.warn(
        "CONTENTFUL_WEBHOOK_SECRET not configured - skipping signature verification in development"
      );
    }

    // Parse webhook payload
    const payload = JSON.parse(body);
    const contentType = payload?.sys?.contentType?.sys?.id;
    const entryId = payload?.sys?.id;

    // Only handle blog post updates
    if (contentType === "blogPost") {
      // Remove revalidation code

      // Revalidate specific blog post
      if (entryId) {
        revalidateTag(`blog-${entryId}`);
      }

      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        tags: [`blog-list`, `blog-${entryId}`],
      });
    }

    return NextResponse.json({
      message: "Not a blog post update - skipping revalidation",
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Error processing webhook" },
      { status: 500 }
    );
  }
}
