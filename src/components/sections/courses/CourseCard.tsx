"use client";
import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import dynamic from "next/dynamic";

const CourseCardExpanded = dynamic(() => import("./CourseCardExpanded"), { ssr: false });
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
  isAvailable?: boolean;
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
  isAvailable = true,
}: CourseCardProps) {
  const { isOpen, onToggle } = useDisclosure();

  // Debug log for image loading
  console.log(`CourseCard rendering with image: ${imageSrc}`);

  return (
    <Box width="100%">
      {/* Main Card */}
      <Box
        bg="white"
        borderRadius="8px"
        p={{ base: "1rem", md: "2rem" }}
        mb="2rem"
        // boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        transition="all 0.3s ease"
        _hover={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)" }}
        width="100%"
      >
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          gap={{ base: "1.5rem", lg: "4rem" }}
          alignItems={{ base: "flex-start", lg: "center" }}
          width="100%"
        >
          {/* Left Column - Course Info */}
          <Box flex="1" width="100%">
            <Text
              fontFamily="ClashDisplay"
              fontSize="24px"
              fontWeight={600}
              color="black"
              mb="1rem"
            >
              {title}
            </Text>
            <Text
              fontFamily="Inter"
              color="#2F3540"
              fontSize="15px"
              lineHeight="1.6"
              mb="1.5rem"
            >
              {description}
            </Text>
            <PrimaryButton
              onClick={onToggle}
              px="1.5rem"
              py="1.5rem"
              borderRadius="8px"
            >
              {isOpen ? "Show Less" : "Learn More"}
            </PrimaryButton>
          </Box>

          {/* Right Column - Image */}
          <Box
            flex="1"
            width="100%"
            pl={{ lg: "2rem", base: 0 }}
            mb={{ base: "1rem", lg: 0 }}
          >
            {/* Using Next.js Image component for optimization */}
            <Box
              borderRadius="8px"
              border="1px solid"
              borderColor="gray.100"
              overflow="hidden"
            >
              <Image
                src={imageSrc}
                alt={title}
                width={600}
                height={350}
                objectFit="cover"
                quality={80}
              />
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Expanded Content - Lazy Loaded Component */}
      {isOpen && (
        <CourseCardExpanded
          title={title}
          duration={duration}
          classType={classType}
          nextCohort={nextCohort}
          cost={cost}
          enrollLink={enrollLink}
          learningOutcomes={learningOutcomes}
          isAvailable={isAvailable}
        />
      )}
    </Box>
  );
}
