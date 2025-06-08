"use client";
import {
  ReactNode,
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { motion } from "framer-motion";

/**
 * Props for the AnimatedElement component
 */
interface AnimatedElementProps {
  children: ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;

  className?: string;
}

/**
 * Reusable animated element component that triggers animations when in view
 * Uses IntersectionObserver for better performance
 *
 * @param children - Content to animate
 * @param animation - Animation type
 * @param delay - Animation delay in seconds
 * @param duration - Animation duration in seconds
 * @param threshold - IntersectionObserver threshold
 * @param rootMargin - IntersectionObserver root margin
 * @param once - Whether to trigger animation only once
 * @param className - Additional CSS classes
 */
export default function AnimatedElement({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  threshold = 0.15,
  rootMargin = "-50px",

  className = "",
}: AnimatedElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Memoize animation variants to prevent recreation on every render
  const variants = useMemo(
    () => ({
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      slideUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      },
      slideLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      },
      slideRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      },
      scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      },
    }),
    []
  );

  // Optimize intersection observer with useCallback
  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (!hasAnimated && entry.isIntersecting) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    },
    [hasAnimated]
  );

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(elementRef.current);

    // Save a reference to the current element for cleanup
    const currentElement = elementRef.current;

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [handleIntersection, threshold, rootMargin]);

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
