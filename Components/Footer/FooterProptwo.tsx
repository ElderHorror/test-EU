import { Box, Link } from "@chakra-ui/react"
type FooterProptwoProps = {
    propLink: {
        id:string
        links:string
    }[]
}

export default function FooterProptwo(props:FooterProptwoProps) {
  return (
    <>
     {props.propLink.map(linkProp => {
       return (
         <Box listStyleType={"none"} key={linkProp.id} mb={"2rem"}>
         <Link as={"li"} textDecor={"none"} fontSize={"16px"} lineHeight={"20px"}>{linkProp.links}</Link>
        </Box>
        )
      })}
    </>
  )
}
