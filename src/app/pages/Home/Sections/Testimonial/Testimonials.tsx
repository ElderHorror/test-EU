import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Avatar,
  VStack,
  Card,
  CardBody,
} from "@chakra-ui/react";

// Testimonial data structure
const testimonials = [
  {
    text: "The curriculum was well structured, equipped with tests, assignments and projects that covered the basics of R programming up to its advanced methods and the application in our research work.",
    name: "Faith Oyewale Olabisi",
    image: "../faith.jpg",
  },
  {
    text: "I could always ask questions when I got stuck. I never felt like I was lagging behind because the instructor would always encourage me. Though I still need to practice a lot to become more confident in using what I have learnt for my research, I think that my overall experience was great. I am glad I took this beginner course.",
    name: "Aghatha Egwemi",
    image: "../agatha.jpg",
  },
  {
    text: "The instructor was very patient to ensure that everyone understood the content",
    name: "Cohort 1",
    image: "../s.jpg",
  },
];

export default function Testimonials() {
  return (
    <Box bg="white" py={16}>
      <Container maxW="container.xl">
        {/* Header Section */}
        <VStack spacing={6} mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            textAlign="center"
          >
            Testimonials
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            textAlign="center"
            maxW="800px"
            color="gray.600"
          >
            The students we have supported have said a lot of good things about us. <br />
            Some of them are shown below.
          </Text>
        </VStack>

        {/* Testimonials Grid */}
        <Flex 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" 
          maxW="1000px" 
          mx="auto" 
          px={2}
          gap={{ base: 20, md: 0 }}
        >
          {/* Left Column - Faith and Cohort */}
          <Flex 
            direction="column" 
            gap={{base:8, md:14}}
            width={{ base: "100%", md: "auto" }}
          >
            {/* Faith's testimonial */}
            <Box maxW={{ base: "100%", md: "450px" }}>
              <TestimonialCard {...testimonials[0]} />
            </Box>
            {/* Cohort testimonial - slightly pushed right */}
            <Box 
              ml={{ base: 0, md: 24 }} 
              maxW={{ base: "100%", md: "420px" }}
            >
              <TestimonialCard {...testimonials[2]} />
            </Box>
          </Flex>

          {/* Right Column - Agatha */}
          <Box
          mt={{base: 0, md: 10}} 
          maxW={{ base: "100%", md: "386px" }}>
            <TestimonialCard {...testimonials[1]} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

// Testimonial Card Component
interface TestimonialCardProps {
  text: string;
  name: string;
  image: string;
}

function TestimonialCard({ text, name, image }: TestimonialCardProps) {
  return (
    <Box position="relative">
      {/* Shadow Box */}
      <Box
        position="absolute"
        top="16px"
        left="16px"
        right="-8px"
        bottom="-8px"
        bg="black"
        borderRadius="xl"
        zIndex={0}
      />
      
      {/* Content Card */}
      <Card
        position="relative"
        borderRadius="xl"
        bg="white"
        borderWidth="1px"
        borderColor="gray.300"
        transform="translateY(-4px)"
        _hover={{ transform: "translateY(-8px)", transition: "all 0.2s" }}
        zIndex={1}
      >
        <CardBody>
          <VStack spacing={4} align="flex-start">
            <Text fontSize="xl" color="black" fontWeight="medium">
              "{text}"
            </Text>
            <Flex align="center" gap={3}>
              <Avatar size="md" name={name} src={image} />
              <Box>
                <Text fontWeight="semibold" fontSize="sm">
                  {name}
                </Text>
              </Box>
            </Flex>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}