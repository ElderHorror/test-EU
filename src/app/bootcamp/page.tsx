"use client";
import { Box, Button, Center, Container, Image, Text } from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "@/Sections/Footer/Footer";
import { useRouter } from "next/navigation";
import Calculator from "../../../Components/calculator/calculator";

export default function Bootcamp() {
  const router = useRouter();
  return (
    <Box bgColor={" rgba(255, 255, 255, 1)"} overflow={"hidden"}>
      <Navbar
        setPageMode={(mode: string) => {
          localStorage.setItem("pageMode", mode);
          router.push("/");
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
          <Button w="100%" bg={"#0F5EDB"} color={"white"} paddingY={"1.5rem"}>
            Register for free
          </Button>
        </Box>
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
