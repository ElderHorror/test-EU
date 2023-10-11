import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import NoarrowBtn from "../Button/NoarrowBtn"

type LoansPropProps ={
    carousel: {
        id: string
        headingg: string
        textt: string
        smHeading: string 
        tC: string
        tCtwo: string
    }[]
}

export default function LoansProp(props:LoansPropProps) {
  return (
    <>
     {props.carousel.map(slide => {
        return (
            <Box  key={slide.id} mt={"3rem"} bgColor={" rgba(53, 97, 255, 1)"} bgImage={"/Ellipse 77.svg"} bgRepeat={"no-repeat"} borderRadius={"24px"}>
            <Flex flexDir={"column"} gap={8} py={"3rem"} px={"1rem"}>
               <Box>
                 <Heading fontSize={{base:"24px", md:"30px", lg:"48px"}} color={"white"} textAlign={"center"}>{slide.headingg}</Heading>
               </Box>
                <Box>
                    <Text fontSize={"16px"} lineHeight={"30px"} color={"white"}>{slide.textt}</Text>
                </Box>

                <Box borderRadius={"20px"} w={"316px"} p={"1rem"} bgColor={"rgba(17, 41, 125, 1)"}>
                    <Flex flexDir={"column"}>
                     <Box>
                      <Heading fontWeight={600} fontSize={"16.79px"} color={"white"}>{slide.smHeading}</Heading>
                     </Box>
                     <Box>
                        <Flex alignItems={"center"} mt={".3rem"} gap={2}>
                            <Box bgColor={"rgba(252, 201, 68, 1)"} width={"15.43px"} borderRadius={"50px"} height={"15.43px"}></Box>
                            <Box>
                                <Text color={"white"}>{slide.tC}</Text>
                            </Box>
                        </Flex>
                     </Box>
                     <Box>
                        <Flex alignItems={"center"} mt={".3rem"} gap={2}>
                            <Box bgColor={"rgba(252, 201, 68, 1)"} width={"15.43px"} borderRadius={"50px"} height={"15.43px"}></Box>
                            <Box>
                                <Text color={"white"}>{slide.tCtwo}</Text>
                            </Box>
                        </Flex>
                     </Box>
                   </Flex>
                </Box>

                <Box>
                    <NoarrowBtn />
                </Box>
            </Flex>
         </Box>
        )
     })}
    </>
  )
}
