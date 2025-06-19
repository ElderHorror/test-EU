"use client";

import { Box, Container, Flex, Text, Avatar, VStack } from "@chakra-ui/react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  initials: string;
  avatarBg?: string;
  image?: string;
}

const TestimonialCard = ({
  quote,
  name,
  initials,
  avatarBg = "#2F3540",
  image,
}: TestimonialCardProps) => {
  return (
    <Box maxW="400px" w="100%">
      {/* Blue Card with Avatar and Testimonial */}
      <Box
        bg="rgba(255, 255, 255, 0.15)"
        borderRadius="16px"
        p="1.5rem"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        w="100%"
        minH="150px"
        h="12rem"
        display="flex"
        alignItems="flex-start"
      >
        <Flex align="flex-start" gap="1.5rem" w="100%">
          {/* Avatar and Name Column */}
          <VStack spacing="0.5rem" align="center" flexShrink={0}>
            <Avatar
              size="xl"
              bg={avatarBg}
              color="white"
              name={initials}
              src={image}
              
              fontWeight="600"
              fontSize="1.2rem"
            />
            <Text
              color="white"
              fontWeight="500"
              fontSize="0.85rem"
              textAlign="center"
              whiteSpace="nowrap"
            >
              {name}
            </Text>
          </VStack>

          {/* Testimonial Text */}
          <Text
            fontSize="0.9rem"
            lineHeight="1.5"
            color="white"
            fontWeight="400"
            flex="1"
            textAlign="right"
          >
            {quote}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default function LoanTestimonials() {
  const testimonials = [
    {
      quote:
        "EU StudyAssist truly puts students first. From rent and research costs to flights, their financial support helps you focus on your studies, not money stress.",
      name: "Godwin Ogbiji",
      initials: "GA",
      avatarBg: "#2F3540",
    },
    {
      quote:
        "Such a great experience! The whole process was smooth and straightforward, and the team was incredibly responsive and supportive every step of the way. I felt guided and cared for throughout.",
      name: "Grace Alo",
      initials: "GA",
      avatarBg: "#2F3540",
      image: "/testifier-01.jpg",
    },
    {
      quote:
        "Thank you, EU StudyAssist. Your support made everything easier. You've been a key part of my success, and I'm truly grateful.",
      name: "Ayedun Favour",
      initials: "AF",
      avatarBg: "#2F3540",
    },
    {
      quote:
        "Overall, the services rendered by the EUstudyassist are invaluable and I would definitely recommend it to people.",
      name: "Azubuike Precious",
      initials: "PA",
      avatarBg: "#2F3540",
    },
  ];

  return (
    <Box
      bg="linear-gradient(135deg, #0E5FDC 0%, #1E6FE8 100%)"
      py={{ base: "4rem", md: "6rem" }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="1000px">
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="center"
          align="center"
          gap={{ base: "2rem", lg: "2rem" }}
          px={{ base: "1rem", md: "2rem" }}
        >
          {/* Left Column - First 2 testimonials */}
          <VStack spacing="2rem" align="center" flex="1">
            <TestimonialCard
              quote={testimonials[0].quote}
              name={testimonials[0].name}
              initials={testimonials[0].initials}
              avatarBg={testimonials[0].avatarBg}
              image={testimonials[0].image}
            />
            <TestimonialCard
              quote={testimonials[2].quote}
              name={testimonials[2].name}
              initials={testimonials[2].initials}
              avatarBg={testimonials[2].avatarBg}
              image={testimonials[2].image}
            />
          </VStack>

          {/* Right Column - Last 2 testimonials */}
          <VStack spacing="2rem" align="center" flex="1">
            <TestimonialCard
              quote={testimonials[1].quote}
              name={testimonials[1].name}
              initials={testimonials[1].initials}
              avatarBg={testimonials[1].avatarBg}
              image={testimonials[1].image}
            />
            <TestimonialCard
              quote={testimonials[3].quote}
              name={testimonials[3].name}
              initials={testimonials[3].initials}
              avatarBg={testimonials[3].avatarBg}
              image={testimonials[3].image}
            />
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}
