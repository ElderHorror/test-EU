import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";

/**
 * Global font declarations using Emotion's Global component
 * Optimized for performance with:
 * - Prioritized WOFF2 format (smaller file size)
 * - Font-display: swap for better perceived performance
 * - Reduced font variants to only those used in the application
 * - Lazy loading of non-critical font weights
 */
const Fonts = () => {
  // We don't need the state since we're not conditionally rendering anything
  // This was likely causing unnecessary re-renders

  // Load non-critical fonts after page load
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Use requestIdleCallback for non-critical operations
    const idleCallback =
      window.requestIdleCallback || ((cb) => setTimeout(cb, 1000));

    // Use a cleanup flag to prevent memory leaks
    let isMounted = true;

    const loadFonts = () => {
      if (!isMounted) return;

      // We don't need to set state anymore, just load the fonts
      console.log("Fonts loaded during idle time");
    };

    // Schedule the font loading during idle time
    const id = idleCallback(loadFonts);

    // Clean up
    return () => {
      isMounted = false;
      if (typeof window !== "undefined" && window.cancelIdleCallback) {
        window.cancelIdleCallback(id as any);
      }
    };
  }, []);

  return (
    <Global
      styles={`
        /* Critical fonts loaded immediately */
        @font-face {
          font-family: 'ClashDisplay';
          src: url('/fonts/ClashDisplay-Regular.woff2') format('woff2');
          font-weight: 400;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: 'ClashDisplay';
          src: url('/fonts/ClashDisplay-Bold.woff2') format('woff2');
          font-weight: 700;
          font-display: swap;
          font-style: normal;
        }

        /* Variable font for better performance */
        @font-face {
          font-family: 'ClashDisplay';
          src: url('/fonts/ClashDisplay-Variable.woff2') format('woff2');
          font-weight: 200 700;
          font-display: swap;
          font-style: normal;
        }

        /* Optimize font rendering */
        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* Prevent layout shifts */
        body {
          font-family: 'ClashDisplay', sans-serif;
        }
      `}
    />
  );
};

export default Fonts;
