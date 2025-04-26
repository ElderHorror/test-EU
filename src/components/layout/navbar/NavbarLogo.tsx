import { Box, Image } from "@chakra-ui/react";

/**
 * Logo component for the navbar
 */
export default function NavbarLogo() {
  return (
    <Box>
      <Image
        src={"/Logo.svg"}
        alt={"EU Study Assist Logo"}
        objectFit={"contain"}
        width={{ base: "140px", lg: "180px" }}
        height={"30px"}
      />
    </Box>
  );
}
