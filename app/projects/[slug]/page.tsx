import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react"
import { getProjectBySlug } from "@/lib/data"
import { notFound } from "next/navigation"
import { NavMinimal } from "@/components/nav-minimal"
import { FooterMinimal } from "@/components/footer-minimal"
import { Reveal, RevealText } from "@/components/reveal"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main id="top" className="relative min-h-screen bg-term text-phos">
      <NavMinimal />

      {/* Title block */}
      <section className="relative px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/projects"
            data-cursor="BACK"
            className="ink-border inline-flex items-center gap-2 bg-paper px-3 py-1.5 label-mono text-ink hover:bg-sun transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> ALL CASE FILES
          </Link>

          {/* Title card */}
          <div className="ink-border-2 mt-4 grid grid-cols-12 divide-x-2 divide-ink bg-paper">
            <div className="col-span-3 sm:col-span-2 flex items-center justify-center bg-cobalt p-4 text-paper">
              <span className="font-display text-4xl sm:text-6xl leading-none">★</span>
            </div>
            <div className="col-span-9 sm:col-span-7 flex flex-col justify-center gap-2 px-4 py-4 sm:px-6">
              <div className="flex flex-wrap items-center gap-2 label-mono">
                <span className="ink-border bg-cinnabar px-2 py-1 text-paper">{project.category}</span>
                <span className="ink-border bg-paper px-2 py-1 text-ink">{project.year ?? project.timeline}</span>
              </div>
              <h1 className="display-md text-ink text-balance">
                {project.title}
              </h1>
            </div>
            <div className="col-span-12 sm:col-span-3 flex items-center justify-between bg-amber px-4 py-3 text-term sm:px-6">
              <span className="label-mono opacity-70">SLUG</span>
              <span className="label-mono truncate max-w-[12rem]">{project.slug}</span>
            </div>
          </div>

          <p className="mt-6 max-w-3xl body-mono-lg text-phos glow text-balance">
            {"> "}{project.shortDescription}
          </p>
        </div>
      </section>

      {/* Cover image */}
      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="mt-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden ink-border-2 bg-paper">
              <Image
                src={project.coverImage || "/placeholder.svg"}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1280px) 1600px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body grid */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 md:sticky md:top-32 md:self-start ink-border-2 bg-paper divide-y-2 divide-ink">
            <Meta label="ROLE" value={project.role} />
            <Meta label="TIMELINE" value={project.timeline} />
            {project.client && <Meta label="CLIENT" value={project.client} />}
            <div className="p-4">
              <div className="label-mono text-ink/55 mb-3">STACK</div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="ink-border bg-paper px-2 py-1 label-mono-sm text-ink hover:bg-sun transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {(project.liveUrl || project.githubUrl) && (
              <div className="divide-y-2 divide-ink">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="OPEN"
                    className="group flex items-center justify-between bg-cobalt px-4 py-3 text-paper transition-colors hover:bg-cinnabar"
                  >
                    <span className="label-mono">LIVE PREVIEW</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="DEMO"
                    className="group flex items-center justify-between bg-ink px-4 py-3 text-paper transition-colors hover:bg-sun hover:text-ink"
                  >
                    <span className="label-mono">SOURCE / DEMO</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                )}
              </div>
            )}
          </aside>

          {/* Main */}
          <div className="col-span-12 md:col-span-9 space-y-3">
            {/* Overview */}
            <div className="term-border-2 bg-term p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-phos-300 pb-3 mb-5">
                <span className="label-mono text-amber glow-amber">{"// OVERVIEW.MD"}</span>
                <span className="label-mono text-phos-300">{project.description.length} BLOCKS</span>
              </div>
              <div className="space-y-4">
                {project.description.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "body-mono-lg text-phos glow max-w-3xl"
                        : "body-mono text-phos-100 max-w-3xl"
                    }
                  >
                    {i === 0 && <span className="text-amber">{"$ "}</span>}
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="term-border-2 bg-term">
              <div className="flex items-center justify-between border-b border-phos-300 bg-amber px-5 py-3 text-term">
                <span className="label-mono">{"// WHAT_IT_DOES"}</span>
                <span className="label-mono">{project.features.length} BEATS</span>
              </div>
              <ul className="divide-y divide-phos-300">
                {project.features.map((f, i) => (
                  <li key={i} className="group grid grid-cols-12 gap-3 px-5 py-3 transition-all duration-300 hover:bg-amber hover:translate-x-1">
                    <span className="col-span-2 sm:col-span-1 label-mono text-amber glow-amber group-hover:text-term group-hover:[text-shadow:none]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 sm:col-span-11 body-mono text-phos group-hover:text-term">
                      {"> "}{f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="ink-border-2 bg-paper p-5">
                <div className="label-mono text-cinnabar mb-4">/ GALLERY</div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {project.gallery.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] overflow-hidden ink-border-2 bg-paper"
                    >
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.caption || `Gallery image ${idx + 1}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related */}
      {project.relatedProjects && project.relatedProjects.length > 0 && (
        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1600px]">
            <div className="ink-border-2 grid grid-cols-12 divide-x-2 divide-ink bg-paper">
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center bg-cinnabar p-3 text-paper">
                <span className="font-display text-3xl leading-none">→</span>
              </div>
              <div className="col-span-10 sm:col-span-11 flex items-center px-4 sm:px-6">
                <h2 className="display-md text-ink">
                  KEEP <span className="text-cobalt">/</span> EXPLORING
                </h2>
              </div>
            </div>
            <div className="ink-border-2 mt-3 grid grid-cols-1 divide-x-2 divide-y-2 divide-ink bg-paper sm:grid-cols-2 sm:divide-y-0">
              {project.relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  data-cursor="NEXT"
                  className="group flex items-center justify-between gap-5 bg-paper p-5 transition-colors hover:bg-sun sm:p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden ink-border-2">
                      <Image
                        src={rel.image || "/placeholder.svg"}
                        alt={rel.title}
                        fill
                        sizes="112px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="label-mono text-cobalt">{rel.category}</div>
                      <h3 className="font-display text-2xl leading-[0.95] text-ink text-balance">
                        {rel.title}
                      </h3>
                    </div>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink text-paper ink-border-2 transition-all duration-500 group-hover:rotate-45 group-hover:bg-cobalt">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterMinimal />
    </main>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 px-4 py-3">
      <span className="label-mono-sm text-ink/55">{label}</span>
      <span className="label-mono text-ink">{value}</span>
    </div>
  )
}
