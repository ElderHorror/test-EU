import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export default function BtnYellow() {
  return (
    <>
      <Button py={"1.7rem"} px={"1.7rem"}  bgColor={"rgba(252, 201, 68, 1)"} borderRadius={"50px"} fontSize={"18px"} color={"white"} rightIcon={<ArrowForwardIcon />}>Apply</Button>
    </>
  )
}
