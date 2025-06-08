"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Button,
  Flex,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect, useMemo, memo } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useDynamicPricing } from "@/hooks/useDynamicPricing";

// Updated course data with all new courses
const courses = [
  {
    id: 1,
    title: "R for Research I (Basics of R Programming)",
    price: "$25",
    duration: "6 HOURS",
    level: "BEGINNER",
    description:
      "Learn the foundations of R programming, including variables, data types, operators, and basic functions—ideal for students and researchers new to R.",
    image: "/00.png",
    category: "R Programming",
    link: "https://yourstudyassist.selar.com/5t85t3",
  },
  {
    id: 2,
    title: "R for Research II (Importing and getting external data)",
    price: "$30",
    duration: "5 HOURS",
    level: "BEGINNER TO INTERMEDIATE",
    description:
      "Master how to load, clean, and manage data from spreadsheets, databases, and web sources to streamline your research workflows in R.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 3,
    title: "R for Research III (Data Wrangling and Manipulation with R)",
    price: "$35",
    duration: "7 HOURS",
    level: "INTERMEDIATE",
    description:
      "Learn how to clean, reshape, and organize research data using R. This course covers essential data wrangling techniques with tools like dplyr and tidyr to prepare your data for analysis.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 4,
    title: "R for Research IV (Exploratory Data Analysis)",
    price: "$40",
    duration: "8 HOURS",
    level: "INTERMEDIATE",
    description:
      "Explore data confidently using R. Learn summary statistics, data visualization, and pattern detection techniques to uncover insights in your research data.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 5,
    title: "R for Research V (Communication with Quarto)",
    price: "$35",
    duration: "6 HOURS",
    level: "INTERMEDIATE",
    description:
      "Turn your analysis into professional reports. This course teaches how to create dynamic documents with Quarto for sharing your findings effectively.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 6,
    title: "R for Research VI (Versioning and Sharing with git and GitHub)",
    price: "$30",
    duration: "5 HOURS",
    level: "INTERMEDIATE",
    description:
      "Learn how to track changes, collaborate, and share your research projects using Git and GitHub. This course introduces version control and teaches practical workflows for managing R projects in a research setting.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 7,
    title: "Blog Creation with Quarto for Free",
    price: "$25",
    duration: "4 HOURS",
    level: "BEGINNER TO INTERMEDIATE",
    description:
      "Turn your research insights into engaging blog posts. This course teaches you how to use Quarto to create, style, and publish blogs that combine text, code, and visualizations—all in a professional, shareable format.",
    image: "/00.png",
    category: "Communication",
  },
  {
    id: 8,
    title: "Statistical Test with R",
    price: "$45",
    duration: "10 HOURS",
    level: "INTERMEDIATE TO ADVANCED",
    description:
      "Build a strong foundation in hypothesis testing using R. Learn t-tests, ANOVA, chi-square, and non-parametric tests with real research examples.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 9,
    title: "Data Visualization with R",
    price: "$40",
    duration: "8 HOURS",
    level: "INTERMEDIATE",
    description:
      "Design compelling and informative visuals using R's powerful ggplot2 library and its extensions. Learn best practices for storytelling with data in a research context.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 10,
    title: "Machine Learning with R",
    price: "$60",
    duration: "15 HOURS",
    level: "ADVANCED",
    description:
      "An introduction to supervised and unsupervised machine learning using R. Learn to build, evaluate, and interpret models for research applications.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 11,
    title: "GIS with R",
    price: "$50",
    duration: "12 HOURS",
    level: "INTERMEDIATE TO ADVANCED",
    description:
      "Explore spatial data analysis with R. Learn how to import, visualize, and analyze geospatial data relevant to agriculture, environment, and public health research.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 12,
    title: "Dashboard Development with Shiny",
    price: "$55",
    duration: "14 HOURS",
    level: "ADVANCED",
    description:
      "Create interactive research dashboards with Shiny. Learn how to visualize data dynamically and build web applications that share helps your organization get valuable insight.",
    image: "/00.png",
    category: "R Programming",
  },
  {
    id: 13,
    title: "Python for Research I (Basics of Python)",
    price: "$25",
    duration: "6 HOURS",
    level: "BEGINNER",
    description:
      "Get started with Python by learning syntax, data structures, and basic functions tailored for research tasks.",
    image: "/00.png",
    category: "Python Programming",
  },
  {
    id: 14,
    title: "Python for Research II (Introduction to NumPy and Pandas)",
    price: "$35",
    duration: "8 HOURS",
    level: "BEGINNER TO INTERMEDIATE",
    description:
      "Dive into data manipulation with Python's core libraries. Learn to clean, transform, and explore datasets efficiently using NumPy and Pandas.",
    image: "/00.png",
    category: "Python Programming",
  },
  {
    id: 15,
    title:
      "Python for Research III (Data Visualization with Seaborn and Matplotlib)",
    price: "$40",
    duration: "7 HOURS",
    level: "INTERMEDIATE",
    description:
      "Create stunning visualizations using Python. Learn to communicate research data through line plots, histograms, heatmaps, and more.",
    image: "/00.png",
    category: "Python Programming",
  },
  {
    id: 16,
    title: "Grant Writing",
    price: "$45",
    duration: "10 HOURS",
    level: "ALL LEVELS",
    description:
      "Develop skills to craft persuasive grant proposals. This course covers structure, budgeting, and storytelling techniques to increase funding success.",
    image: "/00.png",
    category: "Academic Writing",
  },
  {
    id: 17,
    title: "Research Writing",
    price: "$40",
    duration: "9 HOURS",
    level: "ALL LEVELS",
    description:
      "Enhance your academic writing skills. Learn how to structure research papers, present arguments clearly, and follow citation standards.",
    image: "/00.png",
    category: "Academic Writing",
  },
];

