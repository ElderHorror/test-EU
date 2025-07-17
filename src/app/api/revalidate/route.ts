import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    // Verify Contentful webhook signature
    const secret = request.nextUrl.searchParams.get("secret");
    if (secret !== process.env.CONTENTFUL_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Revalidate all blog pages
    revalidatePath("/blog");
    revalidatePath("/blog/[slug]");
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("Error revalidating:", err);
    return NextResponse.json(
      { error: "Error revalidating" },
      { status: 500 }
    );
  }
}