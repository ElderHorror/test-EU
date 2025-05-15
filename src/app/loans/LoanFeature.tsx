"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";

interface LoanFeatureProps {
  imageSrc: string;
  heading: string;
  description: string;
  imagePosition: "left" | "right";
  tallImage?: boolean;
  smallText?: boolean;
  buttonText?: string;
  useBulletPoints?: boolean;
  showButton?: boolean;
}

export default function LoanFeature({
  imageSrc,
  heading,
  description,
  imagePosition,
  tallImage = false,
  smallText = false,
  buttonText = "Apply Now",
  useBulletPoints = true,
  showButton = true,
}: LoanFeatureProps) {
  // Function to render text with proper formatting
  const renderDescription = (text: string) => {
    // Check if this is the "Why Choose" section by looking for specific titles
    const isWhyChooseSection =
      text.includes("Tailored for Students:") &&
      text.includes("No Immediate Repayment:") &&
      text.includes("Competitive Interest Rates:");

    if (isWhyChooseSection) {
      const sections = [
        "Tailored for Students:",
        "No Immediate Repayment:",
        "Competitive Interest Rates:",
      ];

      return sections.map((section, index) => {
        const startIndex = text.indexOf(section);
        const endIndex =
          index < sections.length - 1
            ? text.indexOf(sections[index + 1])
            : text.length;

        const content = text
          .substring(startIndex + section.length, endIndex)
          .trim();

        return (
          <Box key={index} mb={index < sections.length - 1 ? "1rem" : "0"}>
            <Flex alignItems="flex-start">
              <Box
                as="span"
                display="inline-block"
                borderRadius="50%"
                bg="#2F3540"
                w="6px"
                h="6px"
                mr="8px"
                mt="9px"
                flexShrink={0}
              />
              <Text
                fontSize={
                  smallText
                    ? { base: "0.875rem", md: "1rem", lg: "1rem" }
                    : { base: "0.875rem", md: "1rem" }
                }
                lineHeight="1.6"
              >
                <Text as="span" fontWeight={700} display="inline">
                  {section}
                </Text>{" "}
                {content}
              </Text>
            </Flex>
          </Box>
        );
      });
    }

    // For regular sections, check if we should use bullet points
    if (useBulletPoints) {
      // Clean up the text by ensuring proper spacing after periods
      const cleanedText = text.replace(/\.(?=[A-Z])/g, ". ").trim();

      // Split by periods, but keep the periods in the sentences
      const sentences = cleanedText
        .split(/(?<=\.)\s+/)
        .filter((sentence) => sentence.trim().length > 0);

      return (
        <Box>
          {sentences.map((sentence, index) => (
            <Flex
              key={index}
              alignItems="flex-start"
              mb={index < sentences.length - 1 ? "0.75rem" : "0"}
            >
              <Box
                as="span"
                display="inline-block"
                borderRadius="50%"
                bg="#2F3540"
                w="6px"
                h="6px"
                mr="8px"
                mt="9px"
                flexShrink={0}
              />
              <Text
                fontSize={
                  smallText
                    ? { base: "0.875rem", md: "1rem", lg: "1rem" }
                    : { base: "0.875rem", md: "1rem" }
                }
                lineHeight="1.6"
              >
                {sentence}
              </Text>
            </Flex>
          ))}
        </Box>
      );
    } else {
      // If not using bullet points, just render the text as a single paragraph
      return (
        <Text
          fontSize={
            smallText
              ? { base: "0.875rem", md: "1rem", lg: "1rem" }
              : { base: "0.875rem", md: "1rem" }
          }
          lineHeight="1.6"
        >
          {text}
        </Text>
      );
    }
  };

  return (
    <Container maxW="60rem" py="3rem">
      <Flex
        direction={{
          base: "column",
          lg: imagePosition === "left" ? "row" : "row-reverse",
        }}
        align="center"
        gap={{ base: "1rem", lg: "8rem" }}
      >
        {/* Image Section */}
        <Box
          position="relative"
          w={{ base: "100%", lg: "60%" }}
          h={{ base: "460px", md: "350px", lg: tallImage ? "600px" : "440px" }}
        >
          <Image
            src={imageSrc}
            alt={heading}
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="2xl"
          />
        </Box>

        {/* Text Content Section */}
        <VStack
          align={{ base: "flex-start", lg: "flex-start" }}
          spacing="0.5rem"
          w={{ base: "100%", lg: "80%" }}
          maxW={smallText ? "600px" : "500px"}
          mt={{ base: "1rem", lg: "0" }}
        >
          <Heading
            color="black"
            fontFamily="ClashDisplay"
            fontSize={
              smallText
                ? { base: "1.5rem", md: "1.75rem", lg: "2rem" }
                : { base: "1.5rem", md: "1.75rem", lg: "2rem" }
            }
            fontWeight={700}
            textAlign={{ base: "left", lg: "left" }}
            mb="0.25rem"
          >
            {heading}
          </Heading>

          <Box
            fontFamily="Inter"
            color="#2F3540"
            textAlign={{ base: "left", lg: "left" }}
            w="100%"
          >
            {renderDescription(description)}
          </Box>

          {showButton && (
            <Link
              href={`mailto:contact@eustudyassist.com?subject=Consultation Service Inquiry for ${heading}`}
              _hover={{ textDecoration: "none" }}
              alignSelf={{ base: "flex-start", lg: "flex-start" }}
            >
              <Button
                bg="#0E5FDC"
                fontFamily="ClashDisplay"
                color="white"
                size="md"
                _hover={{ bg: "#0B4DB0" }}
                px="1.1rem"
                py="1.5rem"
                fontSize={smallText ? "1rem" : "1rem"}
                mt="0.25rem"
              >
                {buttonText}
              </Button>
            </Link>
          )}
        </VStack>
      </Flex>
    </Container>
  );
}
