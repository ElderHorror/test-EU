import { Box, Heading } from "@chakra-ui/react"

type HeadingProp ={
    textt: string
}

export default function HeadingProp(props:HeadingProp) {
  return (
    <Box mt={{base:"2rem", lg:".6rem"}}>
       <Heading fontSize={{base:"32px", md:"50px", lg:"64px"}} fontWeight={600}>{props.textt}</Heading>
    </Box>
  )
}
