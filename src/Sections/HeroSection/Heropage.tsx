import { Box } from "@chakra-ui/react";
import HeropageBody, {
  HeroPageBody2,
} from "../../../Components/Heropage/HeropageBody";

export default function Heropage() {
  return (
    <Box
      bgColor={"#0E5FDC"}
      pt={"9rem"}
      px="1rem"
      id="Heropage"
      pb={{ base: "2rem", lg: "7rem" }}
      //  margin={'auto'}
      display={"grid"}
      placeContent={"center"}
      // maxH={"calc(100vh - 72px)"}
      // h="100%"
    >
      {/* <HeropageBody /> */}
      <HeroPageBody2 />
    </Box>
  );
}
