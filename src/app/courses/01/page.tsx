"use client";
import {
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
import PageLayout from "@/components/layout/PageLayout";

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
              <Box>
                <CoursesHero
                  imgSrc={"/" + "01.png"}
                  countryCode={data.country_code}
                />
              </Box>
            </Container>
            <Box w="100%" bg="#0F5EDB" mt="8rem">
              <Container maxW={"90rem"} p="1rem">
                <SimpleGrid
                  columns={{ base: 2, md: 4, sm: 1 }}
                  gap="2rem"
                  alignContent="center"
                  justifyContent={"center"}
                  color={"white"}
                  fontSize={"1.2rem"}
                  fontWeight={500}
                  p="1rem"
                >
                  <Box borderRight={"1px solid white"} p="1.5rem">
                    <Text>Next Cohort</Text>
                    <Text>24th of February 2025</Text>
                  </Box>
                  <Box borderRight={"1px solid white"} p="1.5rem">
                    <Text> Duration</Text>
                    <Text>6 weekends</Text>
                  </Box>
                  <Box borderRight={"1px solid white"} p="1.5rem">
                    <Text>Virtual Live</Text>
                    <Text>Classes</Text>
                  </Box>
                  <Box borderRight={"1px solid white"} p="1.5rem">
                    <Text>Expert </Text>
                    <Text>Instructor</Text>
                  </Box>
                </SimpleGrid>
              </Container>
            </Box>
            <Container maxW={"90rem"} p="1rem">
              <CoursesDetails imgSrc={"/" + "00.png"} />
            </Container>
          
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
