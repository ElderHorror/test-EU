import {} from "@chakra-ui/next-js";
import {
  AspectRatio,
  Box,
  Flex,
  SimpleGrid,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

type CoursesHeroProps = {
  imgSrc: string;
  countryCode: string;
};

export default function CoursesHero(props: CoursesHeroProps) {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap="5rem" px=".5rem">
      <Box bg="white" maxH="100%" my="auto">
        <Box>
          <Text
            fontSize={{ base: "2rem", lg: "4.0rem" }}
            fontWeight="700"
            lineHeight={{ base: "1.3", lg: "1.1" }}
            letterSpacing="-2px"
            textTransform="capitalize"
            pb="1rem"
            sx={{
              wordSpacing: ["6px", "4px"],
            }}
          >
            Become Irresistible with EU StudyAssist
          </Text>
          <Text
            fontSize="1.1rem"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="1.5"
            fontFamily="sans-seriff"
          >
            A degree alone isn&apos;t enough to secure that fully-funded
            graduate position, scholarship, internship, or dream job.
            Supercharge your career with our live bootcamp and stand out from
            the crowd!!
          </Text>
          <Link href={"./checkout"} prefetch>
            <Button color={"white"} bg="#0F5EDB" mt="2rem" p="1.5rem 2.5rem">
              Enroll Now
            </Button>
          </Link>
        </Box>
      </Box>
      <Box position={"relative"}>
        <AspectRatio ratio={1}>
          <Image
            borderRadius="8px"
            src={props.imgSrc}
            width={"100"}
            height={"100"}
            alt="Event Image"
            objectFit="cover"
          />
        </AspectRatio>
        <Box
          position={"absolute"}
          bg="#0F5EDB"
          bottom={"-2rem"}
          right={"-1rem"}
          color={"white"}
          padding={"1rem"}
          borderRadius={"0.5rem"}
          fontSize={"1.1rem"}
          fontWeight={"bold"}
          pl="1rem"
        >
          <Text>Price</Text>
          <Text fontSize="1.3rem">
            {props.countryCode === "NG" ? "NGN 75,000" : "$ 49.99 "}
          </Text>
          <Box className="price-container">
            {" "}
            {props.countryCode === "NG" ? "NGN 100,000" : "$ 100.00 "}
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
