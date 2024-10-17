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
import Footer from "@/Sections/Footer/Footer";

export default function About() {
  return (
    <>
      <Box>
        <Navbar setPageMode={() => {}} />
      </Box>
      <Box
        bgColor={"#0E5FDC"}
        pt={{ lg: "9rem", md: "7.5rem", base: "6rem" }}
        px="1.5rem"
        pb={{ base: "2rem", lg: "7rem" }}
        display={"grid"}
        placeContent={"center"}
      >
        <Flex
          maxW={"90rem"}
          px="1.5rem"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          scale={0.8}
        >
          <Flex
            maxW={"90rem"}
            px="1.5rem"
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            scale={0.8}
          >
            <Box flexBasis={"50%"}>
              <Text
                color={"white"}
                fontSize={{ lg: "72px", base: "36px", md: "48px" }}
                fontWeight={600}
                letterSpacing={"-2px"}
                lineHeight={"1.05"}
                textShadow={"0px 4px 4px #00000040"}
                mb="1.2rem"
              >
                <span> We are passionate about </span>
                <span style={{ color: "#F69127" }}>
                  {" "}
                  empowering your journey
                </span>
                <span>.</span>
              </Text>
            </Box>
            <Box flexBasis={"45%"} justifySelf={"baseline"} mt="auto">
              <Text
                color={"#E4E4E4"}
                lineHeight={"1.5"}
                fontSize={{ lg: "20px", base: "16px", md: "18px" }}
                textShadow={"0px 4px 4px #00000040"}
              >
                Our mission is to bridge the financial and skill gaps for
                international students, particularly ERASMUS recipients and
                individuals from non-Western countries. Through a unique blend
                of financial aid, tailored training, and consulting services, we
                ensure our clients can thrive globally. Our vision is to create
                a more inclusive and competitive educational landscape that
                fosters innovation and growth worldwide
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box w="100%">
        <Image
          w="100%"
          borderRadius={"8px"}
          border={"none"}
          src={"/about.jpg"}
          alt={"#"}
          objectFit={"contain"}
        />
      </Box>
      <Box
        px="1.5rem"
        pb={{ base: "2rem", lg: "2rem" }}
        display={"grid"}
        placeContent={"center"}
      >
        <Flex
          maxW={"90rem"}
          px="1.5rem"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          borderTop="1px solid #71777D"
          marginTop={"3rem"}
          pt="3rem"
          scale={0.8}
        >
          <Box flexBasis={"40%"} marginBottom={"auto"}>
            <Text
              fontWeight={"600"}
              fontSize={{ lg: "52px", base: "32px" }}
              lineHeight={{ lg: 1.2, base: 1.1 }}
              color={"#00000080"}
            >
              What we strive to achieve together
            </Text>
          </Box>
          <Box flexBasis={"50%"}>
            <Text
              color="#130F26"
              fontWeight={"700"}
              fontSize={{ lg: "32px", base: "20px" }}
            >
              Mission
            </Text>
            <Text color="#2F3540" lineHeight={{ lg: 1.6, base: 1.4 }}>
              EU StudyAssist empowers students, researchers, and organizations
              worldwide to achieve their full potential. By providing financial
              support, specialized programs, data solutions, and practical skill
              development, we bridge the resource and skill gap, especially for
              individuals from non-Western countries. Our tailored training,
              workshops, and data consulting services also benefit nature-based
              and agricultural organizations. Through our work, we foster a more
              equitable research ecosystem where everyone can thrive.
            </Text>
            <Text
              color="#130F26"
              fontWeight={"700"}
              fontSize={{ lg: "32px", base: "20px" }}
            >
              Vision
            </Text>
            <Text color="#2F3540" lineHeight={{ lg: 1.6, base: 1.4 }}>
              To be the number one organization offering loans to new
              scholarship students while reducing the skill-gap in Africa and
              making Africa a competitive continent in the world.
            </Text>
            <Text
              color="#130F26"
              fontWeight={"700"}
              fontSize={{ lg: "32px", base: "20px" }}
            >
              Commitment
            </Text>
            <Text color="#2F3540" lineHeight={{ lg: 1.6, base: 1.4 }}>
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
      <Box
        px="1.5rem"
        pb={{ base: "2rem", lg: "7rem" }}
        display={"grid"}
        placeContent={"center"}
      >
        <Flex
          maxW={"90rem"}
          px="1.5rem"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={"3rem"}
          scale={0.8}
        >
          <Box flexBasis={"40%"} marginBottom={"auto"}>
            <Text
              fontWeight={"600"}
              fontSize={{ lg: "52px", base: "32px" }}
              lineHeight={{ lg: 1.2, base: 1.1 }}
              color={"#00000080"}
            >
              What we stand for as we work daily
            </Text>
          </Box>
          <Box flexBasis={"50%"}>
            <Text
              color="#130F26"
              fontWeight={"700"}
              fontSize={{ lg: "32px", base: "20px" }}
            >
              Our Values
            </Text>
            <UnorderedList
              mt="0rem"
              fontSize={{ lg: "16px", base: "16px" }}
              lineHeight={{ lg: 1.6, base: 1.4 }}
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
            </UnorderedList>
            <Text
              color="#2F3540"
              lineHeight={{ lg: 1.6, base: 1.4 }}
              mt="0.5rem"
            >
              Respect: EU StudyAssist Value and acknowledges the contributions
              and perspectives of every individual.
            </Text>
            <Text
              color="#130F26"
              fontWeight={"700"}
              fontSize={{ lg: "32px", base: "20px" }}
              m="0"
              p="0"
            >
              Our Culture
            </Text>
            <UnorderedList
              mt="0rem"
              fontSize={{ lg: "18px", base: "16px" }}
              lineHeight={{ lg: 1.6, base: 1.4 }}
            >
              <ListItem>
                Growth oriented: We are committed to personal growth and
                professional development of our employees by providing resources
                that support their development..
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
            </UnorderedList>
            <Text
              color="#2F3540"
              lineHeight={{ lg: 1.6, base: 1.4 }}
              mt="0.5rem"
            >
              Collaborative: We encourage teamwork and open communication among
              employees.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        bgColor={"#F4F4F4"}
        pt={{ lg: "9rem", md: "7.5rem", base: "6rem" }}
        px="1.5rem"
        display={"grid"}
        placeContent={"center"}
      >
        <Flex
          maxW={"90rem"}
          px="1.5rem"
          flexDir={{ base: "column" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          scale={0.8}
          mb="4rem"
        >
          <Text fontWeight={"600"} fontSize={{ lg: "52px", base: "32px" }}>
            Meet Our Beautiful Team
          </Text>
          <SimpleGrid columns={{ sm: 2, lg: 4 }} gap={4}>
            {[
              {
                image: "./adu.jpeg",
                title: "CEO & Founder",
                name: "Olamide Adu",
              },
              {
                image: "./fis.jpeg",
                title: "CTO & Founder",
                name: "Adesuyi Fisola",
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
              <Box minWidth={"10rem"} key={`about-index-${index}`}>
                <Grid templateRows="repeat(4, 1fr)" templateColumns="1fr">
                  <GridItem
                    rowStart={1}
                    rowSpan={4}
                    bg="papayawhip"
                    zIndex={1}
                    colStart={1}
                  >
                    <Image src={elem.image} alt="" />
                  </GridItem>
                  <GridItem
                    rowStart={4}
                    rowSpan={1}
                    h="50px"
                    zIndex={3}
                    colStart={1}
                  >
                    <Box
                      margin={"0.5rem 1.5rem"}
                      padding="0.5rem"
                      bg="white"
                      textAlign={"center"}
                    >
                      <Text fontWeight={600}>{elem.name}</Text>
                      <Text>{elem.title}</Text>
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            ))}
          </SimpleGrid>
          <Box maxW="614px" mx="auto" mt="2rem">
            <Text mt="1rem" lineHeight={{ lg: 1.6, base: 1.4 }}>
              <span style={{ fontWeight: 700 }}>Olamide Adu</span> is a
              Consulting Data Scientist with a background in forest and nature
              management. He holds an Erasmus Mundus Joint Master’s in
              Sustainable Forest and Nature Management. With expertise in data
              analysis and sustainability consulting, he helps small and
              medium-sized businesses implement data-driven strategies to
              minimize environmental impact and optimize resource efficiency.
              <br />
              <span style={{ fontWeight: 600 }}>
                <Link href="https://www.linkedin.com/in/olamide-adu">
                  contact: olamideadu@gmail.com
                </Link>
              </span>
            </Text>
            <Text mt="1rem" lineHeight={{ lg: 1.6, base: 1.4 }}>
              <span style={{ fontWeight: 700 }}>Adesuyi Fisola</span> is a
              software engineer with a unique blend of academic background and
              hands-on experience. My journey through the tech landscape has
              been driven by an unwavering passion for building scalable
              software and bringing products to life for people to use.
              Transitioning into software engineering was a natural step for me,
              fuelled by my love for developing innovative solutions and
              continuously learning new technologies. My academic pursuits in
              nature management and forest ecosystems have instilled a keen
              analytical mindset, which I apply to my software development role.
              This unique educational background, paired with hands-on Ruby on
              Rails expertise, enables me to contribute meaningfully to our
              projects.
              <br />
              <span style={{ fontWeight: 600 }}>
                <Link href="https://www.linkedin.com/in/fisolaadesuyi/">
                  contact: adesuyifisola@gmail.com
                </Link>
              </span>
            </Text>
            <Text mt="1rem" lineHeight={{ lg: 1.6, base: 1.4 }}>
              <span style={{ fontWeight: 700 }}> Oki Ayobami</span> is a
              proficient software engineer, with over 8 years of experience
              crafting innovative solutions and demystifying complex problems in
              the world of blockchain.
              <br />
              <span style={{ fontWeight: 600 }}>
                <Link href="https://www.linkedin.com/in/xlassix/">
                  contact: awhy14539@gmail.com{" "}
                </Link>
              </span>
            </Text>

            <Text mt="1rem" lineHeight={{ lg: 1.6, base: 1.4 }}>
              <span style={{ fontWeight: 700 }}>Meshach Aderele</span> is a PhD
              Fellow at Aarhus University, where he focuses on applying modern
              technologies to promote environmental sustainability. He was
              awarded the prestigious Mastercard Foundation Scholarship at the
              American University of Beirut. With extensive experience in
              digital product design and strategy, he combines technology and
              sustainability to drive impactful solutions.
              <br />
              <span style={{ fontWeight: 600 }}>
                <Link href="https://www.linkedin.com/in/aderelemeshach/">
                  contact: meshach.aderele@agro.au.dk{" "}
                </Link>
              </span>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box onClick={() => {}}>
        <Footer mt="0rem" />
      </Box>
    </>
  );
}
