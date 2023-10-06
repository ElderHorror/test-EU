
import { Box, Image } from "@chakra-ui/react";


export default function NavbarLogo() {
  return (
    <Box>
      <Image
       src={"/Logo.svg"}
       alt={"#"}
       objectFit={"contain"}
       width={"223px"}
       height={"36px"}
      />
    </Box>
  )
}
