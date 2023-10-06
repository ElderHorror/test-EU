'use client'
import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'
import Heropage from './Sections/HeroSection/Heropage'
import Navbar from '../../Components/Navbar/Navbar'


export default function Home() {
  return (
     <Box bgColor={" rgba(255, 255, 255, 1)"}>
       <Navbar />
      <Container maxW={"7xl"}> 
        <Heropage />
      </Container>
      </Box>
  )
}
