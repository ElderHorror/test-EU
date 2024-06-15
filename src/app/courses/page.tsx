"use client"
import { Box } from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar/Navbar";
import { useRouter } from "next/navigation";
import Footer from "@/Sections/Footer/Footer";

export default function Courses() {
  const router = useRouter();

  return (
    <Box bgColor={" rgba(255, 255, 255, 1)"} overflow={"hidden"}>
      <Navbar
        setPageMode={(mode: string) => {
          localStorage.setItem("pageMode", mode);
          // router.push("/");
        }}
      />
      <Box minH="calc(100vh - 30rem)" mt="10rem">
        Coming soon
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
