"use client";

import PageLayout from "@/components/layout/PageLayout";
import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";
import AnimatedElement from "@/components/common/AnimatedElement";
import PageTransition from "@/components/common/PageTransition";
import LoanFeature from "../loans/LoanFeature";

export default function BlogPage() {
  return (
    <PageLayout>
      <PageTransition>
        {/* Hero Section */}
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <BlogHero />
        </AnimatedElement>

        {/* Blog Posts Section */}
        <AnimatedElement animation="slideUp" delay={0.4}>
          <BlogPosts />
        </AnimatedElement>
      </PageTransition>
    </PageLayout>
  );
}
