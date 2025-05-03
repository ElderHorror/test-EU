"use client";

import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";

/**
 * A component to directly test image loading with different approaches
 */
export default function DirectImageTest() {
  const testImages = [
    "/pythonR.jpg",
    "/data_vs.jpg",
    "/gis_research.png",
    "/experimental.jpg",
  ];
  
  return (
    <Box p="1rem" bg="gray.50" borderRadius="md" mb="2rem">
      <Text fontSize="lg" fontWeight="bold" mb="1rem">
        Direct Image Test
      </Text>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {testImages.map((src) => (
          <Box key={src} border="1px solid" borderColor="gray.200" p="1rem" borderRadius="md">
            <Text fontSize="sm" mb="0.5rem">{src}</Text>
            
            {/* Standard img tag */}
            <Box mb="1rem">
              <Text fontSize="xs" fontWeight="medium" mb="0.5rem">
                Standard HTML img tag:
              </Text>
              <img 
                src={src} 
                alt="Test" 
                style={{ 
                  width: '100%', 
                  height: '150px', 
                  objectFit: 'cover',
                  borderRadius: '4px'
                }} 
              />
            </Box>
            
            {/* Chakra Image */}
            <Box mb="1rem">
              <Text fontSize="xs" fontWeight="medium" mb="0.5rem">
                Chakra UI Image:
              </Text>
              <Image
                src={src}
                alt="Test"
                width="100%"
                height="150px"
                objectFit="cover"
                borderRadius="md"
                fallbackSrc="https://via.placeholder.com/300x150?text=Failed"
              />
            </Box>
            
            {/* Background image */}
            <Box>
              <Text fontSize="xs" fontWeight="medium" mb="0.5rem">
                CSS Background Image:
              </Text>
              <Box 
                width="100%" 
                height="150px" 
                borderRadius="md"
                backgroundImage={`url(${src})`}
                backgroundSize="cover"
                backgroundPosition="center"
              />
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
