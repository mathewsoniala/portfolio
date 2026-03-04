import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  const handleScroll = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            Hi, I'm <span className="text-accent">Mathews Oniala</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            Software Developer
          </p>
        </div>

        {/* Professional summary */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          I build accessible, high-performance web applications using modern technologies. 
          Passionate about clean code, user experience, and solving complex problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-12"
            onClick={() => handleScroll('projects')}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10 rounded-full px-8 h-12"
            asChild
          >
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
