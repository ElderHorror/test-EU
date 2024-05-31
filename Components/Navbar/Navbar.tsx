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
import { Stack } from "phosphor-react";

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
      href: "#Heropage",
    },
    {
      id: "2",
      navLink: "About Us",
      href: "#About",
    },
    {
      id: "3",
      navLink: "Contact Us",
      href: "#contact_us",
    },
    {
      id: "5",
      navLink: "Resources",
      href: "/bootcamp",
    },
  ];

  return (
    <Box
      borderBottom={"1px solid"}
      bgColor={"white"}
      zIndex={999}
      w={"100vw"}
      borderColor={"gray.200"}
      position={"fixed"}
    >
      <Container maxW={"90rem"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          py={"1rem"}
          as={"nav"}
        >
          <Box
            onClick={() => {
              props.setPageMode(0);
            }}
          >
            <NavbarLogo />
          </Box>
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
            <Button
              borderRadius={"full"}
              fontSize={"18px"}
              color={"white"}
              py={"1.7rem"}
              px={"1.7rem"}
              bgColor={"rgba(52, 97, 255, 1)"}
              fontWeight="bold"
              mr="0.5rem"
              onClick={(e) => {
                e.stopPropagation();
                props.setPageMode(1);
                onClose();
              }}
              background="linear-gradient(to right,#14532d, #eab308)"
            >
              Loan Calculator
            </Button>
            <BtnBlue btnType="Apply" />
          </Box>
          <IconButton
            size={"md"}
            bg="transparent"
            icon={
              isOpen ? (
                <CloseIcon bg="transparent" _hover={{ bg: "transparent" }} />
              ) : (
                <HamburgerIcon
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
                  !link.navLink.startsWith("/") ? props.setPageMode(0) : null;
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
            <Button
              borderRadius={"full"}
              fontSize={"18px"}
              color={"white"}
              py={"1.7rem"}
              px={"1.7rem"}
              bgColor={"rgba(52, 97, 255, 1)"}
              fontWeight="bold"
              mr="0.5rem"
              onClick={(e) => {
                e.stopPropagation();
                props.setPageMode(1);
                onClose();
              }}
              background="linear-gradient(to right,#14532d, #eab308)"
            >
              Loan Calculator
            </Button>
            <BtnBlue btnType="Apply" />
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
}
