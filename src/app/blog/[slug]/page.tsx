"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Badge,
  Spinner,
  Alert,
  AlertIcon,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon, CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import PageTransition from "@/components/common/PageTransition";
import AnimatedElement from "@/components/common/AnimatedElement";
import {
  fetchBlogPostBySlug,
  ProcessedBlogPost,
  renderRichTextAsPlainText,
} from "@/lib/contentful";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<ProcessedBlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBlogPost() {
      if (!slug) return;

      try {
        setIsLoading(true);
        setError(null);

        const blogPost = await fetchBlogPostBySlug(slug);

        if (!blogPost) {
          setError("Blog post not found");
        } else {
          setPost(blogPost);
        }
      } catch (err) {
        console.error("Error loading blog post:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogPost();
  }, [slug]);

  // Loading state
  if (isLoading) {
    return (
      <PageLayout>
        <Box
          minH="50vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={4}>
            <Spinner size="xl" color="#0E5FDC" thickness="4px" />
            <Text color="gray.600" fontSize="lg">
              Loading blog post...
            </Text>
          </VStack>
        </Box>
      </PageLayout>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <PageLayout>
        <Container maxW="60rem" py={20}>
          <Alert status="error" borderRadius="md" mb={8}>
            <AlertIcon />
            {error || "Blog post not found"}
          </Alert>
          <Link href="/blog">
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="blue"
              variant="outline"
            >
              Back to Blog
            </Button>
          </Link>
        </Container>
      </PageLayout>
    );
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Generate structured data for SEO
  const generateStructuredData = (post: ProcessedBlogPost) => {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://eustudyassist.com";

    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.metaTitle || post.title,
      description: post.metaDescription || post.description,
      image: post.bannerImage || `${baseUrl}/og-default.png`,
      author: {
        "@type": "Person",
        name: post.author || "EU StudyAssist",
        url: `${baseUrl}/about`,
      },
      publisher: {
        "@type": "Organization",
        name: "EU StudyAssist",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
      datePublished: post.createdAt,
      dateModified: post.updatedAt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}/blog/${post.slug}`,
      },
      articleSection: post.category,
      keywords:
        post.keywords && post.keywords.length > 0
          ? [
              ...post.keywords,
              post.category,
              "study abroad",
              "student loans",
              "education financing",
            ]
          : [
              post.category,
              "study abroad",
              "student loans",
              "education financing",
            ],
      wordCount: post.content
        ? renderRichTextAsPlainText(post.content).split(" ").length
        : post.description.split(" ").length,
      timeRequired: post.minuteRead ? `PT${post.minuteRead}M` : "PT5M",
      inLanguage: "en-US",
      isAccessibleForFree: true,
      copyrightHolder: {
        "@type": "Organization",
        name: "EU StudyAssist",
      },
    };
  };

  return (
    <PageLayout>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData(post)),
        }}
      />
      <PageTransition>
        {/* Hero Section */}
        <Box bg="white" pt="6rem" pb="4rem">
          <Container maxW="60rem">
            <AnimatedElement animation="fadeIn" delay={0.2}>
              {/* Back to Blog Link */}
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

              {/* Category Badge */}
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

              {/* Title */}
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

              {/* Meta Information */}
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

              {/* Description */}
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

        {/* Featured Image */}
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

        {/* Content Section */}
        <Box bg="white" py={12}>
          <Container maxW="60rem">
            <AnimatedElement animation="fadeIn" delay={0.6}>
              <Box
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.8"
                color="#2F3540"
                sx={{
                  "& p": {
                    mb: 6,
                  },
                  "& h2": {
                    fontFamily: "ClashDisplay",
                    fontSize: { base: "2xl", md: "3xl" },
                    fontWeight: 600,
                    color: "#130F26",
                    mt: 12,
                    mb: 6,
                  },
                  "& h3": {
                    fontFamily: "ClashDisplay",
                    fontSize: { base: "xl", md: "2xl" },
                    fontWeight: 600,
                    color: "#130F26",
                    mt: 8,
                    mb: 4,
                  },
                  "& ul, & ol": {
                    pl: 6,
                    mb: 6,
                  },
                  "& li": {
                    mb: 2,
                  },
                  "& blockquote": {
                    borderLeft: "4px solid #0E5FDC",
                    pl: 6,
                    py: 4,
                    bg: "gray.50",
                    borderRadius: "md",
                    fontStyle: "italic",
                    mb: 6,
                  },
                }}
              >
                {/* Render rich text content if available, otherwise show description */}
                {post.content ? (
                  <Box>
                    {renderRichTextAsPlainText(post.content)
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <Text key={index} mb={6}>
                          {paragraph}
                        </Text>
                      ))}
                  </Box>
                ) : (
                  <Text>{post.description}</Text>
                )}
              </Box>
            </AnimatedElement>
          </Container>
        </Box>

        {/* Call to Action */}
        <Box bg="#F4F4F4" py={16}>
          <Container maxW="60rem">
            <AnimatedElement animation="slideUp" delay={0.8}>
              <VStack spacing={6} textAlign="center">
                <Heading
                  fontFamily="ClashDisplay"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="#130F26"
                >
                  Ready to Start Your Journey?
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="#2F3540"
                  maxW="600px"
                >
                  Join thousands of students who have successfully pursued their
                  dreams with EU StudyAssist&apos;s support.
                </Text>
                <Flex gap={4} flexWrap="wrap" justify="center">
                  <Button
                    as="a"
                    href="https://forms.gle/JmEMziR6a5j4Mew48"
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#0E5FDC"
                    color="white"
                    size="lg"
                    _hover={{ bg: "#0B4DB0" }}
                    px={8}
                  >
                    Apply for Loan
                  </Button>
                  <Link href="/blog">
                    <Button
                      variant="outline"
                      borderColor="#0E5FDC"
                      color="#0E5FDC"
                      size="lg"
                      _hover={{ bg: "blue.50" }}
                      px={8}
                    >
                      Read More Posts
                    </Button>
                  </Link>
                </Flex>
              </VStack>
            </AnimatedElement>
          </Container>
        </Box>
      </PageTransition>
    </PageLayout>
  );
}
