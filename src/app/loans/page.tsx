"use client";

import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import LoanFeature from "@/components/sections/loans/LoanFeature";
import LoanApplication from "./LoanApplication";
import CallToAction from "./CallToAction";
import AnimatedElement from "@/components/common/AnimatedElement";
import StaggeredContainer from "@/components/common/StaggeredContainer";
import PageTransition from "@/components/common/PageTransition";

export default function Loans() {
  return (
    <PageLayout>
      <PageTransition>
        {/* Main Content Section with Gradient Background */}
        <Box
          bgGradient="linear(to-b, #0E5FDC 70%, white 30%)"
          minH="100vh"
          pt="6rem"
        >
          <Container maxW="90rem">
            {/* Hero Text Section */}
            <AnimatedElement animation="fadeIn" delay={0.2}>
              <VStack
                spacing={6}
                align="center"
                justify="center"
                color="white"
                mb="2rem"
              >
                {/* Main Heading */}
                <Heading
                  fontSize={{ base: "2.2rem", md: "2.5rem", lg: "3rem" }}
                  fontWeight={600}
                  textAlign="center"
                  lineHeight="0.6"
                >
                  We Provide Flexible
                </Heading>

                {/* Sub Heading in Orange */}
                <Heading
                  fontSize={{ base: "2.1rem", md: "2.5rem", lg: "3rem" }}
                  fontWeight={600}
                  textAlign="center"
                  color="#F69127"
                  lineHeight="0.6"
                >
                  Financial Solutions
                </Heading>

                {/* Description Text */}
                <Text
                  fontSize={{ base: "0.75rem", md: "0.875rem", lg: "1rem" }}
                  maxW="600px"
                  textAlign="center"
                  lineHeight="1.6"
                  whiteSpace="pre-line"
                  color="#E4E4E4"
                  mb="1rem"
                >
                  Our loan services provide flexible financial solutions to help
                  cover <br />
                  the essential expenses involved in moving abroad for studies.
                </Text>
              </VStack>
            </AnimatedElement>

            {/* Loan Calculator Container */}
            <AnimatedElement animation="slideUp" delay={0.4}>
              <Box
                bg="white"
                borderRadius="lg"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                p={8}
                maxW="600px"
                minH="500px"
                mx="auto"
                border="1px solid #B6B6B6"
              >
                <Heading
                  fontSize="1.5rem"
                  fontWeight={600}
                  textAlign="center"
                  color="#130F26"
                  mb={6}
                >
                  Loan Calculator
                </Heading>
                {/* Loan Calculator component will be rendered here */}
              </Box>
            </AnimatedElement>
          </Container>
        </Box>

        {/* Section Heading */}
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <Box bg="white" mt="8rem">
            <Container maxW="60rem">
              <Heading
                textAlign="center"
                fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
                fontWeight={600}
                color="#130F26"
                lineHeight="1.2"
              >
                Our loans can help <br /> in multiple ways
              </Heading>
            </Container>
          </Box>
        </AnimatedElement>

        {/* Features Section with Staggered Animation */}
        <StaggeredContainer delay={0.3} staggerDelay={0.2}>
          {/* Flight Costs Section */}
          <AnimatedElement animation="slideLeft">
            <LoanFeature
              imageSrc="/loan-features01.png"
              heading="Flight Costs"
              description="We understand that travel expenses can be a significant hurdle when moving abroad to study. Our loan covers the cost of flights to your study destination, so you can focus on your education instead of worrying about financing your trip."
              imagePosition="left"
            />
          </AnimatedElement>

          {/* Accommodation Section */}
          <AnimatedElement animation="slideRight">
            <LoanFeature
              imageSrc="/loan-features02.png"
              heading="Accommodation"
              description="Finding suitable accommodation in a new country can be challenging. Our loan helps you secure comfortable and safe housing near your educational institution, ensuring you have a stable living environment throughout your studies."
              imagePosition="right"
            />
          </AnimatedElement>

          {/* Living Expenses Section */}
          <AnimatedElement animation="slideLeft">
            <LoanFeature
              imageSrc="/loan-features03.png"
              heading="Living Expenses"
              description="Daily living expenses can add up quickly in a new country. Our loan provides financial support for your day-to-day needs, including food, transportation, and other essential costs, allowing you to focus on your academic success."
              imagePosition="left"
            />
          </AnimatedElement>
        </StaggeredContainer>

        {/* Loan Application Section */}
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <LoanApplication />
        </AnimatedElement>

        {/* Why Choose EU StudyAssist Loans Section */}
        <AnimatedElement animation="slideUp" delay={0.3}>
          <Box py="10rem">
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
        </AnimatedElement>

        {/* Call to Action Section */}
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <CallToAction />
        </AnimatedElement>
      </PageTransition>
    </PageLayout>
  );
}
