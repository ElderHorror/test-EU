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
    <>
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
                                     <Heading  fontWeight={500} fontSize={"28px"}>{item.name}</Heading>
                                   </Box>
                                   <Box>
                                    <Text fontWeight={500} fontSize={"28px"}>{item.role}</Text>
                                   </Box>
                                </Flex>
                            </Box>

                        </Flex>
                        <Box mt={"1rem"} w={400}>
                            <Text>{item.review}</Text>
                        </Box>
                     </Box>
                </Box>
            )
        })
      }
    </>
  )
}
