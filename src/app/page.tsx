"use client";
import { Box, Container } from "@chakra-ui/react";
import Heropage from "@/Sections/HeroSection/Heropage";
import Commitment, { Consulting } from "@/Sections/Commitment/Commitment";
// import About from "@/Sections/About/About";
import Loans from "@/Sections/Loans/Loans";
import Pros from "@/Sections/Pros/Pros";
import Reviews from "@/Sections/Reviews/Reviews";
import Footer from "./pages/Home/Sections/Footer/Footer";
import ReviewList from "../../Components/ReviewsComp/ReviewList";
import Testimonials from "./pages/Home/Sections/Testimonial/Testimonials";
import { useState } from "react";
import { useHashFragment } from "../../Components/hooks";
import Faq from "./pages/Home/Sections/Faq/faq";
import GITright from "@/Sections/Footer/GITright";
import Navbar from "../../Components/Navbar/Navbar";
import Calculator from "../../Components/calculator/calculator";
import { Testimonial } from "@/Sections/Loans/Testimonial";

export default function Home() {
  useHashFragment();
  const [pageMode, _setPageMode] = useState(
    typeof window !== "undefined"
      ? +(localStorage?.getItem("pageMode") ?? "0")
      : 0
  );
  const setPageMode = (mode: number) => {
    _setPageMode(mode);
    if (typeof window !== "undefined") {
      localStorage?.setItem("pageMode", "" + mode);
    }
  };
  return (
    <>
      <Box>
        <Navbar setPageMode={setPageMode} />
      </Box>
      <Box overflow={"hidden"}>
        {pageMode === 0 ? (
          <>
            <Heropage />
            <Commitment />
            <Loans />
            <Consulting />
            {/* <Loans />
            <Pros /> */}
            {/* <Reviews /> */}
            {/* <ReviewList /> */}
            <Faq />
            {/* <GITright /> */}
          </>
        ) : (
          <>
            <Calculator />
          </>
        )}
        {/* <Container scrollBehavior={"smooth"} maxW={"90rem"} mx={{base:".6rem", md:"1rem",lg:"none"}}>  */}
        {/* <Heropage /> */}
        {/* <Commitment />
        <About />
        <Loans />
        <Pros />
        <Reviews />
        <ReviewList /> */}
        {/* </Container> */}
        {/* <Testimonial /> */}
        <Testimonials />
        <Box onClick={() => setPageMode(0)}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
