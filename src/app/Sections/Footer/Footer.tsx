import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import BtnBlue from "../../../../Components/Button/BtnBlue";
import Footerpropone from "../../../../Components/Footer/Footerpropone";
import Footerpropthree from "../../../../Components/Footer/Footerpropthree";
import FooterProptwo from "../../../../Components/Footer/FooterProptwo";

export default function Footer() {
  const footlinkone = [
    // {
    //   id: "1",
    //   links: "Work With Us",
    //   href: "#"
    // },
    // {
    //   id: "2",
    //   links: "Advertise With Us",
    //   href: "#"
    // },
    // {
    //   id: "3",
    //   links: "Support Us",
    //   href: "#Reviews"
    // },
    // {
    //   id: "4",
    //   links: "Business Advices",
    //   href: "#"
    // }
  ]

  const footlinkthree = [
    // {
    //   id: "1",
    //   links: "Private Coach",
    //   href: "#"
    // },
    // {
    //   id: "2",
    //   links: "Our Work",
    //   href: "#"
    // },

    // {
    //   id: "4",
    //   links: "Our Team",
    //   href: "#Reviews"
    // }
  ]

  const footlinktwo = [
    {
      id: "1",
      links: "About",
      href: "#About"
    },
    // {
    //   id: "2",
    //   links: "FAQs",
    //   href: "#"
    // },
    {
      id: "4",
      links: "Our Commitment",
      href: "#Commitment"
    },
    {
      id: "3",
      links: "Report a Bug",
      href: "#contact_us"
    }
  ]

  return (
    <Box mt={"10rem"} w={"100vw"}
      bgColor={"rgba(250, 250, 250, 1)"}
      pt={"1rem"}
    >
      <Container maxW={"90rem"}>
        <Flex flexDir={{ base: "column", md: "column", lg: "row" }} gap={{ base: 12, lg: "none" }} justifyContent={"space-between"}>
          <Box>
            <Flex flexDir={"column"} gap={12}>
              <Box>
                <Image
                  alt={"logo"}
                  src={"/Logo.svg"}
                  objectFit={"contain"}
                />
              </Box>

              <Box display={{ base: "none", lg: "block" }} >
                <Flex justifyContent={{ base: "none", md: "space-around", lg: "space-around" }} gap={{ base: 13, md: 0, lg: 0 }}>
                  <Box>
                    <Image
                      alt={"Instagram"}
                      src={"/IG.svg"}
                    />
                  </Box>
                  <Box>
                    <Image
                      alt={"Twitter"}
                      src={"/Twitter.svg"}
                    />
                  </Box>
                  <Box>
                    <Image
                      alt={"facebook"}
                      src={"/FB.svg"}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box display={{ base: "none", lg: "block" }}>
                {/* <Box display={{base:"block", md:"grid", lg:"grid"}} mb={{base:"1rem",  md:".3rem", lg:".3rem"}} placeItems={"center"}>
                 <BtnBlue btnType="Contact Us" />
               </Box> */}
              </Box>
            </Flex>
          </Box>

          <Box >
            <Flex flexDir={{ base: "row", md: "row", lg: "row" }} justifyContent={"space-between"} gap={{ base: 12, lg: 16 }}>
              {/* <Box w={{ base: "84px", lg: "132px" }}>
                <Footerpropone propLink={footlinkone} />
              </Box> */}
              <Box w={{ base: "84px", lg: "132px" }}>
                <FooterProptwo propLink={footlinktwo} />
              </Box>
              {/* <Box w={{ base: "84px", lg: "132px" }}>
                <Footerpropthree propLink={footlinkthree} />
              </Box> */}
            </Flex>
          </Box>

          <Box display={{ base: "block", lg: "none" }}>
            <Flex flexDir={"column"} gap={5}>
              <Box >
                <Flex justifyContent={{ base: "none", md: "space-around", lg: "space-around" }} gap={{ base: 13, md: 0, lg: 0 }}>
                  <Box>
                    <Image
                      alt={"Instagram"}
                      src={"/IG.svg"}
                    />
                  </Box>
                  <Box>
                    <Image
                      alt={"Twitter"}
                      src={"/Twitter.svg"}
                    />
                  </Box>
                  <Box>
                    <Image
                      alt={"facebook"}
                      src={"/FB.svg"}
                    />
                  </Box>
                </Flex>
              </Box>
              {/* <Box display={{base:"block", md:"grid", lg:"grid"}} mb={{base:"1rem",  md:".3rem", lg:".3rem"}} placeItems={"center"}>
                 <BtnBlue btnType="Contact Us" />
               </Box> */}
            </Flex>
          </Box>

        </Flex>
      </Container>
      <Box bgColor={"black"} py={"1.4rem"} mt={"2rem"}>
        <Container maxW={"90rem"}>
          <Box w={"213px"} margin={"auto"}>
            <Text color={"white"} fontSize={"8.58px"}>© 2023 EDUSTUDY ASSIST, Inc. - All Rights Reserved</Text>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
