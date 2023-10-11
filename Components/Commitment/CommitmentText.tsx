import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import HeadingProp from "../Heading/HeadingProp";
import BtnYellow from "../Button/BtnYellow";

export default function CommitmentText() {
  return (
    <Box w={600}  display={{base:"grid", md:"grid",lg:"block"}} placeItems={"center"}>
      <Flex flexDir={"column"} gap={5}>
        <Box w={{base:300, md:400, lg:600}}>
          <HeadingProp textt="Commitment" />
        </Box>
         <Box w={{base:330, md:500, lg:700 }}  >
          <Text textAlign={{base:"center", md:"left", lg:"left"}} fontSize={"18px"} lineHeight={"32px"}>At EUStudyAssist, our goal is to support you in achieving your financial objectives. We are committed to providing the financial assistance you need to thrive on your educational journey. With EUStudyAssist, you can focus on your education, confident that your financial goals are within reach</Text>
        </Box>

        <Box w={{base:330, md:500, lg:700 }} display={{base:"grid", md:"grid", lg:"block"}} placeItems={"center"}>
           <BtnYellow />
        </Box>
      </Flex>
    </Box>
  )
}
