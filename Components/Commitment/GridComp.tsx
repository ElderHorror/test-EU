import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import GridProp from "./GridProp";

export default function GridComp() {
    const gridText =[
        {
            id:'1',
            num:'85%',
            words:'Acceptance rates'
        },
        {
            id:'2',
            num:"100+",
            words:'Total Applicant'
        },
        {
            id:'3',
            num:"50+",
            words:'Accepted Applicant'
        },
        {
            id:"4",
            num:"24+",
            words:"Loan Services"
        }
    ]
  return (
    <SimpleGrid columns={2} gap={{base:10, md:15, lg:20}} spacing={10}>
        <GridProp group={gridText}  />
    </SimpleGrid>
  )
}
