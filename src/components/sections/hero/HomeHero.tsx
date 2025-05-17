"use client";
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SecondaryButton } from "@/components/common/buttons/Button";
import { slideInLeft, slideInRight } from "@/lib/animations";

/**
 * Hero section for the homepage
 * Displays the main headline, description, and call-to-action
 * Simplified version with reduced animation complexity to prevent infinite loops
 */
export default function HomeHero() {
  // Use a single ref for the entire hero section with triggerOnce to prevent re-renders
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      as="section"
      bgColor="#0E5FDC"
      pt={{ lg: "9rem", md: "7.5rem", base: "6rem" }}
      px="1rem"
      id="Heropage"
      pb={{ base: "2rem", lg: "7rem" }}
      display="grid"
      placeContent="center"
      ref={heroRef}
      overflow="hidden"
    >
      <Flex
        maxW="90rem"
        px="1.5rem"
        flexDir={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          style={{ flexBasis: "45%" }}
        >
          {/* Badge */}
          <Flex>
            <Flex
              mb="1.5rem"
              mr="auto"
              bg="white"
              rounded="full"
              p="0.5rem"
              color="#1B2124"
              boxShadow="0px 4px 4px #00000040"
              alignItems="center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 22"
                height="30px"
              >
                <rect width="40" height="22" fill="#0E5FDC" rx="11" />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="m17 15-1-1v-4a1 1 0 0 1 1 0v5Zm3 0-1-1V7a1 1 0 0 1 1 0v8Zm3 0-1-1v-2a1 1 0 0 1 1 0v3Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M17 5c-2 0-3 1-3 3v6c0 2 1 3 3 3h6c2 0 3-1 3-3V8c0-2-1-3-3-3h-6Zm6 13h-6c-3 0-4-2-4-4V8c0-3 1-4 4-4h6c2 0 4 1 4 4v6c0 2-2 4-4 4Z"
                  clipRule="evenodd"
                />
              </svg>
              <Link href="/training">
                <Text mx="0.25rem" fontWeight="500" fontSize="12px">
                  Grow Your Career, Stress-Free
                </Text>
              </Link>
              <Box margin="auto 0.5rem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  width="25px"
                >
                  <path
                    stroke="#1B2124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 9h10m0 0-5 5m5-5L9 4"
                  />
                </svg>
              </Box>
            </Flex>
          </Flex>

          {/* Headline */}
          <Box mb="1.2rem">
            <Text
              as="span"
              display="block"
              color="white"
              fontSize={{ lg: "72px", base: "36px", md: "48px" }}
              fontWeight={600}
              letterSpacing="-2px"
              lineHeight="1.05"
              textShadow="0px 4px 4px #00000040"
            >
              Build a Great Career With
            </Text>

            <Text
              as="span"
              display="inline-block"
              color="#F69127"
              fontSize={{ lg: "72px", base: "36px", md: "48px" }}
              fontWeight={600}
              letterSpacing="-2px"
              lineHeight="1.05"
              textShadow="0px 4px 4px #00000040"
            >
              Our Support
            </Text>
            <Text
              as="span"
              display="inline-block"
              color="white"
              fontSize={{ lg: "72px", base: "36px", md: "48px" }}
              fontWeight={600}
              letterSpacing="-2px"
              lineHeight="1.05"
              textShadow="0px 4px 4px #00000040"
            >
              .
            </Text>
          </Box>

          {/* Description */}
          <Text
            color="#E4E4E4"
            lineHeight="1.5"
            fontSize={{ lg: "20px", base: "16px", md: "18px" }}
            textShadow="0px 4px 4px #00000040"
          >
            EU StudyAssist will support your educational success through
            trainings, educational loans and consulting services.
          </Text>

          {/* CTA Button */}
          <Link href="/loans">
          <SecondaryButton
            boxShadow="0px 4px 4px #00000040"
            py="1.45rem"
            px="2rem"
            my="1.5rem"
            href="/loans"
          >
            Learn More
          </SecondaryButton>
          </Link>

          {/* Stats */}
          <Text color="#F69127" fontWeight="700" fontSize="42px">
            10+
          </Text>
          <Text color="white">People supported in the last two months</Text>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            flexBasis: "50%",
            fontSize: "1rem",
            borderRadius: "8px",
            overflow: "hidden",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          <Image
            marginLeft="auto"
            borderRadius="8px"
            border="none"
            src="/Image.jpg"
            alt="Students studying together"
            objectFit="contain"
          />
        </motion.div>
      </Flex>
    </Box>
  );
}
