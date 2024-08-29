import { Box, Flex, Text, Image, Button, AspectRatio } from "@chakra-ui/react";
import CommitmentText from "../../../Components/Commitment/CommitmentText";
import GridComp from "../../../Components/Commitment/GridComp";
import Link from "next/link";

export function CommitmentOld() {
  return (
    <Box
      py={{ base: "2rem", lg: "7rem" }}
      id="Commitment"
      display={"grid"}
      placeContent={"center"}
      px="1rem"
    >
      <Flex
        flexDir={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: 19, md: 6, lg: 14 }}
        justifyContent={"space-between"}
      >
        <Box alignSelf={"center"}>
          <GridComp />
        </Box>
        <Box alignSelf={"center"}>
          <CommitmentText />
        </Box>
      </Flex>
    </Box>
  );
}

const data = [
  {
    image: "00.png",
    title: "R For Research",
    subTitle:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. ",
    isDisabled: false,
    link: "/courses/01",
  },
  {
    image: "00.png",
    title: "Python For Research",
    subTitle:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. ",
    isDisabled: true,
    link: "",
  },
  {
    image: "00.png",
    title: "GIS For Research",
    subTitle:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. ",
    isDisabled: true,
    link: "",
  },
];

interface IProp {
  data: {
    image: string;
    title: string;
    subTitle: string;
    isDisabled: boolean;
    link: string;
  };
}

export function Card(prop: IProp) {
  return (
    <Box
      borderRadius={"8px"}
      p="1.5rem"
      bg={"white"}
      flexDirection={"column"}
      flexBasis={{ base: "100%", lg: "32.5%" }}
      maxW={{ base: "35rem", lg: "30rem" }}
      minW={"22.5rem"}
      cursor={prop.data.isDisabled ? "not-allowed" : "pointer"}
      _hover={{ background: prop.data.isDisabled ? "#FeFeFe" : "white" }}
    >
      <Link href={prop.data.link}>
        <AspectRatio ratio={1.6296} maxW={"35rem"}>
          <Image
            borderRadius="8px"
            alt="#"
            src={prop.data.image}
            objectPosition={"0px 0px"}
            objectFit="cover"
          />
        </AspectRatio>
        <Text
          fontWeight={600}
          my="0.5rem"
          fontSize={"1.6rem"}
          letterSpacing={"-1px"}
        >
          {prop.data.title}
        </Text>
        <Text fontSize={"1.15rem"} lineHeight={"1.4rem"}>
          {prop.data.subTitle}
        </Text>
        <Flex
          cursor={prop.data.isDisabled ? "not-allowed" : "pointer"}
          alignItems={"center"}
          width={"10rem"}
          alignSelf={"flex-start"}
          justifySelf={"flex-start"}
        >
          <Text
            color={"#0E5FDC"}
            marginRight={"0.75rem"}
            fontWeight={600}
            my="0.75rem"
          >
            Learn More
          </Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={"24px"}
          >
            <path
              fill="#0E5FDC"
              fill-rule="evenodd"
              d="M11 12a22 22 0 0 0 0 5l1 1h2l6-4 1-1a2 2 0 0 0 0-2h-1v-1l-6-4h-1l-2 1v5Zm-6-2-2 2 2 2 3-1 1-1-1-1-3-1Z"
              clip-rule="evenodd"
            />
          </svg>
        </Flex>
      </Link>
    </Box>
  );
}

export default function Commitment() {
  return (
    <Box
      py={{ base: "2rem", lg: "7rem" }}
      id="Commitment"
      display={"grid"}
      placeContent={"center"}
      px="1.5rem"
      bg="#F4F4F4"
      // maxW={"90rem"}
      // maxH={"calc(100vh - 72px)"}
      h="100%"
    >
      <Box>
        <Text
          color={"black"}
          fontWeight={600}
          fontSize={"2.5rem"}
          textAlign={"center"}
          marginY={"0.5rem"}
        >
          Our Training Programs
        </Text>
        <Text
          color={"#2F3540"}
          textAlign={"center"}
          fontSize={"18px"}
          lineHeight={1.75}
          maxW="45rem"
          margin={"auto"}
          mb="2.5rem"
        >
          The training programs at EU StudyAssist spans across education,
          technology, career etc. It can be in form of a bootcamp or standalone
          course.
        </Text>
      </Box>

      <Flex
        gap="1rem"
        flexFlow={"row wrap"}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        {data.map((elem) => {
          return <Card data={elem} key={elem.title} />;
        })}
      </Flex>
    </Box>
  );
}

const datax = [
  {
    image: "01.jpg",
    title: "Climate change modeling: Impact assessment on forest ecosystems",
    subTitle:
      "We specialize in assessing the impacts of climate change on forest ecosystems, providing critical insights to support adaptive management and conservation strategies. Our services include Climate Scenario Analysis, Spatial Distribution Modeling and Vulnerability Assessment",
    isDisabled: true,
    link: "",
  },
  {
    image: "02.jpg",
    title: "Forest inventory analysis",
    subTitle:
      "Our forest inventory analysis services are designed to provide detailed, data-driven insights into forest composition, health, and dynamics. Our key services include: Biomass Estimation, Forest Health Assessment, Forest Growth Estimation and Prediction and Ecological Assessment",
    isDisabled: true,
    link: "",
  },
  {
    image: "03.jpg",
    title: "Training and Workshops",
    subTitle:
      "We offer tailored training and workshops designed to enhance the skills and knowledge of professionals in the fields of R programming, Python, and Geographic Information Systems (GIS).",
    isDisabled: true,
    link: "",
  },
];

export function Consulting() {
  return (
    <Box
      py={{ base: "2rem", lg: "7rem" }}
      id="Consulting"
      display={"grid"}
      placeContent={"center"}
      px="1.5rem"
      bg="#F4F4F4"
      // maxW={"90rem"}
      // maxH={"calc(100vh - 72px)"}
      // h="100%"
    >
      <Box>
        <Text
          color={"black"}
          fontWeight={600}
          fontSize={"2.5rem"}
          textAlign={"center"}
          marginY={"0.5rem"}
        >
          Our Consulting Services
        </Text>
        <Text
          color={"#2F3540"}
          textAlign={"center"}
          fontSize={"18px"}
          lineHeight={1.75}
          maxW="45rem"
          margin={"auto"}
          mb="2.5rem"
        >
          We offer a comprehensive suite of services tailored to support
          sustainable management of forest ecosystems and environmental
          resources.
        </Text>
      </Box>

      <Flex
        gap="1rem"
        flexFlow={"row wrap"}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        {datax.map((elem) => {
          return <Card data={elem} key={elem.title} />;
        })}
      </Flex>
    </Box>
  );
}
