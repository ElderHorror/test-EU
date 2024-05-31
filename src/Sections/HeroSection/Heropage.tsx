import { Box } from "@chakra-ui/react";
import HeropageBody from "../../../Components/Heropage/HeropageBody";

export default function Heropage() {
  return (
    <Box
      pt={"5rem"}
      px="1rem"
      id="Heropage"
      pb={{ base: "2rem", lg: "7rem" }}
      //  margin={'auto'}
      display={"grid"}
      placeContent={"center"}
      //  width={'100%'}
      h={"100%"}
    >
      <HeropageBody />
    </Box>
  );
}
