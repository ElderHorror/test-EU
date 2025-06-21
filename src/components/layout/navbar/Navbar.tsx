"use client";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
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
      navLink: "Training",
      href: "/training",
    },
    {
      id: "4",
      navLink: "Loan Services",
      href: "/loans",
    },
    {
      id: "5",
      navLink: "Consultation",
      href: "/consultation",
    },
    {
      id: "6",
      navLink: "Blog",
      href: "/blog",
    },
  ];

  return (
    <Box
      bgColor={"#0E5FDC"}
      color={"white"}
      zIndex={999}
      w="100vw"
      position={"fixed"}
    >
      <Container maxW={"90rem"} px={0}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          py={"0.6rem"}
          pl={{ lg: "2rem", base: "1.5rem" }}
          pr={{ lg: "2rem", base: "1.5rem" }}
          as={"nav"}
        >
          <Link href="../#Heropage" prefetch>
            <NavbarLogo />
          </Link>
          <Flex
            display={{ base: "none", md: "none", lg: "flex" }}
            alignItems="center"
            gap="8rem"
            // ml="-6rem"
          >
            <Box>
              <NavbarList
                list={navLinks}
                onClick={() => {
                  // Set pageMode to 0 and ensure localStorage is updated
                  setPageMode(0);
                  try {
                    localStorage?.setItem("pageMode", "0");
                  } catch (error) {
                    console.error("Error saving to localStorage:", error);
                  }
                }}
              />
            </Box>

            <Box
              onClick={(e) => {
                e.stopPropagation();
                // Set pageMode to 1 (calculator mode)
                setPageMode(1);
                try {
                  localStorage?.setItem("pageMode", "1");
                } catch (error) {
                  console.error("Error saving to localStorage:", error);
                }
              }}
            >
              <Link href={"/courses"} prefetch>
                <SecondaryButton>Join BootCamp</SecondaryButton>
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
      {isOpen && (
        <Box
          pb={4}
          display={{ lg: "none" }}
          w="100%"
          maxW="100vw"
          px={0}
          mx={0}
          bgColor={"#0E5FDC"}
        >
          <VStack w="100%" spacing={4} align="stretch" px={4}>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                prefetch
                onClick={() => {
                  if (
                    link.navLink.startsWith("/#") ||
                    link.href.includes("#")
                  ) {
                    // Set pageMode to 0 for navigation to home sections
                    setPageMode(0);
                    try {
                      localStorage?.setItem("pageMode", "0");
                    } catch (error) {
                      console.error("Error saving to localStorage:", error);
                    }
                  }
                  onClose();
                }}
                passHref
                style={{ textDecoration: "none" }}
              >
                <Box
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  w="100%"
                  textAlign="center"
                  fontSize="1rem"
                  py={2}
                  display="block"
                >
                  <Text>{link.navLink}</Text>
                </Box>
              </Link>
            ))}
            <Box textAlign="center" py={2}>
              <Link href={"/courses"} prefetch>
                <SecondaryButton>Join BootCamp</SecondaryButton>
              </Link>
            </Box>
          </VStack>
        </Box>
      )}
    </Box>
  );
}
