"use client";
import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Props for the PerformanceProvider component
 */
interface PerformanceProviderProps {
  children: ReactNode;
}

/**
 * Performance optimization provider component
 * Implements various performance optimizations:
 * - Preconnect to external domains
 * - Prefetch critical resources
 * - Implement resource hints
 *
 * @param children - Child components
 */
export default function PerformanceProvider({
  children,
}: PerformanceProviderProps) {
  const pathname = usePathname();

  // Use a ref to track if we've already added the performance optimizations
  // This prevents adding them multiple times and causing memory leaks
  const optimizationsApplied = useRef(false);

  useEffect(() => {
    // Only run in browser and only once
    if (typeof window === "undefined" || optimizationsApplied.current) return;

    // Mark as applied to prevent duplicate execution
    optimizationsApplied.current = true;

    // Use requestIdleCallback for non-critical operations if available
    // Fallback to setTimeout for browsers that don't support requestIdleCallback
    const idleCallback =
      typeof window !== "undefined" && window.requestIdleCallback
        ? window.requestIdleCallback
        : (cb: IdleRequestCallback) => setTimeout(cb, 1000);

    // Use a cleanup flag to prevent memory leaks
    let isMounted = true;

    const applyOptimizations = () => {
      // Don't proceed if component is unmounted or document is not available
      if (!isMounted || typeof document === "undefined") return;

      try {
        // Safely access document
        if (document && document.querySelectorAll && document.head) {
          // Check if links already exist to prevent duplicates
          const existingPreloads = document.querySelectorAll(
            'link[rel="preload"][as="font"]'
          );

          if (existingPreloads.length === 0) {
            // Preload critical fonts
            const criticalFonts = [
              "/fonts/Inter_24pt-Regular.ttf",
              "/fonts/ClashDisplay-Regular.ttf",
              "/fonts/ClashDisplay-Medium.ttf",
            ];

            criticalFonts.forEach((fontPath) => {
              try {
                const fontPreloadLink = document.createElement("link");
                fontPreloadLink.rel = "preload";
                fontPreloadLink.as = "font";
                fontPreloadLink.href = fontPath;
                fontPreloadLink.type = "font/truetype";
                fontPreloadLink.crossOrigin = "anonymous";
                document.head.appendChild(fontPreloadLink);
              } catch (fontError) {
                // Log but continue with other fonts
                console.error(`Error preloading font ${fontPath}:`, fontError);
              }
            });
          }

          // Add preconnect for external domains
          const domains = [
            "https://fonts.googleapis.com",
            "https://fonts.gstatic.com",
          ];

          domains.forEach((domain) => {
            try {
              // Check if preconnect already exists
              const existingPreconnect = document.querySelector(
                `link[rel="preconnect"][href="${domain}"]`
              );

              if (!existingPreconnect) {
                const link = document.createElement("link");
                link.rel = "preconnect";
                link.href = domain;
                link.crossOrigin = "anonymous";
                document.head.appendChild(link);
              }
            } catch (domainError) {
              // Log but continue with other domains
              console.error(
                `Error adding preconnect for ${domain}:`,
                domainError
              );
            }
          });
        }
      } catch (error) {
        // Log the error but don't crash the application
        console.error("Error applying performance optimizations:", error);
      }
    };

    // Schedule the optimizations during idle time
    const id = idleCallback(applyOptimizations);

    // Clean up
    return () => {
      isMounted = false;

      // Clean up the idle callback if possible
      if (typeof window !== "undefined") {
        if (window.cancelIdleCallback) {
          try {
            window.cancelIdleCallback(id as any);
          } catch (error) {
            console.error("Error canceling idle callback:", error);
          }
        } else {
          // If requestIdleCallback wasn't available, we used setTimeout
          // so we should clear that timeout
          clearTimeout(id as any);
        }
      }
    };
  }, []); // Remove pathname dependency to prevent re-running on route changes

  return <>{children}</>;
}
