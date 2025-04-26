"use client";

import PageLayout from "@/components/layout/PageLayout";
import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";

export default function BlogPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <BlogHero />

      {/* Blog Posts Section */}
      <BlogPosts />
    </PageLayout>
  );
}
