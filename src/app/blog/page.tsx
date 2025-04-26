"use client";

import { Box } from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../pages/Home/Sections/Footer/Footer";
import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";

export default function BlogPage() {
  return (
    <>
      {/* Navigation */}
      <Box>
        <Navbar setPageMode={() => {}} />
      </Box>

      {/* Hero Section */}
      <BlogHero />

      {/* Blog Posts Section */}
      <BlogPosts />

      {/* Footer */}
      <Footer />
    </>
  );
}
