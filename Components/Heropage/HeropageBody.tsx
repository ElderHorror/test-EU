import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import BtnBlue from "../Button/BtnBlue";



export default function HeropageBody() {
  return (
    <Box>
      <Flex flexDir={{ base:"column", lg:"row"}} justifyContent={"space-between"} gap={{base:1, lg:"none"}} mt={".8rem"} >
        <Box alignSelf={"center"}>
          <Flex flexDir={"column"} gap={4}>
            <Box w={{base:353, md:500, lg:600}} >
              <Heading  fontWeight={700} fontSize={{base:"54px", md:"64px", lg:"70px"}} as={"h1"}>Your Gateway To A Seamless Journey</Heading>
            </Box>
            <Text fontSize={"20px"} >Empowering your Educational Journey</Text>
             <Box mt={{base:".4rem", lg:"2rem"}}>
              <BtnBlue  btnType="Apply"/>
            </Box>
          </Flex>
        </Box>

        <Box margin={{base:"auto", lg:"none"}} >
            <Image  
             src={"/Image.svg"}
             alt={"#"}
             height={600}
             objectFit={"contain"}
            />
        </Box>
      </Flex>
    </Box>
  )
}
