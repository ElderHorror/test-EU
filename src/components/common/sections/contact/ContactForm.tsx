"use client";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { ContactFormData } from "@/types";

/**
 * Props for the ContactForm component
 */
interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

/**
 * Contact form validation schema
 */
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

/**
 * Contact form component
 * Handles form validation and submission
 *
 * @param onSubmitSuccess - Optional callback function to run after successful submission
 */
export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  /**
   * Handle form submission
   * @param values - Form values
   */
  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      formik.resetForm();

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error sending your message. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Initialize formik
   */
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Box as="form" onSubmit={formik.handleSubmit} width="100%">
      <VStack spacing={4} align="flex-start">
        <FormControl
          isInvalid={!!(formik.touched.name && formik.errors.name)}
          isRequired
        >
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="Your name"
            {...formik.getFieldProps("name")}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!(formik.touched.email && formik.errors.email)}
          isRequired
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...formik.getFieldProps("email")}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!(formik.touched.subject && formik.errors.subject)}
          isRequired
        >
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input
            id="subject"
            placeholder="What is this regarding?"
            {...formik.getFieldProps("subject")}
          />
          <FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!(formik.touched.message && formik.errors.message)}
          isRequired
        >
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            placeholder="Your message"
            rows={5}
            resize="vertical"
            {...formik.getFieldProps("message")}
          />
          <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isSubmitting}
          loadingText="Sending"
          width={{ base: "100%", md: "auto" }}
        >
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}
