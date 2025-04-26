"use client";
import { Box, Flex, Text, Image, AspectRatio } from "@chakra-ui/react";
import Link from "next/link";

/**
 * Props for the TrainingCard component
 */
export interface TrainingCardProps {
  image: string;
  title: string;
  subTitle: string;
  isDisabled: boolean;
  link: string;
  isTraining?: boolean;
}

/**
 * Card component for displaying training or consulting services
 * 
 * @param data - Card data including image, title, description, etc.
 * @param isTraining - Whether this is a training card (affects styling)
 */
export default function TrainingCard({ 
  data, 
  isTraining = true 
}: { 
  data: TrainingCardProps; 
  isTraining?: boolean;
}) {
  return (
    <Box
      borderRadius="8px"
      p="1.5rem"
      key={data.title}
      bg="white"
      flexDirection="column"
      flexBasis={{ base: "100%", lg: "32.5%" }}
      maxW={{ base: "35rem", lg: "30rem" }}
      minW={{ base: "100%", md: "22.5rem" }}
      cursor={data.isDisabled ? "not-allowed" : "pointer"}
      _hover={{ 
        background: data.isDisabled ? "#FeFeFe" : "white",
        boxShadow: data.isDisabled ? "none" : "lg",
        transform: data.isDisabled ? "none" : "translateY(-4px)",
        transition: "all 0.3s ease"
      }}
    >
      <Link href={data.link}>
        <AspectRatio ratio={1.6296} maxW="35rem">
          <Image
            borderRadius="8px"
            alt={data.title}
            src={data.image}
            objectPosition="0px 0px"
            objectFit="cover"
          />
        </AspectRatio>
        <Text
          fontWeight={600}
          my="0.5rem"
          fontSize="1.6rem"
          letterSpacing="-1px"
          minH={isTraining ? "unset" : "5rem"}
        >
          {data.title}
        </Text>
        <Text
          fontSize="1.15rem"
          lineHeight="1.4rem"
          mb="1rem"
          minH="10rem"
        >
          {data.subTitle}
        </Text>
        <Flex
          cursor={data.isDisabled ? "not-allowed" : "pointer"}
          alignItems="center"
          width="15rem"
          alignSelf="flex-start"
          justifySelf="flex-start"
        >
          <Text
            color="#0E5FDC"
            marginRight="0.75rem"
            fontWeight={600}
            my="0.75rem"
          >
            Learn More
          </Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="24px"
            aria-hidden="true"
          >
            <path
              fill="#0E5FDC"
              fillRule="evenodd"
              d="M11 12a22 22 0 0 0 0 5l1 1h2l6-4 1-1a2 2 0 0 0 0-2h-1v-1l-6-4h-1l-2 1v5Zm-6-2-2 2 2 2 3-1 1-1-1-1-3-1Z"
              clipRule="evenodd"
            />
          </svg>
        </Flex>
      </Link>
    </Box>
  );
}
