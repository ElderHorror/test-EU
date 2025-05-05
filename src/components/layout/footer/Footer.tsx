"use client";
import {
  Box,
  Container,
  Flex,
  Spacer,
  VStack,
  HStack,
  Text,
  Link,
  Image,
  Grid,
  Divider,
} from "@chakra-ui/react";

/**
 * Footer component for the application
 */
export default function Footer() {
  return (
    <Box bg="#0E5FDC" color="white">
      {/* Desktop Footer */}
      <Box display={{ base: "none", md: "block" }} py={20}>
        <Container maxW="container.xl" px={24}>
          <Flex width="full" gap={10} mb={12}>
            {/* Left Section - Logo and Contact Info */}
            <VStack align="flex-start" spacing={6} maxW="300px">
              <Image src="/Logo.svg" alt="EU StudyAssist Logo" h="40px" />

              <VStack align="flex-start" spacing={1} mt={4}>
                <Text fontWeight="bold" fontSize="sm">
                  Address:
                </Text>
                <Text fontSize="sm">
                  Level 1, 12 Sample St, Sydney NSW 2000
                </Text>

                <Text fontWeight="bold" fontSize="sm" mt={2}>
                  Contact:
                </Text>
                <Text fontSize="sm">1800 123 4567</Text>
                <Text fontSize="sm">info@eustudy.com</Text>
              </VStack>

              {/* Social Media Icons */}
              <HStack spacing={4} mt={2}>
                <Link href="https://facebook.com" isExternal>
                  <Image src="/FB.svg" alt="Facebook" w="24px" h="24px" />
                </Link>
                <Link href="https://instagram.com" isExternal>
                  <Image
                    src="/Instagram.svg"
                    alt="Instagram"
                    w="24px"
                    h="24px"
                  />
                </Link>
                <Link href="https://twitter.com" isExternal>
                  <Image src="/Twitter.svg" alt="Twitter" w="24px" h="24px" />
                </Link>
                <Link href="https://linkedin.com" isExternal>
                  <Image src="/Linkedin.svg" alt="LinkedIn" w="24px" h="24px" />
                </Link>
                <Link href="https://youtube.com" isExternal>
                  <Image src="/YouTube.svg" alt="YouTube" w="24px" h="24px" />
                </Link>
              </HStack>
            </VStack>

            

            {/* Middle and Right Sections - Grouped closer together */}
            <Flex gap={10} ml="38%">
              {/* Middle Section - Company Links */}
              <VStack align="flex-start" spacing={4} >
                <Text fontWeight="bold" fontSize="md" mb={2}>
                  Company
                </Text>
                <Link
                  href="/about"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  About
                </Link>
                <Link
                  href="/#"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Careers
                </Link>
                <Link
                  href="/#"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/blog"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Blog
                </Link>
                <Link
                  href="/#"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Customer Care
                </Link>
                <Link
                  href="/#"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Service
                </Link>
              </VStack>

              {/* Right Section - Loan Plans */}
              <VStack align="flex-start" spacing={4}>
                <Text fontWeight="bold" fontSize="md" mb={2}>
                  Loan Plans
                </Text>
                <Link
                  href="/overview"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Overview
                </Link>
                <Link
                  href="/terms"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  Terms
                </Link>
                <Link
                  href="/faq"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  FAQ
                </Link>
              </VStack>
            </Flex>
          </Flex>

          <Divider borderColor="whiteAlpha.400" mb={6} />

          {/* Bottom Footer */}
          <Flex justify="space-between" align="center" px={2}>
            {/* Copyright */}
            <Text fontSize="sm">
              © {new Date().getFullYear()} EUStudyAssist. All rights reserved.
            </Text>

            {/* Legal Links */}
            <HStack spacing={8}>
              <Link
                href="/privacy-policy"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                Cookies Settings
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Footer */}
      <Box display={{ base: "block", md: "none" }} py={10} px={8}>
        <VStack spacing={8} align="stretch">
          {/* Logo */}
          <Box textAlign="center">
            <Image
              src="/Logo.svg"
              alt="EU StudyAssist Logo"
              h="40px"
              mx="auto"
            />
          </Box>

          {/* Contact Info */}
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="bold" fontSize="sm">
              Address:
            </Text>
            <Text fontSize="sm">Level 1, 12 Sample St, Sydney NSW 2000</Text>

            <Text fontWeight="bold" fontSize="sm" mt={2}>
              Contact:
            </Text>
            <Text fontSize="sm">1800 123 4567</Text>
            <Text fontSize="sm">info@eustudy.com</Text>
          </VStack>

          {/* Social Media Icons */}
          <HStack spacing={4} justify="center" mt={2}>
            <Link href="https://facebook.com" isExternal>
              <Image src="/FB.svg" alt="Facebook" w="24px" h="24px" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Image src="/Instagram.svg" alt="Instagram" w="24px" h="24px" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Image src="/Twitter.svg" alt="Twitter" w="24px" h="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Image src="/Linkedin.svg" alt="LinkedIn" w="24px" h="24px" />
            </Link>
            <Link href="https://youtube.com" isExternal>
              <Image src="/YouTube.svg" alt="YouTube" w="24px" h="24px" />
            </Link>
          </HStack>

          {/* Links in Two Columns - Reduced gap between columns */}
          <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
            <VStack align="flex-start" spacing={4}>
              <Text fontWeight="bold" fontSize="md">
                Company
              </Text>
              <Link href="/about" fontSize="sm">
                About
              </Link>
              <Link href="/leadership" fontSize="sm">
                Leadership
              </Link>
              <Link href="/blog" fontSize="sm">
                Blog
              </Link>
              <Link href="/referral-program" fontSize="sm">
                Referral Program
              </Link>
            </VStack>

            <VStack align="flex-start" spacing={4}>
              <Text fontWeight="bold" fontSize="md">
                Loan Plans
              </Text>
              <Link href="/overview" fontSize="sm">
                Overview
              </Link>
              <Link href="/terms" fontSize="sm">
                Terms
              </Link>
              <Link href="/faq" fontSize="sm">
                FAQ
              </Link>
            </VStack>
          </Grid>

          <Divider borderColor="whiteAlpha.400" my={6} />

          {/* Legal Links */}
          <VStack spacing={3} align="center">
            <Link href="/privacy-policy" fontSize="sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" fontSize="sm">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" fontSize="sm">
              Cookies Settings
            </Link>
          </VStack>

          {/* Copyright */}
          <Text fontSize="xs" textAlign="center" mt={2}>
            © {new Date().getFullYear()} EUStudyAssist. All rights reserved.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
