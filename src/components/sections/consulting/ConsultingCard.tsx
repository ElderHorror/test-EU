"use client";
import { Box, Flex, Text, Image, AspectRatio } from "@chakra-ui/react";
import Link from "next/link";
import { useRef, useEffect, useState, useId } from "react";

/**
 * Props for the TrainingCard component
 */
export interface ConsultingCardProps {
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
export default function ConsultingCard({
  data,
  isTraining = true,
}: {
  data: ConsultingCardProps;
  isTraining?: boolean;
}) {
  // Generate a unique ID for each card instance
  const uniqueId = useId();
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [titleHeight, setTitleHeight] = useState(0);
  const [spacing, setSpacing] = useState("0.5rem");

  // Measure the height of the title element and adjust spacing accordingly
  useEffect(() => {
    // Use a small delay to ensure the DOM has fully rendered
    const timer = setTimeout(() => {
      if (titleRef.current) {
        const height = titleRef.current.clientHeight;
        setTitleHeight(height);

        // If title is a single line (roughly less than 30px depending on font size)
        if (height < 30) {
          setSpacing("0.75rem"); // More space for single line titles
        } else if (height < 60) {
          setSpacing("0.5rem"); // Medium space for two line titles
        } else {
          setSpacing("0.25rem"); // Less space for multi-line titles
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [data.title, uniqueId]);

  return (
    <Box
      borderRadius="8px"
      p={{ base: "0.75rem", sm: "1rem", md: "1.5rem" }}
      key={data.title}
      bg="white"
      flexDirection="column"
      flexBasis={{ base: "100%", lg: "32.5%" }}
      maxW={{ base: "100%", sm: "90%", md: "80%", lg: "30rem" }}
      width={{ base: "100%", md: "auto" }}
      cursor={data.isDisabled ? "not-allowed" : "pointer"}
      height={{ base: "auto", md: "35rem" }} /* Fixed height for all cards */
      display="flex" /* Use flex to help with internal layout */
      _hover={{
        background: data.isDisabled ? "#FeFeFe" : "white",
        boxShadow: data.isDisabled ? "none" : "lg",
        transform: data.isDisabled ? "none" : "translateY(-4px)",
        transition: "all 0.3s ease",
      }}
    >
      <Link
        href={data.link}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <AspectRatio
          ratio={{ base: 1.1, sm: 1.2, md: 1.6296 }}
          maxW={{ base: "100%", md: "35rem" }}
          width="100%"
          height={{ base: "280px", sm: "300px", md: "200px" }}
          marginBottom={{ base: "0.5rem", md: "0" }}
          flexShrink={0} /* Prevent image from shrinking */
        >
          <Image
            borderRadius="8px"
            alt={data.title}
            src={data.image}
            objectPosition={{ base: "center 0%", md: "0px 0px" }}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </AspectRatio>
        <Flex width="100%" justifyContent="center" flexShrink={0}>
          <Text
            ref={titleRef}
            fontFamily="ClashDisplay"
            fontWeight={800}
            mt="0.5rem"
            mb="0.2rem"
            fontSize={{ base: "1.2rem", md: "1.4rem" }}
            letterSpacing="-0.5px"
            lineHeight="1.2"
            minH={isTraining ? "unset" : "2rem"}
            textAlign={{ base: "left", md: "center", lg: "left" }}
            width="100%"
            id={`title-${uniqueId}`}
          >
            {data.title}
          </Text>
        </Flex>
        <Box flex="1" position="relative" overflow="hidden">
          <Text
            color="#2F3540"
            fontSize={{ base: "1.05rem", md: "1.06rem" }}
            lineHeight={{ lg: "1.6rem" }}
            mt={spacing}
            textAlign={{ base: "justify", md: "left" }}
            maxH={{
              base: "auto",
              md: "180px",
            }} /* Control max height of description */
            overflow="hidden"
          >
            {data.subTitle}
          </Text>
        </Box>
        <Flex
          cursor={data.isDisabled ? "not-allowed" : "pointer"}
          alignItems="center"
          width={{ base: "100%", md: "15rem" }}
          alignSelf={{ base: "left", md: "flex-start" }}
          justifyContent={{ base: "left", md: "flex-start" }}
          mt="auto" /* Push to bottom of container */
          pt="1rem" /* Add some padding at the top */
          flexShrink={0} /* Prevent button from shrinking */
        >
          <Text
            color="#0E5FDC"
            marginRight={{ base: "0.3rem", md: "0.75rem" }}
            fontWeight={600}
            fontSize={{ base: "0.9rem", md: "1rem" }}
          >
            Learn More
          </Text>
          <Box
            as="span"
            display="inline-block"
            width={{ base: "20px", md: "24px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="100%"
              aria-hidden="true"
            >
              <path
                fill="#0E5FDC"
                fillRule="evenodd"
                d="M11 12a22 22 0 0 0 0 5l1 1h2l6-4 1-1a2 2 0 0 0 0-2h-1v-1l-6-4h-1l-2 1v5Zm-6-2-2 2 2 2 3-1 1-1-1-1-3-1Z"
                clipRule="evenodd"
              />
            </svg>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
}
