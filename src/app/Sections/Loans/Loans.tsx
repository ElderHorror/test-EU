import { Box, Container, Heading, Text } from "@chakra-ui/react";
import LoansListCarousel from "../../../../Components/Loans/LoansListCarousel";


export default function Loans() {
  return (
    <Container maxW={'7xl'}>
      <Box py={"7rem"}
      // display={'grid'} placeContent={'center'}
      // margin={'auto'}
      // bgColor={'red'}
      // border={'1px solid '}
      >
        <Box>
          <Heading color={"rgba(17, 41, 125, 1)"} textAlign={{ base: "left", md: "left", lg: "left" }} fontWeight={700} fontSize={{ base: "42px", md: "50px", lg: "64px" }} lineHeight={{ base: "40px", lg: "80.64px" }}>Our Loan Service</Heading>
        </Box>

        <Box id="loan_service">
          <Text fontWeight={500} fontSize={"18px"} lineHeight={"32px"} color={"rgba(0, 0, 0, 0.6)"}>Empowering Your Educational Future with Financial Solutions </Text>
        </Box>
        <LoansListCarousel />
      </Box>
    </Container>
  )
}
