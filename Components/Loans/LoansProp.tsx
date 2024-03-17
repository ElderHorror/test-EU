import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import NoarrowBtn from "../Button/NoarrowBtn"

type LoansPropProps = {
    carousel: {
        id: string
        headingg: string
        textt: string
        smHeading: string
        tC: string
        tCtwo: string
        loanAmount: string
    }[]
}

export default function LoansProp(props: LoansPropProps) {
    return (
        <>
            {props.carousel.map(slide => {
                return (
                    <Box key={slide.id} mt={"3rem"} bgColor={" rgba(53, 97, 255, 1)"} bgImage={"/Ellipse 77.svg"} bgRepeat={"no-repeat"} w={460} borderRadius={"24px"} background="linear-gradient(to right,#1d4ed8, #15803d)">
                        <Flex  flexDir={"column"} gap={{ base: 4, lg: 8 }} py={{ base: "1.5rem", lg: "3rem" }} px={"1rem"}>
                            <Box margin={{ base: "auto", lg: "none" }} w={{ base: 200, lg: 400 }} h={100}>
                                <Heading fontSize={{ base: "24px", md: "30px", lg: "48px" }} color={"white"} textAlign={"center"}>{slide.headingg}</Heading>
                            </Box>
                            <Box alignSelf={"center"} w={{ base: 300, md: 300, lg: 400 }} h={{ base: 290, lg: 200 }}>
                                <Text fontSize={"16px"} lineHeight={"30px"} color={"white"}>{slide.textt}</Text>
                            </Box>

                            <Box borderRadius={"20px"}
                                //  w={"316px"} 
                                w={"auto"}
                                h={200}
                                p={"1rem"} bgColor={"rgba(17, 41, 125, 1)"}>
                                <Flex flexDir={"column"}>
                                    <Box>
                                        <Heading fontWeight={600} fontSize={"16.79px"} color={"white"}>{slide.smHeading}</Heading>
                                    </Box>
                                    <Box>
                                        <Flex alignItems={"center"} mt={".3rem"} gap={13}>
                                            <Box bgColor={"rgba(252, 201, 68, 1)"}

                                                width={"15.43px"}
                                                borderRadius={"50px"} height={"15.43px"}></Box>
                                            <Box>
                                                <Text color={"white"}>{slide.tC}</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Flex alignItems={"center"} mt={".3rem"} flexGrow={""} gap={13}>
                                            <Box bgColor={"rgba(252, 201, 68, 1)"} width={"15.43px"} borderRadius={"50px"} height={"15.43px"}></Box>
                                            <Box>
                                                <Text color={"white"}>{slide.tCtwo}</Text>
                                                <Text color={"white"}>{slide.loanAmount}</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                )
            })}
        </>
    )
}
