import { Box, Flex } from "@chakra-ui/react";
import CommitmentText from "../../../../Components/Commitment/CommitmentText";
import GridComp from "../../../../Components/Commitment/GridComp";

export default function Commitment() {
  return (
    <Box mt={"7rem"} mb={'4rem'}>
      <Flex justifyContent={"space-between"}>
        <Box alignSelf={"center"}>
          <GridComp />
        </Box>
        <Box>
           <CommitmentText /> 
        </Box>
      </Flex>
    </Box>
  )
}
