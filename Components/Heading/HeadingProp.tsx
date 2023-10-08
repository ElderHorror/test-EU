import { Box, Heading } from "@chakra-ui/react"

type HeadingProp ={
    textt: string
}

export default function HeadingProp(props:HeadingProp) {
  return (
    <Box>
       <Heading fontSize={"64px"} fontWeight={600}>{props.textt}</Heading>
    </Box>
  )
}
