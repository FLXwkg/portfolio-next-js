/**
 * Portfolio Landing Page - Main Page Component
 * Ewen Héas - Fullstack Developer
 * 
 * This page composes all sections of the portfolio:
 * - Hero Section: Engaging introduction
 * - About Section: Experience and background
 * - Skills Section: Technical capabilities
 * - Projects Section: Portfolio showcase
 * - Contact Section: Contact form and info
 * - Footer: Navigation and legal
 */

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-linear-to-b from-[#fcf7fc] via-white to-[#fcf7fc]">
      {/* Hero Section - Main entry point */}
      <HeroSection />

      {/* About Section - Professional background */}
      <AboutSection />

      {/* Skills Section - Technical capabilities */}
      <SkillsSection />

      {/* Projects Section - Portfolio showcase */}
      <ProjectsSection />

      {/* Contact Section - Get in touch */}
      <ContactSection />

      {/* Footer - Navigation and info */}
      <Footer />
    </main>
  );
}
