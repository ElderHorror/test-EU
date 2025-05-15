"use client";

import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function CoursesHero() {
  return (
    <Box
      bg="#0E5FDC"
      pt={{ lg: "9rem", md: "7.5rem", base: "6rem" }}
      pb={{ base: "4rem", md: "5rem", lg: "6.5rem" }}
      px="1.5rem"
    >
      <Container maxW="60rem" centerContent>
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: "2.5rem", md: "3.5rem", lg: "4rem" }}
          fontWeight={700}
          textAlign="center"
          mb={{ base: "1.5rem", md: "2rem" }}
          letterSpacing="-1px"
          lineHeight="1.1"
        >
          Online Courses
        </Heading>
        
        <Text
          color="#E4E4E4"
          fontSize={{ base: "1rem", md: "1.25rem" }}
          textAlign="center"
          maxW="800px"
          lineHeight="1.6"
        >
          Welcome to our library of self-paced, recorded courses designed to help you expand your knowledge and skills at your own pace. These expert-led courses are available 24/7, allowing you to learn whenever and wherever is most convenient for you.
        </Text>
      </Container>
    </Box>
  );
}
