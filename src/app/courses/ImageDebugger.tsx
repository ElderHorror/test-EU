"use client";

import { Box, Text, VStack, Image } from "@chakra-ui/react";

/**
 * A simplified component to debug image loading issues
 */
export default function ImageDebugger() {
  // Static list of test images
  const testImages = [
    "/pythonR.jpg",
    "/data_vs.jpg",
    "/gis_research.png",
    "/experimental.jpg",
    "/r.jpg",
  ];

  return (
    <Box p="1rem" bg="gray.100" borderRadius="md" mt="2rem" mb="2rem">
      <Text fontSize="lg" fontWeight="bold" mb="1rem">
        Image Loading Debugger
      </Text>

      <VStack align="start" spacing={4}>
        {testImages.map((src) => (
          <Box key={src} display="flex" alignItems="center" gap="1rem">
            <Box
              w="100px"
              h="60px"
              borderRadius="md"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.300"
            >
              <Image
                src={src}
                alt="Test image"
                w="100%"
                h="100%"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/100x60?text=Failed"
              />
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="medium">
                {src}
              </Text>
              <Text fontSize="xs" color="gray.500">
                Using Chakra UI Image with fallback
              </Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
