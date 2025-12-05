import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { AboutSection } from "@/components/about-section"
import { GithubStats } from "@/components/github-stats"
import { SocialSection } from "@/components/social-section"
import { BlogSection } from "@/components/blog-section"
import { EventsSection } from "@/components/events-section"
import { GallerySection } from "@/components/gallery-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <BlogSection />
      <EventsSection />
      <GallerySection />
      <GithubStats username="thalisonwilker" />
      <SocialSection />
    </main>
  )
}
