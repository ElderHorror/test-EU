"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Circle,
  Icon,
  Flex,
  Stack,
} from "@chakra-ui/react";

// Teaching methods data
const teachingMethods = [
  {
    id: 1,
    title: "On-Demand Learning",
    description: "Watch the lessons anytime, anywhere. You have no limitation.",
  },
  {
    id: 2,
    title: "Expert-Led Instruction",
    description: "Gain insights from seasoned professionals in your field.",
  },
  {
    id: 3,
    title: "Hands-On Learning",
    description:
      "Access practical examples, exercises, and downloadable resources to reinforce your learning.",
  },
  {
    id: 4,
    title: "Flexible Learning Path",
    description:
      "Progress at your own speed, with lifetime access to course materials.",
  },
];

export default function CoursesContent() {
  return (
    <Box bg="white" py={{ base: "3rem", md: "5rem" }}>
      <Container maxW="70rem">
        <VStack spacing="3rem" align="start">
          <Box w="100%" textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "3rem" }}
              fontWeight={700}
              pb="1rem"
              color="black"
            >
              How We Teach
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1.1rem" }}
              maxW="800px"
              mx="auto"
              color="#2F3540"
            >
              All of our courses are pre-recorded and crafted by experienced
              professionals.
            </Text>
          </Box>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "2rem", md: "1rem" }}
            w="100%"
            flexWrap={{ md: "wrap", lg: "nowrap" }}
            justify="space-between"
          >
            {teachingMethods.map((method) => (
              <Box
                key={method.id}
                flex={{ md: "0 0 48%", lg: "0 0 23%" }}
                pl="1.5rem"
                borderRadius="lg"
                transition="transform 0.3s, box-shadow 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "md",
                }}
              >
                <VStack spacing="1rem" align="flex-start">
                  <Circle size="50px" bg="#BBD6FF" color="white">
                    <Box as="span" fontSize="md" fontWeight="bold">
                      {/* Play icon represented as a triangle, rotated to point top-right */}
                      <Flex
                        w="0"
                        h="0"
                        borderTop="8px solid transparent"
                        borderBottom="8px solid transparent"
                        borderLeft="14px solid #0E5FDC"
                        ml="3px"
                        transform="rotate(-45deg)" // Rotate to point top-right
                      />
                    </Box>
                  </Circle>

                  <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "xl" }}
                    fontWeight={600}
                    color="black"
                    textAlign="left"
                  >
                    {method.title}
                  </Heading>

                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.800"
                    textAlign="left"
                    w="100%"
                  >
                    {method.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
}
