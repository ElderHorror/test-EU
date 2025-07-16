// src/components/LoanProgressTracker.tsx
"use client";

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Image as ChakraImage,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

import { FlexProps } from "@chakra-ui/react";

interface LoanProgressTrackerProps extends FlexProps {
  progress: number;
}

export default function LoanProgressTracker({
  progress,
  ...rest
}: LoanProgressTrackerProps) {
  return (
    <Flex
      width={{ base: "100%", lg: "24%" }}
      flexDirection="column"
      p={6}
      mt={{ base: 6, lg: 14 }}
      borderRadius="md"
      boxShadow="md"
      height="fit-content"
      {...rest}
    >
      <Text
        fontSize="xl"
        fontWeight="semibold"
        align="center"
        color="gray.900"
        mb={4}
      >
        Loan Progress Tracker
      </Text>
      <VStack spacing={4} borderBottom="2px solid #F5F5F5" pb={6} align="center">
        <HStack justifyContent="space-between">
          {/* <Text>Personal Information</Text> */}
          {/* <Text>{progress.toFixed(0)}%</Text> */}
        </HStack>
        <Box position="relative" w={{ base: "180px", md: "240px" }} h={{ base: "180px", md: "240px" }}>
          <CircularProgress
            value={progress}
            color="#3461ff"
            size="100%"
            capIsRound
          >
            <CircularProgressLabel fontSize={20}>
              {progress.toFixed(0)}%
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
      </VStack>
      <HStack mt={6} px={4} py={2} bgColor="gray.50" rounded="2xl">
        <ChakraImage
          src="/loan-icon.png"
          alt="Loan Icon"
          w="48px"
          h="48px"
          mr={2}
        />
        <VStack align="stretch" spacing={0}>
          <Text fontSize={16} fontWeight="semibold">Alison Eyo</Text>
          <Text fontSize={14} color="gray.500">thealisoneyo007@email.com</Text>
        </VStack>
      </HStack>
    </Flex>
  );
}
