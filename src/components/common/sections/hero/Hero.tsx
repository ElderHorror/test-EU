"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/common/buttons/Button";

/**
 * Props for the Hero component
 */
interface HeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  image?: string;
  imageAlt?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  bgColor?: string;
  textColor?: string;
  imagePosition?: "right" | "left";
  children?: ReactNode;
}

/**
 * Hero section component
 * Used for page headers and main landing sections
 * 
 * @param title - Main heading
 * @param subtitle - Subheading or description
 * @param image - Optional hero image
 * @param imageAlt - Alt text for the image
 * @param primaryButtonText - Text for the primary CTA button
 * @param primaryButtonHref - Link for the primary button
 * @param secondaryButtonText - Text for the secondary button
 * @param secondaryButtonHref - Link for the secondary button
 * @param bgColor - Background color
 * @param textColor - Text color
 * @param imagePosition - Position of the image (right or left)
 * @param children - Additional content
 */
export default function Hero({
  title,
  subtitle,
  image,
  imageAlt = "Hero image",
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  bgColor = "white",
  textColor = "black",
  imagePosition = "right",
  children,
}: HeroProps) {
  return (
    <Box 
      as="section" 
      bg={bgColor} 
      color={textColor} 
      pt={{ base: "6rem", md: "8rem" }} 
      pb={{ base: "3rem", md: "5rem" }}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: imagePosition === "left" ? "row-reverse" : "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 8, md: 4, lg: 12 }}
        >
          {/* Text Content */}
          <VStack 
            align={{ base: "center", md: "flex-start" }} 
            spacing={6} 
            maxW={{ base: "100%", md: "50%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            {typeof title === "string" ? (
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                lineHeight="1.2"
              >
                {title}
              </Heading>
            ) : (
              title
            )}

            {subtitle && (
              typeof subtitle === "string" ? (
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={textColor === "black" ? "gray.600" : "whiteAlpha.900"}
                >
                  {subtitle}
                </Text>
              ) : (
                subtitle
              )
            )}

            {(primaryButtonText || secondaryButtonText) && (
              <Stack 
                direction={{ base: "column", sm: "row" }} 
                spacing={4} 
                mt={2}
                w={{ base: "100%", sm: "auto" }}
              >
                {primaryButtonText && (
                  <PrimaryButton href={primaryButtonHref}>
                    {primaryButtonText}
                  </PrimaryButton>
                )}
                
                {secondaryButtonText && (
                  <SecondaryButton href={secondaryButtonHref}>
                    {secondaryButtonText}
                  </SecondaryButton>
                )}
              </Stack>
            )}
            
            {children}
          </VStack>

          {/* Image */}
          {image && (
            <Box 
              maxW={{ base: "100%", md: "45%" }}
              mt={{ base: 6, md: 0 }}
            >
              <Image
                src={image}
                alt={imageAlt}
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                h="auto"
                shadow="xl"
              />
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
}