// Memoized course card component for better performance
const CourseCard = memo(
  ({
    course,
    localizedPrice,
    isLoading,
  }: {
    course: any;
    localizedPrice: string;
    isLoading: boolean;
  }) => (
    <Box
      borderRadius="lg"
      overflow="visible"
      boxShadow="md"
      p="1rem"
      pb="0"
      borderColor="gray.200"
      borderWidth="1px"
      bg="white"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "lg",
      }}
      position="relative"
      display="flex"
      flexDirection="column"
      h="100%" // Ensure all cards have the same height
    >
      {/* Image */}
      <Image
        src={course.image}
        alt={course.title}
        w="100%"
        h="200px"
        objectFit="cover"
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
        borderBottomRightRadius="lg"
        borderBottomLeftRadius="lg"
        flexShrink={0} // Prevent image from shrinking
      />

      {/* Card Content - Flex container to distribute space */}
      <Flex direction="column" flex="1" p="0">
        {/* Title and Price */}
        <Box pt="0.8rem" flexShrink={0}>
          <Flex justify="space-between" align="flex-start" mb="0.75rem">
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight={600}
              color="black"
              lineHeight="1.2"
              flex="1"
              mr="0.5rem"
            >
              {course.title}
            </Heading>
            <Text
              fontSize="xl"
              fontWeight={700}
              color="#0E5FDC"
              flexShrink={0}
              minW="fit-content"
            >
              {isLoading ? "Loading..." : localizedPrice}
            </Text>
          </Flex>
        </Box>

        {/* Horizontal Line */}
        <Box h="1px" bg="gray.400" w="100%" my="0.5rem" flexShrink={0} />

        {/* Duration and Level - Fixed position */}
        <Box flexShrink={0}>
          <Flex justify="space-between" mb="0.75rem">
            <Text fontSize="xs" fontWeight={600} color="gray.500">
              {course.duration}
            </Text>
            <Text
              fontSize="xs"
              fontWeight={600}
              color="gray.500"
              textAlign="right"
            >
              {course.level}
            </Text>
          </Flex>
        </Box>

        {/* Horizontal Line */}
        <Box h="1px" bg="gray.400" w="100%" mb="1rem" flexShrink={0} />

        {/* Description - Flexible height that grows to fill available space */}
        <Box pr="1.5rem" flex="1" display="flex" flexDirection="column">
          <Text
            fontSize="sm"
            color="gray.600"
            lineHeight="1.5"
            flex="1"
            overflow="hidden"
          >
            {course.description}
          </Text>
        </Box>

        {/* Button - Fixed at bottom */}
        <Box position="relative" zIndex="2" my="1rem" flexShrink={0}>
          {course.link ? (
            <Link
              href={course.link}
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Button
                w="45%"
                bg="#0E5FDC"
                color="white"
                _hover={{ bg: "#0B4DB0" }}
                fontWeight={600}
                borderRadius="md"
                py="1.5rem"
                boxShadow="0 4px 8px rgba(0,0,0,0.1)"
              >
                Access Course
              </Button>
            </Link>
          ) : (
            <Button
              w="45%"
              bg="gray.400"
              color="white"
              fontWeight={600}
              borderRadius="md"
              py="1.5rem"
              boxShadow="0 4px 8px rgba(0,0,0,0.1)"
              cursor="not-allowed"
              _hover={{ bg: "gray.400" }}
            >
              Coming Soon
            </Button>
          )}
        </Box>
      </Flex>
    </Box>
  )
);

