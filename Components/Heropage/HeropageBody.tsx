import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import BtnBlue from "../Button/BtnBlue";
import { Plus_Jakarta_Sans } from "next/font/google";


export default function HeropageBody() {
  return (
    <>
      <Flex justifyContent={"space-between"} >
        <Box alignSelf={"center"}>
          <Flex flexDir={"column"} gap={4}>
            <Box w={600} >
              <Heading  fontSize={"70px"} as={"h1"}>Your Gateway To a Seamless Journey</Heading>
            </Box>
            <Text>Empowering your Educational Journey</Text>
             <Box mt={"2rem"}>
              <BtnBlue  btnType="Apply"/>
            </Box>
          </Flex>
        </Box>

        <Box>
            <Image  
             src={"/Image.svg"}
             alt={"#"}
             height={500}
             objectFit={"contain"}
            />
        </Box>
      </Flex>
    </>
  )
}
