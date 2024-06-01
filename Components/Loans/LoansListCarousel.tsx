import { Box, Center, Container, Flex } from "@chakra-ui/react";
import LoansProp from "./LoansProp";
import NoarrowBtn from "../Button/NoarrowBtn";


export default function LoansListCarousel() {
  const loansBody = [
    {
      id: "1",
      headingg: "Visa Processing Fee Loan",
      text: "This product is designed to help students cover the expenses related to visa processing, making it hassle-free and worry-free. It addresses challenges such as banking restrictions and unfavorable conversion rates, enabling students to secure their study visa without financial constraints.",
      smHeading: "T&C Apply",
      tC: "Repayment Term: 2 months",
      tCtwo: "Interest rate: 5%",
      loanAmount: ""
    },
    {
      id: "2",
      headingg: "Accommodation Payment Loan",
      text: "Finding suitable accommodation in a new country is a top concern for students. This loan is dedicated to assisting students in securing comfortable living arrangements, ensuring they have a safe and convenient place to call home during their studies.",
      smHeading: "T&C Apply",
      tC: "Repayment Term: 3 months",
      tCtwo: "Interest rate: 8%",
      loanAmount: ""
    },
    {
      id: "3",
      headingg: "Flight Expense Loan",
      text: "Students need to appear in person and that is one of the leading cause of headaches with increasing flight expenses. We'll cover your flight fare and ensure that the cost is not a hindrance to fulfilling your study goals,",
      smHeading: "T&C Apply",
      tC: "Repayment Term: 2 months",
      tCtwo: "Interest rate: 15%",
      loanAmount: ""
    },
    {
      id: "4",
      headingg: "Settler's Safety Net Loan",
      text: "The period between your arrival in a new country and the disbursement of your scholarship stipend can be financially challenging. Our Settler's Safety Net Loan offers you a financial cushion to cover essential expenses such as initial groceries, transportation an other immediate needs. it's your safety net during those critical early days in your new environment. ",
      smHeading: "T&C Apply",
      tC: "Repayment Term: 2 months",
      tCtwo: "Interest rate: 7.5%",
      loanAmount: "500 euro"

    },
    {
      id: "5",
      headingg: "Self Payment",
      text: "Do you have the funds to kickstart your academic journey but find yourself grappling with banking restrictins? We can confidently process all your academic fees with minimal charges, even in the face of banking limitations. We will help you handle your financial respnsibilities effortlessly, so you can focus wholeheartedly on other important things ",
      smHeading: "T&C Apply",
      tC: "Repayment Term:The processing fee is charged at once ",
      tCtwo: "Charges: 5 euro per 100 euro ",
      loanAmount: ""
    }
  ]
  return (
    <>
      <Box
        overflowX={"scroll"}
        marginLeft={{ base: "none", lg: "calc(50% - 50vw)" }}
        marginRight={{ base: "none", lg: "calc(50% - 50vw)" }}
        width={"100vw"}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Flex
          w={{ base: "330%", lg: "200%" }}
          columnGap={4}
        >
          <LoansProp carousel={loansBody} />
        </Flex>
      </Box>
      <Center m="2rem auto">
        {/* <NoarrowBtn /> */}
      </Center>
    </>
  )
}
