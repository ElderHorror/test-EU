"use client";

import { Box, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";

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

  return (
    <Box>
      <Box
        bg="white"
        borderRadius="8px"
        p="2rem"
        mb="2rem"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      >
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          gap={{ base: "2rem", lg: "4rem" }}
          alignItems="center"
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
            position="relative"
            height="300px"
            borderRadius="8px"
            
          >
            <Image
              src={imageSrc}
              alt={title}
              fill={true}
              style={{
                objectFit: "cover",
                borderRadius: "8px",
              }}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
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
