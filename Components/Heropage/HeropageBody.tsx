import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import BtnBlue from "../Button/BtnBlue";
import { Plus_Jakarta_Sans } from "next/font/google";


export default function HeropageBody() {
  return (
    <>
      <Flex justifyContent={"space-between"} >
        <Box alignSelf={"center"}>
          <Flex flexDir={"column"} gap={4}>
            <Box w={{base:250, md:500, lg:600}} >
              <Heading  fontSize={{base:"30px", md:"50px", lg:"70px"}} as={"h1"}>Your Gateway To a Seamless Journey</Heading>
            </Box>
            <Text>Empowering your Educational Journey</Text>
             <Box mt={{base:".4rem", lg:"2rem"}} display={{base:"none", md:"block", lg:"block"}}>
              <BtnBlue  btnType="Apply"/>
            </Box>
          </Flex>
        </Box>

        <Box display={{base:"none", md:"none", lg:"block"}}>
            <Image  
             src={"/Image.svg"}
             alt={"#"}
             height={600}
             objectFit={"contain"}
            />
        </Box>
      </Flex>
    </>
  )
}
