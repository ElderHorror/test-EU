import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Horse, Ruler,  SunHorizon, Target } from 'phosphor-react'



export default function ProsGrid() {
  return (
    <SimpleGrid spacing={10} columns={{base:1,md:2, lg:2}}>
            <Flex gap={7} >
                <Box alignSelf={"center"} p={"25px"} bgColor={"rgba(52, 97, 255, 1)"} borderRadius={"24px"}>
                  <SunHorizon size={35} color="#fcfcfc" />
                </Box>

                <Box>
                    <Flex flexDir={"column"} gap={3}>
                       <Box>
                         <Heading fontSize={{base:"25px", md:"50px", lg:"37px"}}>Expand Scholarship Accessibilty</Heading>
                       </Box>
                       <Box>
                        <Text fontSize={"16px"}>WE meet with you to learn about your busines, your goals and your target audience</Text>
                       </Box>
                    </Flex>
                </Box>
            </Flex>

            <Flex gap={7} >
                <Box alignSelf={"center"} p={"25px"} bgColor={"rgba(52, 97, 255, 1)"} borderRadius={"24px"}>
                  <Horse size={35} color="#fcfcfc" />
                </Box>

                <Box>
                    <Flex flexDir={"column"} gap={3}>
                       <Box>
                         <Heading fontSize={{base:"25px", md:"50px", lg:"37px"}}>Personalized Financial Guidance</Heading>
                       </Box>
                       <Box>
                        <Text fontSize={"16px"}>We develop a customized marketing strategy based on your unique needs and goals</Text>
                       </Box>
                    </Flex>
                </Box>
            </Flex>

            <Flex gap={7} >
                <Box alignSelf={"center"} p={"25px"} bgColor={"rgba(52, 97, 255, 1)"} borderRadius={"24px"}>
                <Target size={35} color="#fcfcfc" />
                </Box>

                <Box>
                    <Flex flexDir={"column"} gap={3}>
                       <Box>
                         <Heading fontSize={{base:"25px", md:"50px", lg:"37px"}}>Empowerment Through Education</Heading>
                       </Box>
                       <Box>
                        <Text fontSize={"16px"}>We execute our strategy using the latest client marketing tools and techniques</Text>
                       </Box>
                    </Flex>
                </Box>
            </Flex>
            <Flex gap={7}>
                <Box alignSelf={"center"} p={"25px"} bgColor={"rgba(52, 97, 255, 1)"} borderRadius={"24px"}>
                <Ruler size={35} color="#fcfcfc" />
                </Box>

                <Box>
                    <Flex flexDir={"column"} gap={3}>
                       <Box>
                         <Heading fontSize={{base:"25px", md:"50px", lg:"37px"}}>Advocate For Equitable Education</Heading>
                       </Box>
                       <Box>
                        <Text fontSize={"16px"}>We track the results of our compaigns so that we can make adjustments as needed</Text>
                       </Box>
                    </Flex>
                </Box>
            </Flex>
    </SimpleGrid>
  )
}
