import { Box, Image } from "@chakra-ui/react";

export default function NavbarLogo() {
  return (
    <Box>
      <Image
        src={"/Logo.svg"}
        alt={"#"}
        objectFit={"contain"}
        width={{ base: "140px", lg: "180px" }}
        height={"30px"}
      />
    </Box>
  );
}
