import { Box, Link } from "@chakra-ui/react"
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
         <Link as={"li"} textDecor={"none"} href={linkProp.href} fontSize={{base:"10px", lg:"16px"}} lineHeight={"20px"}>{linkProp.links}</Link>
        </Box>
        )
      })}
    </>
  )
}
