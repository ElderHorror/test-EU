"use client";

import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar/Navbar";
import CoursesSection from "./CoursesSection";
import LoanFeature from "../loans/LoanFeature";
import { TestimonialCompact } from "./TestimonialCompact";
import Footer from "../pages/Home/Sections/Footer/Footer";

const TrainingHero = () => {
  return (
    <>
      {/* Navigation */}
      <Box>
        <Navbar setPageMode={() => {}} />
      </Box>

      {/* Hero Section */}
      <Box
        bgColor="#0E5FDC"
        pt={{ lg: "9rem", md: "7.5rem", base: "6rem" }}
        px="1.5rem"
        pb={{ base: "2rem", lg: "7rem" }}
      >
        <Flex
          maxW="90rem"
          mx={{ lg: "auto", base: "0" }}
          px={{ lg: "1.5rem", base: 0 }}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", lg: "center" }}
        >
          <Box flexBasis="50%">
            <Text
              color="white"
              fontSize={{ lg: "72px", base: "36px", md: "48px" }}
              fontWeight={600}
              letterSpacing="-2px"
              lineHeight="1.05"
              textShadow="0px 4px 4px #00000040"
              // mb="0.6rem"
            >
              Accelerate Your
            </Text>
            <Box>
              <Text
                color="#F69127"
                fontSize={{ lg: "72px", base: "36px", md: "48px" }}
                fontWeight={600}
                letterSpacing="-2px"
                lineHeight="1.05"
                textShadow="0px 4px 4px #00000040"
              >
                Research &
              </Text>
              <Text
                color="white"
                fontSize={{ lg: "72px", base: "36px", md: "48px" }}
                fontWeight={600}
                letterSpacing="-2px"
                lineHeight="1.05"
                textShadow="0px 4px 4px #00000040"
              >
                Professional Skills
              </Text>
            </Box>
          </Box>
          <Box flexBasis="45%" justifySelf="baseline" mt="auto">
            <Text
              color="#E4E4E4"
              lineHeight="1.5"
              fontSize={{ lg: "20px", base: "16px", md: "18px" }}
              textShadow="0px 4px 4px #00000040"
              textAlign="justify"
            >
              Our training and bootcamp programs are designed to equip students,
              researchers, and professionals with critical technical skills to
              excel in the global landscape. Whether you're seeking to enhance
              your data science expertise or acquire new skills for research,
              our programs offer personalized, hands-on learning experiences.
              With expert-led sessions, one-on-one mentorship, and real-world
              projects, we ensure participants are prepared for immediate
              academic and professional opportunities.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Training Image */}
      <Box w="100%" display={{ base: "block", md: "none" }}>
        <Image
          w="100%"
          borderRadius="8px"
          border="none"
          src="/training-mobile.png"
          alt="Training"
          h="100vh"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Box w="100%" display={{ base: "none", md: "block" }}>
        <Image
          w="100%"
          borderRadius="8px"
          border="none"
          src="/training.jpg"
          alt="Training"
          h="100vh"
          objectFit="cover"
        />
      </Box>

      {/* Courses Section */}
      <CoursesSection />

      {/* Why Choose EU StudyAssist Loans Section */}
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

      {/* Testimonials Section */}
      <TestimonialCompact />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default TrainingHero;
