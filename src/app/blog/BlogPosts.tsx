"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Link,
  HStack,
  VStack,
  useBreakpointValue,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import BlogPostCard from "./BlogPostCard";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import LoanFeature from "@/components/sections/loans/LoanFeature";
import AnimatedElement from "@/components/common/AnimatedElement";
import { ProcessedBlogPost } from "@/lib/contentful";
import ApplyModal from "@/components/ApplyModal";

interface BlogPostsProps {
  initialPosts: ProcessedBlogPost[];
  initialCategories: string[];
}

export default function BlogPosts({ initialPosts, initialCategories }: BlogPostsProps) {
  const [posts] = useState<ProcessedBlogPost[]>(initialPosts);
  const [categories] = useState<string[]>(initialCategories);
  const [activeFilter, setActiveFilter] = useState("View All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  // Modal state
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  // Number of columns based on screen size
  const columns = useBreakpointValue({ base: 1, md: 2 });

  // Number of posts per page - responsive (3 on mobile, 6 on desktop)
  const postsPerPage = useBreakpointValue({ base: 3, md: 6 });

  // Responsive text for pagination buttons
  const prevButtonText = useBreakpointValue({ base: "", md: "Previous" });
  const nextButtonText = useBreakpointValue({ base: "", md: "Next" });

  // Filter posts based on active filter
  const filteredPosts = activeFilter === "View All" 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  // Get current posts
  const indexOfLastPost = currentPage * (postsPerPage || 6); // Fallback to 6 if undefined during initial render
  const indexOfFirstPost = indexOfLastPost - (postsPerPage || 6);
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Reset to first page when postsPerPage changes (screen size changes)
  useEffect(() => {
    // Check if we're beyond the last page after screen size change
    if (
      postsPerPage &&
      currentPage > Math.ceil(filteredPosts.length / postsPerPage)
    ) {
      setCurrentPage(1);
    }
  }, [postsPerPage, filteredPosts.length, currentPage]);

  return (
    <Box py={{ base: 10, md: 20 }} bg="white">
        <Container maxW="70rem">
        {/* Section Heading */}
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight={700}
          color="#000"
          textAlign="center"
          mb={10}
        >
          Latest Blog Posts
        </Heading>

        {/* Filter Buttons */}
        <Box
          position="relative"
          mb={{ base: 10, md: 14 }}
          maxW={{ base: "80%", md: "100%" }}
          mx="auto"
          // ml={{base: "1rem"}}
        >
          {/* Horizontal Line */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="2px"
            bg="gray.300"
            zIndex={0}
          />

          <Flex
            overflowX="auto"
            pb={2}
            className="filter-tabs"
            position="relative"
          >
            {categories.map((category) => (
              <Box
                key={category}
                as="button"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight={600}
                color={activeFilter === category ? "black" : "gray.600"}
                position="relative"
                pr={{ base: 3, md: 5 }}
                // py={3}
                mr={{ base: 2, md: 6 }}
                bg="transparent"
                _hover={{
                  color: "black",
                }}
                onClick={() => setActiveFilter(category)}
                transition="all 0.3s"
                whiteSpace="nowrap"
              >
                {category}
                {/* Active indicator with glow effect */}
                {activeFilter === category && (
                  <Box
                    position="absolute"
                    bottom="-8px"
                    left="0"
                    right="0"
                    height="3px"
                    bg="black"
                    borderRadius="full"
                    boxShadow="0 0 8px 1px rgba(14, 95, 220, 0.5)"
                    zIndex={1}
                  />
                )}
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Loading State */}
        {isLoading && (
          <Flex justify="center" align="center" py={20}>
            <VStack spacing={4}>
              <Spinner size="xl" color="#0E5FDC" thickness="4px" />
              <Text color="gray.600" fontSize="lg">
                Loading blog posts...
              </Text>
            </VStack>
          </Flex>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <Alert status="error" borderRadius="md" maxW="600px" mx="auto" mb={8}>
            <AlertIcon />
            {error}
          </Alert>
        )}

        {/* No Posts State */}
        {!isLoading && !error && filteredPosts.length === 0 && (
          <Box textAlign="center" py={20}>
            <Text fontSize="xl" color="gray.600" mb={4}>
              No blog posts found for &ldquo;{activeFilter}&rdquo;
            </Text>
            <Text color="gray.500">
              Try selecting a different category or check back later.
            </Text>
          </Box>
        )}

        {/* Blog Posts Grid */}
        {!isLoading && !error && filteredPosts.length > 0 && (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing="2rem"
            spacingY="3rem"
            alignItems="stretch"
            px={{ base: 4, md: 0 }}
            maxW={{ md: "100%" }}
            mx="auto"
          >
            {currentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </SimpleGrid>
        )}

        {/* Pagination Controls */}
        {!isLoading && !error && filteredPosts.length > (postsPerPage || 6) && (
          <Flex
            justify="center"
            mt={14}
            mb={20}
            gap={{ base: 1, md: 3 }}
            bg="gray.50"
            py={{ base: 3, md: 5 }}
            px={{ base: 2, md: 4 }}
            borderRadius="lg"
            boxShadow="sm"
            maxW="fit-content"
            mx="auto"
            flexWrap="wrap"
          >
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              isDisabled={currentPage === 1}
              variant="outline"
              colorScheme="blue"
              borderColor="#0E5FDC"
              color="#0E5FDC"
              _hover={{ bg: "blue.50" }}
              size="md"
              px={{ base: 2, md: 4 }}
              borderRadius="md"
              leftIcon={<ChevronLeftIcon />}
              fontSize={{ base: "sm", md: "md" }}
            >
              {prevButtonText}
            </Button>

            {/* Page Numbers - Show max 5 page buttons */}
            <Flex
              align="center"
              gap={{ base: 1, md: 2 }}
              flexWrap="wrap"
              justify="center"
            >
              {(() => {
                const totalPages = Math.ceil(
                  filteredPosts.length / (postsPerPage || 6)
                );
                // Logic to show limited page numbers with ellipsis
                let pagesToShow = [];

                if (totalPages <= 5) {
                  // If 5 or fewer pages, show all
                  pagesToShow = Array.from(
                    { length: totalPages },
                    (_, i) => i + 1
                  );
                } else {
                  // Always include first and last page
                  if (currentPage <= 3) {
                    // Near the start
                    pagesToShow = [1, 2, 3, 4, "...", totalPages];
                  } else if (currentPage >= totalPages - 2) {
                    // Near the end
                    pagesToShow = [
                      1,
                      "...",
                      totalPages - 3,
                      totalPages - 2,
                      totalPages - 1,
                      totalPages,
                    ];
                  } else {
                    // Somewhere in the middle
                    pagesToShow = [
                      1,
                      "...",
                      currentPage - 1,
                      currentPage,
                      currentPage + 1,
                      "...",
                      totalPages,
                    ];
                  }
                }

                return pagesToShow.map((page, index) => {
                  if (page === "...") {
                    return (
                      <Text
                        key={`ellipsis-${index}`}
                        color="gray.500"
                        fontWeight="bold"
                        px={{ base: 1, md: 2 }}
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        ...
                      </Text>
                    );
                  }

                  return (
                    <Button
                      key={`page-${page}`}
                      onClick={() => setCurrentPage(Number(page))}
                      variant={currentPage === page ? "solid" : "outline"}
                      bg={currentPage === page ? "#0E5FDC" : "transparent"}
                      color={currentPage === page ? "white" : "#0E5FDC"}
                      borderColor="#0E5FDC"
                      _hover={{
                        bg: currentPage === page ? "#0B4DB0" : "blue.50",
                      }}
                      size={{ base: "sm", md: "md" }}
                      borderRadius="md"
                      minW={{ base: "30px", md: "40px" }}
                      p={{ base: "0", md: "2" }}
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      {page}
                    </Button>
                  );
                });
              })()}
            </Flex>

            <Button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(filteredPosts.length / (postsPerPage || 6))
                  )
                )
              }
              isDisabled={
                currentPage ===
                Math.ceil(filteredPosts.length / (postsPerPage || 6))
              }
              variant="outline"
              colorScheme="blue"
              borderColor="#0E5FDC"
              color="#0E5FDC"
              _hover={{ bg: "blue.50" }}
              size="md"
              px={{ base: 2, md: 4 }}
              borderRadius="md"
              rightIcon={<ChevronRightIcon />}
              fontSize={{ base: "sm", md: "md" }}
            >
              {nextButtonText}
            </Button>
          </Flex>
        )}

        {/* Why Study Section */}
        <Box position="relative" zIndex="1">
          <AnimatedElement animation="slideUp" delay={0.3}>
            <Box py="10rem">
              <LoanFeature
                imageSrc="/loan-features04.png"
                heading="Why Choose EU StudyAssist Loans?"
                description="Tailored for Students: At EU StudyAssist, our loan services are crafted specifically for international students. We offer both fixed and flexible repayment terms, aligned with your academic schedule, so you can concentrate on your studies without financial stress.

No Immediate Repayment: Moving abroad can be overwhelming, which is why we provide a grace period before repayments begin. This allows you to focus on settling in without immediate financial pressure. Additionally, we offer options to stretch repayment, ensuring it stays manageable throughout your studies.

Competitive Interest Rates: Our loan options come with highly competitive rates, designed to make repayment affordable and manageable, even during your studies."
                imagePosition="left"
                tallImage={true}
                smallText={true}
                showButton={false}
              />
            </Box>
          </AnimatedElement>
        </Box>

        {/* Call to Action Section */}
        <Box bg="#F4F4F4" py="6rem">
          <Container maxW="60rem">
            <VStack spacing="2rem" align="center">
              <Text
                fontSize={{ base: "1.25rem", md: "1.5rem" }}
                color="#2F3540"
                textAlign="center"
                lineHeight="1.6"
                maxW="800px"
                fontWeight={400}
              >
                Our team ensures personalized, impactful solutions to meet your
                unique organizational needs.
              </Text>

              <Button
                bg="#0E5FDC"
                color="white"
                size="lg"
                _hover={{ bg: "#0B4DB0" }}
                px="2rem"
                py="1.8rem"
                fontSize="1.1rem"
                mt="1rem"
                fontWeight={600}
                onClick={() => setIsApplyOpen(true)}
              >
                Apply Now
              </Button>
              <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
            </VStack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
