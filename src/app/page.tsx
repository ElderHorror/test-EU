"use client";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useHashFragment } from "@/hooks";
import PageLayout from "@/components/layout/PageLayout";

// Section components
import HomeHero from "@/components/sections/hero/HomeHero";
import TrainingSection from "@/components/sections/training/TrainingSection";
import ConsultingSection from "@/components/sections/consulting/ConsultingSection";
import LoansSection from "@/components/sections/loans/LoansSection";
import Faq, { defaultFaqItems } from "@/components/sections/faq/Faq";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Calculator from "@/components/sections/calculator/Calculator";

/**
 * Home page component
 */
export default function Home() {
  useHashFragment();
  const [pageMode, _setPageMode] = useState(
    typeof window !== "undefined"
      ? +(localStorage?.getItem("pageMode") ?? "0")
      : 0
  );

  const setPageMode = (mode: number) => {
    _setPageMode(mode);
    if (typeof window !== "undefined") {
      localStorage?.setItem("pageMode", "" + mode);
    }
  };

  return (
    <PageLayout paddingTop="0" setPageMode={setPageMode}>
      <Box overflow="hidden">
        {pageMode === 0 ? (
          <>
            <HomeHero />
            <TrainingSection />
            <LoansSection />
            <ConsultingSection />
            <Faq faqItems={defaultFaqItems} />
            <Testimonials />
          </>
        ) : (
          <Calculator />
        )}
      </Box>
    </PageLayout>
  );
}
