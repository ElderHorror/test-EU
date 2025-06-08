"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";

/**
 * Props for the LoanFeature component
 */
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

/**
 * Component to display loan features with image and text
 *
 * @param imageSrc - Source URL for the feature image
 * @param heading - Feature heading
 * @param description - Feature description
 * @param imagePosition - Position of the image (left or right)
 * @param tallImage - Whether to use a taller image
 * @param smallText - Whether to use smaller text
 * @param buttonText - Text for the CTA button
 * @param useBulletPoints - Whether to display the description with bullet points (default: true)
 * @param showButton - Whether to display the button (default: true)
 */
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
                <Text as="span" fontWeight={600} display="inline">
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
            fill={true}
            style={{
              objectFit: "cover",
              borderRadius: "1rem",
            }}
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </Box>

        {/* Text Content Section */}
        <VStack
          fontFamily="ClashDisplay"
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
            fontWeight={600}
            textAlign={{ base: "left", lg: "left" }}
            mb="0.25rem"
          >
            {heading}
          </Heading>

          <Box
            color="#2F3540"
            textAlign={{ base: "left", lg: "left" }}
            w="100%"
            fontFamily="Inter"
          >
            {renderDescription(description)}
          </Box>

          {showButton && (
            <Link
              href="https://forms.gle/JmEMziR6a5j4Mew48"
              isExternal
              _hover={{ textDecoration: "none" }}
              alignSelf={{ base: "flex-start", lg: "flex-start" }}
            >
              <Button
                bg="#0E5FDC"
                color="white"
                size="md"
                _hover={{ bg: "#0B4DB0" }}
                px="1.1rem"
                py="1.8rem"
                fontSize="1rem"
                w={{ lg: "100%", base: "100%" }}
                mt="0.35rem"
                fontFamily="ClashDisplay"
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
