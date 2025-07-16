"use client";

import {
  Box,
  Button,
  Container,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import ApplyModal from "@/components/ApplyModal";

export default function CallToAction() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const handleApplyClick = () => {
    setIsApplyOpen(true);
  };

  const handleCloseModal = () => {
    setIsApplyOpen(false);
  };

  const textContent = useBreakpointValue({
    base: `At EU StudyAssist, our mission is to provide peace of mind, helping you focus on your academic goals while we take care of the financial logistics. Apply today to make your study abroad dreams a reality!`,
    md: `At EU StudyAssist, our mission is to provide peace of${"\n"}mind, helping you focus on your academic goals${"\n"}while we take care of the financial logistics. Apply${"\n"}today to make your study abroad dreams a reality!`,
  });

  return (
    <Box bg="#F4F4F4" py="6rem" pb="6rem">
      <Container maxW="60rem">
        <VStack spacing="2rem" align="center">
          <Text
            fontSize={{ base: "1rem", md: "1.25rem" }}
            color="#2F3540"
            textAlign="center"
            lineHeight="1.6"
            maxW="800px"
            whiteSpace="pre-line"
          >
            {textContent}
          </Text>

          <Button
            bg="#0E5FDC"
            color="white"
            size="md"
            _hover={{ bg: "#0B4DB0" }}
            px="1.1rem"
            py="1.8rem"
            fontSize="1rem"
            mt="0.35rem"
            fontFamily="ClashDisplay"
            onClick={handleApplyClick}
          >
            Apply Now
          </Button>
        </VStack>
      </Container>
      <ApplyModal isOpen={isApplyOpen} onClose={handleCloseModal} />
    </Box>
  );
}
