'use client'

import Navigation from '@/components/sections/navigation'
import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import ProjectsSection from '@/components/sections/projects'
import ResumeSection from '@/components/sections/resume'
import ContactSection from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
