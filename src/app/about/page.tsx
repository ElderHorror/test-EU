"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import dynamic from 'next/dynamic';
const TeamSection = dynamic(() => import('@/components/sections/about/TeamSection'), { ssr: false });
import PageLayout from "@/components/layout/PageLayout";
import AnimatedElement from "@/components/common/AnimatedElement";
import PageTransition from "@/components/common/PageTransition";

export default function About() {
  // Use breakpoint value to determine which image to show
  const imageSrc = useBreakpointValue({
    base: "/about-mobile.jpg",
    md: "/about.jpg",
  });

  return (
    <PageLayout>
      <PageTransition>
        {/* Hero Section */}
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <Box
            bgColor="#0E5FDC"
            pt={{ base: "6rem", md: "4.8rem", lg: "5.6rem" }}
            px="1.5rem"
            pb={{ base: "1.25rem", lg: "4.375rem" }}
            display="grid"
            placeContent="center"
          >
            <Flex
              maxW="90rem"
              px={{ base: 0, lg: "1.5rem" }}
              flexDir={{ base: "column", lg: "row" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box flexBasis="50%">
                <Text
                  fontFamily="ClashDisplay"
                  color="white"
                  fontSize={{ base: "2.25rem", md: "3rem", lg: "4rem" }}
                  fontWeight={600}
                  // letterSpacing="0.08rem"
                  lineHeight="1.05"
                  textShadow="0 0.25rem 0.25rem rgba(0,0,0,0.25)"
                  mb="1.2rem"
                >
                  <span>We are passionate about </span>
                  <span style={{ color: "#F69127" }}>
                    empowering your journey
                  </span>
                  <span>.</span>
                </Text>
              </Box>
              <Box
                flexBasis="45%"
                justifySelf="baseline"
                mt={{ base: "auto", md: "10rem" }}
              >
                <Text
                  color="#E4E4E4"
                  lineHeight="1.5"
                  fontSize={{ base: "1.05rem", md: "1.125rem", lg: "1.25rem" }}
                  textShadow="0 0.25rem 0.25rem rgba(0,0,0,0.25)"
                  textAlign={{ base: "justify" }}
                  mb={{ base: "2rem" }}
                >
                  Our mission is to bridge the financial and skill gaps for
                  international students, particularly ERASMUS recipients and
                  individuals from non-Western countries. Through a unique blend
                  of financial aid, tailored training, and consulting services,
                  we ensure our clients can thrive globally. Our vision is to
                  create a more inclusive and competitive educational landscape
                  that fosters innovation and growth worldwide
                </Text>
              </Box>
            </Flex>
          </Box>
        </AnimatedElement>

        {/* About Image Section */}
        <AnimatedElement animation="slideUp" delay={0.4}>
          <Box w="100%">
            <Image
              w="100%"
              borderRadius="0.5rem"
              border="none"
              src={imageSrc}
              alt="About Us"
              minH={{ base: "150vw", md: "auto", lg: "100vh" }}
              maxH={{ lg: "60vh", base: "150vh" }}
              objectFit={{ base: "cover", md: "contain", lg: "cover" }}
              objectPosition={{
                base: "center top",
                md: "center",
                lg: "center",
              }}
            />
          </Box>
        </AnimatedElement>

        {/* Mission, Vision, and Commitment Section */}
        <AnimatedElement animation="slideUp" delay={0.6}>
          <Box
            px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
            pb={{ base: "1.25rem", lg: "1.25rem" }}
            display="grid"
            placeContent="center"
          >
            <Flex
              maxW="90rem"
              flexDir={{ base: "column", lg: "row" }}
              justifyContent="space-between"
              alignItems="center"
              borderTop="0.0625rem solid #71777D"
              marginTop="1.875rem"
              pt="1.875rem"
            >
              <Box flexBasis="40%" marginBottom="auto">
                <Text
                  fontFamily="ClashDisplay"
                  fontWeight={600}
                  fontSize={{ base: "2.5rem", lg: "3.25rem" }}
                  lineHeight={{ base: 1.1, lg: 1.2 }}
                  color="rgba(0,0,0,0.5)"
                  mb={{ base: "2rem", lg: "0" }}
                  mt={{ base: "1rem" }}
                >
                  What we strive to achieve together
                </Text>
              </Box>
              <Box flexBasis="50%">
                {/* Mission Section */}
                <Text
                  fontFamily="ClashDisplay"
                  color="#130F26"
                  fontWeight={700}
                  fontSize={{ base: "1.25rem", lg: "2rem" }}
                  mb="0.5rem"
                >
                  Mission
                </Text>
                <Text
                  color="#2F3540"
                  fontSize={{ base: "1rem" }}
                  textAlign={{ base: "justify" }}
                  lineHeight={{ base: 1.4, lg: 1.6 }}
                  mb="2rem"
                >
                  EU StudyAssist empowers students, researchers, and
                  organizations worldwide to achieve their full potential. By
                  providing financial support, specialized programs, data
                  solutions, and practical skill development, we bridge the
                  resource and skill gap, especially for individuals from
                  non-Western countries. Our tailored training, workshops, and
                  data consulting services also benefit nature-based and
                  agricultural organizations. Through our work, we foster a more
                  equitable research ecosystem where everyone can thrive.
                </Text>

                {/* Vision Section */}
                <Text
                  fontFamily="ClashDisplay"
                  color="#130F26"
                  fontWeight={700}
                  fontSize={{ base: "1.25rem", lg: "2rem" }}
                  mb="0.5rem"
                >
                  Vision
                </Text>
                <Text
                  color="#2F3540"
                  fontSize={{ base: "1rem" }}
                  textAlign={{ base: "justify" }}
                  lineHeight={{ base: 1.4, lg: 1.6 }}
                  mb="2rem"
                >
                  To be the number one organization offering loans to new
                  scholarship students while reducing the skill-gap in Africa
                  and making Africa a competitive continent in the world.
                </Text>

                {/* Commitment Section */}
                <Text
                  fontFamily="ClashDisplay"
                  color="#130F26"
                  fontWeight={700}
                  fontSize={{ base: "1.25rem", lg: "2rem" }}
                  mb="0.5rem"
                >
                  Commitment
                </Text>
                <Text
                  color="#2F3540"
                  fontSize={{ base: "1rem" }}
                  textAlign={{ base: "justify" }}
                  lineHeight={{ base: 1.4, lg: 1.6 }}
                  mb={{ lg: "3rem", base: "1.5rem" }}
                >
                  At EU StudyAssist, we are dedicated to providing a holistic
                  support system for students, researchers, and professionals.
                  Our commitment is rooted in bridging the gap between
                  aspiration and opportunity, particularly for individuals from
                  non-Western countries. We offer financial assistance, skill
                  development, and data solutions to empower our clients in
                  their educational and professional journeys. By fostering an
                  inclusive, growth-oriented environment, we ensure that
                  everyone has access to the resources needed to thrive
                  globally, contributing to a more equitable and innovative
                  research landscape. Past learners testified that he
                  foundational approach to the training was topnotch.
                </Text>
              </Box>
            </Flex>
          </Box>
        </AnimatedElement>

        {/* Values and Culture Section */}
        <Box
          px={{ base: "1.5rem", md: "2.5rem", lg: "4rem" }}
          pb={{ base: "1.25rem", lg: "4.375rem" }}
          display="grid"
          placeContent="center"
          mt={{ base: "0", lg: "1.875rem" }}
        >
          <Flex
            maxW="90rem"
            flexDir={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box flexBasis="40%" marginBottom="auto">
              <Text
                fontFamily="ClashDisplay"
                fontWeight={600}
                fontSize={{ base: "2rem", lg: "3.25rem" }}
                lineHeight={{ base: 1.1, lg: 1.2 }}
                color="rgba(0,0,0,0.5)"
                mb={{ base: "1.5rem", lg: "0" }}
              >
                What we stand for as we work daily
              </Text>
            </Box>
            <Box flexBasis="50%">
              {/* Values Section */}
              <Text
                fontFamily="ClashDisplay"
                color="#130F26"
                fontWeight={700}
                fontSize={{ base: "1.25rem", lg: "2rem" }}
                mb="1rem"
              >
                Our Values
              </Text>
              <UnorderedList
                mt="0"
                fontSize={{ base: "1rem", lg: "1rem" }}
                lineHeight={{ base: 1.4, lg: 1.6 }}
                mb="2rem"
                textAlign={{ base: "justify" }}
                spacing={{ base: "1rem" }}
                color="#2F3540"
              >
                <ListItem>
                  Empowerment: EU StudyAssist is committed to providing tools
                  and resources to enhance student capabilities. Making them
                  competitive in the local and global landscape both in academia
                  and in the industry.
                </ListItem>
                <ListItem>
                  Inclusivity: EU StudyAssist fosters an environment that values
                  diversity and supports underrepresented groups.
                </ListItem>
                <ListItem>
                  Innovation: EU StudyAssist emphasizes the importance of
                  practical skills and continuous learning of the latest skills.
                </ListItem>
                <ListItem>
                  Collaboration: EU StudyAssist builds a global network that
                  encourages shared knowledge and opportunities.
                </ListItem>
                <ListItem>
                  Integrity: EU StudyAssist upholds transparency and ethical
                  standards in all initiatives.
                </ListItem>
                <ListItem>
                  Client first: EU StudyAssist ensures customer satisfaction by
                  giving top of the line services.
                </ListItem>
                <ListItem>
                  Respect: EU StudyAssist Value and acknowledges the
                  contributions and perspectives of every individual.
                </ListItem>
              </UnorderedList>

              {/* Culture Section */}
              <Text
                fontFamily="ClashDisplay"
                color="#130F26"
                fontWeight={700}
                fontSize={{ base: "1.25rem", lg: "2rem" }}
                mb="1rem"
              >
                Our Culture
              </Text>
              <UnorderedList
                mt="0"
                fontSize={{ base: "1rem", lg: "1rem" }}
                lineHeight={{ base: 1.4, lg: 1.6 }}
                mb="3rem"
                textAlign={{ base: "justify" }}
                color="#2F3540"
                spacing={{ base: "1rem" }}
              >
                <ListItem>
                  Growth oriented: We are committed to personal growth and
                  professional development of our employees by providing
                  resources that support their development.
                </ListItem>
                <ListItem>
                  Innovative: We promote creativity and the exploration of new
                  ideas.
                </ListItem>
                <ListItem>
                  Inclusive: We value diversity and ensure everyone feels
                  welcome and respected.
                </ListItem>
                <ListItem>
                  Flexible: We emphasize a remote-first approach to accommodate
                  work-life balance.
                </ListItem>
                <ListItem>
                  Collaborative: We encourage teamwork and open communication
                  among employees.
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>

        {/* Team Section - Lazy Loaded */}
        <TeamSection />
      </PageTransition>
    </PageLayout>
  );
}
