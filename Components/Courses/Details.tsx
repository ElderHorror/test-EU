import {} from "@chakra-ui/next-js";
import {
  AspectRatio,
  Box,
  Flex,
  SimpleGrid,
  Text,
  Image,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { List } from "phosphor-react";

type CoursesHeroProps = {
  imgSrc: string;
};

export default function CoursesDetails(props: CoursesHeroProps) {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="2rem" mt="3rem" px={{base: ".5rem"}}>
        <Box position={"relative"}>
          <AspectRatio ratio={1}>
            <Image
              borderRadius="8px"
              src={props.imgSrc}
              width={"100"}
              height={"100"}
              alt="Event Image"
              objectFit="cover"
            />
          </AspectRatio>
        </Box>
        <Box bg="white" maxH="100%">
          <Box>
            <Text
              color="#11297D"
              fontSize="2rem"
              fontWeight="700"
              lineHeight="1"
              letterSpacing="-2px"
              textTransform="capitalize"
              pb="1rem"
              textAlign="center"
            >
              Course Overview
            </Text>
            <Text
              fontSize={{base: "1.5rem", lg: "4.0rem"}}
              fontWeight="700"
              lineHeight={{base: "1.3", lg: "1.1"}}
              letterSpacing="-1px"
              textTransform="capitalize"
              pb="1rem"
              sx={{
                wordSpacing: ["6px", "4px" ]
              }}
            >
              Discover how R can elevate your research capabilities
            </Text>
            <Text
                w={{lg: "90%"}}
                lineHeight={{base: "1.5"}}
                fontFamily="sans-seriff"
                fontSize="1.1rem"
                fontStyle="normal"
                fontWeight={400}
                >
              This course covers essential concepts in data science, focusing on
              R programming, Git version control, and GitHub collaboration.
              Participants will learn data manipulation, statistical analysis,
              and data visualization in R, alongside mastering Git for version
              control. By the end, they&apos;ll efficiently track changes,
              collaborate, and manage projects on GitHub.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
      <Box mt="2.5rem">
        <Text
          mx="auto"
          fontSize={{base: "1.5rem", lg: "3rem"}}
          fontWeight={700}
          lineHeight={{base: "1.3", lg: "1.1"}}

          maxW="45rem"
          textAlign={"center"}
          letterSpacing={"-1px"}
          sx={{
            wordSpacing: ["6px", "4px" ]
          }}
        >
          What you will learn in this R for Research bootcamp
        </Text>
        <Box mx="auto" maxW={"50rem"}>
          <UnorderedList
            mt="2rem"
            styleType={"' '"}
            sx={{
              li: {
                fontWeight: "500",
                padding: "1rem",
                bg: "rgba(147, 151, 169, 0.06)",
                border: "1px solid #FFF",
                mb: "0.25rem",
              },
            }}
          >
            <ListItem>Foundations</ListItem>
            <ListItem>Functions </ListItem>
            <ListItem>Import/Export Data </ListItem>
            <ListItem>Exploratory Data Analysis </ListItem>
            <ListItem>Inferential Statistics with R </ListItem>
            <ListItem>Connect Codebase to GitHub </ListItem>
            <ListItem>Git/GitHub Collaboration </ListItem>
            <ListItem>Reproducible Research With Quarto </ListItem>
            <ListItem>Capstone Project </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}
