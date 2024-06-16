"use client";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "@/Sections/Footer/Footer";
import { useRouter } from "next/navigation";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useLocation } from "../../../../Components/hooks";
import PaystackPop from "@paystack/inline-js";

export default function Bootcamp() {
  const router = useRouter();
  const { data, isLoading } = useLocation();
  const toast = useToast();

  return (
    <Box minH="calc(100vh - 30rem)" mt="10rem">
      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <>
          <Container maxW={"90rem"} p="1rem">
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap="2rem" pl={{lg: "2rem"}}>
              <Box
                padding={"1rem"}
                borderRadius={"10px"}
                border="1px solid #E4E7EC;"
              >
                <Text
                  mt="1rem"
                  color="#1A1A21"
                  fontSize={"1.35rem"}
                  fontWeight={600}
                  lineHeight={1.2}
                  textAlign={"center"}
                >
                  Register For Courses
                </Text>
                <Text
                  color={"#8C94A6"}
                  textAlign={"center"}
                  mb="1rem"
                  mt="0.2rem"
                >
                  Fill out these details to build your broadcast
                </Text>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    occupation: "",
                  }}
                  onSubmit={async (values, { resetForm }) => {
                    try {
                      if (data.country_code == "NG") {
                        const _payStack = new PaystackPop();
                        _payStack.newTransaction({
                          key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
                          amount: "3000000",
                          currency: "NGN",
                          email: values.email,
                          firstname: values?.firstName,
                          lastname: values?.lastName,
                          // reference: _request.paystackOrder.reference,
                          metadata: values,
                          onLoad() {},
                          onSuccess(transaction: any) {
                            resetForm();

                            if (transaction) {
                              // Add router query
                              setTimeout(() => {
                                router.push("/courses/01");
                              }, 30000);
                            }
                          },
                          onCancel() {},
                          onerror() {},
                        });
                      } else {
                        const res = await fetch(
                          "/api/create_stripe_payment_session",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              email: values.email,
                              metadata: values,
                            }),
                          }
                        );

                        const result = await res.json();
                        console.log(result);
                        await router.push(result.url);
                      }
                      resetForm();
                    } catch (error) {
                      console.error("Error submitting the form:", error);
                    }
                  }}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string().required(),
                    lastName: Yup.string().required(),
                    email: Yup.string().email().required(),
                    occupation: Yup.string().required(),
                  })}
                >
                  {({ handleSubmit, errors, touched, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                      <FormControl
                        pb="1rem"
                        isInvalid={Boolean(
                          errors?.firstName && Boolean(touched?.firstName)
                        )}
                      >
                        <FormLabel
                          htmlFor="firstName"
                          fontSize={"10px"}
                          ml="4px"
                        >
                          First Name
                        </FormLabel>
                        <Field
                          as={Input}
                          name="firstName"
                          w={"100%"}
                          type="text"
                          size={"sm"}
                          borderRadius={"8px"}
                          placeholder="First Name"
                          textColor={"black"}
                          _placeholder={{
                            fontSize: "10px",
                            mt: "1rem",
                            color: "gray",
                          }}
                          id="name"
                          sx={{
                            caretColor: "black",
                          }}
                        />
                        <FormErrorMessage>{errors?.firstName}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        pb="1rem"
                        isInvalid={Boolean(
                          errors?.lastName && Boolean(touched?.lastName)
                        )}
                      >
                        <FormLabel
                          htmlFor="lastName"
                          fontSize={"10px"}
                          ml="4px"
                        >
                          Last Name
                        </FormLabel>
                        <Field
                          as={Input}
                          name="lastName"
                          w={"100%"}
                          type="text"
                          size={"sm"}
                          borderRadius={"8px"}
                          placeholder="Last Name"
                          textColor={"black"}
                          _placeholder={{
                            fontSize: "10px",
                            mt: "1rem",
                            color: "gray",
                          }}
                          id="name"
                          sx={{
                            caretColor: "black",
                          }}
                        />
                        <FormErrorMessage>{errors?.lastName}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        pb="1rem"
                        isInvalid={Boolean(
                          errors?.email && Boolean(touched?.email)
                        )}
                      >
                        <FormLabel htmlFor="email" fontSize={"10px"} ml="4px">
                          Email
                        </FormLabel>
                        <Field
                          as={Input}
                          name="email"
                          w={"100%"}
                          type="email"
                          mb="1rem"
                          size={"sm"}
                          borderRadius={"8px"}
                          placeholder="Email"
                          textColor={"black"}
                          _placeholder={{
                            fontSize: "10px",
                            mt: "1rem",
                            color: "gray",
                          }}
                          id="name"
                          sx={{
                            caretColor: "black",
                          }}
                        />
                        <FormErrorMessage>{errors?.email}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        pb="1rem"
                        isInvalid={Boolean(
                          errors?.occupation && Boolean(touched?.occupation)
                        )}
                      >
                        <FormLabel
                          htmlFor="occupation"
                          fontSize={"10px"}
                          ml="4px"
                        >
                          Occupation
                        </FormLabel>
                        <Field
                          as={Input}
                          name="occupation"
                          w={"100%"}
                          type="text"
                          mb="1rem"
                          size={"sm"}
                          borderRadius={"8px"}
                          placeholder="Occupation"
                          textColor={"black"}
                          _placeholder={{
                            fontSize: "10px",
                            mt: "1rem",
                            color: "gray",
                          }}
                          id="name"
                          sx={{
                            caretColor: "black",
                          }}
                        />
                        <FormErrorMessage>
                          {errors?.occupation}
                        </FormErrorMessage>
                      </FormControl>
                      <Button
                        type="submit"
                        width="100%"
                        isLoading={isSubmitting}
                        color="white"
                        mr={3}
                        w="100%"
                        borderRadius="8px"
                        background="#0F5EDB"
                      >
                        Make a Payment
                      </Button>
                    </form>
                  )}
                </Formik>
              </Box>
              <Box
                padding={"1rem"}
                borderRadius={"10px"}
                border="1px solid #E4E7EC;"
              >
                <Text
                  mt="1rem"
                  color="#1A1A21"
                  fontSize={"1.35rem"}
                  fontWeight={600}
                  lineHeight={1.2}
                  textAlign={"center"}
                >
                  {" "}
                  R for Research
                </Text>
                <Text
                  color={"#8C94A6"}
                  textAlign={"center"}
                  mb="1rem"
                  mt="0.2rem"
                >
                  Fill out these details to build your broadcast
                </Text>
                <AspectRatio ratio={1.67}>
                  <Image
                    borderRadius="8px"
                    src={"/01.png"}
                    width={"100"}
                    height={"100"}
                    alt="Event Image"
                    objectFit="cover"
                  />
                </AspectRatio>
                <Flex
                  mt="1rem"
                  mb="0.25rem"
                  justifyContent={"space-between"}
                  fontWeight={600}
                  fontSize={"1.1rem"}
                >
                  <Text>Course Fee</Text>
                  <Text>
                    {data.country_code === "NG" ? "NGN 30,000" : "$ 50"}
                  </Text>
                </Flex>
              </Box>
            </SimpleGrid>
          </Container>
        </>
      )}
    </Box>
  );
}
