import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import LoansListCarousel from "../../../Components/Loans/LoansListCarousel";
import Calculator from "../../../Components/calculator/calculator";
import Link from "next/link";

export function LoansOld() {
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

const data = [
  // {
  //   title: "Visa Processing Fee Loan",
  //   subtitle:
  //     "This product is designed to help students cover the expenses related to visa processing, making it hassle-free and worry-free.",
  // },
  {
    title: "Accommodation Payment Loan",
    subtitle:
      "This loan is dedicated to assisting students in securing comfortable living arrangements",
  },
  {
    title: "Flight Expense Loan",
    subtitle:
      "We'll cover your flight fare and ensure that the cost is not a hindrance to fulfilling your study goals.",
  },
  {
    title: "Settler's Safety Net Loan",
    subtitle:
      "Our Settler's Safety Net Loan offers you a financial cushion to cover essential expenses such as initial groceries, transportation an other immediate needs.",
  },
  {
    title: "Self Payment",
    subtitle:
      "We can confidently process all your academic fees with minimal charges, even in the face of banking limitations.",
  },
];

export default function Loans() {
  return (
    <Flex
      id="Loans"
      flexFlow={"row wrap"}
      // placeContent={"center"}
      // px="1.5rem"
      // bg="white"
      // maxW={"90rem"}
    >
      <Box
        flexBasis={{ sm: "100%", lg: "50%" }}
        py={{ base: "2rem", lg: "7rem" }}
      >
        <Box
          marginLeft="auto"
          maxW={{ lg: "45rem", md: "unset" }}
          pl={{ lg: "2rem", md: "0" }}
        >
          <Text
            fontSize={{ lg: "2.5rem", base: "32px" }}
            fontWeight={600}
            textAlign={"center"}
          >
            Our Loan Service
          </Text>
          <Box px={{ base: "1.5rem", lg: "0" }}>
            <Text
              maxW="40rem"
              color="#2F3540"
              fontSize={{ lg: "20px", base: "16px", md: "18px" }}
              lineHeight={{ lg: 1.5, base: 1.4 }}
            >
              We have provided a financial solution to empower your educational
              future. You can use our loan service to meet various educational
              needs so you can focus on studying happily
            </Text>
            <Calculator
              minH={"unset"}
              mt="2rem"
              pr={{ base: "0rem", md: "2rem" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        flexBasis={{ sm: "100%", lg: "50%" }}
        bg="#0E5FDC"
        py={{ base: "2rem", lg: "7rem" }}
        pr={{ base: "0", lg: "2rem" }}
      >
        <Box marginRight="auto" maxW={"45rem"}>
          <Box px="2rem">
            {data.map((elem) => {
              return (
                <Box key={elem.title}>
                  <Flex alignItems={"center"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 22"
                      width={"18px"}
                      transform="scale(0.9) translate(15 -7.5)"
                    >
                      <path fill="#F69127" d="M18 11 0 21V1l18 10Z" />
                    </svg>
                    <Text
                      color={"white"}
                      ml="1.5rem"
                      mb="0.75rem"
                      fontWeight={600}
                      fontSize={{ base: "20px", lg: "1.5rem" }}
                      textShadow={"0px 4px 4px #00000040"}
                    >
                      {elem.title}
                    </Text>
                  </Flex>
                  <Text
                    ml="2.65rem"
                    mb="1.5rem"
                    color={"#E4E4E4"}
                    fontSize={{ base: "16px", lg: "1.1rem" }}
                    textShadow={"0px 4px 4px #00000040"}
                  >
                    {elem.subtitle}
                  </Text>
                </Box>
              );
            })}

            <Flex
              bg="white"
              cursor={"not-allowed"}
              alignItems={"center"}
              width={"10.75rem"}
              my="1.5rem"
              borderRadius={"8px"}
              padding={"0.5rem 1.5rem"}
              alignSelf={"flex-start"}
              justifySelf={"flex-start"}
              // mx="auto"
            >
              <Text
                color={"#0E5FDC"}
                marginRight={"0.75rem"}
                fontWeight={600}
                my="0.75rem"
                mx="0"
                mr="0.2rem"
              >
                Learn More
              </Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width={"24px"}
              >
                <path
                  fill="#0E5FDC"
                  fill-rule="evenodd"
                  d="M11 12a22 22 0 0 0 0 5l1 1h2l6-4 1-1a2 2 0 0 0 0-2h-1v-1l-6-4h-1l-2 1v5Zm-6-2-2 2 2 2 3-1 1-1-1-1-3-1Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
