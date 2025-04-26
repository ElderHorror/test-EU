"use client";

import { Box, Text } from "@chakra-ui/react";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  return (
    <Box py="6rem" bg="#F4F4F4">
      {/* Section Heading */}
      <Box textAlign="center" mb="2rem">
        <Text
          fontSize={{ lg: "2.5rem", base: "32px" }}
          fontWeight={600}
          color="black"
          mb="1rem"
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
          ensure you're ready for global opportunities.
        </Text>
      </Box>

      {/* Course Listings */}
      <Box maxW="72rem" margin="auto" px="1.5rem">
        <CourseCard
          title="Python for Research"
          description="This course introduces core data science concepts using Python. Participants will learn data manipulation, statistical analysis, and visualization in Python, as well as project management essentials. By the end, they'll be equipped to efficiently analyze and interpret data for research applications."
          imageSrc="/pythonR.jpg"
          duration="6 weekends"
          classType="Virtual Live Classes"
          nextCohort="27th of September 2024"
          cost="$74.99"
        />

        <CourseCard
          title="R for Research"
          description="This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub."
          imageSrc="/pythonR.jpg"
          duration="6 weekends"
          classType="Virtual Live Classes"
          nextCohort="27th of September 2024"
          cost="$74.99"
        />

        <CourseCard
          title="Data Visualization"
          description="Focused on principles of visual storytelling, this course covers the tools and techniques for creating impactful data visualizations. Participants will learn to design clear, effective visuals using R, enhancing their ability to communicate complex data insights effectively."
          imageSrc="/data_vs.jpg"
          duration="6 weekends"
          classType="Virtual Live Classes"
          nextCohort="27th of September 2024"
          cost="$74.99"
        />

        <CourseCard
          title="GIS for Research"
          description="In this course, participants gain skills in geographic information systems (GIS) for spatial data analysis. Using R, they'll learn to manage, analyze, and visualize geospatial data, making it ideal for those interested in environmental and spatial research."
          imageSrc="/gis_research.png"
          duration="6 weekends"
          classType="Virtual Live Classes"
          nextCohort="27th of September 2024"
          cost="$74.99"
        />

        <CourseCard
          title="Experimental Design"
          description="Designed for researchers, this course covers key principles of experimental design, including hypothesis testing, randomization, and replication. Participants will learn to structure experiments rigorously, analyze results, and draw valid conclusions to support evidence-based research."
          imageSrc="/experimental.jpg"
          duration="6 weekends"
          classType="Virtual Live Classes"
          nextCohort="27th of September 2024"
          cost="$74.99"
        />
      </Box>
    </Box>
  );
};

export default CoursesSection;
