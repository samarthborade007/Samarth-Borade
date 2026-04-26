import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { getAllProjects } from "@/lib/data"
import { NavMinimal } from "@/components/nav-minimal"
import { FooterMinimal } from "@/components/footer-minimal"
import { Sticker } from "@/components/sticker"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <main id="top" className="relative min-h-screen bg-term text-phos">
      <NavMinimal />

      <section className="px-4 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1600px]">
          {/* Back chip */}
          <Link
            href="/"
            data-cursor="HOME"
            className="ink-border inline-flex items-center gap-2 bg-paper px-3 py-1.5 label-mono text-ink hover:bg-sun transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> INDEX
          </Link>

          {/* Header card */}
          <div className="ink-border-2 mt-4 grid grid-cols-12 divide-x-2 divide-ink bg-paper">
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center bg-cinnabar p-3 text-paper">
              <span className="font-display text-3xl leading-none">A</span>
            </div>
            <div className="col-span-10 sm:col-span-7 flex items-center px-4 sm:px-6 py-4">
              <h1 className="display-md text-ink">
                ARCHIVE <span className="text-cobalt">/</span> ALL CASE FILES
              </h1>
            </div>
            <div className="col-span-12 sm:col-span-4 flex items-center justify-between bg-ink px-4 py-3 text-paper sm:px-6">
              <span className="label-mono">{projects.length} TOTAL</span>
              <span className="label-mono text-sun">★ SHIPPED</span>
            </div>
          </div>

          {/* Tagline strip */}
          <div className="ink-border-2 mt-3 bg-paper p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <p className="font-display text-3xl leading-[0.95] text-ink sm:text-4xl lg:text-5xl max-w-3xl">
                COMPLETE ARCHIVE — AGENTIC AI, ML PLATFORMS, PRODUCTION MODELS, NLP &amp;
                <span className="text-cobalt"> ANALYTICS.</span>
              </p>
              <Sticker color="sun" rotate={-6}>★ NEW DROPS · 2026</Sticker>
            </div>
          </div>
        </div>
      </section>

      {/* Card grid */}
      <section className="px-4 py-12 pb-24 sm:px-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="ink-border-2 grid grid-cols-1 divide-x-2 divide-y-2 divide-ink bg-paper sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                data-cursor="OPEN"
                className="group relative flex h-full flex-col bg-paper transition-colors hover:bg-sun"
              >
                {/* Image */}
                <div className="relative aspect-[5/3] w-full overflow-hidden border-b-2 border-ink">
                  <Image
                    src={project.thumbnailImage || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span className="ink-border bg-paper px-2 py-1 label-mono-sm text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.featured && (
                      <span className="ink-border bg-cinnabar px-2 py-1 label-mono-sm text-paper">
                        ★ FEATURED
                      </span>
                    )}
                  </div>
                  <div className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center bg-cobalt text-paper ink-border-2 transition-all duration-500 group-hover:rotate-45 group-hover:bg-ink">
                    <span className="font-display text-2xl leading-none">↗</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center justify-between label-mono">
                    <span className="text-cobalt">{project.category}</span>
                    <span className="text-ink/55">{project.year ?? "—"}</span>
                  </div>
                  <h3 className="font-display text-2xl leading-[0.95] text-ink sm:text-3xl text-balance">
                    {project.title.replace(/^(.*?)( — | - )/, "$1 / ")}
                  </h3>
                  <p className="line-clamp-3 text-sm text-ink/70">
                    {project.shortDescription}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-3 border-t-2 border-ink">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="ink-border bg-paper px-2 py-0.5 label-mono-sm text-ink/80 group-hover:bg-ink group-hover:text-paper"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterMinimal />
    </main>
  )
}
