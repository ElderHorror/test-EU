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
    <Box borderBottom={"1px solid"} bgColor={"white"} zIndex={999} w={"100vw"} borderColor={"gray.200"} position={"fixed"}>
     <Container maxW={"7xl"}>
       <Flex justifyContent={"space-between"}  alignItems={"center"} py={"1rem"} as={"nav"}>
         <NavbarLogo />
           <Box display={{base:"none", md:"none", lg:"block"}}>
            <NavbarList list={navLink} />
           </Box>
       
          <Box display={{base:"none", md:"none", lg:"block"}}>
            <BtnBlue btnType="Apply" />
          </Box>
       </Flex>
    </Container>
   </Box>
  )
}
