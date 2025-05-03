"use client";

import { Box, Text, Spinner, Flex, Button } from "@chakra-ui/react";
import CourseCard from "./CourseCard";
import { useDynamicPricing } from "@/hooks/useDynamicPricing";
import { useEffect, useState } from "react";
import ImageDebugger from "./ImageDebugger";
import DirectImageTest from "./DirectImageTest";

// Course data with unique IDs
const coursesData = [
  {
    id: "python",
    title: "Python for Research",
    description:
      "This course introduces core data science concepts using Python. Participants will learn data manipulation, statistical analysis, and visualization in Python, as well as project management essentials. By the end, they'll be equipped to efficiently analyze and interpret data for research applications.",
    imageSrc: "/pythonR.jpg",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: "27th of September 2024",
    basePrice: "$74.99",
  },
  {
    id: "r",
    title: "R for Research",
    description:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
    imageSrc: "/pythonR.jpg",
    duration: "6 weekends",
    classType: "Virtual Live Classes",
    nextCohort: "27th of September 2024",
    basePrice: "$74.99",
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
    basePrice: "$74.99",
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
    basePrice: "$74.99",
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
    basePrice: "$74.99",
  },
];

const CoursesSection = () => {
  // Create a map of course IDs to their base prices
  const basePrices = coursesData.reduce((acc, course) => {
    acc[course.id] = course.basePrice;
    return acc;
  }, {} as Record<string, string>);

  // Use the dynamic pricing hook
  const { localizedPrices, isLoading, countryCode, currency, currencySymbol } =
    useDynamicPricing(basePrices);

  // State to track if client-side rendering has occurred
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Debug output
  useEffect(() => {
    if (isClient && !isLoading) {
      console.log("CoursesSection - Rendering with:");
      console.log("Country Code:", countryCode);
      console.log("Currency:", currency);
      console.log("Currency Symbol:", currencySymbol);
      console.log("Localized Prices:", localizedPrices);

      // Log image paths for debugging
      coursesData.forEach((course) => {
        console.log(`Course ${course.id} image path: ${course.imageSrc}`);
      });
    }
  }, [
    isClient,
    isLoading,
    countryCode,
    currency,
    currencySymbol,
    localizedPrices,
  ]);

  // State to control debug mode
  const [showDebugger, setShowDebugger] = useState(false);

  return (
    <Box py="6rem" bg="#F4F4F4">
      {/* Section Heading */}
      <Box textAlign="center" mb="2rem">
        <Text
          fontSize={{ base: "36px", md: "42px", lg: "3rem" }}
          fontWeight={600}
          color="black"
          mb="0.5rem"
        >
          Courses
        </Text>
        <Text
          color="#2F3540"
          fontSize={{ lg: "16px", base: "16px" }}
          lineHeight="1.5"
          maxW="54rem"
          margin="auto"
          px={{ base: "1rem", lg: "2rem" }}
        >
          Discover our range of specialized training programs designed to equip
          you with the technical skills and knowledge needed to excel in
          research and professional settings. Each course offers hands-on
          learning, real-world projects, and mentorship from industry experts to
          ensure you&apos;re ready for global opportunities.
        </Text>

        {isClient && !isLoading && countryCode !== "US" && (
          <Text color="#0E5FDC" fontSize="14px" mt="1rem" fontStyle="italic">
            Prices shown in {currency} ({currencySymbol}) based on your location
          </Text>
        )}
      </Box>

      {/* Debug Controls */}
      <Box textAlign="center" mb="2rem">
        <Button
          size="sm"
          colorScheme="blue"
          onClick={() => setShowDebugger(!showDebugger)}
          mb="1rem"
        >
          {showDebugger ? "Hide Image Debugger" : "Show Image Debugger"}
        </Button>

        {showDebugger && (
          <>
            <ImageDebugger />
            <DirectImageTest />
          </>
        )}
      </Box>

      {/* Course Listings */}
      <Box maxW="72rem" margin="auto" px="1.5rem">
        {isLoading && isClient ? (
          <Flex justify="center" align="center" minH="200px">
            <Spinner size="xl" color="#0E5FDC" thickness="4px" />
          </Flex>
        ) : (
          coursesData.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              imageSrc={course.imageSrc}
              duration={course.duration}
              classType={course.classType}
              nextCohort={course.nextCohort}
              cost={
                isClient
                  ? localizedPrices[course.id]?.formattedPrice ||
                    course.basePrice
                  : course.basePrice
              }
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default CoursesSection;
