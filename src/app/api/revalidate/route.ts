import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    // Verify webhook signature
    const body = await request.text();
    const signature = request.headers.get("x-contentful-signature");
    const secret = process.env.CONTENTFUL_WEBHOOK_SECRET;
    
    if (!secret) {
      console.error("CONTENTFUL_WEBHOOK_SECRET is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(body, "utf8");
    const computedSignature = hmac.digest("base64");
    
    if (signature !== computedSignature) {
      console.error("Invalid webhook signature");
      return new Response("Invalid signature", { status: 401 });
    }

    // Parse webhook payload
    const payload = JSON.parse(body);
    const entryId = payload.sys?.id;
    
    if (!entryId) {
      console.error("Missing entry ID in payload");
      return NextResponse.json(
        { error: "Missing entry ID in payload" },
        { status: 400 }
      );
    }

    // Revalidate paths
    revalidatePath("/blog");
    revalidatePath(`/blog/*`);
    revalidateTag(`blog-post-${entryId}`);

    console.log(`Revalidated paths for entry ${entryId}`);
    return NextResponse.json({
      message: `Revalidation triggered for entry ${entryId}`,
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Error processing webhook" },
      { status: 500 }
    );
  }
}
