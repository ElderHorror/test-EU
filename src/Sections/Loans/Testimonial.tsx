import { Box, Flex, Text, Image } from "@chakra-ui/react";

export const Testimonial = () => {
  return (
    <Box py="1rem" bg="#F4F4F4" pt="5rem" pb="5rem">
      <Box>
        <Text
          color={"black"}
          fontWeight={600}
          fontSize={{ lg: "2.5rem", base: "32px" }}
          textAlign={"center"}
          marginY={"0.5rem"}
        >
          Testimonials
        </Text>
        <Text
          color={"#2F3540"}
          textAlign={"center"}
          fontSize={{ lg: "18px", base: "16px" }}
          lineHeight={{ lg: 1.75, base: 1.4 }}
          maxW="40rem"
          margin={"auto"}
          mb="2.5rem"
        >
          The students we have supported have said a lot of good things about
          us. Some of them are shown below.
        </Text>
      </Box>
      <Box my="auto">
        <Flex
          margin={"auto"}
          maxW={"80rem"}
          justifyContent={"space-between"}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box flexBasis={{ lg: "45%", base: "100%" }}>
            {[
              {
                title:
                  "“The foundational approach to the training was topnoptch”",
                image: "../promise_idahosa.jpg",
                name: "Promise Idahosa",
              },
              {
                title:
                  "“Clarity and precision of the program. Also, the interactive nature of all the classes.”",
                image: "../dave.jpg",
                name: "Dare Adeagbo",
              },
              {
                title: "“The instructor made everything to be easy.”",
                image: "../s.jpg",
                name: "Cohort 1",
              },
              {
                title:
                  "“I found the continuous tests and assignments very enjoyable, though challenging they were necessary and worthwhile. Throughout the boot camp, classes were engaging and interactive.”",
                image: "../s.jpg",
                name: "Cohort 1",
              },
            ].map((elem) => (
              <Box
                key={`${elem.title}`}
                boxShadow="12px 12px 0px 0px #000000"
                border="1px solid #BCBCBC"
                borderRadius="12px"
                padding={"2rem"}
                mt="2.5rem"
              >
                <Text fontSize="22px" fontWeight="500" maxW="85%">
                  {elem.title}
                </Text>
                <Flex alignItems={"center"} mt="1rem">
                  <Image
                    borderRadius={"8px"}
                    border={"none"}
                    src={elem.image}
                    alt={"#"}
                    h={"72px"}
                    objectFit={{ md: "contain", base: "cover", lg: "cover" }}
                  />
                  <Text ml="1rem" fontWeight={"600"} fontSize={"20px"}>
                    {elem.name}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Box>
          <Box flexBasis={{ lg: "45%", base: "100%" }}>
            {[
              {
                title:
                  "“The curriculum was well structured, equipped with tests, assignments and projects that covered the basics of R programming up to its advanced methods and the application in our research work.”",
                image: "../faith.jpg",
                name: "Faith Oyewale Olabisi",
              },
              {
                title:
                  "“I could always ask questions when I got stuck. I never felt like I was lagging behind because the instructor would always encourage me.  Though I still need to practice a lot to become more confident in using what I have learnt for my research, I think that my overall experience was great. I am glad I took this beginner course.”",
                image: "../agatha.jpg",
                name: "Agatha Egwemi",
              },
              {
                title:
                  "“The instructor was very patient to ensure that everyone understood the content”",
                image: "../s.jpg",
                name: "Cohort 1",
              },
            ].map((elem) => (
              <Box
                key={`${elem.title}`}
                boxShadow="12px 12px 0px 0px #000000"
                border="1px solid #BCBCBC"
                borderRadius="12px"
                padding={"2rem"}
                mt="2.5rem"
              >
                <Text fontSize="22px" fontWeight="500" maxW="85%">
                  {elem.title}
                </Text>
                <Flex alignItems={"center"} mt="1rem">
                  <Image
                    borderRadius={"8px"}
                    border={"none"}
                    src={elem.image}
                    alt={"#"}
                    h={"72px"}
                    objectFit={{ md: "contain", base: "cover", lg: "cover" }}
                  />
                  <Text ml="1rem" fontWeight={"600"} fontSize={"20px"}>
                    {elem.name}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
