/*
 * CYCLIC HOME PAGE — "Structured Clarity"
 * Design: Navy bookends + white body + orange accents
 * Font: DM Sans (EN) + Noto Sans Thai (TH)
 * Sections: Hero → ClientLogos → About → Stats → Services → Process → Works → Solutions → Testimonials → Contact → FAQ → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WorksSection from "@/components/WorksSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', 'Noto Sans Thai', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <WorksSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
