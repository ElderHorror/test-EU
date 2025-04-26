"use client";
import { Box, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { PrimaryButton } from "@/components/common/buttons/Button";
import Link from "next/link";

/**
 * Props for the CourseCard component
 */
export interface CourseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  duration: string;
  classType: string;
  nextCohort: string;
  cost: string;
  enrollLink?: string;
  learningOutcomes?: string[];
}

/**
 * Course card component with expandable details
 *
 * @param title - Course title
 * @param description - Course description
 * @param imageSrc - Image source URL
 * @param duration - Course duration
 * @param classType - Type of class (online, in-person, etc.)
 * @param nextCohort - Next cohort start date
 * @param cost - Course cost
 * @param enrollLink - Link to enroll in the course
 * @param learningOutcomes - Array of learning outcomes
 */
export default function CourseCard({
  title,
  description,
  imageSrc,
  duration,
  classType,
  nextCohort,
  cost,
  enrollLink = "/courses/checkout",
  learningOutcomes = [
    "Foundations of programming",
    "Data manipulation and analysis",
    "Statistical methods",
    "Data visualization",
    "Version control with Git",
    "Project management",
    "Collaborative workflows",
    "Problem-solving techniques",
    "Real-world applications",
  ],
}: CourseCardProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      {/* Main Card */}
      <Box
        bg="white"
        borderRadius="8px"
        p="2rem"
        mb="2rem"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        transition="all 0.3s ease"
        _hover={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)" }}
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
            <PrimaryButton
              onClick={onToggle}
              px="1.5rem"
              py="0.75rem"
              borderRadius="4px"
            >
              {isOpen ? "Show Less" : "Learn More"}
            </PrimaryButton>
          </Box>

          {/* Right Column - Image */}
          <Box
            flex="1"
            pl={{ lg: "2rem", base: 0 }}
            position="relative"
            height="300px"
            borderRadius="8px"
            overflow="hidden"
          >
            <Image
              src={imageSrc}
              alt={title}
              fill={true}
              style={{
                objectFit: "cover",
                borderRadius: "8px",
              }}
              sizes="(max-width: 768px) 100vw, 500px"
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
          transition="all 0.3s ease"
          animation="fadeIn 0.3s ease-in-out"
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
          >
            {/* What You Will Learn */}
            <Box flex="1">
              <Text fontSize="18px" fontWeight={500} color="black" mb="1rem">
                What You Will Learn
              </Text>
              <Box display="flex" flexDirection="column" gap="1rem">
                {learningOutcomes.map((outcome, index) => (
                  <Box
                    key={index}
                    bg="#F4F4F4"
                    p="1rem"
                    borderRadius="4px"
                    w="100%"
                    transition="all 0.2s ease"
                    _hover={{ bg: "#E8E8E8" }}
                  >
                    <Text color="#2F3540" fontSize="15px" lineHeight="1.6">
                      {outcome}
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
                >
                  {cost}
                </Text>

                <Link href={enrollLink} passHref>
                  <PrimaryButton
                    px="1.5rem"
                    py="0.75rem"
                    borderRadius="4px"
                    w="auto"
                    minW="120px"
                  >
                    Enroll Now
                  </PrimaryButton>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
