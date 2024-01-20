'use client'
import { Box, Container } from '@chakra-ui/react'
import Heropage from './Sections/HeroSection/Heropage'
import Navbar from '../../Components/Navbar/Navbar'
import Commitment from './Sections/Commitment/Commitment'
import About from './Sections/About/About'
import Loans from './Sections/Loans/Loans'
import Pros from './Sections/Pros/Pros'
import Reviews from './Sections/Reviews/Reviews'
import Footer from './Sections/Footer/Footer'
import ReviewList from '../../Components/ReviewsComp/ReviewList'
import GITright from './Sections/Footer/GITright'


export default function Home() {
  return (
    <Box
      bgColor={" rgba(255, 255, 255, 1)"}
      overflow={"hidden"}>
      <Navbar />
      <Heropage />
      <Commitment />
      <About />
      <Loans />
      <Pros />
      <Reviews />
      <ReviewList />
      {/* <Container scrollBehavior={"smooth"} maxW={"7xl"} mx={{base:".6rem", md:"1rem",lg:"none"}}>  */}
      {/* <Heropage /> */}
      {/* <Commitment />
        <About />
        <Loans />
        <Pros />
        <Reviews />
        <ReviewList /> */}
      {/* </Container> */}
      <GITright />
      <Footer />
    </Box>
  )
}
