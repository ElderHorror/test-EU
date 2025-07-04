"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import ConsultingCard, { ConsultingCardProps } from "./ConsultingCard";
import Section from "@/components/layout/Section";

/**
 * Consulting services data
 */
const consultingData: ConsultingCardProps[] = [
  {
    image: "/01.jpg",
    title: "Climate change modeling: Impact assessment on forest ecosystems",
    subTitle:
      "We specialize in assessing the impacts of climate change on forest ecosystems, providing critical insights to support adaptive management and conservation strategies. Our services include Climate Scenario Analysis, Spatial Distribution Modeling and Vulnerability Assessment",
    isDisabled: true,
    link: "",
  },
  {
    image: "/02.jpg",
    title: "Forest inventory analysis",
    subTitle:
      "Our forest inventory analysis services are designed to provide detailed, data-driven insights into forest composition, health, and dynamics. Our key services include: Biomass Estimation, Forest Health Assessment, Forest Growth Estimation and Prediction and Ecological Assessment",
    isDisabled: true,
    link: "",
  },
  {
    image: "/03.jpg",
    title: "Training and Workshops",
    subTitle:
      "We offer tailored training and workshops designed to enhance the skills and knowledge of professionals in the fields of R programming, Python, and Geographic Information Systems (GIS).",
    isDisabled: true,
    link: "",
  },
];

/**
 * Consulting section component
 * Displays available consulting services
 */
export default function ConsultingSection() {
  return (
    <Section
      id="Consulting"
      bg="#F4F4F4"
      py={{ base: "2rem", lg: "7rem" }}
      px={{ base: "0.3rem", sm: "0.5rem", md: "1rem", lg: "1.5rem" }}
      spacing={8}
    >
      <Box>
        <Text
          color="black"
          fontFamily="ClashDisplay"
          fontWeight={700}
          fontSize={{ lg: "2.5rem", base: "28px" }}
          textAlign="center"
          marginY="0.5rem"
          whiteSpace="nowrap"
        >
          Our Consulting Services
        </Text>
        <Text
          color="#2F3540"
          textAlign="center"
          fontSize={{ lg: "18px", base: "15.6px" }}
          lineHeight={{ lg: 1.75, base: 1.4 }}
          maxW="45rem"
          margin="auto"
          mb="2.5rem"
        >
          We offer a comprehensive suite of services tailored to support
          sustainable management of forest ecosystems and environmental
          resources.
        </Text>
      </Box>

      <Flex
        gap={{ base: "2rem", md: "1rem" }}
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={{ base: "wrap", md: "nowrap", lg:"nowrap" }}
        // justifyContent="center"
        // alignItems="center"
        width="100%"
      >
        {consultingData.map((item) => (
          <ConsultingCard key={item.title} data={item} isTraining={false} />
        ))}
      </Flex>
    </Section>
  );
}
