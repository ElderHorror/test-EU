"use client";

import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function TermsHero() {
  return (
    <Box
      bg="#0E5FDC"
      pt={{ lg: "12rem", md: "7.5rem", base: "6rem" }}
      pb={{ base: "4rem", md: "5rem", lg: "8rem" }}
      px="1.5rem"
    >
      <Container maxW="60rem" centerContent>
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: "2.5rem", md: "3.5rem", lg: "4rem" }}
          fontWeight={600}
          textAlign="center"
          mb={{ base: "1.5rem", md: "2rem" }}
          letterSpacing="-1px"
          lineHeight="1.1"
        >
          Terms of Services
        </Heading>

        <Text
          color="#E4E4E4"
          fontSize={{ base: "1rem", md: "1.25rem" }}
          textAlign="center"
          maxW="800px"
          lineHeight="1.6"
        >
          Last Modified Oct 4, 2024.
        </Text>
      </Container>
    </Box>
  );
}
