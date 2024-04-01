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
import { useState } from 'react'
import Calculator from '../../Components/calculator/calculator'


export default function Home() {
  const [pageMode, setPageMode] = useState(0)
  return (
    <Box
      bgColor={" rgba(255, 255, 255, 1)"}
      overflow={"hidden"}>
      <Navbar setPageMode={setPageMode} />
      {pageMode === 0 ? <>
        <Heropage />
        <Commitment />
        <About />
        <Loans />
        <Pros />
        {/* <Reviews /> */}
        <ReviewList />
        <GITright />
      </> : <>
        <Calculator />
      </>}
      {/* <Container scrollBehavior={"smooth"} maxW={"90rem"} mx={{base:".6rem", md:"1rem",lg:"none"}}>  */}
      {/* <Heropage /> */}
      {/* <Commitment />
        <About />
        <Loans />
        <Pros />
        <Reviews />
        <ReviewList /> */}
      {/* </Container> */}
      <Box onClick={() => setPageMode(0)}>

      <Footer />
    </Box>
    </Box >
  )
}
