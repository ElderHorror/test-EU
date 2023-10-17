// import { Box, Flex, Link } from "@chakra-ui/react"

// type MobileNavPropProps = {
//     navLink : {
//         id: string
//         navLink: string
//     }[]
// }

// export default function MobileNavProp(props:MobileNavPropProps) {
//   return (
//     <Flex flexDir={"column"} position={"relative"} py={"1rem"}  gap={8} justifyContent={"center"} alignItems={"center"} bgColor={"white"} as="li" >
//       {props.navLink.map(listLink => {
//         return (
//             <Box listStyleType={"none"} borderColor={"gray.400"} position={"relative"}  as={"ul"} key={listLink.id}>
//                <Link href={"#"} fontSize={"16px"} as={"li"} textTransform={"uppercase"} textDecoration={"none"}>{listLink.navLink}</Link>
//             </Box>
//         )
//       }) }
//     </Flex>
//   )
// }
