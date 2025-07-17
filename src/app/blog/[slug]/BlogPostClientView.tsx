"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Badge,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon, CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import PageTransition from "@/components/common/PageTransition";
import AnimatedElement from "@/components/common/AnimatedElement";
import { ProcessedBlogPost } from "@/lib/contentful";
import BlogCTA from "@/components/blog/BlogCTA";
import { RichText } from '@/components/blog/RichTextRenderer';

// Helper function to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPostClientView({ post }: { post: ProcessedBlogPost }) {
  return (
    <PageLayout>
      <PageTransition>
        <Box bg="white" pt="6rem" pb="4rem">
          <Container maxW="60rem">
            <AnimatedElement animation="fadeIn" delay={0.2}>
              <Link href="/blog">
                <Button
                  leftIcon={<ArrowBackIcon />}
                  variant="ghost"
                  color="#0E5FDC"
                  mb={6}
                  _hover={{ bg: "blue.50" }}
                >
                  Back to Blog
                </Button>
              </Link>

              <Badge
                colorScheme="blue"
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="full"
                mb={4}
              >
                {post.category}
              </Badge>

              <Heading
                as="h1"
                fontFamily="ClashDisplay"
                fontSize={{ base: "2.5rem", md: "3.5rem", lg: "4rem" }}
                fontWeight={700}
                color="#130F26"
                lineHeight="1.2"
                mb={6}
              >
                {post.title}
              </Heading>

              <HStack spacing={6} mb={8} color="gray.600">
                {post.author && (
                  <Text fontSize="md" fontWeight={500}>
                    By {post.author}
                  </Text>
                )}
                <HStack spacing={2}>
                  <CalendarIcon boxSize={4} />
                  <Text fontSize="sm">{formatDate(post.createdAt)}</Text>
                </HStack>
                {post.minuteRead && (
                  <HStack spacing={2}>
                    <TimeIcon boxSize={4} />
                    <Text fontSize="sm">{post.minuteRead} min read</Text>
                  </HStack>
                )}
              </HStack>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="#2F3540"
                lineHeight="1.8"
                mb={8}
                maxW="800px"
              >
                {post.description}
              </Text>
            </AnimatedElement>
          </Container>
        </Box>

        {post.bannerImage && (
          <AnimatedElement animation="slideUp" delay={0.4}>
            <Container maxW="70rem" mb={12}>
              <Box borderRadius="xl" overflow="hidden" boxShadow="lg">
                <Image
                  src={post.bannerImage}
                  alt={post.title}
                  w="100%"
                  h={{ base: "300px", md: "500px" }}
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </Container>
          </AnimatedElement>
        )}

        <Box bg="white" py={12}>
          <Container maxW="60rem">
            <AnimatedElement animation="fadeIn" delay={0.6}>
              <Box
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.8"
                color="#2F3540"
                sx={{
                  "& p": { mb: 6 },
                  "& h2": { fontFamily: "ClashDisplay", fontSize: { base: "2xl", md: "3xl" }, fontWeight: 600, color: "#130F26", mt: 12, mb: 6 },
                  "& h3": { fontFamily: "ClashDisplay", fontSize: { base: "xl", md: "2xl" }, fontWeight: 600, color: "#130F26", mt: 8, mb: 4 },
                  "& ul, & ol": { pl: 6, mb: 6 },
                  "& li": { mb: 2 },
                  "& blockquote": { borderLeft: "4px solid #0E5FDC", pl: 6, py: 4, bg: "gray.50", borderRadius: "md", fontStyle: "italic", mb: 6 },
                }}
              >
                {post.content ? (
                  <RichText content={post.content} />
                ) : (
                  <Text>{post.description}</Text>
                )}
              </Box>
            </AnimatedElement>
          </Container>
        </Box>

        <BlogCTA />
      </PageTransition>
    </PageLayout>
  );
}