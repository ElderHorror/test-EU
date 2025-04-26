"use client";
import { Box } from "@chakra-ui/react";
import { ReactNode, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { pageTransition } from "@/lib/animations";

/**
 * Props for the PageLayout component
 */
interface PageLayoutProps {
  children: ReactNode;
  paddingTop?: string | object;
  setPageMode?: (mode: number) => void;
}

/**
 * Standard page layout component with navbar and footer
 *
 * @param children - Page content
 * @param paddingTop - Custom padding top value (default: 6rem)
 * @param setPageMode - Optional function to set page mode
 */
export default function PageLayout({
  children,
  paddingTop = "6rem",
  setPageMode,
}: PageLayoutProps) {
  const [internalPageMode, setInternalPageMode] = useState(0);
  const pathname = usePathname();

  // Memoize the page mode handler to prevent unnecessary re-renders
  const handlePageMode = useCallback(
    (mode: number) => {
      if (setPageMode) {
        setPageMode(mode);
      } else {
        setInternalPageMode(mode);
      }
    },
    [setPageMode]
  );

  return (
    <>
      <Box>
        <Navbar setPageMode={handlePageMode} />
      </Box>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageTransition}
        >
          <Box>
            {children}
            <Footer />
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
