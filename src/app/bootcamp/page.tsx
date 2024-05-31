"use client";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "@/Sections/Footer/Footer";
import { useRouter } from "next/navigation";
import { Field, Formik } from "formik";
import * as Yup from "yup";

export default function Bootcamp() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  return (
    <Box bgColor={" rgba(255, 255, 255, 1)"} overflow={"hidden"}>
      <Navbar
        setPageMode={(mode: string) => {
          localStorage.setItem("pageMode", mode);
          // router.push("/");
        }}
      />
      <Box minH="calc(100vh - 30rem)" mt="10rem">
        <Text textAlign={"center"} fontSize={"1.25rem"} mb="1.5rem">
          Tech Courses
        </Text>
        <Text
          fontWeight={600}
          maxWidth={"30rem"}
          textAlign={"center"}
          marginX="auto"
          fontSize={"4xl"}
        >
          <span>
            Get In-Demand Tech Skill and Thrive in Europe with EU Study Assist{" "}
          </span>
          <span style={{ color: "#0F5EDB" }}>Courses</span>
        </Text>
        <Text
          maxWidth={"40rem"}
          marginX="auto"
          textAlign={"center"}
          fontSize={"1rem"}
          mt="1rem"
        >
          With our expert feedback, you can navigate the admissions process with
          confidence and submit an application that truly reflects your
          potential.
        </Text>

        <Box mt="2rem" maxW="40rem" marginX={"auto"}>
          <Image alt="dd" src={"/" + "r.jpg"} />
          <Text fontSize={"1.2rem"} my="1rem" fontWeight={600}>
            Introduction to R for Research
          </Text>
          <Text fontSize={"1.2rem"}></Text>
          <Button
            w="100%"
            bg={"#0F5EDB"}
            color={"white"}
            paddingY={"1.5rem"}
            onClick={onOpen}
          >
            Register for free
          </Button>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay blur={"2px"} />
        <ModalContent p="2rem">
          <ModalHeader>Book A seat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    const res = await fetch("/api/registerbootcamp", {
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
                      description: "Invite sent",
                    });
                    onClose();
                    resetForm();
                  } catch (error) {
                    console.error("Error submitting the form:", error);
                  }
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email().required(),
                })}
              >
                {({ handleSubmit, errors, touched, isSubmitting }) => (
                  <form onSubmit={handleSubmit}>
                    <FormControl
                      pb="1rem"
                      isInvalid={Boolean(
                        errors?.email && Boolean(touched?.email)
                      )}
                    >
                      <Field
                        as={Input}
                        name="email"
                        w={"100%"}
                        type="email"
                        mb="1rem"
                        size={"sm"}
                        borderRadius={"none"}
                        placeholder="YOUR EMAIL"
                        textColor={"black"}
                        _placeholder={{
                          fontSize: "10px",
                          mt: "1rem",
                          color: "black",
                        }}
                        id="name"
                        sx={{
                          caretColor: "black",
                        }}
                      />
                      <FormErrorMessage>{errors?.email}</FormErrorMessage>
                    </FormControl>
                    <Button
                      type="submit"
                      width="100%"
                      isLoading={isSubmitting}
                      bgColor={"black"}
                      borderRadius={"none"}
                      color="white"
                      mr={3}
                      w="100%"
                    >
                      Register
                    </Button>
                  </form>
                )}
              </Formik>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        onClick={() => {
          localStorage.setItem("pageMode", "0");
          router.push("/");
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
