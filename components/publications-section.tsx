import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FileText, ExternalLink } from "lucide-react"
import { SkillTag } from "@/components/skill-tag"
import { AnimatedSection } from "@/components/animated-section"
import { getPublicationsInfo } from "@/lib/data"

export function PublicationsSection() {
  const publicationsInfo = getPublicationsInfo()

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
          <h3 className="text-lg font-medium">Publications</h3>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Research Publications */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <BookOpen className="w-4 h-4 mr-2 text-cyan-400" />
                Research Publications
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {publicationsInfo.research.map((publication, index) => (
                  <div key={index} className="bg-zinc-800/30 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-start">
                      {publication.logo && (
                        <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-800">
                          <Image
                            src={publication.logo || "/placeholder.svg"}
                            alt={publication.publisher}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h5 className="text-sm font-medium mb-1">{publication.title}</h5>
                        <p className="text-xs text-zinc-400 mb-2">
                          {publication.publisher} • {publication.period}
                        </p>
                        <p className="text-xs text-zinc-300 mb-2">{publication.description}</p>
                        {publication.isbn && (
                          <div className="text-xs text-zinc-500">
                            <p>Hardcover ISBN: {publication.isbn.hardcover}</p>
                            <p>eBook ISBN: {publication.isbn.ebook}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Articles & Technical Writing */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                Articles & Technical Writing
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {publicationsInfo.articles.map((article, index) => (
                  <div key={index} className="bg-zinc-800/30 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-start">
                      {article.logo && (
                        <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-800">
                          <Image
                            src={article.logo || "/placeholder.svg"}
                            alt={article.platform}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="text-sm font-medium mb-1">{article.title}</h5>
                            <p className="text-xs text-zinc-400 mb-2">
                              {article.platform} • {article.period}
                            </p>
                            <p className="text-xs text-zinc-300 mb-2">{article.description}</p>
                            {article.views && <p className="text-xs text-cyan-400 mb-1">{article.views} views</p>}
                            {article.featured && (
                              <p className="text-xs text-zinc-500">Featured by: {article.featured}</p>
                            )}
                          </div>
                          {article.url && (
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills & Expertise */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                Publication Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {publicationsInfo.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </CardContent>
    </Card>
  )
}
