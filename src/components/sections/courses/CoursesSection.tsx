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
  isAvailable: boolean;
}

// Function to generate dynamic bootcamp date (July 15 of current or next year)
function getNextCohortDate(): string {
  const currentYear = new Date().getFullYear();
  const cohortDate = new Date(currentYear, 6, 15); // July is month 6 (0-indexed)

  // If July 15 has already passed this year, use next year
  const today = new Date();
  if (cohortDate < today) {
    cohortDate.setFullYear(currentYear + 1);
  }

  // Format as "15th of July YYYY"
  const day = cohortDate.getDate();
  const year = cohortDate.getFullYear();
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  return `${day}${suffix} of July ${year}`;
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
    nextCohort: getNextCohortDate(),
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=python",
    isAvailable: true, // Only Python is available
  },
  {
    id: "r",
    title: "R for Research",
    description:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
    imageSrc: "/r.jpg",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: getNextCohortDate(),
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=r",
    isAvailable: false, // Coming soon
  },
  {
    id: "dataviz",
    title: "Data Visualization",
    description:
      "Focused on principles of visual storytelling, this course covers the tools and techniques for creating impactful data visualizations. Participants will learn to design clear, effective visuals using R, enhancing their ability to communicate complex data insights effectively.",
    imageSrc: "/data_vs.jpg",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: getNextCohortDate(),
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=dataviz",
    isAvailable: false, // Coming soon
  },
  {
    id: "gis",
    title: "GIS for Research",
    description:
      "In this course, participants gain skills in geographic information systems (GIS) for spatial data analysis. Using R, they'll learn to manage, analyze, and visualize geospatial data, making it ideal for those interested in environmental and spatial research.",
    imageSrc: "/gis_research.png",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: getNextCohortDate(),
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=gis",
    isAvailable: false, // Coming soon
  },
  {
    id: "experimental",
    title: "Experimental Design",
    description:
      "Designed for researchers, this course covers key principles of experimental design, including hypothesis testing, randomization, and replication. Participants will learn to structure experiments rigorously, analyze results, and draw valid conclusions to support evidence-based research.",
    imageSrc: "/experimental.jpg",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: getNextCohortDate(),
    cost: "$74.99", // Will be replaced with dynamic pricing
    basePrice: "$74.99",
    enrollLink: "/courses/checkout?course=experimental",
    isAvailable: false, // Coming soon
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
      mt="14rem"
      spacing={4}
      titleFontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
    >
      {/* Location-based pricing notice */}
      {/* {isClient && !isLoading && countryCode !== "US" && (
        <Box textAlign="center" mb="1rem">
          <Text color="#0E5FDC" fontSize="14px" fontStyle="italic">
            Prices shown in {currency} ({currencySymbol}) based on your location
          </Text>
        </Box>
      )} */}

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
              isAvailable={course.isAvailable}
            />
          ))
        )}
      </Box>
    </Section>
  );
}
