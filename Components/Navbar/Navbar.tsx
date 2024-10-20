import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import NavbarLogo from "./NavbarLogo";
import NavbarList from "./NavbarList";
import BtnBlue from "../Button/BtnBlue";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const NavLink = (props: any) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLink = [
    {
      id: "1",
      navLink: "Home",
      href: "../#Heropage",
    },
    // {
    //   id: "2",
    //   navLink: "About Us",
    //   href: "/#About",
    // },
    {
      id: "3",
      navLink: "Contact Us",
      href: "../#contact_us",
    },
    {
      id: "4",
      navLink: "Bootcamp",
      href: "/courses/",
    },
    {
      id: "5",
      navLink: "Loan Services",
      href: "../#Loans",
    },
    {
      id: "6",
      navLink: "Consultation",
      href: "./#Consulting",
    },
  ];

  return (
    <Box
      // borderBottom={"1px solid"}
      bgColor={"#0E5FDC"}
      color={"white"}
      zIndex={999}
      w={"100vw"}
      position={"fixed"}
    >
      <Container maxW={"90rem"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          py={"1rem"}
          pl={{ lg: "unset", base: "1.5rem" }}
          as={"nav"}
        >
          <Link href="../#Heropage">
            <NavbarLogo />
          </Link>
          <Box display={{ base: "none", md: "none", lg: "block" }}>
            <NavbarList
              list={navLink}
              onClick={() => {
                props.setPageMode(0);
              }}
            />
          </Box>

          <Box
            display={{ base: "none", md: "none", lg: "block" }}
            onClick={(e) => {
              e.stopPropagation();
              props.setPageMode(1);
            }}
          >
            <Link href={"/courses/01"}>
              <Button variant={"fox"} textDecoration={"none"}>
                Join BootCamp
              </Button>
            </Link>
          </Box>
          <IconButton
            size={"md"}
            bg="transparent"
            p="0"
            m="0"
            icon={
              isOpen ? (
                <CloseIcon
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  color={"white"}
                  fill={"white"}
                />
              ) : (
                <HamburgerIcon
                  color={"white"}
                  fill={"white"}
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                />
              )
            }
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Container>
      {isOpen ? (
        <Box pb={4} display={{ lg: "none" }}>
          <VStack>
            {navLink.map((link, index) => (
              <Text
                as="a"
                px={2}
                key={link.id}
                py={1}
                onClick={() => {
                  link.navLink.startsWith("/#") ? props.setPageMode(0) : null;
                  onClose();
                }}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={link.href}
              >
                {link.navLink}
              </Text>
            ))}
            <BtnBlue btnType="Apply" />
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
}
