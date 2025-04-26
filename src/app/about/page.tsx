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
} from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../pages/Home/Sections/Footer/Footer";

export default function About() {
  return (
    <>
      {/* Navigation Bar */}
      <Box>
        <Navbar setPageMode={() => {}} />
      </Box>

      {/* Hero Section */}
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
              color="white"
              fontSize={{ base: "2.25rem", md: "3rem", lg: "4.5rem" }}
              fontWeight={600}
              letterSpacing="-0.125rem"
              lineHeight="1.05"
              textShadow="0 0.25rem 0.25rem rgba(0,0,0,0.25)"
              mb="1.2rem"
            >
              <span>We are passionate about </span>
              <span style={{ color: "#F69127" }}>empowering your journey</span>
              <span>.</span>
            </Text>
          </Box>
          <Box flexBasis="45%" justifySelf="baseline" mt="auto">
            <Text
              color="#E4E4E4"
              lineHeight="1.5"
              fontSize={{ base: "1rem", md: "1.125rem", lg: "1.25rem" }}
              textShadow="0 0.25rem 0.25rem rgba(0,0,0,0.25)"
            >
              Our mission is to bridge the financial and skill gaps for
              international students, particularly ERASMUS recipients and
              individuals from non-Western countries. Through a unique blend of
              financial aid, tailored training, and consulting services, we
              ensure our clients can thrive globally. Our vision is to create a
              more inclusive and competitive educational landscape that fosters
              innovation and growth worldwide
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* About Image Section */}
      <Box w="100%">
        <Image
          w="100%"
          borderRadius="0.5rem"
          border="none"
          src="/about.jpg"
          alt="About Us"
          minH={{ base: "120vw", md: "auto" }}
          maxH="60vh"
          objectFit={{ base: "cover", md: "contain", lg: "cover" }}
        />
      </Box>

      {/* Mission, Vision, and Commitment Section */}
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
              fontWeight={600}
              fontSize={{ base: "2rem", lg: "3.25rem" }}
              lineHeight={{ base: 1.1, lg: 1.2 }}
              color="rgba(0,0,0,0.5)"
              mb={{ base: "2rem", lg: "0" }}
            >
              What we strive to achieve together
            </Text>
          </Box>
          <Box flexBasis="50%">
            {/* Mission Section */}
            <Text
              color="#130F26"
              fontWeight={700}
              fontSize={{ base: "1.25rem", lg: "2rem" }}
              mb="0.5rem"
            >
              Mission
            </Text>
            <Text color="#2F3540" lineHeight={{ base: 1.4, lg: 1.6 }} mb="2rem">
              EU StudyAssist empowers students, researchers, and organizations
              worldwide to achieve their full potential. By providing financial
              support, specialized programs, data solutions, and practical skill
              development, we bridge the resource and skill gap, especially for
              individuals from non-Western countries. Our tailored training,
              workshops, and data consulting services also benefit nature-based
              and agricultural organizations. Through our work, we foster a more
              equitable research ecosystem where everyone can thrive.
            </Text>

            {/* Vision Section */}
            <Text
              color="#130F26"
              fontWeight={700}
              fontSize={{ base: "1.25rem", lg: "2rem" }}
              mb="0.5rem"
            >
              Vision
            </Text>
            <Text color="#2F3540" lineHeight={{ base: 1.4, lg: 1.6 }} mb="2rem">
              To be the number one organization offering loans to new
              scholarship students while reducing the skill-gap in Africa and
              making Africa a competitive continent in the world.
            </Text>

            {/* Commitment Section */}
            <Text
              color="#130F26"
              fontWeight={700}
              fontSize={{ base: "1.25rem", lg: "2rem" }}
              mb="0.5rem"
            >
              Commitment
            </Text>
            <Text color="#2F3540" lineHeight={{ base: 1.4, lg: 1.6 }} mb="3rem">
              At EU StudyAssist, we are dedicated to providing a holistic
              support system for students, researchers, and professionals. Our
              commitment is rooted in bridging the gap between aspiration and
              opportunity, particularly for individuals from non-Western
              countries. We offer financial assistance, skill development, and
              data solutions to empower our clients in their educational and
              professional journeys. By fostering an inclusive, growth-oriented
              environment, we ensure that everyone has access to the resources
              needed to thrive globally, contributing to a more equitable and
              innovative research landscape. Past learners testified that he
              foundational approach to the training was topnotch.
            </Text>
          </Box>
        </Flex>
      </Box>

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
              fontWeight={600}
              fontSize={{ base: "2rem", lg: "3.25rem" }}
              lineHeight={{ base: 1.1, lg: 1.2 }}
              color="rgba(0,0,0,0.5)"
              mb={{ base: "1rem", lg: "0" }}
            >
              What we stand for as we work daily
            </Text>
          </Box>
          <Box flexBasis="50%">
            {/* Values Section */}
            <Text
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
            >
              <ListItem>
                Empowerment: EU StudyAssist is committed to providing tools and
                resources to enhance student capabilities. Making them
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
                Respect: EU StudyAssist Value and acknowledges the contributions
                and perspectives of every individual.
              </ListItem>
            </UnorderedList>

            {/* Culture Section */}
            <Text
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
            >
              <ListItem>
                Growth oriented: We are committed to personal growth and
                professional development of our employees by providing resources
                that support their development.
              </ListItem>
              <ListItem>
                Innovative: We promote creativity and the exploration of new
                ideas.
              </ListItem>
              <ListItem>
                Inclusive: We value diversity and ensure everyone feels welcome
                and respected.
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

      {/* Team Section */}
      <Box
        bgColor="#F4F4F4"
        pt={{ base: "3.75rem", md: "4.6875rem", lg: "5.625rem" }}
        px="1.5rem"
        display="grid"
        placeContent="center"
      >
        <Flex
          maxW="60rem"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
          mb="2.5rem"
          id="About"
        >
          <Text
            fontWeight={600}
            fontSize={{ base: "2rem", lg: "3.25rem" }}
            mb="2.5rem"
          >
            Meet Our Beautiful Team
          </Text>
          <SimpleGrid columns={{ base: 2, sm: 2, lg: 4 }} gap="2rem">
            {[
              {
                image: "./adu.jpeg",
                title: "CEO & Founder",
                name: "Olamide Adu",
              },
              {
                image: "./fis.jpeg",
                title: "CTO & Founder",
                name: "Fisola Adesuyi",
              },
              {
                image: "./oki.jpeg",
                title: "Developer",
                name: "Oki Ayobami",
              },
              {
                image: "./mes.jpeg",
                title: "Lead Designer",
                name: "Meshach Aderele",
              },
            ].map((elem, index) => (
              <Box minWidth="8rem" key={`about-index-${index + 4}`}>
                <Grid templateRows="repeat(4, 1fr)" templateColumns="1fr">
                  <GridItem
                    rowStart={1}
                    rowSpan={4}
                    bg="transparent"
                    zIndex={1}
                    colStart={1}
                  >
                    <Image
                      src={elem.image}
                      alt={elem.name}
                      w="100%"
                      h="auto"
                      objectFit="cover"
                    />
                  </GridItem>
                  <GridItem
                    rowStart={4}
                    rowSpan={1}
                    h="2.5rem"
                    zIndex={3}
                    colStart={1}
                  >
                    <Box
                      margin="0.5rem 1rem"
                      padding="0.5rem"
                      bg="white"
                      textAlign="center"
                    >
                      <Text fontWeight={600} fontSize="0.875rem">
                        {elem.name}
                      </Text>
                      <Text fontSize="0.75rem">{elem.title}</Text>
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            ))}
          </SimpleGrid>
          <Box maxW="38.375rem" mx="auto" mt="1.25rem">
            <Text mt="1rem" lineHeight={{ base: 1.4, lg: 1.6 }}>
              <span style={{ fontWeight: 700 }}>Olamide Adu</span> is a
              Consulting Data Scientist with a background in forest and nature
              management. He holds an Erasmus Mundus Joint Master's in
              Sustainable Forest and Nature Management. With expertise in data
              analysis and sustainability consulting, he helps small and
              medium-sized businesses implement data-driven strategies to
              minimize environmental impact and optimize resource efficiency.
            </Text>
            <Text mt="1rem" lineHeight={{ base: 1.4, lg: 1.6 }}>
              <span style={{ fontWeight: 700 }}>Fisola Adesuyi</span> is a PhD
              Fellow at Aarhus University, where he focuses on applying modern
              technologies to promote environmental sustainability. He was
              awarded the prestigious Mastercard Foundation Scholarship at the
              American University of Beirut. With extensive experience in
              digital product design and strategy, he combines technology and
              sustainability to drive impactful solutions.
            </Text>
            <Text mt="1rem" lineHeight={{ base: 1.4, lg: 1.6 }}>
              <span style={{ fontWeight: 700 }}>Ayobami Oki</span> is a PhD
              Fellow at Aarhus University, where he focuses on applying modern
              technologies to promote environmental sustainability. He was
              awarded the prestigious Mastercard Foundation Scholarship at the
              American University of Beirut. With extensive experience in
              digital product design and strategy, he combines technology and
              sustainability to drive impactful solutions.
              <br />
            </Text>
            <Text mt="1rem" lineHeight={{ base: 1.4, lg: 1.6 }}>
              <span style={{ fontWeight: 700 }}>Meshach Aderele</span> is a PhD
              Fellow at Aarhus University, where he focuses on applying modern
              technologies to promote environmental sustainability. He was
              awarded the prestigious Mastercard Foundation Scholarship at the
              American University of Beirut. With extensive experience in
              digital product design and strategy, he combines technology and
              sustainability to drive impactful solutions.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box>
        <Footer />
      </Box>
    </>
  );
}
