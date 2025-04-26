import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Props for the Section component

/**
 * Props for the Section component
 */
interface SectionProps extends BoxProps {
  id?: string;
  title?: string;
  subtitle?: string;
  containerProps?: ContainerProps;
  children: ReactNode;
  maxWidth?: string | object;
  textAlign?: "left" | "center" | "right";
  spacing?: number;
}

/**
 * Reusable section component for consistent page sections
 *
 * @param id - Optional ID for the section (for anchor links)
 * @param title - Optional section title
 * @param subtitle - Optional section subtitle
 * @param containerProps - Props to pass to the inner Container
 * @param children - Section content
 * @param maxWidth - Maximum width of the container
 * @param textAlign - Text alignment for the title and subtitle
 * @param spacing - Spacing between elements
 * @param props - Additional Box props
 */
export default function Section({
  id,
  title,
  subtitle,
  containerProps,
  children,
  maxWidth = "container.xl",
  textAlign = "center",
  spacing = 6,
  ...props
}: SectionProps) {
  // Use a ref to prevent re-renders
  const sectionRef = useRef<HTMLDivElement>(null);

  // Use state to track if section is in view
  const [isInView, setIsInView] = useState(false);

  // Set up intersection observer manually to avoid potential issues
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isInView) {
          setIsInView(true);
          // Disconnect after first intersection to prevent further callbacks
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isInView]);

  return (
    <Box
      as="section"
      id={id}
      py={{ base: 10, md: 16 }}
      ref={sectionRef}
      {...props}
    >
      <Container maxW={maxWidth} {...containerProps}>
        <VStack
          spacing={spacing}
          align={textAlign === "center" ? "center" : "stretch"}
        >
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                textAlign={textAlign}
                mb={subtitle ? 2 : 6}
              >
                {title}
              </Heading>
            </motion.div>
          )}

          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                textAlign={textAlign}
                mb={6}
                maxW="container.md"
                mx="auto"
              >
                {subtitle}
              </Text>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ width: "100%" }}
          >
            {children}
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
}
