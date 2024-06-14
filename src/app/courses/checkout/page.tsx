"use client";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
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
import CoursesHero from "../../../../Components/Courses/Hero";
import CoursesDetails from "../../../../Components/Courses/Details";

export default function Bootcamp() {
  const router = useRouter();
  const { data, isLoading } = useLocation();

  return (
    <Box bgColor={" rgba(255, 255, 255, 1)"} overflow={"hidden"}>
      <Navbar
        setPageMode={(mode: string) => {
          localStorage.setItem("pageMode", mode);
          // router.push("/");
        }}
      />

      <Box minH="calc(100vh - 30rem)" mt="10rem">
        {isLoading ? (
          <Text>loading...</Text>
        ) : (
          <>
            <Container maxW={"90rem"} p="1rem">
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap="2rem" pl="2rem">
                <Box>Register for course</Box>
                <Box>
                  <Text> R for Research</Text>
                  <Text>Fill out these details to build your broadcast</Text>
                  <AspectRatio ratio={1}>
                    <Image
                      borderRadius="8px"
                      src={"/O0.png"}
                      width={"100"}
                      height={"100"}
                      alt="Event Image"
                      objectFit="cover"
                    />
                  </AspectRatio>
                </Box>
              </SimpleGrid>
            </Container>
          </>
        )}
      </Box>
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
