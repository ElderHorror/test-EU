"use client";
import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaqItem } from "@/types";
import Section from "@/components/layout/Section";

/**
 * Props for the FAQ component
 */
interface FaqProps {
  title?: string;
  subtitle?: string;
  faqItems: FaqItem[];
  bgColor?: string;
  textColor?: string;
}

/**
 * FAQ section component
 * Displays a list of frequently asked questions in an accordion
 *
 * @param title - Section title
 * @param subtitle - Section subtitle
 * @param faqItems - Array of FAQ items (question/answer pairs)
 * @param bgColor - Background color
 * @param textColor - Text color
 */
export default function Faq({
  title = "Frequently Asked Questions",
  subtitle = "We have provided answers to common questions we frequently get from visitors",
  faqItems,
  bgColor = "#0E5FDC",
  textColor = "white",
}: FaqProps) {
  return (
    <Section
      id="faq"
      title={title}
      subtitle={subtitle}
      bg={bgColor}
      color={textColor}
      py={16}
      px={4}
    >
      {/* FAQ Accordion */}
      <Accordion
        allowToggle // Allows only one item to be expanded at a time
        w="100%"
        maxW="800px"
        mx="auto"
      >
        {faqItems.map((faq, index) => (
          <AccordionItem key={index} border="none" mb={4}>
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  bg="whiteAlpha.100"
                  _hover={{ bg: "whiteAlpha.200" }}
                  borderRadius="md"
                  p={4}
                >
                  <Box flex="1" textAlign="left" fontWeight="medium">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  pt={4}
                  px={4}
                  bg="whiteAlpha.50"
                  borderBottomRadius="md"
                >
                  {faq.answer}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

/**
 * Default FAQ data
 */
export const defaultFaqItems: FaqItem[] = [
  {
    id: "1",
    question: "How do I apply for a loan?",
    answer:
      "You can apply for a loan by visiting our website and filling out the application form. Our team will review your application and get back to you within 2-3 business days.",
  },
  {
    id: "2",
    question: "What documents do I need to apply?",
    answer:
      "You'll need a valid ID, proof of income (like pay stubs or tax returns), and proof of address (utility bill or lease agreement).",
  },
  {
    id: "3",
    question: "How long does the approval process take?",
    answer:
      "The typical approval process takes 2-3 business days once all required documents are submitted.",
  },
  {
    id: "4",
    question: "What are the interest rates?",
    answer:
      "Interest rates vary based on your credit score, loan amount, and term length. Contact our team for a personalized quote.",
  },
];
