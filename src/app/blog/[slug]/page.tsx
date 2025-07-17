import { notFound } from "next/navigation";
import { fetchBlogPostBySlug, ProcessedBlogPost } from "@/lib/contentful";
import BlogPostClientView from "./BlogPostClientView";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  let post: ProcessedBlogPost | null = null;

  try {
    post = await fetchBlogPostBySlug(slug);
  } catch (error) {
    console.error("Error loading blog post:", error);
    // You can render an error state here if you want
  }

  if (!post) {
    notFound();
  }

  return <BlogPostClientView post={post} />;
}
