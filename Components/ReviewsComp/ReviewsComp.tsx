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
        setCurrentIndex((prevIndex) => (prevIndex + 1 )% props.data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? props.data.length - 1 : prevIndex - 1
        );
    };
  return (
    <Box>
       <Box>
        <Flex justifyContent={"space-between"}>
            <Box>
                <Heading>What Our Client Said About Us</Heading>
            </Box>

            <Box>
                <Flex gap={3}>
                    <Button className={"btn"} height={"70px"} alignItems={"center"} width={"70px"} borderRadius={"50px"} onClick={handlePrev} rightIcon={<ArrowBackIcon />}></Button>
                    <Button className={"btn"} height={"70px"} width={"70px"} borderRadius={"50px"} onClick={handleNext} rightIcon={<ArrowForwardIcon />}></Button>
                </Flex>
            </Box>
        </Flex>
       </Box>
       
       <Flex
        //  w={"180%"}
        w={"100%"}
        alignItems="center"
         gap={5} 
         transform={`translateX(-${currentIndex * 100}%)`}
         transition="transform 0.3s ease-in-out"
         >
            {props.data.map(item => {
                return(
                   <Box 
                   bgColor={"rgba(248, 249, 255, 1)"} 
                   border={"1px solid"} borderColor={"transparent"} 
                   borderRadius={"20px"}  mt={"4rem"} 
                   key={props.data[currentIndex].id}
                //    style={{
                //     transform: `translateX(${(index - currentIndex) * 100}%)`,
                //     transition: "transform 0.3s ease-in-out",
                // }}
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
                                     <Heading fontWeight={500} fontSize={"28px"}>{item.name}</Heading>
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
            } )}
       </Flex>

    </Box>
  )
}
