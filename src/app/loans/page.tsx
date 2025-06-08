"use client";

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import LoanFeature from "@/components/sections/loans/LoanFeature";
import LoanApplication from "./LoanApplication";
import CallToAction from "./CallToAction";
import AnimatedElement from "@/components/common/AnimatedElement";
import StaggeredContainer from "@/components/common/StaggeredContainer";
import PageTransition from "@/components/common/PageTransition";
import NewCalculator from "@/components/sections/calculator/NewCalculator";

export default function Loans() {
  return (
    <PageLayout>
      <PageTransition>
        {/* Main Content Section with Gradient Background */}
        <Box position="relative" pt="6rem" overflow="visible" minH="100vh">
          {/* Blue background section */}
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height={{ base: "350px", md: "450px", lg: "450px" }}
            bg="#0E5FDC"
            zIndex="0"
          />
          {/* White background section */}
          <Box
            position="absolute"
            top={{ base: "350px", md: "450px", lg: "800px" }}
            left="0"
            width="100%"
            height="100%"
            bg="white"
            zIndex="0"
          />
          <Container maxW="90rem">
            {/* Hero Text Section */}
            <AnimatedElement animation="fadeIn" delay={0.2}>
              <VStack
                spacing={6}
                align="center"
                justify="center"
                color="white"
                mb="2rem"
                position="relative"
                zIndex="1"
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
            <Box
              position="relative"
              width="100%"
              display="flex"
              justifyContent="center"
              mt={{ base: "3rem", md: "4rem", lg: "5rem" }}
              mb={{ base: "8rem", md: "10rem", lg: "12rem" }}
              zIndex="1"
            >
              <AnimatedElement animation="slideUp" delay={0.4}>
                <Box
                  position="relative"
                  bg="white"
                  borderRadius="lg"
                  boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)"
                  p={{ base: 4, md: 8 }}
                  maxW={{ base: "90%", sm: "80%", md: "600px" }}
                  width={{ base: "90%", sm: "80%", md: "600px" }}
                  mx="auto"
                  border="1px solid #B6B6B6"
                  zIndex="1"
                  top={{ base: "10px", md: "75px", lg: "100px" }}
                  marginTop={{ base: "0", md: "-75px", lg: "-100px" }}
                >
                  <NewCalculator
                    border="none"
                    p="0"
                    minH="unset"
                    boxShadow="none"
                  />
                </Box>
              </AnimatedElement>
            </Box>
          </Container>
        </Box>

        {/* Section Heading */}
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <Box
            bg="white"
            mt={{ base: "1rem", md: "0", lg: "3rem" }}
            position="relative"
            zIndex="1"
          >
            <Container maxW="60rem">
              <Heading
                textAlign="center"
                fontFamily="ClashDisplay"
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
        <Box position="relative" zIndex="1">
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
        </Box>

        {/* Loan Application Section */}
        <Box position="relative" zIndex="1">
          <AnimatedElement animation="fadeIn" delay={0.2}>
            <LoanApplication />
          </AnimatedElement>
        </Box>

        {/* Why Choose EU StudyAssist Loans Section */}
        <Box position="relative" zIndex="1">
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
        </Box>

        {/* Call to Action Section */}
        <Box position="relative" zIndex="1">
          <AnimatedElement animation="fadeIn" delay={0.2}>
            <CallToAction />
          </AnimatedElement>
        </Box>
      </PageTransition>
    </PageLayout>
  );
}
