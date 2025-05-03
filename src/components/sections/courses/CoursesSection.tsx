"use client";
import { Box, Text, Spinner, Flex } from "@chakra-ui/react";
import CourseCard, { CourseCardProps } from "./CourseCard";
import Section from "@/components/layout/Section";
import { useDynamicPricing } from "@/hooks/useDynamicPricing";
import { useEffect, useState, useMemo } from "react";

/**
 * Course data for display
 */
interface CourseData extends Omit<CourseCardProps, "learningOutcomes"> {
  id: string;
  basePrice: string;
}

const coursesData: CourseData[] = [
  {
    id: "python",
    title: "Python for Research",
    description:
      "This course introduces core data science concepts using Python. Participants will learn data manipulation, statistical analysis, and visualization in Python, as well as project management essentials. By the end, they'll be equipped to efficiently analyze and interpret data for research applications.",
    imageSrc: "/pythonR.jpg",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: "27th of September 2024",
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=python",
  },
  {
    id: "r",
    title: "R for Research",
    description:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
    imageSrc: "/r.jpg",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: "27th of September 2024",
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=r",
  },
  {
    id: "dataviz",
    title: "Data Visualization",
    description:
      "Focused on principles of visual storytelling, this course covers the tools and techniques for creating impactful data visualizations. Participants will learn to design clear, effective visuals using R, enhancing their ability to communicate complex data insights effectively.",
    imageSrc: "/data_vs.jpg",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: "27th of September 2024",
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=dataviz",
  },
  {
    id: "gis",
    title: "GIS for Research",
    description:
      "In this course, participants gain skills in geographic information systems (GIS) for spatial data analysis. Using R, they'll learn to manage, analyze, and visualize geospatial data, making it ideal for those interested in environmental and spatial research.",
    imageSrc: "/gis_research.png",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: "27th of September 2024",
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=gis",
  },
  {
    id: "experimental",
    title: "Experimental Design",
    description:
      "Designed for researchers, this course covers key principles of experimental design, including hypothesis testing, randomization, and replication. Participants will learn to structure experiments rigorously, analyze results, and draw valid conclusions to support evidence-based research.",
    imageSrc: "/experimental.jpg",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: "27th of September 2024",
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=experimental",
  },
];

/**
 * Learning outcomes for Python course
 */
const pythonLearningOutcomes = [
  "Python fundamentals and syntax",
  "Data manipulation with Pandas",
  "Statistical analysis with NumPy and SciPy",
  "Data visualization with Matplotlib and Seaborn",
  "Machine learning basics with Scikit-learn",
  "Project management and workflow optimization",
  "Collaborative coding practices",
  "Problem-solving with Python",
  "Real-world research applications",
];

/**
 * Learning outcomes for R course
 */
const rLearningOutcomes = [
  "R programming fundamentals",
  "Data manipulation with dplyr and tidyr",
  "Statistical analysis in R",
  "Data visualization with ggplot2",
  "Version control with Git",
  "Collaborative workflows with GitHub",
  "R Markdown for reproducible research",
  "Package development basics",
  "Applied research techniques",
];

/**
 * Courses section component
 * Displays available courses with details
 */
export default function CoursesSection() {
  // Create a map of course IDs to their base prices - memoized to prevent infinite loops
  const basePrices = useMemo(() => {
    return coursesData.reduce((acc, course) => {
      acc[course.id] = course.basePrice;
      return acc;
    }, {} as Record<string, string>);
  }, []); // Empty dependency array means this only runs once

  // Use the dynamic pricing hook
  const { localizedPrices, isLoading, countryCode, currency, currencySymbol } =
    useDynamicPricing(basePrices);

  // State to track if client-side rendering has occurred
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Section
      id="courses"
      title="Courses"
      subtitle="Discover our range of specialized training programs designed to equip you with the technical skills and knowledge needed to excel in research and professional settings. Each course offers hands-on learning, real-world projects, and mentorship from industry experts to ensure you're ready for global opportunities."
      bg="#F4F4F4"
      py="6rem"
      spacing={4}
      titleFontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
    >
      {/* Location-based pricing notice */}
      {isClient && !isLoading && countryCode !== "US" && (
        <Box textAlign="center" mb="1rem">
          <Text color="#0E5FDC" fontSize="14px" fontStyle="italic">
            Prices shown in {currency} ({currencySymbol}) based on your location
          </Text>
        </Box>
      )}

      {/* Course Listings */}
      <Box maxW="72rem" margin="auto" px={{ base: "0.5rem", md: "1.5rem" }}>
        {isLoading && isClient ? (
          <Flex justify="center" align="center" minH="200px">
            <Spinner size="xl" color="#0E5FDC" thickness="4px" />
          </Flex>
        ) : (
          coursesData.map((course, index) => (
            <CourseCard
              key={course.id}
              {...course}
              cost={
                isClient
                  ? localizedPrices[course.id]?.formattedPrice ||
                    course.basePrice
                  : course.basePrice
              }
              learningOutcomes={
                index === 0
                  ? pythonLearningOutcomes
                  : index === 1
                  ? rLearningOutcomes
                  : undefined
              }
            />
          ))
        )}
      </Box>
    </Section>
  );
}
