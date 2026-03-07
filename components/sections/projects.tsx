import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Task Management Application',
      description: 'A full-featured task management app with real-time collaboration, priority levels, and progress tracking.',
      technologies: ['React', 'Next.js', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/mathewsoniala/University-Fee-Management-System',
      demo: '',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with product catalog, shopping cart, and secure payment integration.',
      technologies: ['React.js', 'Javascript',"mysql", 'Tailwind CSS'],
      github: 'https://github.com/mathewsoniala/CartyChefs',
      demo: '',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'WebSocket-based chat application with user authentication, room management, and message history.',
      technologies: ['JavaScript', 'Node.js', 'Python', 'Socket.io'],
      github: 'https://github.com/mathewsoniala',
      demo: '',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts and real-time metrics tracking.',
      technologies: ['React', 'Chart.js', 'API Integration', 'Tailwind CSS'],
      github: 'https://github.com/mathewsoniala',
      demo: '',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden group"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-foreground border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
