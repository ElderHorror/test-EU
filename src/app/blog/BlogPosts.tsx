"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  HStack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import LoanFeature from "@/components/sections/loans/LoanFeature";

// Blog post data
const blogData = [
  {
    title: "R For Research",
    description:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R alongside mastering Git for version control.",
    category: "Programming",
    image: "/00.png",
  },
  {
    title: "R For Research",
    description:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R alongside mastering Git for version control.",
    category: "Programming",
    image: "/00.png",
  },
  {
    title: "Data Visualization",
    description:
      "Focused on principles of visual storytelling, this course covers the tools and techniques for creating impactful data visualizations. Participants will learn to design clear, effective visuals using R, enhancing their ability to communicate complex data insights effectively.",
    category: "Programming",
    image: "/00.png",
  },
  {
    title: "GIS for Research",
    description:
      "In this course, participants gain skills in geographic information systems (GIS) for spatial data analysis. Using R, they'll learn to manage, analyze, and visualize geospatial data, making it ideal for those interested in environmental and spatial research.",
    category: "Programming",
    image: "/00.png",
  },
  {
    title: "Python for Research",
    description:
      "This course introduces core data science concepts using Python. Participants will learn data manipulation, statistical analysis, and visualization in Python, as well as project management essentials. By the end, they'll be equipped to efficiently analyze and interpret data for research applications.",
    category: "Programming",
    image: "/00.png",
  },
  {
    title: "R for Research",
    description:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
    category: "Programming",
    image: "/00.png",
  },
  {
    title: "Test Blog 7",
    description: "Description for test blog 7",
    category: "Self Development",
    image: "/00.png",
  },
  {
    title: "Test Blog 8",
    description: "Description for test blog 8",
    category: "Travels",
    image: "/00.png",
  },
  {
    title: "Test Blog 9",
    description: "Description for test blog 9",
    category: "Career",
    image: "/00.png",
  },
  {
    title: "Test Blog 10",
    description: "Description for test blog 10",
    category: "Finance",
    image: "/00.png",
  },
  {
    title: "Test Blog 11",
    description: "Description for test blog 11",
    category: "View All",
    image: "/00.png",
  },
  {
    title: "Test Blog 12",
    description: "Description for test blog 12",
    category: "Programming",
    image: "/00.png",
  },
  {
    title: "Test Blog 13",
    description: "Description for test blog 13",
    category: "Self Development",
    image: "/00.png",
  },
  {
    title: "Test Blog 14",
    description: "Description for test blog 14",
    category: "Travels",
    image: "/00.png",
  },
  {
    title: "Test Blog 15",
    description: "Description for test blog 15",
    category: "Career",
    image: "/00.png",
  },
  {
    title: "Test Blog 16",
    description: "Description for test blog 16",
    category: "Finance",
    image: "/00.png",
  },
  {
    title: "Test Blog 17",
    description: "Description for test blog 17",
    category: "View All",
    image: "/00.png",
  },
  {
    title: "Test Blog 18",
    description: "Description for test blog 18",
    category: "Programming",
    image: "/00.png",
  },
  {
    title: "Test Blog 19",
    description: "Description for test blog 19",
    category: "Self Development",
    image: "/00.png",
  },
  {
    title: "Test Blog 20",
    description: "Description for test blog 20",
    category: "Travels",
    image: "/00.png",
  },
];

// Available filter categories
const filterCategories = [
  "View All",
  "Programming",
  "Self Development",
  "Travels",
  "Career",
  "Finance",
];

export default function BlogPosts() {
  // State for the active filter
  const [activeFilter, setActiveFilter] = useState("View All");
  // State for filtered blog posts
  const [filteredPosts, setFilteredPosts] = useState(blogData);
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Number of columns based on screen size
  const columns = useBreakpointValue({ base: 1, md: 2 });

  // Number of posts per page - responsive (3 on mobile, 6 on desktop)
  const postsPerPage = useBreakpointValue({ base: 3, md: 6 });

  // Responsive text for pagination buttons
  const prevButtonText = useBreakpointValue({ base: "", md: "Previous" });
  const nextButtonText = useBreakpointValue({ base: "", md: "Next" });

  // Get current posts
  const indexOfLastPost = currentPage * (postsPerPage || 6); // Fallback to 6 if undefined during initial render
  const indexOfFirstPost = indexOfLastPost - (postsPerPage || 6);
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Filter posts when activeFilter changes
  useEffect(() => {
    if (activeFilter === "View All") {
      setFilteredPosts(blogData);
    } else {
      const filtered = blogData.filter(
        (post) => post.category === activeFilter
      );
      setFilteredPosts(filtered);
    }
    // Reset to first page when filter changes
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
    <Box py={{ base: 10, md: 16 }} bg="white">
      <Container maxW="container.xl">
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
          maxW={{ md: "90%" }}
          mx="auto"
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
            {filterCategories.map((category) => (
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

        {/* Blog Posts Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
          }}
          gap={{ base: 6, md: 6 }}
          px={{ base: 4, md: 0 }}
          maxW={{ md: "90%" }}
          mx="auto"
        >
          {currentPosts.map((post, index) => (
            <GridItem key={index}>
              <Box
                borderRadius="xl"
                overflow="hidden"
                bg="white"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
                transition="transform 0.2s, box-shadow 0.2s"
                maxW="95%"
                mx="auto"
                _hover={{
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Blog Post Image */}
                <Box position="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    w="100%"
                    h="280px"
                    objectFit="cover"
                    objectPosition="center top"
                    borderRadius="xl"
                  />
                  {post.category === "Programming" && index === 0 && (
                    <Box
                      position="absolute"
                      top="16px"
                      left="16px"
                      bg="#0E5FDC"
                      color="white"
                      fontSize="xs"
                      fontWeight="600"
                      px="3"
                      py="1"
                      borderRadius="md"
                    >
                      Featured
                    </Box>
                  )}
                </Box>

                {/* Blog Post Content */}
                <Box pt={6} pb={4} px={4}>
                  <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight={700}
                    color="#000"
                    mb={3}
                    noOfLines={1}
                  >
                    {post.title}
                  </Heading>

                  <Text
                    color="gray.700"
                    fontSize={{ base: "sm", md: "md" }}
                    mb={5}
                    noOfLines={3}
                    lineHeight="1.6"
                  >
                    {post.description}
                  </Text>

                  <Link
                    href="#"
                    display="inline-flex"
                    alignItems="center"
                    color="#0E5FDC"
                    fontWeight={600}
                    fontSize={{ base: "sm", md: "md" }}
                    _hover={{ textDecoration: "none", color: "#0B4DB0" }}
                  >
                    Read Post <ChevronRightIcon boxSize={5} ml={1} />
                  </Link>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>

        {/* Pagination Controls */}
        {filteredPosts.length > (postsPerPage || 6) && (
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
        <Box py="6rem" bg="white">
          <Container maxW="60rem">
            <Box pt={{lg:"8rem"}} pb={{lg:"2rem"}} py={{ base: "0rem" }}>
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
          </Container>
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
              >
                Apply Now
              </Button>
            </VStack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
