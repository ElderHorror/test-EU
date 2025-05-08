"use client";

import { Box, Flex, Text, Image, Container } from "@chakra-ui/react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  image: string;
}

const TestimonialCard = ({ quote, name, image }: TestimonialCardProps) => {
  return (
    <Box position="relative" maxW="100%">
      {/* Shadow Box */}
      <Box
        position="absolute"
        top="8px"
        left="8px"
        right="-8px"
        bottom="-8px"
        bg="black"
        borderRadius="12px"
        zIndex={0}
      />

      {/* Content Card */}
      <Box
        position="relative"
        borderRadius="12px"
        bg="white"
        border="1px solid #BCBCBC"
        p="1.25rem"
        zIndex={1}
      >
        <Text fontSize="1.1rem" fontWeight="500" mb="1rem">
          {quote}
        </Text>
        <Flex alignItems="center">
          <Image
            borderRadius="8px"
            src={image}
            alt={name}
            h="40px"
            w="40px"
            objectFit="cover"
          />
          <Text ml="0.75rem" fontWeight="600" fontSize="14px">
            {name}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export const TestimonialCompact = () => {
  const testimonials = [
    {
      quote: '"The foundational approach to the training was topnoptch"',
      name: "Promise Idahosa",
      image: "../promise_idahosa.jpg",
    },
    {
      quote:
        '"Clarity and precision of the program. Also, the interactive nature of all the classes."',
      name: "Dare Adeagbo",
      image: "../dave.jpg",
    },
    {
      quote: '"The instructor made everything to be easy."',
      name: "Cohort 1",
      image: "../s.jpg",
    },
    {
      quote:
        '"I found the continuous tests and assignments very enjoyable, though challenging they were necessary and worthwhile. Throughout the boot camp, classes were engaging and interactive."',
      name: "Cohort 1",
      image: "../s.jpg",
    },
    {
      quote:
        '"The curriculum was well structured, equipped with tests, assignments and projects that covered the basics of R programming up to its advanced methods and the application in our research work."',
      name: "Faith Oyewale Olabisi",
      image: "../faith.jpg",
    },
    {
      quote:
        '"I could always ask questions when I got stuck. I never felt like I was lagging behind because the instructor would always encourage me. Though I still need to practice a lot to become more confident in using what I have learnt for my research, I think that my overall experience was great. I am glad I took this beginner course."',
      name: "Agatha Egwemi",
      image: "../agatha.jpg",
    },
    {
      quote:
        '"The instructor was very patient to ensure that everyone understood the content"',
      name: "Cohort 1",
      image: "../s.jpg",
    },
  ];

  return (
    <Box py="1rem" bg="#F4F4F4" pt="5rem" pb="5rem">
      <Box>
        <Text
          fontFamily="ClashDisplay"
          color="black"
          fontWeight={600}
          fontSize={{ lg: "2.5rem", base: "32px" }}
          textAlign="center"
          marginY="0.5rem"
        >
          Testimonials
        </Text>
        <Text
          color="#2F3540"
          textAlign="center"
          fontSize={{ lg: "16px", base: "16px" }}
          lineHeight={{ lg: 1.75, base: 1.4 }}
          maxW="40rem"
          margin="auto"
          mb="2.5rem"
        >
          The students we have supported have said a lot of good things about
          us. Some of them are shown below.
        </Text>
      </Box>
      <Container maxW="900px" px={{ base: "1rem", md: "2rem" }}>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          gap={{ base: "1.5rem", md: "3rem" }}
        >
          {/* Left Column */}
          <Flex
            direction="column"
            gap="2rem"
            maxW={{ base: "100%", md: "45%" }}
          >
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                image={testimonial.image}
              />
            ))}
          </Flex>

          {/* Right Column */}
          <Flex
            direction="column"
            gap="1.5rem"
            maxW={{ base: "100%", md: "48%" }}
          >
            {testimonials.slice(4).map((testimonial, index) => (
              <TestimonialCard
                key={index + 4}
                quote={testimonial.quote}
                name={testimonial.name}
                image={testimonial.image}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
