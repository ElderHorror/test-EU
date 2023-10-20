import { Box, Heading } from "@chakra-ui/react"

type HeadingProp ={
    textt: string
}

export default function HeadingProp(props:HeadingProp) {
  return (
    <Box mt={{base:"2rem", lg:".6rem"}} display={{base:"grid", md:"grid", lg:"block"}} placeItems={{base:"center"}}>
       <Heading textAlign={{base:"center", md:"left", lg:"left"}} fontSize={{base:"32px", md:"50px", lg:"64px"}}  fontWeight={{base:700, lg:600}}>{props.textt}</Heading>
    </Box>
  )
}
