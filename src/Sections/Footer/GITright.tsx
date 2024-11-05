"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { ChangeEvent, FormEvent, useState } from "react";
import * as Yup from "yup";

export default function GITright() {
  const toast = useToast();

  return (
    <Box
      mt={{ base: "2rem ", lg: "0rem" }}
      margin={"auto"}
      width={{ base: "none", lg: "614px" }}
      py={"1rem"}
      px="1rem"
      pb="8rem"
    >
      <Text
        fontSize={{ base: "2rem", lg: "3.5rem" }}
        fontWeight="700"
        id="contact_us"
        textAlign={"center"}
        my="2rem"
      >
        Contact US
      </Text>
      <Center>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              const res = await fetch("/api/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...values,
                }),
              });

              const result = await res.json();
              toast({
                status: "success",
                title: "success",
                description: "Message sent",
              });

              resetForm();
            } catch (error) {
              console.error("Error submitting the form:", error);
            }
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            message: Yup.string().required(),
          })}
        >
          {({
            handleSubmit,
            errors,
            touched,
            values,
            setFieldValue,
            setFieldTouched,
          }) => (
            <form onSubmit={handleSubmit}>
              <Center flexDirection={"column"} p="0">
                <FormControl
                  pb="1rem"
                  isInvalid={Boolean(errors?.name && Boolean(touched?.name))}
                >
                  <Field
                    as={Input}
                    name="name"
                    width={{ base: "347px", lg: "600px" }}
                    size={"sm"}
                    borderRadius={"none"}
                    placeholder="YOUR NAME"
                    textColor={"black"}
                    _placeholder={{
                      fontSize: "10px",
                      mt: "1rem",
                      color: "black",
                    }}
                    type="text"
                    id="name"
                    sx={{
                      caretColor: "black",
                    }}
                  />
                  <FormErrorMessage>{errors?.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                  pb="1rem"
                  isInvalid={Boolean(errors?.email && Boolean(touched?.email))}
                >
                  <Field
                    as={Input}
                    name="email"
                    width={{ base: "347px", lg: "600px" }}
                    size={"sm"}
                    borderRadius={"none"}
                    placeholder="YOUR EMAIL"
                    textColor={"black"}
                    _placeholder={{
                      fontSize: "10px",
                      mt: "1rem",
                      color: "black",
                    }}
                    type="text"
                    id="email"
                    sx={{
                      caretColor: "black",
                    }}
                  />
                  <FormErrorMessage>{errors?.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  pb="1rem"
                  isInvalid={Boolean(
                    errors?.message && Boolean(touched?.message)
                  )}
                >
                  <Field
                    as={Textarea}
                    name="message"
                    width={{ base: "347px", lg: "600px" }}
                    height={"200px"}
                    size={"sm"}
                    mb={"1rem"}
                    borderRadius={"none"}
                    textColor={"black"}
                    placeholder="YOUR MESSAGE"
                    _placeholder={{
                      fontSize: "10px",
                      mt: "2rem",
                      textColor: "black",
                      color: "black",
                    }}
                    id="message"
                  />
                  <FormErrorMessage>{errors?.message}</FormErrorMessage>
                </FormControl>
              </Center>
              <Button
                //  onClick={onSubmit}
                type="submit"
                width="100%"
                //  isLoading={isLoading}
                color={"black"}
                bgColor={"black"}
                borderRadius={"none"}
              >
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"12px"}
                >
                  <Box>
                    {/* <Image
                      alt={'#'}
                      src={'/Image/Dash.png'}
                      height={'2px'}
                    /> */}
                  </Box>
                  <Box>
                    <Text color={"white"} fontWeight={500} fontSize={"12px"}>
                      Submit
                    </Text>
                  </Box>
                </Flex>
              </Button>
            </form>
          )}
        </Formik>
      </Center>
    </Box>
  );
}
