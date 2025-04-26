import { Box, BoxProps, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cardHover } from "@/lib/animations";

/**
 * Props for the Card component
 */
interface CardProps extends BoxProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  variant?: "elevated" | "outline" | "filled";
}

/**
 * Reusable card component
 *
 * @param title - Optional card title
 * @param description - Optional card description
 * @param image - Optional image URL
 * @param imageAlt - Alt text for the image
 * @param children - Card content
 * @param variant - Card style variant
 * @param props - Additional Box props
 */
export default function Card({
  title,
  description,
  image,
  imageAlt = "Card image",
  children,
  variant = "elevated",
  ...props
}: CardProps) {
  // Define styles based on variant
  const variantStyles = {
    elevated: {
      bg: "white",
      boxShadow: "md",
      borderRadius: "lg",
    },
    outline: {
      bg: "transparent",
      border: "1px solid",
      borderColor: "gray.200",
      borderRadius: "lg",
    },
    filled: {
      bg: "gray.50",
      borderRadius: "lg",
    },
  };

  // Use a simpler approach with just one motion component
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <Box
        p={6}
        {...variantStyles[variant]}
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
        {...props}
      >
        <VStack spacing={4} align="flex-start">
          {image && (
            <Box w="100%" overflow="hidden" borderRadius="md">
              <Image
                src={image}
                alt={imageAlt}
                objectFit="cover"
                w="100%"
                h="auto"
              />
            </Box>
          )}

          {title && (
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
              {title}
            </Heading>
          )}

          {description && (
            <Text color="gray.600" fontSize="md">
              {description}
            </Text>
          )}

          {children}
        </VStack>
      </Box>
    </motion.div>
  );
}
