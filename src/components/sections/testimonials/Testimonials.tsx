"use client";
import { Box, Container, Heading, Text, Flex, VStack } from "@chakra-ui/react";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";
import Section from "@/components/layout/Section";

/**
 * Testimonial data
 */
const testimonials: TestimonialCardProps[] = [
  {
    text: "The curriculum was well structured, equipped with tests, assignments and projects that covered the basics of R programming up to its advanced methods and the application in our research work.",
    name: "Faith Oyewale Olabisi",
    image: "/faith.jpg",
  },
  {
    text: "I could always ask questions when I got stuck. I never felt like I was lagging behind because the instructor would always encourage me. Though I still need to practice a lot to become more confident in using what I have learnt for my research, I think that my overall experience was great. I am glad I took this beginner course.",
    name: "Aghatha Egwemi",
    image: "/agatha.jpg",
  },
  {
    text: "The instructor was very patient to ensure that everyone understood the content",
    name: "Cohort 1",
    image: "/s.jpg",
  },
];

/**
 * Testimonials section component
 * Displays testimonials in a visually appealing layout
 */
export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="The students we have supported have said a lot of good things about us. Some of them are shown below."
      subtitleMaxWidth={{ base: "75%", sm: "75%", md: "75%", lg: "75%" }}
      bg="white"
      py={16}
    >
      {/* Testimonials Layout */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        maxW="1000px"
        mx="auto"
        px={2}
        gap={{ base: 20, md: 20 }}
      >
        {/* Left Column - Faith and Cohort */}
        <Flex
          direction="column"
          gap={{ base: 8, md: 14 }}
          width={{ base: "100%", md: "auto" }}
        >
          {/* First testimonial */}
          <Box maxW={{ base: "100%", md: "450px" }}>
            <TestimonialCard {...testimonials[0]} />
          </Box>

          {/* Third testimonial - slightly pushed right */}
          <Box ml={{ base: 0, md: 24 }} maxW={{ base: "100%", md: "420px" }}>
            <TestimonialCard {...testimonials[2]} />
          </Box>
        </Flex>

        {/* Right Column - Second testimonial */}
        <Box mt={{ base: 0, md: 10 }} maxW={{ base: "100%", md: "386px" }}>
          <TestimonialCard {...testimonials[1]} />
        </Box>
      </Flex>
    </Section>
  );
}
