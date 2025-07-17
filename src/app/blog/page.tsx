import PageLayout from "@/components/layout/PageLayout";
import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";
import AnimatedElement from "@/components/common/AnimatedElement";
import PageTransition from "@/components/common/PageTransition";
import { fetchBlogPosts, fetchBlogCategories, ProcessedBlogPost } from "@/lib/contentful";

export const revalidate = 30;

export default async function BlogPage() {
  let posts: ProcessedBlogPost[] = [];
  let categories: string[] = ["View All", "Programming", "Self Development", "Travels", "Career", "Finance"];
  
  try {
    [posts, categories] = await Promise.all([
      fetchBlogPosts(),
      fetchBlogCategories(),
    ]);
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  return (
    <PageLayout>
      <PageTransition>
        {/* Hero Section */}
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <BlogHero />
        </AnimatedElement>

        {/* Blog Posts Section */}
        <AnimatedElement animation="slideUp" delay={0.4}>
          <BlogPosts initialPosts={posts} initialCategories={categories} />
        </AnimatedElement>
      </PageTransition>
    </PageLayout>
  );
}
