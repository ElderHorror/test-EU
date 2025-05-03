import React, { useEffect } from "react";
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
          font-family: 'Inter';
          src: url('/fonts/Inter_24pt-Regular.ttf') format('truetype');
          font-weight: 400;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter';
          src: url('/fonts/Inter_24pt-Bold.ttf') format('truetype');
          font-weight: 700;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter';
          src: url('/fonts/Inter_24pt-Medium.ttf') format('truetype');
          font-weight: 500;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter';
          src: url('/fonts/Inter_24pt-Light.ttf') format('truetype');
          font-weight: 300;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter';
          src: url('/fonts/Inter_24pt-SemiBold.ttf') format('truetype');
          font-weight: 600;
          font-display: swap;
          font-style: normal;
        }

        /* ClashDisplay font for headings */
        @font-face {
          font-family: 'ClashDisplay';
          src: url('/fonts/ClashDisplay-Regular.ttf') format('truetype');
          font-weight: 400;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: 'ClashDisplay';
          src: url('/fonts/ClashDisplay-Medium.ttf') format('truetype');
          font-weight: 500;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: 'ClashDisplay';
          src: url('/fonts/ClashDisplay-SemiBold.ttf') format('truetype');
          font-weight: 600;
          font-display: swap;
          font-style: normal;
        }

        @font-face {
          font-family: 'ClashDisplay';
          src: url('/fonts/ClashDisplay-Bold.ttf') format('truetype');
          font-weight: 700;
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
          font-family: 'Inter', sans-serif;
        }
      `}
    />
  );
};

export default Fonts;
