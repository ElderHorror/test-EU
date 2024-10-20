"use client";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar/Navbar";
import { useRouter } from "next/navigation";
import Footer from "@/Sections/Footer/Footer";

export default function Courses() {
  const router = useRouter();

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
          px={{ lg: "1.5rem", base: 0 }}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          scale={0.8}
        >
          <Flex
            maxW={"90rem"}
            px={{ lg: "1.5rem", base: 0 }}
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
                <span>Accelerate Your </span>
                <span style={{ color: "#F69127" }}>
                  {" "}
                  Research & Professional Skills
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
                Our training and bootcamp programs are designed to equip
                students, researchers, and professionals with critical technical
                skills to excel in the global landscape. Whether you&apos;re
                seeking to enhance your data science expertise or acquire new
                skills for research, our programs offer personalized, hands-on
                learning experiences. With expert-led sessions, one-on-one
                mentorship, and real-world projects, we ensure participants are
                prepared for immediate academic and professional opportunities.
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
          src={"/training.jpg"}
          alt={"#"}
          minH={{ base: "calc(120vw)", md: "unset" }}
          maxH={"60vh"}
          objectFit={{ md: "contain", base: "cover", lg: "cover" }}
        />
      </Box>
      <Box pt="6rem" pb="2rem" px="1.5rem" bg="#F4F4F4" mb="0">
        <Text
          color={"black"}
          fontWeight={600}
          fontSize={{ lg: "2.5rem", base: "32px" }}
          textAlign={"center"}
          marginY={"0.5rem"}
        >
          Courses
        </Text>
        <Text
          color={"#2F3540"}
          textAlign={"center"}
          fontSize={{ lg: "16px", base: "16px" }}
          lineHeight={{ lg: 1.5, base: 1.2 }}
          maxW="51rem"
          margin={"auto"}
          mb="1.5rem"
        >
          Discover our range of specialized training programs designed to equip
          you with the technical skills and knowledge needed to excel in
          research and professional settings. Each course offers hands-on
          learning, real-world projects, and mentorship from industry experts to
          ensure you&apos;re ready for global opportunities.
        </Text>
      </Box>

      <Box px="1.5rem" pb="5rem" bg="#F4F4F4">
        <Flex maxW={"90rem"} m="auto">
          <Box>
            {[
              {
                name: "Python for Research",
                description:
                  "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
                image: "./pythonR.jpg",
                isDisabled: true,
              },
              {
                name: "R for Research",
                description:
                  "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
                image: "./R.jpg",
                isDisabled: false,
              },
              {
                name: "Data Visualization",
                description:
                  "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
                image: "./data_vs.jpg",
                isDisabled: true,
              },
              {
                name: "GIS Visualization",
                description:
                  "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
                image: "./GIS.jpg",
                isDisabled: true,
              },
              {
                name: "Experimental Design",
                description:
                  "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
                image: "./GIS.jpg",
                isDisabled: true,
              },
            ].map((elem) => (
              <Flex
                px={{ lg: "1.5rem", base: 0 }}
                key={elem.name}
                alignItems={"center"}
                flexDirection={{ lg: "row", base: "column" }}
                py="2.25rem"
              >
                <Box
                  flexBasis={{ lg: "67%", base: "100%" }}
                  px={{ lg: "1.5rem", base: 0 }}
                >
                  <Text fontWeight={"500"} fontSize="24px" my="1rem">
                    {elem.name}
                  </Text>
                  <Text my="1rem">{elem.description}</Text>
                  <Button
                    variant={"primary"}
                    px="1.5rem"
                    my="1rem"
                    isDisabled={elem.isDisabled}
                  >
                    {elem.isDisabled ? "Coming soon" : "Learn More"}
                  </Button>
                </Box>
                <Box ml={{ lg: "2rem", base: "unset" }}>
                  <Image src={elem.image} alt={elem.name} />
                </Box>
              </Flex>
            ))}
          </Box>
        </Flex>
      </Box>
      <Box py="10rem" bg="white" px="1.5rem">
        <Flex
          margin={"auto"}
          maxW={"80rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ lg: "row", base: "column" }}
        >
          <Box flexBasis={{ lg: "40%", base: "100%" }}>
            <Image src="./learn.jpg" alt="" />
          </Box>
          <Box flexBasis={"50%"} ml={{ lg: "5rem", base: 0 }}>
            <Text
              fontWeight={"700"}
              fontSize={{ lg: "32px", base: "25px" }}
              lineHeight={1.5}
              my="1rem"
              mt={{ lg: "0", base: "2rem" }}
            >
              Why learn at EU StudyAssist
            </Text>
            <Text>
              Choosing to learn with EU StudyAssist ensures a personalized,
              high-quality educational experience. Here’s why:
              <UnorderedList>
                <ListItem my="0.75rem">
                  <span style={{ fontWeight: 700, lineHeight: 1.5 }}>
                    Tailored Learning:
                  </span>{" "}
                  Our programs are customized to meet individual needs, whether
                  you&apos;re a student, researcher, or professional.
                </ListItem>
                <ListItem my="0.75rem">
                  <span style={{ fontWeight: 700, lineHeight: 1.5 }}>
                    Expert-Led Training:
                  </span>{" "}
                  Receive mentorship and hands-on instruction from industry
                  experts.
                </ListItem>
                <ListItem my="0.75rem">
                  <span style={{ fontWeight: 700, lineHeight: 1.5 }}>
                    Practical Focus:
                  </span>{" "}
                  Gain real-world skills through projects that mirror global
                  industry and research demands.
                </ListItem>
                <ListItem my="0.75rem">
                  <span style={{ fontWeight: 700, lineHeight: 1.5 }}>
                    Global Perspective:
                  </span>{" "}
                  We focus on bridging the skill gap between non-Western
                  countries and the rest of the world, making you more
                  competitive internationally.
                </ListItem>
              </UnorderedList>
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box py="8rem" bg="#F4F4F4" px="1.5rem">
        <Text
          color={"#2F3540"}
          fontWeight={400}
          fontSize={{ lg: "32px", base: "18px" }}
          lineHeight={{ lg: 1.5, base: 1.2 }}
          maxW="51rem"
          margin={"auto"}
          textAlign={"center"}
          marginY={"0.5rem"}
        >
          With EU StudyAssist, you&apos;re not just learning; you&apos;re
          preparing for global success.
        </Text>
        <Text
          color={"#2F3540"}
          textAlign={"center"}
          fontSize={{ lg: "16px", base: "16px" }}
          lineHeight={{ lg: 1.5, base: 1.2 }}
          maxW="51rem"
          margin={"auto"}
          mb="2.5rem"
          my="1rem"
        >
          <Button variant={"primary"}>Apply Now</Button>
        </Text>
      </Box>
      <Box onClick={() => {}}>
        <Footer mt="0rem" />
      </Box>
    </>
  );
}