CourseCard.displayName = "CourseCard";

export default function CoursesGrid() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // State for filtering by category
  const [activeFilter, setActiveFilter] = useState("View All");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  // Number of courses per page - responsive
  const coursesPerPage = useBreakpointValue({ base: 6, md: 9 });

  // Responsive text for pagination buttons
  const prevButtonText = useBreakpointValue({ base: "", md: "Previous" });
  const nextButtonText = useBreakpointValue({ base: "", md: "Next" });

  // Memoize the prices object to prevent unnecessary re-renders
  const prices = useMemo(() => {
    const priceMap: Record<string, string> = {};
    courses.forEach((course) => {
      priceMap[course.id] = course.price;
    });
    return priceMap;
  }, []);

  // Use the dynamic pricing hook
  const { localizedPrices, isLoading } = useDynamicPricing(prices);

  // Get current courses for pagination
  const indexOfLastCourse = currentPage * (coursesPerPage || 9);
  const indexOfFirstCourse = indexOfLastCourse - (coursesPerPage || 9);
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Get unique categories for filter buttons
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(courses.map((course) => course.category))
    );
    return ["View All", ...uniqueCategories];
  }, []);

  // Filter courses when activeFilter changes
  useEffect(() => {
    if (activeFilter === "View All") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(
        (course) => course.category === activeFilter
      );
      setFilteredCourses(filtered);
    }
    // Reset to first page when filter changes
    setCurrentPage(1);
  }, [activeFilter]);

  // Reset to first page when coursesPerPage changes (screen size changes)
  useEffect(() => {
    if (
      coursesPerPage &&
      currentPage > Math.ceil(filteredCourses.length / coursesPerPage)
    ) {
      setCurrentPage(1);
    }
  }, [coursesPerPage, filteredCourses.length, currentPage]);

  return (
    <Box bg="white" py={{ base: "3rem", md: "2rem" }}>
      <Container maxW="70rem">
        <VStack mb="3rem">
          <Heading
            as="h2"
            fontSize={{ base: "2rem", md: "2.5rem" }}
            fontWeight={700}
            color="black"
            textAlign="center"
          >
            Courses
          </Heading>
          <Text
            fontSize={{ base: "1rem", md: "1rem" }}
            color="gray.600"
            textAlign="center"
            maxW="800px"
          >
            Crafted by experienced professionals
          </Text>
        </VStack>

        {/* Category Filter Buttons */}
        <Flex
          justify="center"
          mb="3rem"
          gap={{ base: 2, md: 3 }}
          flexWrap="wrap"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "solid" : "outline"}
              bg={activeFilter === category ? "#0E5FDC" : "transparent"}
              color={activeFilter === category ? "white" : "#0E5FDC"}
              borderColor="#0E5FDC"
              _hover={{
                bg: activeFilter === category ? "#0B4DB0" : "blue.50",
              }}
              size={{ base: "sm", md: "md" }}
              borderRadius="md"
              fontSize={{ base: "sm", md: "md" }}
              px={{ base: 3, md: 4 }}
            >
              {category}
            </Button>
          ))}
        </Flex>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing="2rem"
          spacingY="3rem"
          alignItems="stretch" // Ensure all grid items stretch to the same height
        >
          {currentCourses.map((course) => {
            const localizedPrice = localizedPrices[course.id]
              ? localizedPrices[course.id].formattedPrice
              : course.price; // Fallback to original price if not loaded yet

            return (
              <CourseCard
                key={course.id}
                course={course}
                localizedPrice={localizedPrice}
                isLoading={isLoading}
              />
            );
          })}
        </SimpleGrid>

        {/* Pagination Controls */}
        {filteredCourses.length > (coursesPerPage || 9) && (
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

            <Flex align="center" gap={{ base: 1, md: 2 }}>
              {(() => {
                const totalPages = Math.ceil(
                  filteredCourses.length / (coursesPerPage || 9)
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
                    Math.ceil(filteredCourses.length / (coursesPerPage || 9))
                  )
                )
              }
              isDisabled={
                currentPage ===
                Math.ceil(filteredCourses.length / (coursesPerPage || 9))
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
      </Container>
    </Box>
  );
}
