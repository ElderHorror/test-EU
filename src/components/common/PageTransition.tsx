"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Props for the PageTransition component
 */
interface PageTransitionProps {
  children: ReactNode;
  duration?: number;
}

/**
 * Page transition component for smooth transitions between pages
 * 
 * @param children - Page content
 * @param duration - Animation duration in seconds
 */
export default function PageTransition({
  children,
  duration = 0.5,
}: PageTransitionProps) {
  const pathname = usePathname();

  // Simple fade transition
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration, type: "tween" }}
    >
      {children}
    </motion.div>
  );
}
