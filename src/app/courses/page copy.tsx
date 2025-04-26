"use client";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar/Navbar";
import { useRouter } from "next/navigation";
import Footer from "@/Sections/Footer/Footer";
import { useState } from "react";
import { useLocation } from "../../../Components/hooks";
import { Testimonial } from "@/Sections/Loans/Testimonial";

// Course data structure
interface Course {
  name: string;
  description: string;
  image: string;
  isDisabled: boolean;
  onclick?: () => Promise<void>;
}

// Course curriculum items
const curriculumItems = [
  "Foundations",
  "Functions",
  "Import/Export Data",
  "Exploratory Data Analysis",
  "Inferential Statistics with R",
  "Connect Codebase to GitHub",
  "Git/GitHub Collaboration",
  "Reproducible Research With Quarto",
  "Capstone Project",
];

// Course data array
const courses: Course[] = [
  {
    name: "Python for Research",
    description:
      "This course introduces core data science concepts using Python. Participants will learn data manipulation, statistical analysis, and visualization in Python, as well as project management essentials. By the end, they'll be equipped to efficiently analyze and interpret data for research applications.",
    image: "./pythonR.jpg",
    isDisabled: false,
  },
  {
    name: "R for Research",
    description:
      "This course covers essential concepts in data science, focusing on R programming, Git version control, and GitHub collaboration. Participants will learn data manipulation, statistical analysis, and data visualization in R, alongside mastering Git for version control. By the end, they'll efficiently track changes, collaborate, and manage projects on GitHub.",
    image: "./pythonR.jpg",
    isDisabled: false,
    onclick: async () => {
      const res = await fetch("/api/create_stripe_payment_session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const result = await res.json();
      await router.push(result.url);
    },
  },
  {
    name: "Data Visualization",
    description:
      "Focused on principles of visual storytelling, this course covers the tools and techniques for creating impactful data visualizations. Participants will learn to design clear, effective visuals using R, enhancing their ability to communicate complex data insights effectively.",
    image: "./data_vs.jpg",
    isDisabled: false,
  },
  {
    name: "GIS Visualization",
    description:
      "In this course, participants gain skills in geographic information systems (GIS) for spatial data analysis. Using R, they'll learn to manage, analyze, and visualize geospatial data, making it ideal for those interested in environmental and spatial research.",
    image: "./GIS.jpg",
    isDisabled: true,
  },
  {
    name: "Experimental Design",
    description:
      "Designed for researchers, this course covers key principles of experimental design, including hypothesis testing, randomization, and replication. Participants will learn to structure experiments rigorously, analyze results, and draw valid conclusions to support evidence-based research.",
    image: "./experimental.jpg",
    isDisabled: true,
  },
];

const Courses = () => {
  const router = useRouter();
  const { location } = useLocation();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleApply = (course: Course) => {
    setSelectedCourse(course);
    router.push("/apply");
  };

  return (
    <>
      {/* Navigation */}
      <Box>
        <Navbar setPageMode={() => {}} />
      </Box>

      {/* Hero Section */}
      <Box
        bgColor="#0E5FDC"
        pt={{ lg: "9rem", md: "7.5rem", base: "6rem" }}
        px="1.5rem"
        pb={{ base: "2rem", lg: "7rem" }}
        display="grid"
        placeContent="center"
      >
        <Flex
          maxW="90rem"
          px={{ lg: "1.5rem", base: 0 }}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flexBasis="50%">
            <Text
              color="white"
              fontSize={{ lg: "72px", base: "36px", md: "48px" }}
              fontWeight={600}
              letterSpacing="-2px"
              lineHeight="1.05"
              textShadow="0px 4px 4px #00000040"
              mb="1.2rem"
            >
              <span>Accelerate Your </span>
              <span style={{ color: "#F69127" }}>
                Research & Professional Skills
              </span>
              <span>.</span>
            </Text>
          </Box>
          <Box flexBasis="45%" justifySelf="baseline" mt="auto">
            <Text
              color="#E4E4E4"
              lineHeight="1.5"
              fontSize={{ lg: "20px", base: "16px", md: "18px" }}
              textShadow="0px 4px 4px #00000040"
            >
              Our training and bootcamp programs are designed to equip students,
              researchers, and professionals with critical technical skills to
              excel in the global landscape. Whether you're seeking to enhance
              your data science expertise or acquire new skills for research,
              our programs offer personalized, hands-on learning experiences.
              With expert-led sessions, one-on-one mentorship, and real-world
              projects, we ensure participants are prepared for immediate
              academic and professional opportunities.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Training Image */}
      <Box w="100%">
        <Image
          w="100%"
          borderRadius="8px"
          border="none"
          src="/training.jpg"
          alt="Training"
          minH={{ base: "calc(120vw)", md: "unset" }}
          maxH="100vh"
          objectFit={{ md: "contain", base: "cover", lg: "cover" }}
        />
      </Box>

      {/* Courses Section */}
      <Box pt="6rem" pb="2rem" px="1.5rem" bg="#F4F4F4" mb="0">
        <Text
          color="black"
          fontWeight={600}
          fontSize={{ lg: "2.5rem", base: "32px" }}
          textAlign="center"
          marginY="0.5rem"
        >
          Courses
        </Text>
        <Text
          color="#2F3540"
          textAlign="justify"
          fontSize={{ lg: "16px", base: "16px" }}
          lineHeight={{ lg: 1.5, base: 1.2 }}
          maxW="54rem"
          margin="auto"
          mb="1.5rem"
          px={{ base: "1rem", lg: "2rem" }}
        >
          Discover our range of specialized training programs designed to equip
          you with the technical skills and knowledge needed to excel in
          research and professional settings. Each course offers hands-on
          learning, real-world projects, and mentorship from industry experts to
          ensure you're ready for global opportunities.
        </Text>
      </Box>

      {/* Course Listings */}
      <Box px="1.5rem" pb="5rem" bg="#F4F4F4">
        <Flex maxW="72rem" m="auto">
          <Box>
            {courses.map((course) => (
              <Box key={course.name}>
                <Flex
                  px={{ lg: "1.5rem", base: 0 }}
                  alignItems="center"
                  flexDirection={{ lg: "row", base: "column" }}
                  py="2.25rem"
                >
                  <Box
                    flexBasis={{ lg: "67%", base: "100%" }}
                    px={{ lg: "1.5rem", base: 0 }}
                  >
                    <Text fontWeight={500} fontSize="20px" my="1rem">
                      {course.name}
                    </Text>
                    <Text
                      my="1rem"
                      textAlign="left"
                      lineHeight="1.6"
                      maxW="90%"
                      whiteSpace="pre-line"
                      fontSize="16px"
                      color="#2F3540"
                    >
                      {course.description}
                    </Text>
                    <Button
                      variant="primary"
                      px="1.5rem"
                      my="1rem"
                      isDisabled={course.isDisabled}
                      onClick={() =>
                        setSelectedCourse(
                          selectedCourse === course ? null : course
                        )
                      }
                    >
                      {course.isDisabled ? "Coming soon" : "Learn More"}
                    </Button>
                  </Box>
                  <Box ml={{ lg: "2rem", base: "unset" }}>
                    <Image src={course.image} alt={course.name} />
                  </Box>
                </Flex>

                {/* Course Details (Expanded View) */}
                {selectedCourse === course && (
                  <Flex
                    alignItems="center"
                    flexDirection={{ lg: "row", base: "column" }}
                    maxW="80rem"
                    bg="white"
                    margin="auto"
                  >
                    <Box
                      flexBasis={{ lg: "67%", base: "100%" }}
                      px={{ lg: "1.5rem", base: 0 }}
                    >
                      <Text
                        fontWeight={600}
                        fontSize="32px"
                        mx="1rem"
                        mt="1.5rem"
                      >
                        What You Will Learn
                      </Text>
                      <UnorderedList
                        mb="1.5rem"
                        mt="2rem"
                        styleType="' '"
                        sx={{
                          li: {
                            fontWeight: 500,
                            padding: "1rem",
                            bg: "rgba(147, 151, 169, 0.06)",
                            border: "1px solid #FFF",
                            mb: "0.25rem",
                          },
                        }}
                      >
                        {curriculumItems.map((item) => (
                          <ListItem key={item}>{item}</ListItem>
                        ))}
                      </UnorderedList>
                    </Box>

                    <Box
                      flexBasis={{ lg: "67%", base: "100%" }}
                      px={{ lg: "1.5rem", base: 0 }}
                    >
                      <Flex flexDirection="column" alignContent="space-between">
                        <Box>
                          <Box mb="1rem">
                            <Text
                              fontSize={{ lg: "18px", base: "16px" }}
                              fontWeight={500}
                            >
                              Duration:
                            </Text>
                            <Text
                              fontSize={{ lg: "24px", base: "18px" }}
                              fontWeight={800}
                            >
                              6 weekends
                            </Text>
                          </Box>
                          <Box mb="1rem">
                            <Text
                              fontSize={{ lg: "18px", base: "16px" }}
                              fontWeight={500}
                            >
                              Class Type:
                            </Text>
                            <Text
                              fontSize={{ lg: "24px", base: "18px" }}
                              fontWeight={800}
                            >
                              Virtual Live Classes
                            </Text>
                          </Box>
                          <Box mb="1rem">
                            <Text
                              fontSize={{ lg: "18px", base: "16px" }}
                              fontWeight={500}
                            >
                              Next Cohort:
                            </Text>
                            <Text
                              fontSize={{ lg: "24px", base: "18px" }}
                              fontWeight={800}
                            >
                              24th of February 2025
                            </Text>
                          </Box>
                        </Box>

                        <Box mt="3rem">
                          <Flex
                            alignItems="baseline"
                            gap="0.5rem"
                            mt="auto"
                            my="1rem"
                          >
                            <Text
                              fontWeight={600}
                              fontSize={{ lg: "42px", base: "32px" }}
                            >
                              {location.country_code === "NG"
                                ? "NGN 75,000"
                                : "$ 49.99"}
                            </Text>
                            <Text
                              fontWeight={600}
                              fontSize={{ lg: "21px", base: "16px" }}
                              textDecoration="line-through"
                            >
                              {location.country_code === "NG"
                                ? "NGN 200,000"
                                : "$ 100"}
                            </Text>
                          </Flex>
                          <Button
                            variant="primary"
                            px="1.5rem"
                            my="1rem"
                            isDisabled={course.isDisabled}
                            onClick={async () => {
                              if (location.country_code === "NG") {
                                await router.push("/courses/checkout");
                              } else {
                                const res = await fetch(
                                  "/api/create_stripe_payment_session",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({}),
                                  }
                                );
                                const result = await res.json();
                                await router.push(result.url);
                              }
                            }}
                          >
                            Enroll Now
                          </Button>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                )}
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>

      {/* Why Choose Section */}
      <Box py="10rem" bg="white" px="1.5rem">
        <Flex
          margin="auto"
          maxW="80rem"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ lg: "row", base: "column" }}
        >
          <Box flexBasis={{ lg: "40%", base: "100%" }}>
            <Image src="./learn.jpg" alt="Learning" />
          </Box>
          <Box flexBasis="50%" ml={{ lg: "5rem", base: 0 }}>
            <Text
              fontWeight={700}
              fontSize={{ lg: "32px", base: "25px" }}
              lineHeight={1.5}
              my="1rem"
              mt={{ lg: "0", base: "2rem" }}
            >
              Why learn at EU StudyAssist
            </Text>
            <Text>
              Choosing to learn with EU StudyAssist ensures a personalized,
              high-quality educational experience. Here's why:
              <UnorderedList>
                <ListItem my="0.75rem">
                  <span style={{ fontWeight: 700, lineHeight: 1.5 }}>
                    Tailored Learning:
                  </span>{" "}
                  Our programs are customized to meet individual needs, whether
                  you're a student, researcher, or professional.
                </ListItem>
                <ListItem my="0.75rem">
                  <span style={{ fontWeight: 700, lineHeight: 1.5 }}>
                    Expert-Led Training:
                  </span>{" "}
                  Receive mentorship and hands-on instruction from industry
                  experts.
                </ListItem>
                <ListItem my="0.75rem">
                  <span style={{ fontWeight: 700, lineHeight: 1.5 }}>
                    Practical Focus:
                  </span>{" "}
                  Gain real-world skills through projects that mirror global
                  industry and research demands.
                </ListItem>
                <ListItem my="0.75rem">
                  <span style={{ fontWeight: 700, lineHeight: 1.5 }}>
                    Global Perspective:
                  </span>{" "}
                  We focus on bridging the skill gap between non-Western
                  countries and the rest of the world, making you more
                  competitive internationally.
                </ListItem>
              </UnorderedList>
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Testimonials */}
      <Testimonial />

      {/* Footer */}
      <Box onClick={() => {}}>
        <Footer mt="0rem" />
      </Box>
    </>
  );
};

export default Courses;
