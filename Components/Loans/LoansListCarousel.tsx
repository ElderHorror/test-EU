import { Box, Container, Flex } from "@chakra-ui/react";
import LoansProp from "./LoansProp";


export default function LoansListCarousel() {
    const loansBody= [
        {
            id:"1",
            headingg:"Visa Processing Fee Loan",
            textt:"This product is designed to help students cover the expenses related to visa processing, making it hassle-free and worry-free. It addresses challenges such as banking restrictions and unfavorable conversion rates, enabling students to secure their study visa without financial constraints.",
            smHeading:"T&C Apply",
            tC:"Repayment Term: 2 months",
            tCtwo:"Interest rate: 5%"
        },
        {
            id:"2",
            headingg:"Accommodation Payment Loan",
            textt:"Finding suitable accommodation in a new country is a top concern for students. This loan is dedicated to assisting students in securing comfortable living arrangements, ensuring they have a safe and convenient place to call home during their studies.",
            smHeading:"T&C Apply",
            tC:"Repayment Term: 2 months",
            tCtwo:"Interest rate: 5%"
        },
        {
            id:"3",
            headingg:"Flight Expense Loan",
            textt:"Finding suitable accommodation in a new country is a top concern for students. This loan is dedicated to assisting students in securing comfortable living arrangements, ensuring they have a safe and convenient place to call home during their studies.",
            smHeading:"T&C Apply",
            tC:"Repayment Term: 2 months",
            tCtwo:"Interest rate: 5%"
        },
        {
            id:"4",
            headingg:" Payment of late Loans",
            textt:"To pay off late loans, create a budget, prioritize payments, negotiate with lenders if possible, and consider debt consolidation or refinancing options to manage and reduce your debt effectively.",
            smHeading:"T&C Apply",
            tC:"Repayment Term: 2 months",
            tCtwo:"Interest rate: 5%"
        },
        {
            id:"5",
            headingg:"Accommodation",
            textt:"Accommodations encompass lodging options such as hotels, Airbnb, and vacation rentals, offering various amenities and pricing to suit travelers' preferences, needs, and budgets for a comfortable stay. ",
            smHeading:"T&C Apply",
            tC:"Repayment Term: 2 months",
            tCtwo:"Interest rate: 5%"
        }
    ]
  return (
    <Box  
      overflowX={"scroll"}
      // marginLeft={{base:"none",lg:"calc(50% - 50vw)"}}
      // marginRight={{base:"none",lg:"calc(50% - 50vw)"}}
      width={"100vw"}
      css={{
        '&::-webkit-scrollbar':{
          display: 'none'
        }
       }}
    >
     <Flex 
       w={"200%"}
       columnGap={4}
     >
        <LoansProp carousel={loansBody} />
     </Flex> 
    </Box>
  )
}
