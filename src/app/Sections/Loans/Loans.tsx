import { Box, Heading, Text } from "@chakra-ui/react";
import LoansListCarousel from "../../../../Components/Loans/LoansListCarousel";


export default function Loans() {
  return (
    <Box mt={"7rem"} mb={"3rem"}>
       <Box>
         <Heading color={"rgba(17, 41, 125, 1)"} fontWeight={700} fontSize={"64px"} lineHeight={"80.64px"}>Our Loan Service</Heading>
       </Box>

       <Box>
        <Text fontWeight={500} fontSize={"18px"} lineHeight={"32px"} color={"rgba(0, 0, 0, 0.6)"}>Empowering Your Eductaional Future with Financial Solutions </Text>
       </Box>

       <LoansListCarousel />
    </Box>
  )
}
