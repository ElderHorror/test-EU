"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import ContactForm from "./ContactForm";
import Section from "@/components/layout/Section";

/**
 * Props for the ContactSection component
 */
interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  address?: string;
  bgColor?: string;
}

/**
 * Contact section component
 * Displays a contact form and contact information
 * 
 * @param title - Section title
 * @param subtitle - Section subtitle
 * @param email - Contact email
 * @param phone - Contact phone number
 * @param address - Physical address
 * @param bgColor - Background color
 */
export default function ContactSection({
  title = "Contact Us",
  subtitle = "Have questions or need assistance? Reach out to us!",
  email = "info@eustudyassist.com",
  phone = "+1 (234) 567-8901",
  address = "123 Education Street, Academic City, EU",
  bgColor = "gray.50",
}: ContactSectionProps) {
  return (
    <Section
      id="contact_us"
      title={title}
      subtitle={subtitle}
      bg={bgColor}
      py={16}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 10, lg: 16 }}
        w="100%"
        maxW="1200px"
        mx="auto"
      >
        {/* Contact Form */}
        <Box flex="1" w={{ base: "100%", lg: "60%" }}>
          <ContactForm />
        </Box>

        {/* Contact Information */}
        <VStack
          align="flex-start"
          spacing={8}
          w={{ base: "100%", lg: "40%" }}
          pt={{ base: 0, lg: 10 }}
        >
          {/* Email */}
          <HStack spacing={4}>
            <Icon as={MdEmail} boxSize={6} color="blue.500" />
            <VStack align="flex-start" spacing={1}>
              <Text fontWeight="bold">Email</Text>
              <Link href={`mailto:${email}`} color="blue.500">
                {email}
              </Link>
            </VStack>
          </HStack>

          {/* Phone */}
          <HStack spacing={4}>
            <Icon as={MdPhone} boxSize={6} color="blue.500" />
            <VStack align="flex-start" spacing={1}>
              <Text fontWeight="bold">Phone</Text>
              <Link href={`tel:${phone}`} color="blue.500">
                {phone}
              </Link>
            </VStack>
          </HStack>

          {/* Address */}
          <HStack spacing={4} alignItems="flex-start">
            <Icon as={MdLocationOn} boxSize={6} color="blue.500" mt={1} />
            <VStack align="flex-start" spacing={1}>
              <Text fontWeight="bold">Address</Text>
              <Text>{address}</Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </Section>
  );
}
