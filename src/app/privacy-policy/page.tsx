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
import PrivacyHero from "./PrivacyHero";
import PrivacyContent from "./PrivacyContent";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <PrivacyHero />

      {/* Privacy Policy Content */}
      <PrivacyContent />

      {/* Why Study Section */}
      <Box py="6rem" bg="white">
        <Container maxW="60rem">
          <Flex
            direction={{
              base: "column",
              lg: "row",
            }}
            align="center"
            gap={{ base: "2rem", lg: "8rem" }}
          >
            {/* Image Section */}
            <Box
              position="relative"
              w={{ base: "100%", lg: "60%" }}
              h={{ base: "400px", md: "350px", lg: "600px" }}
            >
              <Image
                src="/loan-features04.png"
                alt="Why Study with EU StudyAssist"
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="2xl"
              />
            </Box>

            {/* Text Content Section */}
            <VStack
              align={{ base: "flex-start", lg: "flex-start" }}
              spacing="1.5rem"
              w={{ base: "100%", lg: "80%" }}
              maxW="600px"
              mt={{ base: "1rem", lg: "0" }}
            >
              <Heading
                color="black"
                fontSize={{ base: "1.75rem", md: "2rem", lg: "2.5rem" }}
                fontWeight={700}
                textAlign={{ base: "left", lg: "left" }}
                mb="0.5rem"
              >
                Why Study with EU StudyAssist?
              </Heading>

              <Box
                color="#2F3540"
                textAlign={{ base: "left", lg: "left" }}
                w="100%"
              >
                <Text
                  mb="1rem"
                  fontSize={{ base: "1rem", md: "1.1rem" }}
                  lineHeight="1.6"
                >
                  <Text as="span" fontWeight={600} display="inline">
                    Expert Instructors:
                  </Text>{" "}
                  Our courses are led by industry professionals and academic
                  experts who bring real-world experience and cutting-edge
                  knowledge to every session.
                </Text>

                <Text
                  mb="1rem"
                  fontSize={{ base: "1rem", md: "1.1rem" }}
                  lineHeight="1.6"
                >
                  <Text as="span" fontWeight={600} display="inline">
                    Practical Skills Focus:
                  </Text>{" "}
                  We emphasize hands-on learning with real-world projects and
                  applications, ensuring you develop skills that are immediately
                  applicable in your research or career.
                </Text>

                <Text
                  fontSize={{ base: "1rem", md: "1.1rem" }}
                  lineHeight="1.6"
                >
                  <Text as="span" fontWeight={600} display="inline">
                    Flexible Learning Options:
                  </Text>{" "}
                  Our programs are designed to accommodate busy schedules, with
                  options for intensive training programs, part-time courses,
                  and customized learning solutions.
                </Text>
              </Box>

              <Button
                bg="#0E5FDC"
                color="white"
                size="lg"
                _hover={{ bg: "#0B4DB0" }}
                px="2rem"
                py="1.8rem"
                fontSize="1.1rem"
                mt="1rem"
                alignSelf={{ base: "flex-start", lg: "flex-start" }}
                fontWeight={600}
              >
                Explore Courses
              </Button>
            </VStack>
          </Flex>
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
