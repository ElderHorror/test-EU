"use client";

import {
  Box,
  Flex,
  Text,
  Image,
  Container,
  Heading,
  Button,
  VStack,
} from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";

import LoanFeature from "@/components/sections/loans/LoanFeature";

const ConsultationPage = () => {
  return (
    <PageLayout>
      {/* Blue Background Section */}
      <Box
        bgColor="#0E5FDC"
        pt={{ lg: "9rem", md: "7.5rem", base: "6rem" }}
        pb={{ base: "0", md: "0", lg: "0" }}
        position="relative"
      >
        {/* Text Content */}
        <Container maxW="90rem" centerContent px="1.5rem">
          <Box
            maxW="800px"
            textAlign="center"
            mb={{ base: "3rem", md: "4rem" }}
          >
            <Text
              color="white"
              fontSize={{ lg: "50px", base: "32px", md: "48px" }}
              fontWeight={700}
              letterSpacing="-1px"
              lineHeight="1.1"
              mb="0.5rem"
            >
              We provide organizations with
            </Text>
            <Text
              color="#F69127"
              fontSize={{ lg: "50px", base: "32px", md: "48px" }}
              fontWeight={700}
              letterSpacing="-1px"
              lineHeight="1.1"
              mb="1.5rem"
            >
              tailored, data-driven solutions
            </Text>
            <Text
              color="#E4E4E4"
              lineHeight="1.5"
              fontSize={{ lg: "18px", base: "16px", md: "17px" }}
              maxW="600px"
              mx="auto"
            >
              The solutions we provide through our consulting services enhance
              decision-making and operational efficiency for your organisation.
            </Text>
          </Box>
        </Container>
      </Box>

      {/* Image Section with Half-Blue, Half-White Background */}
      <Box position="relative">
        {/* Blue Background Top Half */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          height="20%"
          bgColor="#0E5FDC"
          zIndex="0"
        />

        {/* White Background Bottom Half */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="80%"
          bgColor="white"
          zIndex="0"
        />

        {/* Image Container */}
        <Container
          maxW="90rem"
          centerContent
          px={{ base: "1rem", md: "1.5rem" }}
          position="relative"
          zIndex="1"
        >
          <Box
            w="100%"
            maxW="900px"
            mx="auto"
            borderRadius="8px"
            overflow="hidden"
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
            mb={{ base: "4rem", md: "6rem", lg: "8rem" }}
            position="relative"
            height={{ base: "auto", md: "auto" }}
          >
            <Box
              position="relative"
              width="100%"
              paddingBottom={{ base: "75%", md: "56.25%" }}
            >
              <Image
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                src="/consultation.png"
                alt="Consultation Services"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Consulting Services Section */}
      <Box bg="white" py="4rem">
        <Container maxW="60rem">
          <Heading
            textAlign="center"
            fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
            fontWeight={600}
            color="#130F26"
            lineHeight="1.2"
            mb="4rem"
          >
            Our Consulting Services
          </Heading>
        </Container>

        {/* Data Modeling & Analysis */}
        <LoanFeature
          imageSrc="/consultation.png"
          heading="Data Modeling & Analysis"
          description="Unlock the power of your data through advanced modeling techniques. We specialize in turning complex datasets into clear, actionable insights that drive decision-making. Whether it's forecasting trends, optimizing operations, or solving complex business problems, our data experts are equipped to deliver precise, impactful solutions tailored to your unique needs."
          imagePosition="left"
          buttonText="Contact Us"
          useBulletPoints={false}
        />

        {/* Environmental & Agricultural Consulting */}
        <LoanFeature
          imageSrc="/consultation02.png"
          heading="Environmental & Agricultural Consulting"
          description="Our consulting services provide cutting-edge expertise in environmental sustainability and agricultural management. From climate change modeling to forest inventory analysis and precision agriculture, we offer solutions grounded in science and technology. Our goal is to help organizations meet environmental challenges, improve land use efficiency, and promote sustainable development for a resilient future."
          imagePosition="right"
          useBulletPoints={false}
          buttonText="Apply Now"
        />

        {/* Training & Workshops */}
        <LoanFeature
          imageSrc="/consultation03.png"
          heading="Training & Workshops"
          description="Empower your team with the latest technical skills through our hands-on training programs. We offer expert-led workshops in data visualization, machine learning, GIS, and other critical areas. Our courses are designed to upskill professionals, ensuring they stay ahead in a rapidly evolving digital landscape, with a focus on real-world applications and continuous learning."
          imagePosition="left"
          buttonText="Apply Now"
          useBulletPoints={false}
        />

        {/* Training & Workshops */}
        <LoanFeature
          imageSrc="/consultation01.jpg"
          heading="Training & Workshops"
          description="We specialize in building modern, responsive websites and interactive dashboards tailored to research and academic needs. Whether you need a professional web presence or a data-driven dashboard for real-time insights, we design solutions that enhance accessibility, visualization, and user experience. Our services integrate the latest web technologies to ensure efficiency, security, and scalability."
          imagePosition="right"
          buttonText="Apply Now"
          useBulletPoints={false}
        />
      </Box>

      {/* Why Choose EU StudyAssist Section */}
      <Box py={{lg:"6rem", base:0}}>
        <LoanFeature
          imageSrc="/loan-features04.png"
          heading="Why Choose EU StudyAssist Consulting?"
          description="Expert Team: Our consultants bring years of specialized experience across various domains, ensuring you receive guidance from professionals who understand your industry's unique challenges and opportunities.

Data-Driven Approach: We leverage advanced analytics and research methodologies to provide solutions backed by solid evidence, not just intuition, resulting in more reliable outcomes for your organization.

Customized Solutions: We recognize that every client is unique, which is why we develop tailored strategies that address your specific needs rather than offering one-size-fits-all approaches."
          imagePosition="left"
          tallImage={true}
          smallText={true}
          useBulletPoints={true}
          
        />
      </Box>

      {/* Call to Action Section */}
      <Box bg="#F4F4F4" py="6rem" pb="6rem">
        <Container maxW="60rem">
          <VStack spacing="2rem" align="center">
            <Text
              fontSize={{ base: "1.125rem", md: "1.25rem" }}
              color="#2F3540"
              textAlign="center"
              lineHeight="1.6"
              maxW="800px"
              whiteSpace="pre-line"
            >
              Our team ensures personalized, impactful solutions to meet your
              unique organizational needs.
            </Text>

            <Button
              bg="#0E5FDC"
              color="white"
              size="md"
              _hover={{ bg: "#0B4DB0" }}
              px="1.5rem"
              py="1.5rem"
              fontSize="1rem"
              mt="1rem"
            >
              Contact Us
            </Button>
          </VStack>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default ConsultationPage;
