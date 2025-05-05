"use client";
import { ReactNode, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Props for the StaggeredContainer component
 */
interface StaggeredContainerProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

/**
 * Container component that animates children with a staggered delay
 * Great for lists, grids, and other collections of items
 *
 * @param children - Child elements to animate
 * @param delay - Initial delay before starting animations
 * @param staggerDelay - Delay between each child animation
 * @param threshold - IntersectionObserver threshold
 * @param rootMargin - IntersectionObserver root margin
 * @param className - Additional CSS classes
 */
export default function StaggeredContainer({
  children,
  delay = 0.1,
  staggerDelay = 0.1,
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
}: StaggeredContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(containerRef.current);

    // Save a reference to the current element for cleanup
    const currentElement = containerRef.current;

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [rootMargin, threshold]);

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}
