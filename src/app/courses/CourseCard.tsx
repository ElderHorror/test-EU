"use client";

import { Box, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

interface CourseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  duration: string;
  classType: string;
  nextCohort: string;
  cost: string;
}

const CourseCard = ({
  title,
  description,
  imageSrc,
  duration,
  classType,
  nextCohort,
  cost,
}: CourseCardProps) => {
  const { isOpen, onToggle } = useDisclosure();

  // Enhanced debugging for image loading
  console.log(`Rendering CourseCard for ${title} with image: ${imageSrc}`);

  // Check if the image path starts with a slash
  if (!imageSrc.startsWith("/")) {
    console.warn(`Image path does not start with a slash: ${imageSrc}`);
  }

  // Log device information for debugging
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    console.log(
      `Device info - Width: ${window.innerWidth}px, Is Mobile: ${isMobile}`
    );
    console.log(`Image path being used: ${imageSrc}`);

    // Check if image exists
    const img = new window.Image();
    img.onload = () => console.log(`✅ Image loaded successfully: ${imageSrc}`);
    img.onerror = () => {
      console.error(`❌ Image failed to load: ${imageSrc}`);
      setImageError(true);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  return (
    <Box width="100%">
      <Box
        bg="white"
        borderRadius="8px"
        p={{ base: "1.5rem", md: "2rem" }}
        mb="2rem"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        width="100%"
      >
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          gap={{ base: "1rem", lg: "4rem" }}
          // alignItems="center"
          width="100%"
        >
          {/* Left Column - Course Info */}
          <Box flex="1">
            <Text fontSize="24px" fontWeight={500} color="black" mb="1rem">
              {title}
            </Text>
            <Text color="#2F3540" fontSize="15px" lineHeight="1.6" mb="1.5rem">
              {description}
            </Text>
            <Button
              bg="#0E5FDC"
              color="white"
              _hover={{ bg: "#0B4DAF" }}
              px="1.5rem"
              py="0.75rem"
              borderRadius="4px"
              onClick={onToggle}
            >
              Learn More
            </Button>
          </Box>

          {/* Right Column - Image */}
          <Box
            flex="1"
            pl={{ lg: "2rem", base: 0 }}
            mb={{ base: "1.5rem", lg: 0 }}
            borderRadius="8px"
            // overflow="hidden"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {/* Use CSS background image as the most reliable approach */}
            <Box
              width="100%"
              height={{ base: "200px", md: "300px" }}
              borderRadius="8px"
              backgroundImage={`url(${imageSrc})`}
              backgroundSize="cover"
              backgroundPosition="center top"
              backgroundRepeat="no-repeat"
              border="1px solid"
              borderColor="gray.100"
            />
          </Box>
        </Flex>
      </Box>

      {/* Expanded Content - As Separate Card */}
      {isOpen && (
        <Box
          bg="white"
          borderRadius="8px"
          p="2rem"
          mb="2rem"
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
          mt="1.5rem"
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "2rem", lg: "4rem" }}
          >
            {/* What You Will Learn */}
            <Box flex="1">
              <Text fontSize="18px" fontWeight={500} color="black" mb="1rem">
                What You Will Learn
              </Text>
              <Box display="flex" flexDirection="column" gap="1rem">
                {[...Array(9)].map((_, index) => (
                  <Box
                    key={index}
                    bg="#F4F4F4"
                    p="1rem"
                    borderRadius="4px"
                    w="100%"
                  >
                    <Text color="#2F3540" fontSize="15px" lineHeight="1.6">
                      Foundations
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Course Details */}
            <Box flex="1" display="flex" flexDirection="column" gap="2rem">
              <Box>
                <Text color="#2F3540" fontSize="15px" mb="0.5rem">
                  Duration:
                </Text>
                <Text color="black" fontSize="18px" fontWeight={600}>
                  {duration}
                </Text>
              </Box>

              <Box>
                <Text color="#2F3540" fontSize="15px" mb="0.5rem">
                  Class Type:
                </Text>
                <Text color="black" fontSize="18px" fontWeight={600}>
                  {classType}
                </Text>
              </Box>

              <Box>
                <Text color="#2F3540" fontSize="15px" mb="0.5rem">
                  Next Cohort:
                </Text>
                <Text color="black" fontSize="18px" fontWeight={600}>
                  {nextCohort}
                </Text>
              </Box>

              <Box mt="auto">
                <Text color="#2F3540" fontSize="15px" mb="0.5rem">
                  Cost:
                </Text>
                <Text
                  color="black"
                  fontSize="28px"
                  fontWeight={600}
                  mb="1.5rem"
                  dangerouslySetInnerHTML={{ __html: cost }}
                />

                <Button
                  bg="#0E5FDC"
                  color="white"
                  _hover={{ bg: "#0B4DAF" }}
                  px="1.5rem"
                  py="0.75rem"
                  borderRadius="4px"
                  w="auto"
                  minW="120px"
                >
                  Enroll Now
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default CourseCard;
