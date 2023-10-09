import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import HeadingProp from "../Heading/HeadingProp";
import BtnYellow from "../Button/BtnYellow";

export default function CommitmentText() {
  return (
    <Box w={600}>
      <Flex flexDir={"column"} gap={5}>
        <Box>
          <HeadingProp textt="Commitment" />
        </Box>
         <Box w={{base:350, md:500, lg:600 }}>
          <Text fontSize={"18px"} lineHeight={"32px"}>At EUStudyAssist, our goal is to support you in achieving your financial objectives. We are committed to providing the financial assistance you need to thrive on your educational journey. With EUStudyAssist, you can focus on your education, confident that your financial goals are within reach</Text>
        </Box>

        <Box>
           <BtnYellow />
        </Box>
      </Flex>
    </Box>
  )
}
