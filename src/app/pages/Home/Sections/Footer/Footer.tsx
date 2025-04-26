import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Text,
  Link,
  Input,
  Button,
  Divider,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="#0E5FDC" color="white">
      {/* Desktop Footer */}
      <Box display={{ base: "none", md: "block" }} py={12}>
        <Container maxW="container.xl">
          {/* Main Footer Content */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            gap={8}
            mb={8}
          >
            {/* Left Section */}
            <VStack align="flex-start" spacing={6}>
              <Image src="/logo.svg" alt="Company Logo" h="40px" />
              <HStack spacing={6}>
                <Link
                  href="/about"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  About
                </Link>
                <Link
                  href="#"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Careers
                </Link>
                <Link
                  href="/blog"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Customer Care
                </Link>
              </HStack>
            </VStack>

            {/* Right Section - Email Subscription */}
            <VStack align="flex-start" spacing={4} maxW="400px">
              <HStack spacing={2}>
                <Image
                  src="/Message.png"
                  alt="Message icon"
                  w="20px"
                  h="20px"
                />
                <Text fontSize="sm">Get the freshest news from us</Text>
              </HStack>
              <Flex as="form" w="100%" gap={2}>
                <Input
                  placeholder="Your email address..."
                  bg="white"
                  color="black"
                  _placeholder={{ color: "gray.500", fontSize: "sm" }}
                  size="md"
                />
                <Button
                  type="submit"
                  bg="white"
                  color="#0E5FDC"
                  _hover={{ bg: "gray.100" }}
                  fontSize="sm"
                >
                  Subscribe
                </Button>
              </Flex>
            </VStack>
          </Flex>

          <Divider borderColor="whiteAlpha.400" mb={8} />

          {/* Bottom Footer */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            gap={4}
          >
            {/* Left Links */}
            <HStack spacing={6}>
              <Link
                href="/terms-of-service"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                Terms & Conditions
              </Link>
              <Box h="16px" w="1px" bg="whiteAlpha.400" />
              <Link
                href="/privacy-policy"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                Privacy Policy
              </Link>
              <Box h="16px" w="1px" bg="whiteAlpha.400" />
              <Link
                href="#"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                Accessibility
              </Link>
              <Box h="16px" w="1px" bg="whiteAlpha.400" />
              <Link
                href="#"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                Legal
              </Link>
            </HStack>

            {/* Copyright */}
            <Text fontSize="sm">
              © Copyright EU StudyAssist {new Date().getFullYear()}. All rights
              reserved.
            </Text>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Footer - Matches the image */}
      <Box display={{ base: "block", md: "none" }} py={8} px={4}>
        <VStack spacing={6} align="stretch">
          {/* Email Subscription */}
          <VStack spacing={4} align="center">
            <HStack spacing={2}>
              <Image src="/Message.png" alt="Message icon" w="20px" h="20px" />
              <Text fontSize="sm" fontWeight="medium">
                Get the freshest news from us
              </Text>
            </HStack>

            <VStack spacing={3} w="100%">
              <Input
                placeholder="Your email address..."
                bg="white"
                color="black"
                _placeholder={{ color: "gray.500", fontSize: "sm" }}
                size="md"
                borderRadius="md"
                w="100%"
              />
              <Button
                type="submit"
                bg="white"
                color="#0E5FDC"
                _hover={{ bg: "gray.100" }}
                fontSize="sm"
                w="100%"
                borderRadius="md"
              >
                Subscribe
              </Button>
            </VStack>
          </VStack>

          {/* Links in Two Columns */}
          <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
            <VStack align="flex-start" spacing={3}>
              <Link href="/about" fontSize="sm">
                About
              </Link>
              <Link href="#" fontSize="sm">
                Careers
              </Link>
              <Link href="/blog" fontSize="sm">
                Blog
              </Link>
              <Link href="#" fontSize="sm">
                Customer Care
              </Link>
            </VStack>

            <VStack align="flex-start" spacing={3}>
              <Link href="/terms-of-service" fontSize="sm">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" fontSize="sm">
                Privacy Policy
              </Link>
              <Link href="#" fontSize="sm">
                Accessibility
              </Link>
              <Link href="#" fontSize="sm">
                Legal
              </Link>
            </VStack>
          </Grid>

          {/* Logo */}
          <Box textAlign="center" mt={6}>
            <Image
              src="/logo.svg"
              alt="EU StudyAssist Logo"
              h="40px"
              mx="auto"
            />
          </Box>

          {/* Copyright */}
          <Text fontSize="xs" textAlign="center" mt={2}>
            © Copyright EU StudyAssist {new Date().getFullYear()}. All rights
            reserved.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
