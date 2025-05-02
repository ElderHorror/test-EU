// "use client";
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   FormControl,
//   FormErrorMessage,
//   Image,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   SimpleGrid,
//   Text,
//   useDisclosure,
//   useToast,
// } from "@chakra-ui/react";
// import PageLayout from "@/components/layout/PageLayout";
// import AnimatedElement from "@/components/common/AnimatedElement";
// import StaggeredContainer from "@/components/common/StaggeredContainer";
// import PageTransition from "@/components/common/PageTransition";

// import { useRouter } from "next/navigation";
// import { Field, Formik } from "formik";
// import * as Yup from "yup";
// import { useLocation } from "../../../../Components/hooks";
// import CoursesHero from "../../../../Components/Courses/Hero";
// import CoursesDetails from "../../../../Components/Courses/Details";

// export default function Bootcamp() {
//   const router = useRouter();
//   const { data, isLoading } = useLocation();

//   return (
//     <PageLayout>
//       <PageTransition>
//         <Box minH="calc(100vh - 30rem)" mt="6rem">
//           {isLoading ? (
//             <Text textAlign="center" fontSize="xl" py={10}>
//               Loading...
//             </Text>
//           ) : (
//             <>
//               <Container maxW={"90rem"} p="1rem">
//                 <AnimatedElement animation="fadeIn" delay={0.2}>
//                   <Box>
//                     <CoursesHero
//                       imgSrc={"/" + "01.png"}
//                       countryCode={data.country_code}
//                     />
//                   </Box>
//                 </AnimatedElement>
//               </Container>

//               <AnimatedElement animation="slideUp" delay={0.4}>
//                 <Box w="100%" bg="#0F5EDB" mt="8rem">
//                   <Container maxW={"90rem"} p="1rem">
//                     <StaggeredContainer delay={0.1} staggerDelay={0.1}>
//                       <SimpleGrid
//                         columns={{ base: 2, md: 4, sm: 1 }}
//                         gap="2rem"
//                         alignContent="center"
//                         justifyContent={"center"}
//                         color={"white"}
//                         fontSize={"1.2rem"}
//                         fontWeight={500}
//                         p="1rem"
//                       >
//                         <Box borderRight={"1px solid white"} p="1.5rem">
//                           <Text>Next Cohort</Text>
//                           <Text>24th of February 2025</Text>
//                         </Box>
//                         <Box borderRight={"1px solid white"} p="1.5rem">
//                           <Text> Duration</Text>
//                           <Text>6 weekends</Text>
//                         </Box>
//                         <Box borderRight={"1px solid white"} p="1.5rem">
//                           <Text>Virtual Live</Text>
//                           <Text>Classes</Text>
//                         </Box>
//                         <Box borderRight={"1px solid white"} p="1.5rem">
//                           <Text>Expert </Text>
//                           <Text>Instructor</Text>
//                         </Box>
//                       </SimpleGrid>
//                     </StaggeredContainer>
//                   </Container>
//                 </Box>
//               </AnimatedElement>

//               <Container maxW={"90rem"} p="1rem">
//                 <AnimatedElement animation="fadeIn" delay={0.6}>
//                   <CoursesDetails imgSrc={"/" + "00.png"} />
//                 </AnimatedElement>
//               </Container>
//             </>
//           )}
//         </Box>
//       </PageTransition>
//     </PageLayout>
//   );
// }
