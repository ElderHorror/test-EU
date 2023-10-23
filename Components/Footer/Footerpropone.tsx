import { Box, Link } from "@chakra-ui/react"

type FooterproponeProps = {
    propLink: {
        id:string
        links:string
    }[]
}
export default function Footerpropone(props:FooterproponeProps) {
  return (
    <>
      {props.propLink.map(linkProp => {
        return (
            <Box listStyleType={"none"} w={150} key={linkProp.id} mb={{base:".9rem", lg:"2rem"}}>
             <Link as={"li"} textDecor={"none"} fontSize={{base:"10px", lg:"16px"}} lineHeight={"20px"}>{linkProp.links}</Link>
            </Box>
        )
      })}
    </>
  )
}
