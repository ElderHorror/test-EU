"use client";

import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import LoanFeature from "@/components/sections/loans/LoanFeature";
import LoanApplication from "./LoanApplication";
import CallToAction from "./CallToAction";
import AnimatedElement from "@/components/common/AnimatedElement";
import StaggeredContainer from "@/components/common/StaggeredContainer";
import PageTransition from "@/components/common/PageTransition";
import Calculator from "@/components/sections/calculator/Calculator";

export default function Loans() {
  return (
    <PageLayout>
      <PageTransition>
        {/* Main Content Section with Gradient Background */}
        <Box
          bgGradient={{
            base: "linear(to-b, #0E5FDC 50%, white 50%)",
            // md: "linear(to-b, #0E5FDC 40%, white 60%)",
            lg: "linear(to-b, #0E5FDC 80%, white 20%)",
          }}
          minH={{ base: "120vh", md: "100vh" }}
          pt="6rem"
          position="relative"
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
                position="absolute"
                left="50%"
                top={{ base: "75%", md: "60%", lg: "100%" }}
                transform="translate(-50%, -50%)"
                bg="white"
                borderRadius="lg"
                boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)"
                p={{ base: 4, md: 8 }}
                maxW={{ base: "90%", sm: "80%", md: "600px" }}
                width={{ base: "90%", sm: "80%", md: "600px" }}
                minH={{ base: "auto", md: "500px" }}
                mx="auto"
                border="1px solid #B6B6B6"
                zIndex="1"
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
                <Calculator
                  border="none"
                  p="0"
                  minH="unset"
                  mt="0"
                  boxShadow="none"
                />
              </Box>
            </AnimatedElement>
          </Container>
        </Box>

        {/* Section Heading */}
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <Box bg="white" mt={{ base: "2rem", md: "2rem", lg: "26rem" }}>
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
              useBulletPoints={false}
            />
          </AnimatedElement>

          {/* Accommodation Section */}
          <AnimatedElement animation="slideRight">
            <LoanFeature
              imageSrc="/loan-features02.png"
              heading="Accommodation"
              description="Finding suitable accommodation in a new country can be challenging. Our loan helps you secure comfortable and safe housing near your educational institution, ensuring you have a stable living environment throughout your studies."
              imagePosition="right"
              useBulletPoints={false}
            />
          </AnimatedElement>

          {/* Living Expenses Section */}
          <AnimatedElement animation="slideLeft">
            <LoanFeature
              imageSrc="/loan-features03.png"
              heading="Living Expenses"
              description="Daily living expenses can add up quickly in a new country. Our loan provides financial support for your day-to-day needs, including food, transportation, and other essential costs, allowing you to focus on your academic success."
              imagePosition="left"
              useBulletPoints={false}
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
