import { Box, Flex, Image, Text } from "@chakra-ui/react";
import HeadingProp from "../../../Components/Heading/HeadingProp";

export default function About() {
  return (
    <Box
      mt={{ base: "2rem ", lg: "0rem" }}
      margin={"auto"}
      width={{ base: "none", lg: "614px" }}
      py={"7rem"}
      px="1rem"
    >
      <Box
        w={{ base: 330, md: 500, lg: 500 }}
        display={{ base: "block", lg: "none" }}
      >
        <HeadingProp text="About EU Study Assist" />
      </Box>

      <Flex
        flexDir={{ base: "column-reverse", lg: "row" }}
        gap={{ base: 19, md: 6, lg: 9 }}
        justifyContent={{ base: "center", md: "center", lg: "space-between" }}
      >
        <Box mt={{ base: "1rem", lg: "none" }}>
          <Flex flexDir={"column"} gap={10}>
            <Box
              w={{ base: 330, md: 500, lg: 500 }}
              display={{ base: "none", lg: "block" }}
            >
              <HeadingProp text="About EU Study Assist" />
            </Box>
            <Box
              margin={{ base: "auto", lg: "none" }}
              w={{ base: "none", md: 450, lg: 600 }}
            >
              <Text
                textAlign={{ base: "left", md: "left", lg: "left" }}
                fontSize={{ base: "16px", lg: "18px" }}
                lineHeight={{ base: "22.34px", lg: "36px" }}
              >
                EUStudyAssist exists to empower scholarship recipients during
                the pre-study period when stipends have yet to materialize. Our
                commitment is to eliminate financial barriers that hinder
                academic progress. We believe in equal educational opportunities
                for all and provide not just financial support, but also
                pathways to realizing educational dreams, making the journey to
                Europe stress-free.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box mt={{ base: "1rem", lg: "none" }} borderRadius={"30px"}>
          <Image
            alt={"about Image"}
            src={"/AboutImg.svg"}
            objectFit={"contain"}
          />
        </Box>
      </Flex>
    </Box>
  );
}
