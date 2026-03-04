import { Badge } from '@/components/ui/badge'

export default function AboutSection() {
  const skills = ['React', 'Next.js', 'JavaScript', 'Python', 'MySQL', 'Prisma']

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">About Me</h2>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated software developer with a passion for creating elegant solutions to complex problems. 
              With expertise in full-stack development, I specialize in building scalable, user-centric applications 
              that deliver real value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development has equipped me with strong skills across the modern development stack. 
              I'm committed to continuous learning and staying updated with the latest technologies and best practices 
              in the industry.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 text-base"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">20+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
