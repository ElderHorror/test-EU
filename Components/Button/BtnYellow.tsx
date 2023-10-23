import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js"

export default function BtnYellow() {
  return (
    <>
      <Button py={"1.7rem"} px={"1.7rem"}  bgColor={"rgba(252, 201, 68, 1)"} borderRadius={"50px"} position={"relative"} fontSize={"18px"} color={"white"} rightIcon={<ArrowForwardIcon />} 
      >
        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSeLVRSChFawU5H543BkRzoPgie5vwwqMMUDRAvM6cz5RlRaEQ/viewform"}>
        Apply
        </Link>
        </Button>
    </>
  )
}
