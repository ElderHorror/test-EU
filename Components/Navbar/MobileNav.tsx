'use client'
import { useState } from 'react'
import { List, X } from 'phosphor-react'
import { Box, Button, Flex } from '@chakra-ui/react'
import NavbarLogo from './NavbarLogo'
import BtnBlue from '../Button/BtnBlue'
import MobileNavProp from './MobileNavProp'
export default function MobileNav() {
    const [isExpanded, setIsExpanded] = useState(false);
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
    <Flex  as={"nav"} py={"1.2rem"} justifyContent={"space-between"} display={{ base: "flex", md: "flex", lg: "none" }} mt={"2rem"} alignItems={"center"} overflow={"hidden"}>
       <Box>
         <NavbarLogo />
       </Box>
       <Box>
       <Button bg={"transparent"} onClick={() => setIsExpanded(!isExpanded)}>
          {!isExpanded && <List size={20} />}
          {isExpanded && <X size={20} />}
        </Button>
        {
          isExpanded &&
          <Flex
            borderTop={"1px"}
            borderColor={"gray.400"}
            as={"ul"}
            mt={"20px"}
            bgColor={"white"}
            flexDir={"column"}
            position={"absolute"}
            width={"100%"}
            left={"0px"}
             listStyleType={"none"}
            >
             <MobileNavProp navLink={navLink} />

            <Box mt={".6rem"} alignSelf={"center"}><BtnBlue btnType='Apply' /></Box>
          </Flex>
        }
       </Box>
    </Flex>
  )
}
