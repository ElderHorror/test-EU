"use client";

import { Box, Flex, Grid, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function TeamSection() {
  return (
    <Box
      bgColor="#F4F4F4"
      pt={{ base: "3.75rem", md: "4.6875rem", lg: "5.625rem" }}
      px={{ base: "1rem", sm: "1.5rem", md: "2rem", lg: "3rem" }}
      display="grid"
      placeContent="center"
    >
      <Flex
        maxW={{ base: "100%", md: "90%", lg: "70rem" }}
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        mb="2.5rem"
        id="About"
        mx="auto"
      >
        <Text
          fontFamily="ClashDisplay"
          fontWeight={{ lg: 600, base: 700 }}
          lineHeight={{ base: 1.1 }}
          fontSize={{ base: "2.5rem", md: "2.25rem", lg: "3.25rem" }}
          mb={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
          textAlign="center"
          px={{ base: "0.5rem", md: "0" }}
        >
          Meet Our Beautiful Team
        </Text>
        <SimpleGrid
          columns={{ base: 2, sm: 2, lg: 3 }}
          gap={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
          width={{ base: "100%", md: "90%", lg: "100%" }}
        >
          {[
            {
              image: "./adu.jpeg",
              title: "CEO & Founder",
              name: "Olamide Adu",
            },
            {
              image: "./oki.jpeg",
              title: "CEO & Founder",
              name: "Oki Ayobami",
            },
            {
              image: "./mes.jpeg",
              title: "Design Lead",
              name: "Meshach Aderele",
            },
          ].map((elem, index) => (
            <Box
              minWidth={{ base: "8rem", md: "10rem", lg: "12rem" }}
              key={`about-index-${index + 4}`}
            >
              <Grid templateRows="repeat(4, 1fr)" templateColumns="1fr">
                <GridItem
                  rowStart={1}
                  rowSpan={3}
                  bg="transparent"
                  zIndex={1}
                  colStart={1}
                >
                  <Image
                    src={elem.image}
                    alt={elem.name}
                    w="100%"
                    h={{ base: "auto", md: "auto" }}
                    objectFit="cover"
                    borderRadius="4px"
                  />
                </GridItem>
                <GridItem
                  rowStart={3}
                  rowSpan={1}
                  h={{ base: "3rem", md: "3.5rem" }}
                  zIndex={3}
                  colStart={1}
                >
                  <Box
                    margin={{ base: "0.5rem 0.5rem", md: "0.5rem 1rem" }}
                    padding={{ base: "0.5rem", md: "0.75rem" }}
                    bg="white"
                    textAlign="center"
                    boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                    borderRadius="4px"
                  >
                    <Text
                      fontWeight={600}
                      fontSize={{ base: "0.875rem", md: "1rem" }}
                    >
                      {elem.name}
                    </Text>
                    <Text fontSize={{ base: "0.75rem", md: "0.875rem" }}>
                      {elem.title}
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </SimpleGrid>
        <Box
          maxW={{ base: "100%", md: "42rem", lg: "48rem" }}
          textAlign={{ base: "justify" }}
          mx="auto"
          mb={{ base: "3rem", md: "4rem", lg: "5rem" }}
          color="#2F3540"
          px={{ base: "0.5rem", md: "1.5rem" }}
        >
            <Text
              mt="0.5rem"
              lineHeight={{ base: 1.5, lg: 1.8 }}
              fontSize={{ base: "0.95rem", md: "1rem", lg: "1rem" }}
            >
              <span style={{ fontWeight: 700, color: "#2F3540" }}>
                Olamide Adu
              </span>{" "}
              is a Consulting Data Scientist with a background in forest and
              nature management. He holds an Erasmus Mundus Joint
              Master&#39;s in Sustainable Forest and Nature Management. With
              expertise in data analysis and sustainability consulting, he
              helps small and medium-sized businesses implement data-driven
              strategies to minimize environmental impact and optimize
              resource efficiency.
            </Text>
            <Text
              mt={{ base: "1.25rem", md: "1.5rem" }}
              lineHeight={{ base: 1.5, lg: 1.8 }}
              fontSize={{ base: "0.95rem", md: "1rem", lg: "1rem" }}
            >
              <span style={{ fontWeight: 700, color: "#2F3540" }}>
                Oki Ayobami
              </span>{" "}
              is a Software Engineer with a passion for building innovative
              solutions that drive social impact. He holds a Master&#39;s in
              Computer Science from the University of Teeside, United Kingdom
              and has experience working with startups. He specializes in
              developing web and mobile applications, and blockchain
              technologies that promote sustainability and social good.
            </Text>
          <Text
            mt={{ base: "1.25rem", md: "1.5rem" }}
            lineHeight={{ base: 1.5, lg: 1.8 }}
            fontSize={{ base: "0.95rem", md: "1rem", lg: "1rem" }}
          >
            <span style={{ fontWeight: 700, color: "#2F3540" }}>
              Meshach Aderele
            </span>{" "}
            is a PhD Fellow at Aarhus University, where he focuses on
            applying modern technologies to promote environmental
            sustainability. He was awarded the prestigious Mastercard
            Foundation Scholarship at the American University of Beirut.
            With extensive experience in digital product design and
            strategy, he combines technology and sustainability to drive
            impactful solutions.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
