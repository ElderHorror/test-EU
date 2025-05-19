"use client";
import { Box } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import CoursesHero from "@/components/common/sections/courses/CoursesHero";
import CoursesSection from "@/components/common/sections/courses/CoursesSection";
import { TestimonialCompact } from "./TestimonialCompact";
import LoanFeature from "@/components/common/sections/loans/LoanFeature";
import AnimatedElement from "@/components/common/AnimatedElement";

/**
 * Courses page component
 */
export default function CoursesPage() {
  return (
    <PageLayout paddingTop="0">
      <CoursesHero />
      <CoursesSection />

      {/* Why Choose EU StudyAssist Loans Section */}
      <Box position="relative" zIndex="1">
        <AnimatedElement animation="slideUp" delay={0.3}>
          <Box py="10rem">
            <LoanFeature
              imageSrc="/loan-features04.png"
              heading="Why Choose EU StudyAssist Loans?"
              description="Tailored for Students: At EU StudyAssist, our loan services are crafted specifically for international students. We offer both fixed and flexible repayment terms, aligned with your academic schedule, so you can concentrate on your studies without financial stress.
     
     No Immediate Repayment: Moving abroad can be overwhelming, which is why we provide a grace period before repayments begin. This allows you to focus on settling in without immediate financial pressure. Additionally, we offer options to stretch repayment, ensuring it stays manageable throughout your studies.
     
     Competitive Interest Rates: Our loan options come with highly competitive rates, designed to make repayment affordable and manageable, even during your studies."
              imagePosition="left"
              tallImage={true}
              smallText={true}
            />
          </Box>
        </AnimatedElement>
      </Box>

      {/* Testimonials Section */}
      <TestimonialCompact />
    </PageLayout>
  );
}
