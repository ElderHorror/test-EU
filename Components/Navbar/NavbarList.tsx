import { Link } from "@chakra-ui/next-js"
import { Box, Flex } from "@chakra-ui/react"

type NavbarListProps ={
    list:{
        id: string
        navLink:string
    }[]
}

export default function NavbarList(props:NavbarListProps) {
  return (
    <Flex flexDir={"row"} justifyContent={"space-between"} gap={8}>
      {props.list.map(listLink => {
        return (
            <Box  as={"ul"} key={listLink.id}>
               <Link href={"#"} fontSize={"16px"} as={"li"} textDecoration={"none"}>{listLink.navLink}</Link>
            </Box>
        )
      }) }
    </Flex>
  )
}
