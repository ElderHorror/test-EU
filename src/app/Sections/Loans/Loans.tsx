import { Box, Heading, Text } from "@chakra-ui/react";
import LoansListCarousel from "../../../../Components/Loans/LoansListCarousel";


export default function Loans() {
  return (
    <Box py={"7rem"} >
       <Box>
         <Heading color={"rgba(17, 41, 125, 1)"} textAlign={{base:"left", md:"left", lg:"left"}} fontWeight={700} fontSize={{base:"42px", md:"50px", lg:"64px"}}  lineHeight={{base:"40px",lg:"80.64px"}}>Our Loan Service</Heading>
       </Box>

       <Box>
        <Text fontWeight={500} fontSize={"18px"} lineHeight={"32px"} color={"rgba(0, 0, 0, 0.6)"}>Empowering Your Eductaional Future with Financial Solutions </Text>
       </Box>

       <LoansListCarousel />
    </Box>
  )
}
