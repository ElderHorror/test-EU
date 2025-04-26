"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Link,
} from "@chakra-ui/react";

export default function LoanApplication() {
  return (
    <Box bg="white" py="6rem">
      <Container maxW="40rem">
        {/* Main Content Container */}
        <VStack spacing="3rem" align="stretch">
          {/* Main Heading */}
          <Heading
            fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
            fontWeight={600}
            color="black"
            textAlign="center"
          >
            Loan Application
          </Heading>

          {/* Who Can Apply Section */}
          <VStack spacing="0.8rem" align="flex-start" maxW="800px">
            <Heading
              fontSize={{ base: "1.5rem", md: "1.75rem", lg: "1.75em" }}
              fontWeight={700}
              color="black"
            >
              Who Can Apply?
            </Heading>

            <Text
              color="#2F3540"
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="1.8"
            >
              <Text
                as="span"
                color="black"
                fontWeight={600}
                mb="0.6rem"
                display="block"
              >
                Our loan service is available to:
              </Text>
              Students enrolled in an international academic program, especially
              recipients of the ERASMUS MUNDUS scholarships.
            </Text>
          </VStack>

          {/* How to Apply Section */}
          <VStack spacing="0.8rem" align="flex-start" maxW="800px">
            <Heading
              fontSize={{ base: "1.5rem", md: "1.75rem", lg: "1.75em" }}
              fontWeight={700}
              color="black"
            >
              How to Apply?
            </Heading>

            <Text
              color="#2F3540"
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="1.8"
              mb="1rem"
            >
              Applying for our loan service is simple and quick:
            </Text>

            {/* Numbered List */}
            <List spacing="1.5rem" styleType="decimal" pl="1rem">
              {/* Step 1 */}
              <ListItem>
                <Text
                  color="#2F3540"
                  fontSize={{ base: "1rem", md: "1rem" }}
                  lineHeight="1.8"
                >
                  <Text
                    as="span"
                    color="black"
                    fontWeight={600}
                    display="inline"
                  >
                    Fill Out the Online Application:
                  </Text>{" "}
                  Provide basic details about your study program and financial
                  needs.{" "}
                  <Link color="#0E5FDC" href="#">
                    Click here
                  </Link>
                </Text>
              </ListItem>

              {/* Step 2 */}
              <ListItem>
                <Text
                  color="#2F3540"
                  fontSize={{ base: "1rem", md: "1rem" }}
                  lineHeight="1.8"
                >
                  <Text
                    as="span"
                    color="black"
                    fontWeight={600}
                    display="inline"
                  >
                    Submit Required Documents:
                  </Text>{" "}
                  You will be asked to upload the following document:
                </Text>
                <UnorderedList pl="2rem" mt="0.5rem" spacing="2rem">
                  <ListItem>A PDF of your passport data page</ListItem>
                  <ListItem>A PDF of the visa page of your passport</ListItem>
                  <ListItem>Your admission letter</ListItem>
                  <ListItem>
                    Your student agreement or scholarship contract (signed by
                    both parties)
                  </ListItem>
                  <ListItem>Confirmation of award letter</ListItem>
                </UnorderedList>
              </ListItem>

              {/* Step 3 */}
              <ListItem>
                <Text
                  color="#2F3540"
                  fontSize={{ base: "1rem", md: "1rem" }}
                  lineHeight="1.8"
                >
                  <Text
                    as="span"
                    color="black"
                    fontWeight={600}
                    display="inline"
                  >
                    Guarantor:
                  </Text>{" "}
                  Provide the contact details, and LinkedIn profile of a
                  guarantor. Your guarantor has to be an ex-ERASMUS recipient or
                  current recipient in their first or second year. Your
                  guarantor must be available for a meeting.
                </Text>
              </ListItem>

              {/* Step 4 */}
              <ListItem>
                <Text
                  color="#2F3540"
                  fontSize={{ base: "1rem", md: "1rem" }}
                  lineHeight="1.8"
                >
                  <Text
                    as="span"
                    color="black"
                    fontWeight={600}
                    display="inline"
                  >
                    Get Approved:
                  </Text>{" "}
                  Once approved, funds will be paid directly to the vendor,
                  i.e., the landlord, or airline. We advise that accommodation
                  should be managed by organizations or associations rather than
                  private individuals. Dealing with private individuals takes
                  longer time before the payment is processed, as due diligence
                  must be taken. For settlement allowance, once you have a bank
                  account operated by Fintechs' the settlement allowance would
                  be sent to it. If you prefer a proxy, they must be available
                  for a meeting before fund are discharged. Fintech
                  organizations such as Revolut, N26, Zen, and Wise (Formerly
                  TransferWise) are easier to open compared to traditional banks
                  that takes long processing time.
                </Text>
              </ListItem>
            </List>
          </VStack>

          {/* Apply Button */}
          <Button
            bg="#0E5FDC"
            color="white"
            size="md"
            _hover={{ bg: "#0B4DB0" }}
            px="1.1rem"
            py="1.5rem"
            fontSize="1rem"
            w="20%"
          >
            Apply Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
