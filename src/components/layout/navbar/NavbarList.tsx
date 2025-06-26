import { Link } from "@chakra-ui/next-js";
import { Box, Flex } from "@chakra-ui/react";

/**
 * Props for the NavbarList component
 */
type NavbarListProps = {
  onClick: () => void;
  list: {
    id: string | number;
    navLink: string;
    href: string;
  }[];
};

/**
 * Component that renders the navigation links in the navbar
 */
export default function NavbarList(props: NavbarListProps) {
  return (
    <Flex flexDir={"row"} justifyContent={"space-between"} gap="3.5rem">
      {props.list.map((listLink) => {
        return (
          <Box
            as={"ul"}
            key={listLink.id}
            onClick={() =>
              !listLink.href.startsWith("/#") ? null : props.onClick()
            }
          >
            <Link
              href={listLink.href}
              fontSize={"1rem"}
              as={"li"}
              fontWeight={500}
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
