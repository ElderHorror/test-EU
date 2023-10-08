import { Box, Flex, Heading } from "@chakra-ui/react";
import ReviewsComp from "../../../../Components/ReviewsComp/ReviewsComp";


export default function Reviews() {
   const client = [
    {
      id:'1',
      name:"Amelia Joseph",
      role:"Chief Manager", 
      review:"My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image:"/Babe1.svg"
    },
    {
      id:'2',
      name:"Amelia Tucker",
      role:"Chief Manager", 
      review:"My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image:"/Babe2.svg"
    },
    {
      id:'3',
      name:"Amelia Joseph",
      role:"Chief Manager", 
      review:"My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image:"/Babe3.svg"
    },
    {
      id:'4',
      name:"Amelia Joseph",
      role:"Chief Manager", 
      review:"My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image:"/Babe1.svg"
    }
   ]

  return (
    <Box mt={"7rem"} mb={"3rem"}>
      <ReviewsComp data={client} />
    </Box>
  )
}
