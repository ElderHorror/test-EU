"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "./Fonts";

// Extended Theme

const fonts = {
  heading: `'ClashDisplay', sans-serif`,
  body: `'ClashDisplay', sans-serif`,
};

const theme = extendTheme({
  fonts,
  sizes: {
    base: "16px",
    sm: "20px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    "2xl": "48px",
  },
  colors: {
    secondary: {
      25: "#F2F2F4",
      50: "#E3EFFC",
      75: "#C6DDF7",
      100: "#B6D8FF",
      200: "#80BBFF",
      300: "#3D89DF",
      400: "#1671D9",
      450: "#0E5FDC",
      500: "#0D5EBA",
      600: "#034592",
      700: "#04326B",
      800: "#012657",
      900: "#001633",
    },
    primary: {},
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
          ":focus-visible": {
            outline: "none",
            boxShadow: "none",
          },
        },
        fox: {
          bg: "#F2F2F4",
          border: "1px",
          borderColor: "secondary.450",
          padding: "0px 2rem 0px 2rem",
          color: "secondary.450",
          fontWeight: "600",
          rounded: "8px",
          ":hover": {
            bg: "secondary.600",
            color: "secondary.200",
          },
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
          ":focus-visible": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <Fonts />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
