import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Horse, Ruler, SunHorizon, Target } from 'phosphor-react'



export default function ProsGrid() {
  return (
    <SimpleGrid spacing={10} columns={{ base: 1, md: 2, lg: 2 }} px="0.5rem">
      <Flex gap={{ base: 3, lg: 7 }} >
        <Box alignSelf={"center"} p={"25px"} bgColor={"rgba(52, 97, 255, 1)"} borderRadius={"24px"}>
          <SunHorizon size={35} color="#fcfcfc" />
        </Box>


        <Flex flexDir={"column"} gap={3} justifyContent={{ sm: "center", md: "center" }}>
          <Box>
            <Heading fontSize={{ base: "20px", lg: "37px" }} marginRight={"0.5rem"}>Expand Scholarship Accessibilty</Heading>
          </Box>
          <Box maxW={{ base: "234px", lg: "432px" }} display={{ base: "none", lg: "block" }}>
            <Text fontSize={{ base: "10.31px", lg: "16px" }}>WE meet with you to learn about your business, your goals and your target audience</Text>
          </Box>
        </Flex>

      </Flex>

      <Flex gap={{ base: 3, lg: 7 }} >
        <Box alignSelf={"center"} p={"25px"} bgColor={"rgba(52, 97, 255, 1)"} borderRadius={"24px"}>
          <Horse size={35} color="#fcfcfc" />
        </Box>
        <Flex flexDir={"column"} gap={3} justifyContent={{ sm: "center", md: "center" }}>
          <Box>
            <Heading fontSize={{ base: "20px", lg: "37px" }} marginRight={"0.5rem"}>Personalized Financial Guidance</Heading>
          </Box>
          <Box maxW={{ base: "234px", lg: "432px" }} display={{ base: "none", lg: "block" }}>
            <Text fontSize={{ base: "10.31px", lg: "16px" }}>We develop a customized marketing strategy based on your unique needs and goals</Text>
          </Box>
        </Flex>
      </Flex>

      <Flex gap={{ base: 3, lg: 7 }} >
        <Box alignSelf={"center"} p={"25px"} bgColor={"rgba(52, 97, 255, 1)"} borderRadius={"24px"}>
          <Target size={35} color="#fcfcfc" />
        </Box>

        <Flex flexDir={"column"} gap={3} justifyContent={{ sm: "center", md: "center" }}>
          <Box>
            <Heading fontSize={{ base: "20px", lg: "37px" }} marginRight={"0.5rem"}>Empowerment Through Education</Heading>
          </Box>
          <Box maxW={{ base: "234px", lg: "432px" }} display={{ base: "none", lg: "block" }}>
            <Text fontSize={{ base: "10.31px", lg: "16px" }}>We execute our strategy using the latest client marketing tools and techniques</Text>
          </Box>
        </Flex>

      </Flex>
      <Flex gap={{ base: 3, lg: 7 }}>
        <Box alignSelf={"center"} p={"25px"} bgColor={"rgba(52, 97, 255, 1)"} borderRadius={"24px"}>
          <Ruler size={35} color="#fcfcfc" />
        </Box>

        <Flex flexDir={"column"} gap={3} justifyContent={{ sm: "center", md: "center" }}>
          <Box>
            <Heading fontSize={{ base: "20px", lg: "37px" }} marginRight={"0.5rem"}>Advocate For Equitable Education</Heading>
          </Box>
          <Box maxW={{ base: "234px", lg: "432px" }} display={{ base: "none", lg: "block" }}>
            <Text fontSize={{ base: "10.31px", lg: "16px" }}>We track the results of our compaigns so that we can make adjustments as needed</Text>
          </Box>
        </Flex>
      </Flex>
    </SimpleGrid>
  )
}
