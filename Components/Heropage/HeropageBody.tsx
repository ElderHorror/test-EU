import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import BtnBlue from "../Button/BtnBlue";

export default function HeropageBody() {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
      mt={".8rem"}
    >
      <Box alignSelf={"center"}>
        <Flex flexDir={"column"} gap={4}>
          <Box w={{ base: 353, md: 500, lg: 600 }}>
            <Heading
              as={"h1"}
              fontWeight={700}
              fontSize={{ base: "32px", md: "60px", lg: "64px" }}
            >
              Your Gateway to a Seamless Educational Journey
            </Heading>
          </Box>
          <Text fontSize={"20px"}>Empowering your Educational Journey</Text>
          {/* <Box mt={{base:".4rem", lg:"2rem"}}>
              <BtnBlue  btnType="Apply"/>
            </Box> */}
        </Flex>
      </Box>

      <Box margin={{ base: "auto", lg: "none" }}>
        <Image
          src={"/Image.svg"}
          alt={"#"}
          height={600}
          objectFit={"contain"}
        />
      </Box>
    </Flex>
  );
}

export function HeroPageBody2() {
  return (
    <Flex
      maxW={"90rem"}
      px="1.5rem"
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      scale={0.8}
    >
      <Box flexBasis={"45%"}>
        <Flex>
          <Flex
            mb="1.5rem"
            mr="auto"
            bg={"white"}
            rounded="full"
            p="0.5rem"
            color={"#1B2124"}
            boxShadow={"0px 4px 4px #00000040"}
            alignItems={"center"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 22"
              height="30px"
            >
              <rect width="40" height="22" fill="#0E5FDC" rx="11" />
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="m17 15-1-1v-4a1 1 0 0 1 1 0v5Zm3 0-1-1V7a1 1 0 0 1 1 0v8Zm3 0-1-1v-2a1 1 0 0 1 1 0v3Z"
                clip-rule="evenodd"
              />
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M17 5c-2 0-3 1-3 3v6c0 2 1 3 3 3h6c2 0 3-1 3-3V8c0-2-1-3-3-3h-6Zm6 13h-6c-3 0-4-2-4-4V8c0-3 1-4 4-4h6c2 0 4 1 4 4v6c0 2-2 4-4 4Z"
                clip-rule="evenodd"
              />
            </svg>
            <Text mx="0.25rem" fontWeight={"500"} fontSize={"12px"}>
              Grow Your Career, Stress-Free
            </Text>
            <Box margin={"auto 0.5rem"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
                width={"25px"}
              >
                <path
                  stroke="#1B2124"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 9h10m0 0-5 5m5-5L9 4"
                />
              </svg>
            </Box>
          </Flex>
          {/* <Flex></Flex> */}
        </Flex>
        <Text
          color={"white"}
          fontSize={{ lg: "72px", base: "36px", md: "48px" }}
          fontWeight={600}
          letterSpacing={"-2px"}
          lineHeight={"1.05"}
          textShadow={"0px 4px 4px #00000040"}
          mb="1.2rem"
        >
          <span>Build a Great Career With</span>
          <span style={{ color: "#F69127" }}> Our Support</span>
          <span>.</span>
        </Text>
        <Text
          color={"#E4E4E4"}
          lineHeight={"1.5"}
          fontSize={{ lg: "20px", base: "16px", md: "18px" }}
          textShadow={"0px 4px 4px #00000040"}
        >
          EU StudyAssist will support your educational success through
          trainings, educational loans and consulting services.
        </Text>
        <Button
          boxShadow={"0px 4px 4px #00000040"}
          variant={"fox"}
          py={"1.45rem"}
          px="2rem"
          my="1.5rem"
        >
          Learn More
        </Button>
        <Text color={"#F69127"} fontWeight={"700"} fontSize={"42px"}>
          10+
        </Text>
        <Text color={"white"}>People supported in the last two months</Text>
      </Box>

      <Box
        flexBasis={"50%"}
        fontSize={"1rem"}
        borderRadius={"8px"}
        overflow={"hidden"}
        alignSelf={"center"}
        justifySelf={"center"}
      >
        <Image
          marginLeft={"auto"}
          borderRadius={"8px"}
          border={"none"}
          src={"/Image.jpg"}
          alt={"#"}
          objectFit={"contain"}
        />
      </Box>
    </Flex>
  );
}
