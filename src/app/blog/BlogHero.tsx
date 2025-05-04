"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function BlogHero() {
  return (
    <Box
      bg="#0E5FDC"
      pt={{ base: "6rem", md: "8rem", lg: "9rem" }}
      pb={{ base: "4rem", md: "5rem", lg: "6rem" }}
    >
      <Container maxW="container.xl">
        <Flex direction="column" w="100%" mb={{ base: 8, md: 10 }}>
          {/* Headings and Description in a row */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "flex-start" }}
            gap={{ base: 4, md: 4, lg: 6 }}
            mb={{ base: 6, md: 8 }}
          >
            {/* Headings */}
            <Box flex={{ md: "1" }} mb={{ base: 4, md: 0 }}>
              <Heading
                as="h1"
                color="white"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight={600}
                lineHeight="1.1"
              >
                Our
              </Heading>
              <Heading
                as="h1"
                color="#F69127"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight={700}
                lineHeight="1.1"
                mt="-0.5rem"
              >
                Learning Hub
              </Heading>
            </Box>

            {/* Description */}
            <Text
              color="white"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.6"
              mr="6rem"
              maxW={{ base: "100%", md: "400px", lg: "400px" }}
              flex={{ md: "1" }}
              alignSelf={{ md: "center" }}
              mt={{ base: 0, md: 2 }}
            >
              Your gateway to expert insights, practical tips, and the latest
              trends in education, skill development, and career advancement.
            </Text>
          </Flex>

          {/* Email Subscription Form */}
          <Box alignItems="flex-start" maxW={{ base: "100%", lg: "60%" }}>
            <Flex as="form" w="100%" maxW="500px" gap={2}>
              <Input
                placeholder="Your email address..."
                bg="white"
                color="black"
                _placeholder={{ color: "gray.500", fontSize: "sm" }}
                size="md"
                borderRadius="md"
                focusBorderColor="#F69127"
              />
              <Button
                type="submit"
                bg="white"
                color="#0E5FDC"
                _hover={{ bg: "gray.100" }}
                fontSize="sm"
                px={6}
                borderRadius="md"
              >
                Subscribe
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
