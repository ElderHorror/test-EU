import { Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js"

type BtnBlueProps = {
  btnType: string
}

export default function BtnBlue(props: BtnBlueProps) {
  return (
    <>
      <Button
       onClick={e=>e.stopPropagation()}
        as={'a'}
        borderRadius={"50px"}
        href={"https://forms.gle/RzhPjxMs5TBQw9Qv9"}
        fontSize={"18px"} fontWeight={"normal"}
        color={"white"} py={"1.7rem"} px={"1.7rem"}
        bgColor={"rgba(52, 97, 255, 1)"}
        >
        {props.btnType}
      </Button>
    </>
  )
}
