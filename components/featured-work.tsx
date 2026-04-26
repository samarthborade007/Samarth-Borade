"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Reveal, RevealText } from "@/components/reveal"
import { getFeaturedProjects, getAllProjects } from "@/lib/data"

export function FeaturedWork() {
  const featured = getFeaturedProjects()
  const totalCount = getAllProjects().length

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const hoverWrap = useRef<HTMLDivElement>(null)
  const cursor = useRef({ x: 0, y: 0 })
  const previewRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = hoverWrap.current
    const preview = previewRef.current
    if (!wrap || !preview) return
    const rect = wrap.getBoundingClientRect()
    cursor.current.x = e.clientX - rect.left
    cursor.current.y = e.clientY - rect.top
    preview.style.transform = `translate3d(${cursor.current.x - preview.offsetWidth / 2}px, ${
      cursor.current.y - preview.offsetHeight / 2
    }px, 0)`
  }

  return (
    <section id="work" className="relative w-full border-t border-bone/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="mb-12 grid grid-cols-12 gap-6 sm:mb-20">
          <div className="col-span-12 md:col-span-3 label-mono text-bone/50">
            <span className="text-bone">(02)</span> &nbsp; Selected Work
          </div>
          <div className="col-span-12 md:col-span-9 flex items-end justify-between gap-6">
            <h2 className="display-lg text-bone text-balance">
              <RevealText>Things I&apos;ve</RevealText>{" "}
              <span className="font-serif-italic text-citrus">
                <RevealText delay={0.1}>actually shipped</RevealText>
              </span>
              <RevealText delay={0.2}>.</RevealText>
            </h2>
            <Link
              href="/projects"
              className="hidden md:inline-flex shrink-0 label-mono text-bone/70 hover:text-citrus transition-colors"
              data-cursor="hover"
            >
              View all ({totalCount}) →
            </Link>
          </div>
        </div>

        {/* Hover-preview list */}
        <div
          ref={hoverWrap}
          onMouseMove={onMove}
          onMouseLeave={() => setActiveIndex(null)}
          className="relative"
        >
          <ul className="border-t border-bone/15">
            {featured.map((project, i) => (
              <li key={project.slug} className="border-b border-bone/15">
                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor="hover"
                  onMouseEnter={() => setActiveIndex(i)}
                  className="work-row group flex flex-wrap items-center justify-between gap-4 py-7 transition-colors duration-300 sm:py-9"
                >
                  <div className="flex min-w-0 items-baseline gap-6">
                    <span className="label-mono w-10 shrink-0 text-bone/40 group-hover:text-citrus transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display-md text-bone text-balance">
                      <span className="transition-colors duration-300 group-hover:text-citrus">
                        {project.title.replace(/^(.*?)( — | - )/, "$1 — ")}
                      </span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="hidden md:block label-mono text-bone/50">
                      {project.category}
                    </span>
                    <span className="label-mono text-bone/50">{project.year ?? ""}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 text-bone/60 transition-all duration-500 group-hover:rotate-45 group-hover:border-citrus group-hover:bg-citrus group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Floating preview thumbnail */}
          <div
            ref={previewRef}
            className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block"
            style={{ willChange: "transform" }}
          >
            <AnimatePresence mode="popLayout">
              {activeIndex !== null && (
                <motion.div
                  key={featured[activeIndex].slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-[280px] w-[400px] overflow-hidden rounded-sm border border-bone/15 shadow-2xl"
                >
                  <Image
                    src={featured[activeIndex].thumbnailImage}
                    alt={featured[activeIndex].title}
                    fill
                    sizes="400px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 to-transparent p-4">
                    <div className="label-mono text-citrus">
                      {featured[activeIndex].technologies.slice(0, 4).join(" · ")}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile CTA */}
        <Reveal className="mt-12 md:hidden">
          <Link
            href="/projects"
            className="label-mono text-bone hover:text-citrus transition-colors"
            data-cursor="hover"
          >
            View all projects ({totalCount}) →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
