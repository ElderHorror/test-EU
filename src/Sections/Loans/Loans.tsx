import { Box, Container, Heading, Text } from "@chakra-ui/react";
import LoansListCarousel from "../../../Components/Loans/LoansListCarousel";

export default function Loans() {
  return (
    <Box
      mt={{ base: "2rem ", lg: "0rem" }}
      margin={"auto"}
      width={{ base: "none", lg: "614px" }}
      py={"3rem"}
      px="1rem"
    >
      <Box>
        <Heading
          color={"rgba(17, 41, 125, 1)"}
          textAlign={{ base: "center", md: "left", lg: "left" }}
          fontWeight={700}
          fontSize={{ base: "32px", md: "50px", lg: "64px" }}
          lineHeight={{ base: "40px", lg: "80.64px" }}
        >
          Our Loan Service
        </Heading>
      </Box>

      <Box id="loan_service">
        <Text
          fontWeight={500}
          fontSize={"18px"}
          lineHeight={"32px"}
          color={"rgba(0, 0, 0, 0.6)"}
        >
          Empowering Your Educational Future with Financial Solutions{" "}
        </Text>
      </Box>
      <LoansListCarousel />
    </Box>
  );
}
