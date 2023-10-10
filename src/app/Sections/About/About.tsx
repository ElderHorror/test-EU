import { Box, Flex, Image, Text } from "@chakra-ui/react";
import HeadingProp from "../../../../Components/Heading/HeadingProp";


export default function About() {
  return (
    <Box py={"7rem"} >
       <Flex justifyContent={"space-between"}>
         <Box>
            <Flex flexDir={"column"}  gap={10}>
                <Box w={400}>
                    <HeadingProp textt="About EU Study Assist" />
                </Box>

                <Box w={{base:350, md:450, lg: 600}}>
                   <Text fontSize={"18px"} lineHeight={"36px"}>EUStudyAssist exists to empower scholarship recipients during the pre-study period when stipends have yet to materialize. Our commitment is to eliminate financial barriers that hinder academic progress. We believe in equal educational opportunities for all and provide not just financial support, but also pathways to realizing educational dreams, making the journey to Europe stress-free.</Text>
                </Box>
            </Flex>
         </Box>

         <Box borderRadius={"30px"} display={{base:"none", md:"none", lg:"block"}}>
            <Image 
             alt={"about Image"}
             src={"/AboutImg.svg"}
             objectFit={"contain"}
            />
         </Box>
       </Flex>
    </Box>
  )
}
