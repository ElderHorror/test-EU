import { Box, Flex, Heading, Text } from "@chakra-ui/react"

type GridPropProps = {
    group:{
        id: string 
        num: string
        words: string 
    }[]
}

export default function GridProp(props:GridPropProps) {
  return (
    <>
     {props.group.map(proof  => {
        return(
            <Flex flexDir={"column"} key={proof.id}>
                <Box>
                    <Heading fontSize={{base:"32px", md:"45px", lg:"64px"}}>{proof.num}</Heading>
                </Box>
                <Box>
                    <Text>{proof.words}</Text>
                </Box>
            </Flex>
        )
     })} 
    </>
  )
}
