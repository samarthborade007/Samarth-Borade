"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { getFeaturedProjects, getAllProjects } from "@/lib/data"
import { VelocityMarquee } from "@/components/velocity-marquee"
import { ScrambleText } from "@/components/scramble-text"

export function WorkHorizontal() {
  const featured = getFeaturedProjects()
  const total = getAllProjects().length

  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  })

  // Translate cards horizontally based on vertical scroll progress.
  // We need to move the inner track left by (totalWidth - viewportWidth).
  // We approximate: each card is ~70vw, we have N cards + intro slot, so total ~ (N+1)*70vw
  // Move from 0% to -(N*70 + 30)% (in viewport-width units), but we'll use percentage of track height.
  const cardCount = featured.length
  const xPercent = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${cardCount * 70 + 5}%`],
  )

  return (
    <>
      {/* Pre-section velocity marquee */}
      <div className="relative z-10 border-y border-bone/10 bg-ink/40 py-6 backdrop-blur-md">
        <VelocityMarquee baseVelocity={-2}>
          <span className="font-serif text-7xl italic text-bone sm:text-8xl">
            selected work
          </span>
          <span className="text-7xl text-citrus sm:text-8xl">✦</span>
          <span className="font-serif text-7xl text-bone sm:text-8xl">
            2023 → 2026
          </span>
          <span className="text-7xl text-citrus sm:text-8xl">✦</span>
          <span className="font-serif text-7xl italic text-bone sm:text-8xl">
            shipped, not&nbsp;sketched
          </span>
          <span className="text-7xl text-citrus sm:text-8xl">✦</span>
        </VelocityMarquee>
      </div>

      {/* Horizontal scroll rail */}
      <section
        id="work"
        ref={trackRef}
        className="relative w-full"
        style={{ height: `${(cardCount + 1) * 80}vh` }}
      >
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
          <motion.div style={{ x: xPercent }} className="flex h-full items-center will-change-transform">
            {/* Intro card */}
            <div className="flex h-full w-[100vw] shrink-0 flex-col justify-center px-6 sm:px-12">
              <div className="label-mono text-bone/55">(02) — Selected work</div>
              <h2
                className="mt-4 font-serif text-bone leading-[0.85] tracking-[-0.03em]"
                style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
              >
                things i&apos;ve
                <br />
                <span className="italic text-citrus">actually shipped.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-bone/70 sm:text-lg">
                {cardCount} pieces below — agentic AI, ML platforms, production systems.
                Scroll right.
              </p>
              <Link
                href="/projects"
                data-cursor="ALL"
                className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-bone/25 px-5 py-3 label-mono text-bone hover:border-citrus hover:bg-citrus hover:text-ink transition-colors"
              >
                See archive ({total}) →
              </Link>
            </div>

            {/* Project cards */}
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} progress={scrollYProgress} cardCount={cardCount} />
            ))}
          </motion.div>

          {/* Sticky progress indicator */}
          <ProgressBar progress={scrollYProgress} count={cardCount} />
        </div>
      </section>
    </>
  )
}

function ProjectCard({
  project,
  index,
  progress,
  cardCount,
}: {
  project: ReturnType<typeof getFeaturedProjects>[number]
  index: number
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  cardCount: number
}) {
  // Each card peaks when its center is in viewport.
  const segment = 1 / (cardCount + 1)
  const center = segment * (index + 1.0)
  const scale = useTransform(
    progress,
    [center - segment * 0.7, center, center + segment * 0.7],
    [0.85, 1, 0.85],
  )
  const opacity = useTransform(
    progress,
    [center - segment, center, center + segment],
    [0.5, 1, 0.5],
  )

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="OPEN"
      className="group flex h-full w-[70vw] shrink-0 items-center justify-center px-6 sm:px-10"
    >
      <motion.article
        style={{ scale, opacity }}
        className="relative flex h-[78vh] w-full flex-col overflow-hidden rounded-lg border border-bone/15 bg-ink/55 backdrop-blur-md"
      >
        {/* Image */}
        <div className="relative h-[60%] w-full overflow-hidden">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="70vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
          <div className="absolute left-5 top-5 flex items-center gap-3">
            <span className="rounded-full border border-bone/30 bg-ink/60 px-3 py-1 label-mono text-bone/85 backdrop-blur-md">
              {String(index + 1).padStart(2, "0")} / {project.year}
            </span>
            {project.featured && (
              <span className="rounded-full border border-citrus bg-citrus/10 px-3 py-1 label-mono text-citrus backdrop-blur-md">
                Featured
              </span>
            )}
          </div>
          <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-bone/30 bg-ink/60 text-bone backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-citrus group-hover:bg-citrus group-hover:text-ink">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:p-8">
          <div className="space-y-3">
            <div className="label-mono text-citrus">{project.category}</div>
            <h3
              className="font-serif text-bone leading-[0.95] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.5rem)" }}
            >
              {project.title.replace(/^(.*?)( — | - )/, "$1 — ")}
            </h3>
            <p className="line-clamp-2 max-w-2xl text-sm text-bone/70 sm:text-base">
              {project.shortDescription}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-full border border-bone/15 bg-ink/40 px-3 py-1.5 label-mono text-bone/75"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

function ProgressBar({
  progress,
  count,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  count: number
}) {
  const w = useTransform(progress, [0, 1], ["0%", "100%"])
  const idx = useTransform(progress, (v) => Math.min(count, Math.max(1, Math.ceil(v * (count + 1)))))

  return (
    <div className="pointer-events-none absolute bottom-10 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-10">
      <span className="label-mono text-bone/65">
        <ScrambleText trigger="mount">PROJECT</ScrambleText>{" "}
        <motion.span className="text-citrus">{idx}</motion.span> / {count}
      </span>
      <div className="relative h-px w-full max-w-md flex-1 mx-6 overflow-hidden bg-bone/15">
        <motion.div className="absolute inset-y-0 left-0 bg-citrus" style={{ width: w }} />
      </div>
      <span className="label-mono text-bone/65">SCROLL ↓</span>
    </div>
  )
}
