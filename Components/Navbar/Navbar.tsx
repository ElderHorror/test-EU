import { Box, Container, Flex } from "@chakra-ui/react";
import NavbarLogo from "./NavbarLogo";
import NavbarList from "./NavbarList";
import BtnBlue from "../Button/BtnBlue";


export default function Navbar() {
    const navLink = [
        {
            id:"1",
            navLink:"Home"
        },
        {
            id:"2",
            navLink:"About Us"
        },
        {
            id:"3",
            navLink:"How To Apply"
        },
        {
            id:"4",
            navLink:"Testimonial"
        },
        {
            id:"5",
            navLink:"Contact Us"
        }
    ]
  return (
    <Box borderBottom={"1px solid"} borderColor={"gray.200"}>
     <Container maxW={"7xl"}>
       <Flex justifyContent={"space-between"}  alignItems={"center"} py={"1rem"} as={"nav"}>
         <NavbarLogo />
        
           <Box>
            <NavbarList list={navLink} />
           </Box>
       
          <Box>
            <BtnBlue />
          </Box>
       </Flex>
    </Container>
   </Box>
  )
}
