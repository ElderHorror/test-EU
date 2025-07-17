"use client";

import { Box, Container, Heading, Text, Flex, Button, Link } from "@chakra-ui/react";
import { useState } from "react";
import ApplyButton from "@/components/blog/ApplyButton";

function BlogCTA() {
  return (
    <Box bg="#F4F4F4" py={16}>
      <Container maxW="60rem">
        <Heading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="#130F26"
        >
          Ready to Start Your Journey?
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="#2F3540"
          maxW="600px"
        >
          Join thousands of students who have successfully pursued their dreams with EU StudyAssist&apos;s support.
        </Text>
        <Flex gap={4} flexWrap="wrap" justify="center">
          <ApplyButton />
          <Link href="/blog">
            <Button
              variant="outline"
              borderColor="#0E5FDC"
              color="#0E5FDC"
              size="lg"
              _hover={{ bg: "blue.50" }}
              px={8}
            >
              Read More Posts
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

export default BlogCTA;