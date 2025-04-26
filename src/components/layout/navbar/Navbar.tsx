"use client";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import NavbarLogo from "./NavbarLogo";
import NavbarList from "./NavbarList";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { SecondaryButton } from "@/components/common/buttons/Button";

/**
 * Props for the Navbar component
 */
interface NavbarProps {
  setPageMode: (mode: number) => void;
}

/**
 * Main navigation component
 */
export default function Navbar({ setPageMode }: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Navigation links configuration
  const navLinks = [
    {
      id: "1",
      navLink: "Home",
      href: "../#Home",
    },
    {
      id: "2",
      navLink: "About Us",
      href: "/about",
    },
    {
      id: "3",
      navLink: "Contact Us",
      href: "../#contact_us",
    },
    {
      id: "4",
      navLink: "Bootcamp",
      href: "/courses",
    },
    {
      id: "5",
      navLink: "Loan Services",
      href: "/loans",
    },
    {
      id: "6",
      navLink: "Consultation",
      href: "/consultation",
    },
    {
      id: 7,
      navLink: "Blog",
      href: "/blog",
    },
  ];

  return (
    <Box
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
          py={"0.6rem"}
          pl={{ lg: "2rem", base: "1.5rem" }}
          pr={{ lg: "2rem", base: "1.5rem" }}
          as={"nav"}
        >
          <Link href="../#Heropage">
            <NavbarLogo />
          </Link>
          <Flex
            display={{ base: "none", md: "none", lg: "flex" }}
            alignItems="center"
            gap="2rem"
          >
            <Box>
              <NavbarList
                list={navLinks}
                onClick={() => {
                  setPageMode(0);
                }}
              />
            </Box>

            <Box
              onClick={(e) => {
                e.stopPropagation();
                setPageMode(1);
              }}
            >
              <Link href={"/courses/01"}>
                <SecondaryButton>
                  Join BootCamp
                </SecondaryButton>
              </Link>
            </Box>
          </Flex>
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
            {navLinks.map((link) => (
              <Text
                as="a"
                px={2}
                key={link.id}
                py={1}
                onClick={() => {
                  link.navLink.startsWith("/#") ? setPageMode(0) : null;
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
            <Link href={"/courses/01"}>
              <SecondaryButton>
                Join BootCamp
              </SecondaryButton>
            </Link>
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
}
