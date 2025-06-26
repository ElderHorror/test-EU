import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const fonts = {
  heading: `'ClashDisplay', sans-serif`,
  body: `'Inter', sans-serif`,
};

/**
 * Extended Chakra UI theme with performance optimizations
 * - Reduced CSS variables
 * - Optimized transition properties
 * - Improved rendering performance
 */
const theme = extendTheme({
  fonts,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
  },
  styles: {
    global: {
      // Optimize animations and transitions
      "html, body": {
        scrollBehavior: "smooth",
        overscrollBehaviorY: "none",
      },
      // Optimize image rendering
      img: {
        imageRendering: "auto",
      },
    },
  },
  // Optimize transition defaults
  transition: {
    property: {
      common:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      dimensions: "width, height",
      position: "left, right, top, bottom",
      background: "background-color, background-image, background-position",
    },
    easing: {
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      "ultra-fast": "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      "ultra-slow": "500ms",
    },
  },
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
    primary: {
      50: "#E6F0FF",
      100: "#CCE0FF",
      200: "#99C2FF",
      300: "#66A3FF",
      400: "#3385FF",
      500: "#0066FF", // Main primary color
      600: "#0052CC",
      700: "#003D99",
      800: "#002966",
      900: "#001433",
    },
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
        primary: {
          bg: "#0E5FDC",
          border: "1px",
          borderColor: "#0E5FDC",
          padding: "1.35rem 2.5rem 1.35rem 2.5rem",
          color: "#FFFFFF",
          fontWeight: "400",
          fontSize: "16px",
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

export default theme;
