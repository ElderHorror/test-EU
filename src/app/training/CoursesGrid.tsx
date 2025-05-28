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
  Badge,
  HStack,
} from "@chakra-ui/react";
import { useDynamicPricing } from "@/hooks/useDynamicPricing";

// Sample course data
const courses = [
  {
    id: 1,
    title: "R for Research",
    price: "$15",
    duration: "4 HOURS",
    level: "BEGINNER TO INTERMEDIATE",
    description:
      "Master R programming for data analysis and statistical modeling. This course includes pre-recorded lessons and exercises to help you work with large datasets and apply advanced statistical techniques.",
    image: "/00.png",
  },
  {
    id: 2,
    title: "Academic Writing",
    price: "$20",
    duration: "6 HOURS",
    level: "ALL LEVELS",
    description:
      "A comprehensive introduction to Python programming with a focus on applications in research. Learn to analyze data, automate tasks, and create reproducible research workflows.",
    image: "/00.png",
  },
  {
    id: 3,
    title: "Research Methods",
    price: "$25",
    duration: "8 HOURS",
    level: "INTERMEDIATE",
    description:
      "Learn how to create meaningful and engaging data visualizations using Python libraries and Tableau. This course covers data preparation, charting techniques, and storytelling with data.",
    image: "/00.png",
  },
  {
    id: 4,
    title: "Statistical Analysis",
    price: "$30",
    duration: "10 HOURS",
    level: "INTERMEDIATE TO ADVANCED",
    description:
      "Explore Geographic Information Systems (GIS) and learn how to analyze and visualize spatial data. This course is designed for researchers working with geographical information to make data-driven decisions.",
    image: "/00.png",
  },
  {
    id: 5,
    title: "Literature Review",
    price: "$18",
    duration: "5 HOURS",
    level: "BEGINNER",
    description:
      "Understand the principles of experimental design, from hypothesis testing to statistical analysis. Learn how to plan, execute, and interpret experiments in research settings.",
    image: "/00.png",
  },
  {
    id: 6,
    title: "Grant Writing",
    price: "$22",
    duration: "7 HOURS",
    level: "INTERMEDIATE",
    description:
      "Learn how to create meaningful and engaging data visualizations using Python libraries and Tableau. This course covers data preparation, charting techniques, and storytelling with data.",
    image: "/00.png",
  },
];

export default function CoursesGrid() {
  // Define the prices object
  const prices = {
    1: "$15",
    2: "$20",
    3: "$25",
    4: "$30",
    5: "$18",
    6: "$22",
  };

  // Use the dynamic pricing hook
  const { localizedPrices, isLoading } = useDynamicPricing(prices);

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

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing="2rem"
          spacingY="3rem"
        >
          {courses.map((course) => {
            const localizedPrice = localizedPrices[course.id]
              ? localizedPrices[course.id].formattedPrice
              : course.price; // Fallback to original price if not loaded yet

            return (
              <Box
                key={course.id}
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
                />

                {/* Card Content */}
                <Box p="0">
                  {/* Title and Price */}
                  <Box pt="0.8rem">
                    <Flex justify="space-between" align="center" mb="0.75rem">
                      <Heading
                        as="h3"
                        fontSize="2xl"
                        fontWeight={600}
                        color="black"
                      >
                        {course.title}
                      </Heading>
                      <Text fontSize="xl" fontWeight={700} color="#0E5FDC">
                        {isLoading ? "Loading..." : localizedPrice}
                      </Text>
                    </Flex>
                  </Box>

                  {/* Horizontal Line */}
                  <Box h="1px" bg="gray.400" w="100%" my="0.5rem" />

                  {/* Duration and Level */}
                  <Box>
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
                  <Box h="1px" bg="gray.400" w="100%" mb="1rem" />

                  {/* Description */}
                  <Box pr="1.5rem">
                    <Text
                      fontSize="sm"
                      color="gray.600"
                      mb="1.5rem"
                      h="6rem"
                      maxH="8rem"
                    >
                      {course.description}
                    </Text>
                  </Box>

                  {/* Button */}
                  <Box position="relative" zIndex="2" my="1rem">
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
                  </Box>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
