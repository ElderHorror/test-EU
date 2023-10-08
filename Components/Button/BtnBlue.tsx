import { Button } from "@chakra-ui/react";

type BtnBlueProps ={
  btnType: string
}

export default function BtnBlue(props:BtnBlueProps) {
  return (
    <>
      <Button borderRadius={"50px"} fontSize={"18px"} fontWeight={"normal"} color={"white"} py={"1rem"} px={"1.5rem"} bgColor={"rgba(52, 97, 255, 1)"}>{props.btnType}</Button>
    </>
  )
}
