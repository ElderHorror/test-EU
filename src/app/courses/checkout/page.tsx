"use client";

import { Box, Text } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";

/**
 * Course checkout page component
 */
export default function CheckoutPage() {
  return (
    <PageLayout>
      <Box
        minH="calc(100vh - 30rem)"
        mt="6rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          Checkout - Coming Soon
        </Text>
      </Box>
    </PageLayout>
  );
}
