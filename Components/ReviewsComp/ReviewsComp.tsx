'use client'
import { useState } from 'react'
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, GridItem, Heading, Text } from "@chakra-ui/react";


type ReviewsCompProps = {
    data : {
        id: string
        name: string
        role: string
        review: string
        image: string
    }[]
}

export default function ReviewsComp(props:ReviewsCompProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex )% props.data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex  + props.data.length) % props.data.length)
    }
  return (
    <Box>
       <Box>
        <Flex justifyContent={"space-between"}>
            <Box>
                <Heading>What Our Client Said About Us</Heading>
            </Box>

            <Box>
                <Flex>
                    <Button onClick={handlePrev} rightIcon={<ArrowBackIcon />}></Button>
                    <Button onClick={handleNext} rightIcon={<ArrowForwardIcon />}></Button>
                </Flex>
            </Box>
        </Flex>
       </Box>
       
       <Flex
         w={"180%"}
         gap={5}
         >
            {props.data.map(item => {
                return(
                   <Box bgColor={"rgba(248, 249, 255, 1)"} border={"1px solid"} borderColor={"transparent"} borderRadius={"20px"}  mt={"4rem"} key={props.data[currentIndex].id}>
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
                                     <Heading>{item.name}</Heading>
                                   </Box>
                                   <Box>
                                    <Text>{item.role}</Text>
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
            } )}
       </Flex>

    </Box>
  )
}
