"use client";

import { Box, Text } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";

/**
 * Course 01 page component
 */
export default function Course01Page() {
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
          Course 01 - Coming Soon
        </Text>
      </Box>
    </PageLayout>
  );
}
