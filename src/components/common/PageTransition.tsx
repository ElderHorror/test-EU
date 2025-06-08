"use client";
import { ReactNode, useMemo } from "react";
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
  duration = 0.3, // Reduced duration for better performance
}: PageTransitionProps) {
  const pathname = usePathname();

  // Memoize variants to prevent recreation
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    }),
    []
  );

  // Memoize transition config
  const transition = useMemo(
    () => ({
      duration,
      type: "tween" as const,
      ease: "easeInOut",
    }),
    [duration]
  );

  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
