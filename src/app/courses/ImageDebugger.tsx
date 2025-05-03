"use client";

import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

/**
 * A component to debug image loading issues
 */
export default function ImageDebugger() {
  const [imagesStatus, setImagesStatus] = useState<Record<string, boolean>>({});
  
  const testImages = [
    "/pythonR.jpg",
    "/data_vs.jpg",
    "/gis_research.png",
    "/experimental.jpg",
    "/r.jpg"
  ];
  
  useEffect(() => {
    // Check if each image loads successfully
    testImages.forEach(src => {
      const img = new Image();
      img.onload = () => {
        setImagesStatus(prev => ({ ...prev, [src]: true }));
      };
      img.onerror = () => {
        setImagesStatus(prev => ({ ...prev, [src]: false }));
        console.error(`Failed to load image: ${src}`);
      };
      img.src = src;
    });
  }, []);
  
  return (
    <Box 
      p="1rem" 
      bg="gray.100" 
      borderRadius="md" 
      mt="2rem"
      mb="2rem"
    >
      <Text fontSize="lg" fontWeight="bold" mb="1rem">
        Image Loading Debugger
      </Text>
      
      <VStack align="start" spacing={4}>
        {testImages.map(src => (
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
              <Text fontSize="sm" fontWeight="medium">{src}</Text>
              <Text 
                fontSize="xs" 
                color={imagesStatus[src] ? "green.500" : "red.500"}
              >
                {imagesStatus[src] === undefined 
                  ? "Checking..." 
                  : imagesStatus[src] 
                    ? "Loaded successfully" 
                    : "Failed to load"}
              </Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
