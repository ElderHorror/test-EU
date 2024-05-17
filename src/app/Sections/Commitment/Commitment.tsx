import { Box, Flex } from "@chakra-ui/react";
import CommitmentText from "../../../../Components/Commitment/CommitmentText";
import GridComp from "../../../../Components/Commitment/GridComp";

export default function Commitment() {
  return (
    <Box py={{base:"2rem", lg:"7rem"}} id="Commitment"  display={'grid'} placeContent={'center'} px="1rem">
      <Flex flexDir={{base:"column", md:"column", lg:"row"}} gap={{base:19, md:6, lg:14}} justifyContent={"space-between"}>
        <Box alignSelf={"center"}>
          <GridComp />
        </Box>
        <Box  
          alignSelf={"center"}>
           <CommitmentText /> 
        </Box>
      </Flex>
    </Box>
  )
}
