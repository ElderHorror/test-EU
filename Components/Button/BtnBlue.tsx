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
        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSeLVRSChFawU5H543BkRzoPgie5vwwqMMUDRAvM6cz5RlRaEQ/viewform"}>
        {props.btnType}
        </Link>
        </Button>
    </>
  )
}
