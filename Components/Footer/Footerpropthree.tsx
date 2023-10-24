import { Box, Link } from "@chakra-ui/react"

type Footerpropthree = {
    propLink: {
        id:string
        links:string
        href:string
    }[]
}

export default function Footerpropthree(props:Footerpropthree) {
  return (
    <>
      {props.propLink.map(linkProp => {
            return (
            <Box listStyleType={"none"} key={linkProp.id} mb={{base:".9rem", lg:"2rem"}}>
            <Link as={"li"} textDecor={"none"} href={linkProp.href} fontSize={{base:"10px", lg:"16px"}} lineHeight={"20px"}>{linkProp.links}</Link>
           </Box>
        )
      })}
    </>
  )
}
