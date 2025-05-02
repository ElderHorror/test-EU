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
              Students enrolled in international academic programs, particularly
              scholarship recipients from notable organizations such as ERASMUS,
              NAWA, DAAD, Danish Government Scholarships, and Italian Government
              Scholarships, among others. In addition, we offer our loan service
              to recipients of graduate and teaching assistantship positions in
              the United States or Canada.
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
              mb={{lg: "1rem"}}
            >
              Applying for our loan service is simple and quick:
            </Text>

            {/* Numbered List */}
            <List spacing={{lg: "1.5rem", base:"1rem"}} styleType="decimal" pl="1rem">
              {/* Step 1 */}
              <ListItem>
                <Text
                  color="#2F3540"
                  fontSize={{ base: "1rem", md: "1rem" }}
                  lineHeight="1.8"
                  textAlign="justify"
                >
                  <Text
                    as="span"
                    color="#2F3540"
                    fontWeight={600}
                    display="inline"
                  >
                    Fill Out the Online Application:
                  </Text>{" "}
                  Provide basic details about your study program and financial
                  needs.{" "}
                  <Link color="#0E5FDC" href="#">
                    Click here to fill to get started with filling the form
                  </Link>
                </Text>
              </ListItem>

              {/* Step 2 */}
              <ListItem>
                <Text
                  color="#2F3540"
                  fontSize={{ base: "1rem", md: "1rem" }}
                  lineHeight="1.8"
                  textAlign="justify"
                >
                  <Text
                    as="span"
                    color="#2F3540"
                    fontWeight={600}
                    display="inline"
                  >
                    Submit Required Documents:
                  </Text>{" "}
                  You will be asked to upload the following document:
                </Text>
                <UnorderedList color="#2F3540" pl="2rem" mt="0.5rem" spacing="0.5rem">
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
                  textAlign="justify"
                >
                  <Text
                    as="span"
                    color="#2F3540"
                    fontWeight={600}
                    display="inline"

                  >
                    Provide Guarantor Details:
                  </Text>{" "}
                  You will need to provide the contact details and LinkedIn
                  profile of a guarantor. Your guarantor must be a recipient of
                  an international scholarship or an assistantship position.
                  Your guarantor must be willing to attend a meeting for the
                  loan.
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
                    color="#2F3540"
                    fontWeight={600}
                    display="inline"
                  >
                    Get Approved:
                  </Text>{" "}
                  Once your application is approved, the funds will be disbursed
                  directly to the vendor, such as your landlord or airline. We
                  recommend that you secure accommodation through organizations
                  or associations rather than private individuals, as private
                  individuals may require additional processing time for
                  payment. For settlement allowances, the funds will be sent to
                  your bank account, which can be operated by Fintech
                  organizations such as Revolut, N26, Zen, and Wise (formerly
                  TransferWise). If you prefer a proxy, they must be available
                  for a meeting before the funds are disbursed.
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
            w={{lg:"20%", base:"50%"}}
          >
            Apply Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
