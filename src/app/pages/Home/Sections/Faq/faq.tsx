import {
  Box,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Faq() {
  // FAQ data array - you can add more questions and answers here
  const faqData = [
    {
      question: "How do I apply for a loan?",
      answer: "We have provided answers to common questions we frequently get from visitors",
    },
    {
      question: "What documents do I need to apply?",
      answer: "You'll need a valid ID, proof of income (like pay stubs or tax returns), and proof of address (utility bill or lease agreement).",
    },
    {
      question: "How long does the approval process take?",
      answer: "The typical approval process takes 2-3 business days once all required documents are submitted.",
    },
    {
      question: "What are the interest rates?",
      answer: "Interest rates vary based on your credit score, loan amount, and term length. Contact our team for a personalized quote.",
    },
  ];

  return (
    <Box bgColor="#0E5FDC" color="white" py={16} px={4}>
      <Flex direction="column" maxW="1200px" mx="auto" align="center">
        {/* Header Section */}
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign="center"
          mb={4}
        >
          Frequently Asked Questions
        </Heading>
        
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          mb={12}
          maxW="800px"
        >
          We have provided answers to common questions we frequently get from visitors
        </Text>

        {/* FAQ Accordion */}
        <Accordion
          allowToggle // Allows only one item to be expanded at a time
          w="100%"
          maxW="800px"
        >
          {faqData.map((faq, index) => (
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
                    {/* Shows - when expanded, + when collapsed */}
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
      </Flex>
    </Box>
  );
}