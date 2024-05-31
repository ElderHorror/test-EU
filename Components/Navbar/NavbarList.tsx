import { Link } from "@chakra-ui/next-js";
import { Box, Flex } from "@chakra-ui/react";
// import Reviews from "@/app/Sections/Reviews/Reviews"

type NavbarListProps = {
  onClick: () => void;
  list: {
    id: string;
    navLink: string;
    href: string;
  }[];
};

export default function NavbarList(props: NavbarListProps) {
  return (
    <Flex flexDir={"row"} justifyContent={"space-between"} gap="1rem">
      {props.list.map((listLink) => {
        return (
          <Box
            as={"ul"}
            key={listLink.id}
            onClick={() =>
              listLink.href.startsWith(".") ? null : props.onClick()
            }
          >
            <Link
              href={listLink.href}
              fontSize={"14px"}
              as={"li"}
              textDecoration={"none"}
            >
              {listLink.navLink}
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
}
