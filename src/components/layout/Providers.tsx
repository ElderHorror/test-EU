"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Fonts from "@/styles/fonts";
import theme from "@/styles/theme";
import PerformanceProvider from "./PerformanceProvider";

/**
 * Provider component that wraps the application with necessary context providers
 * Includes:
 * - Chakra UI provider for styling
 * - Performance optimizations
 * - Animation context
 *
 * @param children - React children to be wrapped
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <Fonts />
      <ChakraProvider theme={theme}>
        <PerformanceProvider>{children}</PerformanceProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
