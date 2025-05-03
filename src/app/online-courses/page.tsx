"use client";

import {
  Box,
  Container,
  Flex,
  Image,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import CoursesHero from "./CoursesHero";
import CoursesContent from "./CoursesContent";
import CoursesGrid from "./CoursesGrid";
import LoanFeature from "../loans/LoanFeature";

export default function OnlineCoursesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <CoursesHero />

      {/* How We Teach Section */}
      <CoursesContent />

      {/* Courses Grid */}
      <CoursesGrid />

      {/* Why Study Section */}
      <Box py="6rem" bg="white">
        <Container maxW="60rem">
          <Box py={{ lg: "10rem", base: "0rem" }}>
            <LoanFeature
              imageSrc="/loan-features04.png"
              heading="Why Choose EU StudyAssist Loans?"
              description="Tailored for Students: At EU StudyAssist, our loan services are crafted specifically for international students. We offer both fixed and flexible repayment terms, aligned with your academic schedule, so you can concentrate on your studies without financial stress.

No Immediate Repayment: Moving abroad can be overwhelming, which is why we provide a grace period before repayments begin. This allows you to focus on settling in without immediate financial pressure. Additionally, we offer options to stretch repayment, ensuring it stays manageable throughout your studies.

Competitive Interest Rates: Our loan options come with highly competitive rates, designed to make repayment affordable and manageable, even during your studies."
              imagePosition="left"
              tallImage={true}
              smallText={true}
            />
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box bg="#F4F4F4" py="6rem" pb="6rem">
        <Container maxW="60rem">
          <VStack spacing="2rem" align="center">
            <Text
              fontSize={{ base: "1.125rem", md: "1.25rem" }}
              color="#2F3540"
              textAlign="center"
              lineHeight="1.6"
              maxW="800px"
              whiteSpace="pre-line"
            >
              Our team ensures personalized, impactful solutions to meet your
              unique organizational needs.
            </Text>

            <Button
              bg="#0E5FDC"
              color="white"
              size="md"
              _hover={{ bg: "#0B4DB0" }}
              px="1.5rem"
              py="1.5rem"
              fontSize="1rem"
              mt="1rem"
            >
              Contact Us
            </Button>
          </VStack>
        </Container>
      </Box>
    </PageLayout>
  );
}
