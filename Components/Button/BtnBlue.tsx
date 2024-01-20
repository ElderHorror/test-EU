import { Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js"

type BtnBlueProps ={
  btnType: string
}

export default function BtnBlue(props:BtnBlueProps) {
  return (
    <>
      <Button 
      borderRadius={"50px"} 
      fontSize={"18px"} fontWeight={"normal"} 
      color={"white"} py={"1.7rem"} px={"1.7rem"} 
      bgColor={"rgba(52, 97, 255, 1)"}>
        <Link href={"#loan_service"}>
        {props.btnType}
        </Link>
        </Button>
    </>
  )
}
