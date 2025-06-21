"use client";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { PrimaryButton } from "@/components/common/buttons/Button";

/**
 * Props for the CourseCardExpanded component
 */
export interface CourseCardExpandedProps {
  title: string;
  duration: string;
  classType: string;
  nextCohort: string;
  cost: string;
  enrollLink: string;
  learningOutcomes: string[];
  isAvailable: boolean;
}

/**
 * Expanded content for the CourseCard component
 */
export default function CourseCardExpanded({
  title,
  duration,
  classType,
  nextCohort,
  cost,
  enrollLink,
  learningOutcomes,
  isAvailable,
}: CourseCardExpandedProps) {
  return (
    <Box
      bg="white"
      borderRadius="8px"
      p={{ base: "1.5rem", md: "2rem" }}
      mb="2rem"
      // boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      mt="1.5rem"
      transition="all 0.3s ease"
      animation="fadeIn 0.3s ease-in-out"
      width="100%"
      sx={{
        "@keyframes fadeIn": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "2rem", lg: "4rem" }}
        width="100%"
      >
        {/* What You Will Learn */}
        <Box flex="1" width="100%">
          <Text
            fontFamily="ClashDisplay"
            fontSize="18px"
            fontWeight={500}
            color="black"
            mb="1rem"
          >
            What You Will Learn
          </Text>
          <Box display="flex" flexDirection="column" gap="1rem" width="100%">
            {learningOutcomes.map((outcome, index) => (
              <Box
                key={index}
                bg="#F4F4F4"
                p="1rem"
                borderRadius="4px"
                w="100%"
                transition="all 0.2s ease"
                // _hover={{ bg: "#E8E8E8" }}
              >
                <Text color="#2F3540" fontSize="15px" lineHeight="1.6">
                  {outcome}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Course Details */}
        <Box flex="1" display="flex" flexDirection="column" gap="2rem" width="100%">
          <Box>
            <Text fontFamily="ClashDisplay" color="#2F3540" fontSize="15px" mb="0.5rem">
              Duration:
            </Text>
            <Text fontFamily="Inter" color="black" fontSize="18px" fontWeight={600}>
              {duration}
            </Text>
          </Box>

          <Box>
            <Text fontFamily="ClashDisplay" color="#2F3540" fontSize="15px" mb="0.5rem">
              Class Type:
            </Text>
            <Text fontFamily="Inter" color="black" fontSize="18px" fontWeight={600}>
              {classType}
            </Text>
          </Box>

          <Box>
            <Text fontFamily="ClashDisplay" color="#2F3540" fontSize="15px" mb="0.5rem">
              Next Cohort:
            </Text>
            <Text fontFamily="Inter" color="black" fontSize="18px" fontWeight={600}>
              {nextCohort}
            </Text>
          </Box>

          <Box mt="auto">
            <Text fontFamily="ClashDisplay" color="#2F3540" fontSize="15px" mb="0.5rem">
              Cost:
            </Text>
            <Text color="black" fontSize="28px" fontWeight={600} mb="1.5rem">
              {cost}
            </Text>

            {isAvailable ? (
              <Link href={enrollLink} passHref>
                <PrimaryButton px="1.5rem" py="0.75rem" borderRadius="4px" w="auto" minW="120px">
                  Enroll Now
                </PrimaryButton>
              </Link>
            ) : (
              <Button
                px="1.5rem"
                py="0.75rem"
                borderRadius="4px"
                w="auto"
                minW="120px"
                bg="gray.400"
                color="white"
                cursor="not-allowed"
                _hover={{ bg: "gray.400" }}
                _active={{ bg: "gray.400" }}
                _focus={{ bg: "gray.400" }}
              >
                Coming Soon
              </Button>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
