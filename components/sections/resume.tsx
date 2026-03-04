'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, FileText } from 'lucide-react'
import { useState } from 'react'

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Resume</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Card */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
              <div className="space-y-6">
                <Card className="bg-background border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">Senior Software Developer</CardTitle>
                    <CardDescription>Armour Tech Solutions | 2025 - Present</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>• Led development of high-performance web applications using React and Next.js</p>
                    <p>• Mentored junior developers and conducted code reviews</p>
                    <p>• Improved application performance by 40% through optimization</p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">Full Stack Developer</CardTitle>
                    <CardDescription>Turnkey Africa LTD | 2023-2024</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>• Developed and maintained full-stack web applications</p>
                    <p>• Designed and implemented RESTful APIs using Python and Node.js</p>
                    <p>• Collaborated with cross-functional teams on product features</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              <Card className="bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-accent">Bachelor of Science in Computer Science</CardTitle>
                  <CardDescription>Masinde Muliro University of Science and Technology (MMUST) | 2025</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p></p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-background border-border sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Resume Download
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p className="mb-4">Download my complete resume to learn more about my experience and qualifications.</p>
                </div>

                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-border hover:bg-accent/10"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? 'Hide Preview' : 'View Preview'}
                </Button>
              </CardContent>
            </Card>

            {/* Preview Notice */}
            {showPreview && (
              <Card className="bg-background border-border">
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center">
                      PDF Preview - Add your resume PDF to /public/resume.pdf to enable preview
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
