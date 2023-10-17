
import { Box, Image } from "@chakra-ui/react";


export default function NavbarLogo() {
  return (
    <Box>
      <Image
       src={"/Logo.svg"}
       alt={"#"}
       objectFit={"contain"}
       width={{base:"170px", lg:"223px"}}
       height={"36px"}
      />
    </Box>
  )
}
