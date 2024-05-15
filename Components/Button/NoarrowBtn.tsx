import { Link } from "@chakra-ui/next-js"
import { Button } from "@chakra-ui/react";

export default function NoarrowBtn() {
  return (
    <>
      <Button py={"1.7rem"} px={"2.3rem"} bgColor={"rgba(252, 201, 68, 1)"} borderRadius={"50px"} fontSize={"18px"} color={"white"} >
        <Link href={"https://forms.gle/RzhPjxMs5TBQw9Qv9"}>
          Apply
        </Link>
        </Button>
    </>
  )
}
