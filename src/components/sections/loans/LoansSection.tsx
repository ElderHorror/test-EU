"use client";
import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import NewCalculator from "../calculator/NewCalculator";

/**
 * Loan service data
 */
const loanServices = [
  {
    title: "Visa Processing Fee Loan",
    subtitle:
      "This product is designed to help students cover the expenses related to visa processing, making it hassle-free and worry-free.",
  },
  {
    title: "Accomodation Payment Loan",
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
      "Our Settler's Safety Net Loan offers you a financial cushion to cover essential expenses such as initial groceries, transportation and other immediate needs.",
  },
  {
    title: "Self Payment",
    subtitle:
      "We can confidently process all your academic fees with minimal charges, even in the face of banking limitations.",
  },
];

/**
 * Loans section component
 * Displays loan services and calculator
 */
export default function LoansSection() {
  return (
    <Flex id="Loans" flexFlow="row wrap">
      {/* Left side - Loan description and calculator */}
      <Box
        flexBasis={{ sm: "100%", lg: "50%" }}
        py={{ base: "2rem" }}
        pt={{ lg: "4rem" }}
        pb={{ lg: "7rem" }}
      >
        <Box
          marginLeft="auto"
          maxW={{ lg: "45rem", md: "unset" }}
          pl={{ lg: "2rem", md: "0" }}
          width="100%"
        >
          <Text
            fontSize={{ lg: "2rem", base: "30px" }}
            fontWeight={700}
            textAlign={{ base: "center", lg: "left" }}
            width="100%"
            mt = {{lg: "4rem", base:"2rem"}}
            maxW="100%"
            mb={{ base: "1rem", lg: "0.5rem" }}
          >
            Our Loan Service
          </Text>
          <Box px={{ base: "1.5rem", lg: "0" }}>
            <Text
              maxW={{ base: "100%", lg: "30rem" }}
              color="#2F3540"
              fontSize={{ lg: "16px", base: "16px", md: "16px" }}
              lineHeight={{ lg: 1.8, base: 1.4 }}
              textAlign={{ base: "center", lg: "left" }}
              mx={{ base: "auto", lg: "0" }}
            >
              We have provided a financial solution to empower your educational
              future. You can use our loan service to meet various educational
              needs so you can focus on studying happily.
            </Text>
            <NewCalculator
              minH="unset"
              mt="2rem"
              pr={{ base: "0rem", md: "2rem" }}
            />
          </Box>
        </Box>
      </Box>

      {/* Right side - Loan services */}
      <Box
        mt = {{base:"4rem"}}
        flexBasis={{ sm: "100%", lg: "50%" }}
        bg="#0E5FDC"
        py={{ base: "3.5rem" }}
        pb={{ lg: "7rem" }}
        pt={{ lg: "4rem" }}
        pr={{ base: "0", lg: "2rem" }}
      >
        <Box marginRight="auto" marginY="auto" maxW="50rem" >
          <Box
           px="2rem"
           py={{base: "4rem", lg:"0rem"}}
           >
            {loanServices.map((service) => (
              <Box key={service.title}>
                <Flex alignItems="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 22"
                    width="18px"
                    style={{ transform: "scale(0.9) translate(15px, -7.5px)" }}
                    aria-hidden="true"
                  >
                    <path fill="#F69127" d="M18 11 0 21V1l18 10Z" />
                  </svg>
                  <Text
                    color="white"
                    ml="1.5rem"
                    mb="0.75rem"
                    fontWeight={600}
                    fontSize={{ base: "20px", lg: "1.5rem" }}
                    textShadow="0px 4px 4px #00000040"
                  >
                    {service.title}
                  </Text>
                </Flex>
                <Text
                  ml="2.65rem"
                  mb="1.5rem"
                  color="#E4E4E4"
                  fontSize={{ base: "16px", lg: "1.1rem" }}
                  textShadow="0px 4px 4px #00000040"
                >
                  {service.subtitle}
                </Text>
              </Box>
            ))}

            <Link href="https://forms.gle/d2T6Fh2rrFJK1JVZA" passHref>
              <ChakraLink _hover={{ textDecoration: "none" }}>
                <Flex
                  bg="white"
                  alignItems="center"
                  width="10%"
                  minWidth={{lg: "12rem", base:"9rem"}}
                  my="1rem"
                  mt="4rem"
                  borderRadius="8px"
                  padding={{ base: "0.3rem 1rem", md: "0.5rem 2rem" }}
                  alignSelf="flex-start"
                  justifySelf="flex-start"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <Text
                    color="#0E5FDC"
                    fontWeight={600}
                    my={{ base: "0.8rem", md: "0.75rem" }}
                    mr={{ base: "0.3rem", md: "0.5rem" }}
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                    whiteSpace="nowrap"
                  >
                    Apply now
                  </Text>
                  <Box
                    as="span"
                    display="inline-block"
                    width={{ base: "20px", md: "24px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      width="100%"
                      aria-hidden="true"
                    >
                      <path
                        fill="#0E5FDC"
                        fillRule="evenodd"
                        d="M11 12a22 22 0 0 0 0 5l1 1h2l6-4 1-1a2 2 0 0 0 0-2h-1v-1l-6-4h-1l-2 1v5Zm-6-2-2 2 2 2 3-1 1-1-1-1-3-1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Box>
                </Flex>
              </ChakraLink>
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
