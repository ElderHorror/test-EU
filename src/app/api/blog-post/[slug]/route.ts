import { NextResponse } from "next/server";
import { fetchBlogPostBySlug } from "@/lib/contentful";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const slug = params.slug;
    const post = await fetchBlogPostBySlug(slug);

    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    return NextResponse.json({ post }, { status: 200 });
  } catch (error: any) {
    console.error("API error fetching blog post:", {
      message: error.message,
      name: error.name,
      stack: error.stack,
      slug: params.slug,
    });
    return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 });
  }
}
