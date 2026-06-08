import { HeroSection } from "@/components/hero-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { FeaturedContentSection } from "@/components/featured-content-section"
import { TechSpotlightSection } from "@/components/tech-spotlight-section"
import { ProjectsHighlightSection } from "@/components/projects-highlight-section"
import { CommunitySection } from "@/components/community-section"
import { TimelineSnapshotSection } from "@/components/timeline-snapshot-section"
import { OpenSourceSection } from "@/components/open-source-section"
import { LabPreviewSection } from "@/components/lab-preview-section"
import { ContactCTASection } from "@/components/contact-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ManifestoSection />
      <FeaturedContentSection />
      <TechSpotlightSection />
      <ProjectsHighlightSection />
      <CommunitySection />
      <TimelineSnapshotSection />
      <OpenSourceSection />
      <LabPreviewSection />
      <ContactCTASection />
      <Footer />
    </main>
  )
}
