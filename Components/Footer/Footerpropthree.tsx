import { Box } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"

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
            <Link  textDecor={"none"}  href={linkProp.href} fontSize={{base:"10px", lg:"16px"}} lineHeight={"20px"}>{linkProp.links}</Link>
           </Box>
        )
      })}
    </>
  )
}
