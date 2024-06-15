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
import dynamic from "next/dynamic";
const CheckOut = dynamic(() => import("./checkout"), {
  ssr: false,
});

export default function Bootcamp() {
  const router = useRouter();
  const { data, isLoading } = useLocation();
  const toast = useToast();

  return (
    <Box bgColor={" rgba(255, 255, 255, 1)"} overflow={"hidden"}>
      <Navbar
        setPageMode={(mode: string) => {
          localStorage.setItem("pageMode", mode);
          // router.push("/");
        }}
      />
      <CheckOut />
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
