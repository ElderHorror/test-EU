"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

/**
 * Hero section for the courses page
 */
export default function CoursesHero() {
  return (
    <>
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
              excel in the global landscape. Whether you&apos;re seeking to enhance
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
      <Box
        w="100%"
        display={{ base: "block", md: "none" }}
        h="100vh"
        position="relative"
      >
        <Image
          src="/training-mobile.png"
          alt="Training"
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority={true}
        />
      </Box>
      <Box
        w="100%"
        display={{ base: "none", md: "block" }}
        h="100vh"
        position="relative"
      >
        <Image
          src="/training.jpg"
          alt="Training"
          fill={true}
          style={{
            objectFit: "cover",
          }}
          priority={true}
        />
      </Box>
    </>
  );
}
