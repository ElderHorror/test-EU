import { Box } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"

type FooterProptwoProps = {
    propLink: {
        id:string
        links:string
        href: string
    }[]
}

export default function FooterProptwo(props:FooterProptwoProps) {
  return (
    <>
     {props.propLink.map(linkProp => {
       return (
         <Box listStyleType={"none"}  w={150} key={linkProp.id} mb={{base:".9rem", lg:"2rem"}}>
         <Link  textDecor={"none"} href={linkProp.href} fontSize={{base:"10px", lg:"16px"}} lineHeight={"20px"}>{linkProp.links}</Link>
        </Box>
        )
      })}
    </>
  )
}
