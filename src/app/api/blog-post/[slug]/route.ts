import { NextResponse } from "next/server";
import { fetchBlogPostBySlug } from "@/lib/contentful";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const slug = params.slug;
    const post = await fetchBlogPostBySlug(slug);

    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    // Add cache headers and revalidation tags
    const headers = new Headers({
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=3600',
      'CDN-Cache-Control': 'public, s-maxage=7200',
      'Vercel-CDN-Cache-Control': 'public, s-maxage=14400',
      'x-next-cache-tags': `blog-${slug}, blog-list`
    });

    return new NextResponse(JSON.stringify({ post }), {
      headers,
      status: 200
    });
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
