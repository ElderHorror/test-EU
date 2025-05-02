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
    <Box id="faq" bg={bgColor} color={textColor} py={16} px={4} width="100%">
      <Box maxW="1200px" mx="auto" textAlign="center" mb={10}>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
          mb={4}
        >
          {title}
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} maxW="800px" mx="auto">
          {subtitle}
        </Text>
      </Box>

      {/* FAQ Accordion */}
      <Accordion
        allowToggle // Allows only one item to be expanded at a time
        w="100%"
        maxW="800px"
        mx="auto"
      >
        {faqItems.map((faq, index) => (
          <AccordionItem
            key={index}
            border="none"
            p={{base: 3, lg:1}}
            borderBottom="1px solid rgba(255, 255, 255, 0.2)"
            _last={{ borderBottom: "none" }}
          >
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  p={{ base: "4px 0px 4px 0px", md: 4 }}
                  _hover={{ bg: "transparent" }}
                  borderRadius="none"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="medium"
                    fontSize="lg"
                    pl={{ base: 0, md: 4 }}
                  >
                    {faq.question}
                  </Box>
                  <Box>
                    {isExpanded ? (
                      <Box
                        w="30px"
                        h="30px"
                        borderRadius="full"
                        border="2px solid white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mt={{ base: "-8px", md: 0 }}
                      >
                        <Box
                          as="span"
                          fontSize="4xl"
                          lineHeight="0.5"
                          mt={{ base: "-4px", md: "-4px" }}
                          ml={{ base: "-2px", md: "0" }}
                        >
                          −
                        </Box>
                      </Box>
                    ) : (
                      <Box
                        w="30px"
                        h="30px"
                        borderRadius="full"
                        border="2px solid white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mt={{ base: "-4px", md: 0 }}
                      >
                        <Box
                          as="span"
                          fontSize="4xl"
                          lineHeight="0.5"
                          mt={{ base: "-4px", md: "-4px" }}
                          ml={{ base: "-2px", md: "0" }}
                        >
                          +
                        </Box>
                      </Box>
                    )}
                  </Box>
                </AccordionButton>
                <AccordionPanel
                  pb={6}
                  pt={2}
                  pl={{ base: 0, md: 4, lg:8 }}
                  px={{ base: 0, md: 4 }}
                  borderBottomRadius="none"
                  fontSize="sm"
                  fontWeight={100}
                >
                  {faq.answer}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
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
      "Fill the form and provide the necessary documentations needed for the application. ",
  },
  {
    id: "2",
    question: "What documents do I need to apply?",
    answer:
      "The documents needed to submit your form includes, your passport data page, visa page of your passport, admission letter from the host university, student agreement, scholarship or assistantship contract, and a confirmation of award (for ERASMUS Scholarship recipient). Read more about specific documents ",
  },
  {
    id: "3",
    question: "Who can apply for research loans?",
    answer:
      "Loan gets approved immediately all requirements are met, and interview including all parties involved have been conducted. Afterwards, funds are typically disbursed within 24 to 48 hours. The whole process could take 2 -5 business days. ",
  },
  {
    id: "4",
    question: "Is support available to all nationalities",
    answer:
      " Support is available to individuals from Africa, Asia, and South America. ",
  },
  {
    id: "5",
    question: "Can i pay back the loan before the due date?",
    answer:
      "Absolutely. Early repayment is allowed at no extra charge, and doing so may improve your eligibility for higher loan amounts and ",
  },
  {
    id: "6",
    question: "What are the interest rates on the loan?",
    answer:
      "Interest loan depends on the purpose of the loan. There's a flat rate of 10% for the first month for loans for Accommodation and Settlement purpose, while Flight is a flat rate of 15%. The next month after this is 5% for all loan purposes. ",
  },
  {
    id: "7",
    question: "What kind of training do you offer?",
    answer:
      "We offer tailored training on research design, tools like R and Python, and publishing strategies, ensuring students conduct world-class research. ",
  },
  {
    id: "8",
    question: "Do you offer one-on-one coaching",
    answer:
      "Yes, we offer personalized coaching sessions for students who want guided support in writing, data analysis, or publication. ",
  },
];
