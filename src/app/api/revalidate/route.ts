import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const expectedWebhookName = "Vercel - Deploy a sit";
    if (
      request.headers.get("X-Contentful-Webhook-Name") === expectedWebhookName
    ) {
      const body = await request.text();
      const payload = JSON.parse(body);
      console.log("Payload object:", payload);
      const contentType = payload?.sys?.contentType?.sys?.id;
      const entryId = payload?.sys?.id;

      if (payload.sys.type === "Entry" && payload.sys.contentType.sys.id === "euStudyBlogProduciton" || payload.sys.type === "DeletedEntry" && payload.sys.contentType.sys.id === "euStudyBlogProduciton") {
        if (entryId) {
          revalidateTag(`blog-${entryId}`);
        }

        return NextResponse.json({
          revalidated: true,
          now: Date.now(),
          tags: [`blog-list`, `blog-${entryId}`],
          headers: {
            'Cache-Control': 'public, max-age=3600, stale-while-revalidate=3600',
          },
        });
      }

      return NextResponse.json({
        message: "Not a blog post update - skipping revalidation",
      });
    } else {
      return NextResponse.json(
        { error: "Invalid webhook name" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Error processing webhook" },
      { status: 500 }
    );
  }
}
