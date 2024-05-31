import { Box } from "@chakra-ui/react";
import HeadingProp from "../../../Components/Heading/HeadingProp";
import ProsGrid from "../../../Components/ProsComp/ProsGrid";

export default function Pros() {
  return (
    <Box
      mt={"7rem"}
      mb={"3rem"}
      display={"grid"}
      placeContent={"center"}
      px="1rem"
    >
      <Box
        w={{ base: 350, md: 500, lg: 700 }}
        ml={{ base: "1rem", lg: "0rem" }}
        mb={"5rem"}
      >
        <HeadingProp text="Why You should Use EU study assist" />
      </Box>
      <Box>
        <ProsGrid />
      </Box>
    </Box>
  );
}
