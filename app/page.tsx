import { NavMinimal } from "@/components/nav-minimal"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkStack } from "@/components/work-stack"
import { StatsCounter } from "@/components/stats-counter"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { SkillsStack } from "@/components/skills-stack"
import { PublicationsRecognition } from "@/components/publications-recognition"
import { ContactCTA } from "@/components/contact-cta"
import { FooterMinimal } from "@/components/footer-minimal"

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen bg-term text-phos">
      <NavMinimal />
      <HeroSection />
      <AboutSection />
      <WorkStack />
      <StatsCounter />
      <SkillsStack />
      <ExperienceTimeline />
      <PublicationsRecognition />
      <ContactCTA />
      <FooterMinimal />
    </main>
  )
}
