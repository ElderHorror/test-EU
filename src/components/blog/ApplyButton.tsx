"use client";

import { Button } from "@chakra-ui/react";
import { useState } from "react";
import ApplyModal from "@/components/ApplyModal";

function ApplyButton() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <Button
        bg="#0E5FDC"
        color="white"
        size="lg"
        _hover={{ bg: "#0B4DB0" }}
        px={8}
        onClick={() => setIsApplyOpen(true)}
      >
        Apply for Loan
      </Button>
      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}

export default ApplyButton;