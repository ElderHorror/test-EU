"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import TrainingCard, { TrainingCardProps } from "./TrainingCard";
import Section from "@/components/layout/Section";

/**
 * Training program data
 */
const trainingData: TrainingCardProps[] = [
  {
    image: "/00.png",
    title: "R For Research",
    subTitle:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control.",
    isDisabled: false,
    link: "/courses/01",
  },
  {
    image: "/python.jpg",
    title: "Python For Research",
    subTitle:
      "This course introduces core data science concepts using Python. Participants will learn data manipulation, statistical analysis, and visualization in Python, as well as project management essentials.",
    isDisabled: true,
    link: "",
  },
  {
    image: "/gis.jpg",
    title: "GIS For Research",
    subTitle:
      "In this course, participants gain skills in geographic information systems (GIS) for spatial data analysis. Using R, they'll learn to manage, analyze, and visualize geospatial data.",
    isDisabled: true,
    link: "",
  },
];

/**
 * Training section component
 * Displays available training programs
 */
export default function TrainingSection() {
  return (
    <Section
      id="Commitment"
      bg="#F4F4F4"
      py={{ base: "2rem", lg: "7rem" }}
      px="1.5rem"
      spacing={8}
    >
      <Box>
        <Text
          color="black"
          fontWeight={600}
          fontSize={{ lg: "2.5rem", base: "32px" }}
          textAlign="center"
          marginY="0.5rem"
        >
          Our Training Programs
        </Text>
        <Text
          color="#2F3540"
          textAlign="center"
          fontSize={{ lg: "18px", base: "16px" }}
          lineHeight={{ lg: 1.75, base: 1.4 }}
          maxW="45rem"
          margin="auto"
          mb="2.5rem"
        >
          The training programs at EU StudyAssist spans across education,
          technology, career etc. It can be in form of a bootcamp or standalone
          course.
        </Text>
      </Box>

      <Flex
        gap="1rem"
        // flexFlow="row wrap"
        justifyContent="center"
        justifyItems="center"
      >
        {trainingData.map((item) => (
          <TrainingCard 
            key={item.title} 
            data={item} 
            isTraining={true} 
          />
        ))}
      </Flex>
    </Section>
  );
}
