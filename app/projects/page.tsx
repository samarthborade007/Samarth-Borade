import { GlobeIcon, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { getAllProjects } from "@/lib/data"
import { AnimatedSection } from "@/components/animated-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Back Button */}
        <AnimatedSection animation="fade-in">
          <Link
            href="/"
            className="inline-flex items-center text-xs sm:text-sm text-zinc-400 hover:text-white mb-4 sm:mb-6 transition-colors"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Back to Portfolio
          </Link>
        </AnimatedSection>

        {/* Page Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center mb-4">
              <GlobeIcon className="w-6 h-6 mr-3 text-cyan-400" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">All Projects</h1>
            </div>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              A comprehensive collection of my academic projects, research work, and technical implementations spanning
              AI/ML, full-stack development, and data science.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                  <AnimatedSection key={project.id} animation="zoom-in" delay={100 * (index + 1)}>
                    <ProjectCard
                      title={project.title}
                      category={project.category}
                      image={project.thumbnailImage}
                      slug={project.slug}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500"
        >
          <p>© {new Date().getFullYear()} Samarth Borade. All rights reserved.</p>
        </AnimatedSection>
      </div>

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />
    </main>
  )
}
