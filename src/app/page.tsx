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


export default function Home() {
  return (
     <Box bgColor={" rgba(255, 255, 255, 1)"} overflow={"hidden"}>
       <Navbar />
      <Container maxW={"7xl"}> 
        <Heropage />
        <Commitment />
        <About />
        <Loans />
        <Pros />
        <Reviews />
        <Footer />
      </Container>
      </Box>
  )
}
