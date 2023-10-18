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
                <Box margin={{base:"auto", lg:"none"}}>
                    <Heading fontSize={{base:"45px", md:"45px", lg:"64px"}}>{proof.num}</Heading>
                </Box>
                <Box w={{base:"121.12px", lg:"168px"}}>
                    <Text fontSize={{base:"11.53px"}} >{proof.words}</Text>
                </Box>
            </Flex>
        )
     })} 
    </>
  )
}
