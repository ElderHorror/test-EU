"use client";
import { Box, BoxProps, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Props for the OptimizedImage component
 */
interface OptimizedImageProps extends Omit<BoxProps, "animation"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  quality?: number;
  sizes?: string;
  animation?: boolean;
}

/**
 * Optimized image component using Next.js Image
 * Provides better performance and loading experience with animations
 *
 * @param src - Image source URL
 * @param alt - Alt text for the image
 * @param width - Image width
 * @param height - Image height
 * @param priority - Whether to prioritize loading
 * @param objectFit - Object-fit property
 * @param quality - Image quality (1-100)
 * @param sizes - Responsive sizes attribute
 * @param animation - Whether to animate the image on load
 * @param props - Additional Box props
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  objectFit = "cover",
  quality = 85,
  sizes = "100vw",
  animation = true,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority);
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const imageAnimation = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    // If the image is prioritized, mark it as visible immediately
    if (priority) {
      setIsVisible(true);
      return;
    }

    // Set up intersection observer for lazy loading
    if (!boxRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px",
      }
    );

    observer.observe(boxRef.current);

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Box position="relative" overflow="hidden" ref={boxRef} {...props}>
      {isLoading && (
        <Skeleton
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          startColor="gray.100"
          endColor="gray.300"
        />
      )}

      {(isVisible || priority) && (
        <motion.div
          initial={animation ? "hidden" : "visible"}
          animate={!isLoading ? "visible" : "hidden"}
          variants={imageAnimation}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            quality={quality}
            sizes={sizes}
            style={{
              objectFit,
              width: "100%",
              height: "100%",
            }}
            onLoad={handleImageLoad}
            fill={!width || !height}
          />
        </motion.div>
      )}
    </Box>
  );
}
