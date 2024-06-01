import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import ReviewsComp from "../../../Components/ReviewsComp/ReviewsComp";

export default function Reviews() {
  const client = [
    {
      id: "1",
      name: "Amelia Joseph",
      role: "Chief Manager",
      review:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image: "/Babe1.svg",
    },
    {
      id: "2",
      name: "Amelia Tucker",
      role: "Chief Manager",
      review:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image: "/Babe2.svg",
    },
    {
      id: "3",
      name: "Amelia Joseph",
      role: "Chief Manager",
      review:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image: "/Babe3.svg",
    },
    {
      id: "4",
      name: "Amelia Joseph",
      role: "Chief Manager",
      review:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image: "/Babe1.svg",
    },
  ];

  return (
    <Container maxW={"7xl"}>
      <Box mt={"15rem"} mb={"3rem"}>
        <Box>
          <Heading>What Our Client Said About Us</Heading>
        </Box>

        <Box
          overflowX={"scroll"}
          marginLeft={{ base: "none", lg: "calc(50% - 50vw)" }}
          marginRight={{ base: "none", lg: "calc(50% - 50vw)" }}
          width={"100vw"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex w={{ base: "330%", lg: "200%" }} columnGap={4}>
            <ReviewsComp data={client} />
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
