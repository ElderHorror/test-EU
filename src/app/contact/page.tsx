"use client";
import PageLayout from "@/components/layout/PageLayout";
import ContactSection from "@/components/common/sections/contact/ContactSection";

/**
 * Contact page component
 */
export default function ContactPage() {
  return (
    <PageLayout>
      <ContactSection
        email="info@eustudyassist.com"
        phone="+234 703 456 7890"
        address="Lagos, Nigeria"
      />
    </PageLayout>
  );
}
