import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react"

type ReviewMobileProps ={
    data:{
       id: string
       name:string
       role:string
       review:string
       image: string
    }[]
}

export default function ReviewMobile(props:ReviewMobileProps) {
  return (
    <Box display={{base:'none', lg:'none'}}>
      {
        props.data.map(item => {
            return(
                <Box
                key={item.id}
                bgColor={"rgba(248, 249, 255, 1)"} 
                border={"1px solid"} borderColor={"transparent"} 
                borderRadius={"20px"}  mt={"4rem"} 
                >
                     <Box py={"2rem"} px={"1rem"}>
                        <Flex gap={3} >
                            <Box>
                                <Avatar 
                                 src={item.image}
                                 objectFit={"contain"}
                                />
                            </Box>
                            <Box>
                                <Flex flexDir={"column"}>
                                    <Box>
                                     <Heading  fontWeight={500} fontSize={{base:"18px", lg:"28px"}}>{item.name}</Heading>
                                   </Box>
                                   <Box>
                                    <Text fontWeight={500} fontSize={{base:"18px", lg:"28px"}}>{item.role}</Text>
                                   </Box>
                                </Flex>
                            </Box>

                        </Flex>
                        <Box mt={"1rem"} w={{base:200,md:300,lg:400}}>
                            <Text fontSize={{base:"11px", lg:"16px"}}>{item.review}</Text>
                        </Box>
                     </Box>
                </Box>
            )
        })
      }
    </Box>
  )
}
