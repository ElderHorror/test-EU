"use client";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useHashFragment } from "@/hooks";
import PageLayout from "@/components/layout/PageLayout";

import { lazy, Suspense } from "react";

// Section components with lazy loading for non-critical sections
import HomeHero from "@/components/sections/hero/HomeHero";
const TrainingSection = lazy(() => import("@/components/sections/training/TrainingSection"));
const ConsultingSection = lazy(() => import("@/components/sections/consulting/ConsultingSection"));
const LoansSection = lazy(() => import("@/components/sections/loans/LoansSection"));
const Faq = lazy(() => import("@/components/sections/faq/FAQNew"));
const Testimonials = lazy(() => import("@/components/sections/testimonials/Testimonials"));
const Calculator = lazy(() => import("@/components/sections/calculator/Calculator"));
import { defaultFaqItems } from "@/components/sections/faq/FAQNew";

// Simple fallback component for lazy-loaded sections
const LoadingFallback = () => <div>Loading section...</div>;

/**
 * Home page component
 */
export default function Home() {
  useHashFragment();

  // Function to reset localStorage pageMode to 0 (show all components)
  const resetPageMode = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage?.setItem("pageMode", "0");
        console.log("PageMode reset to 0");
        return true;
      } catch (error) {
        console.error("Error resetting pageMode:", error);
        return false;
      }
    }
    return false;
  };

  // Try to reset pageMode on initial load to fix any corrupted values
  // This will ensure the site loads correctly in normal mode
  useEffect(() => {
    // Only run once on client side
    if (typeof window !== "undefined") {
      const currentMode = localStorage?.getItem("pageMode");
      // If pageMode is not 0, reset it to ensure all components show
      if (currentMode !== "0") {
        resetPageMode();
        // Force a page refresh to apply the reset
        window.location.reload();
      }
    }
  }, []);

  const [pageMode, _setPageMode] = useState(() => {
    // Default to showing all components (pageMode 0)
    let initialMode = 0;

    // Only try to access localStorage on the client side
    if (typeof window !== "undefined") {
      try {
        // Get the stored value, defaulting to "0" if not found
        const storedMode = localStorage?.getItem("pageMode") ?? "0";
        initialMode = +storedMode; // Convert to number

        // Validate the value - if it's not 0 or 1, reset to 0
        if (initialMode !== 0 && initialMode !== 1) {
          initialMode = 0;
          // Also reset in localStorage
          resetPageMode();
        }
      } catch (error) {
        // If there's any error accessing localStorage, use default
        console.error("Error accessing localStorage:", error);
        initialMode = 0;
      }
    }

    return initialMode;
  });

  const setPageMode = (mode: number) => {
    // Update state regardless of localStorage availability
    _setPageMode(mode);

    // Only try to access localStorage on the client side
    if (typeof window !== "undefined") {
      try {
        localStorage?.setItem("pageMode", "" + mode);
      } catch (error) {
        // Log error but continue - the UI state will still update correctly
        console.error("Error saving to localStorage:", error);
      }
    }
  };

  return (
    <PageLayout paddingTop="0" setPageMode={setPageMode}>
      <Box overflow="hidden">
        {pageMode === 0 ? (
          <>
            <HomeHero />
            <Suspense fallback={<LoadingFallback />}>
              <TrainingSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <LoansSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ConsultingSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Faq faqItems={defaultFaqItems} />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <Testimonials />
            </Suspense>
          </>
        ) : (
          <Suspense fallback={<LoadingFallback />}>
            <Calculator />
          </Suspense>
        )}
      </Box>
    </PageLayout>
  );
}
