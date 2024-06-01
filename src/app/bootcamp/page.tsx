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
      <Box minH="calc(100vh - 30rem)" mt="10rem" p="1rem">
        <Text textAlign={"center"} fontSize={"1.25rem"} mb="1.5rem">
          Your Degree isn’t Enough
        </Text>
        <Text
          fontWeight={600}
          maxWidth={"30rem"}
          textAlign={"center"}
          marginX="auto"
          fontSize={"4xl"}
        >
          <span>Unlock the Skills for Your Dream</span>
          <span style={{ color: "#0F5EDB", margin: "0 0.5rem" }}>
            Scholarship!!
          </span>
        </Text>
        <Text
          maxWidth={"47.5rem"}
          marginX="auto"
          textAlign={"center"}
          fontSize={"1.05rem"}
          mt="1rem"
        >
          A bachelor’s degree is a great start, but in today’s competitive
          landscape, it’s not enough to land that coveted scholarship. You need
          relevant skills that make you stand out from the crowd.
        </Text>

        <Box mt="2rem" maxW="40rem" marginX={"auto"}>
          <Image alt="dd" src={"/" + "r.jpg"} />
          <Text fontSize={"1.2rem"} mt="1rem" fontWeight={600}>
            Introduction to R for Research
          </Text>
          <Box padding={"0.5rem 1rem"}>
            <Text fontSize={"1.2rem"}></Text>
            <ul style={{ padding: "0rem 2.5rem 1rem" }}>
              <li>Installing R and R Studio</li>
              <li>Import and clean data</li>
              <li>Perform basic statistical analysis</li>
              <li>Create stunning data visualizations</li>
            </ul>
          </Box>
          <Text fontSize={"1.1rem"}>
            Don’t just have a degree, have the skills to secure your dream
            scholarship.
          </Text>
          <Button
            w="100%"
            bg={"#0F5EDB"}
            color={"white"}
            paddingY={"1.5rem"}
            onClick={onOpen}
            marginY="0.5rem"
          >
            Register for free today!
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
