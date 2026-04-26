"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { getFeaturedProjects, getAllProjects } from "@/lib/data"
import { Sticker } from "@/components/sticker"

const cardColors = [
  { bg: "bg-term", text: "text-phos", chip: "term-border bg-term text-phos", num: "text-amber glow-amber" },
  { bg: "bg-term", text: "text-phos", chip: "term-border bg-term text-phos", num: "text-phos glow" },
  { bg: "bg-term", text: "text-phos", chip: "term-border bg-term text-phos", num: "text-amber glow-amber" },
  { bg: "bg-term", text: "text-phos", chip: "term-border bg-term text-phos", num: "text-phos glow" },
]

export function WorkStack() {
  const featured = getFeaturedProjects()
  const total = getAllProjects().length

  return (
    <section id="work" className="relative w-full px-4 pb-20 sm:px-6 sm:pb-32">
      <div className="mx-auto max-w-[1600px]">
        {/* Header bar */}
        <div className="ink-border-2 grid grid-cols-12 divide-x-2 divide-ink bg-paper">
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center bg-amber p-3 text-term">
            <span className="font-display text-xs leading-none">02</span>
          </div>
          <div className="col-span-10 sm:col-span-7 flex items-center px-4 sm:px-6">
            <h2 className="display-md text-phos glow">
              {"// SHIPPED // CASE FILES"}
            </h2>
          </div>
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between bg-term px-4 py-3 text-phos sm:px-6">
            <span className="label-mono">{featured.length} FEATURED</span>
            <Link
              href="/projects"
              data-cursor="OPEN"
              className="label-mono text-amber glow-amber hover:bg-phos hover:text-term transition-colors px-2"
            >
              {"> ls all/"} ({total})
            </Link>
          </div>
        </div>

        {/* Sticky stacking cards */}
        <div className="mt-6 space-y-12">
          {featured.map((p, i) => {
            const c = cardColors[i % cardColors.length]
            return (
              <div
                key={p.slug}
                className="sticky"
                style={{ top: `${100 + i * 24}px` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/projects/${p.slug}`}
                    data-cursor="CASE OPEN"
                    className={`group relative block ink-border-2 ${c.bg} ${c.text} overflow-hidden transition-transform duration-700 hover:translate-x-1 hover:translate-y-1`}
                  >
                    <div className="grid grid-cols-12">
                      {/* Numeral panel */}
                      <div className="col-span-3 sm:col-span-2 border-r-2 border-ink p-4 sm:p-6 overflow-hidden">
                        <div className="label-mono">FILE</div>
                        <div className={`font-display leading-[1] ${c.num} mt-3`} style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="label-mono mt-3 opacity-80">{p.year ?? "—"}</div>
                      </div>

                      {/* Body */}
                      <div className="col-span-9 sm:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col gap-5">
                        <div className="flex flex-wrap items-center gap-2 label-mono">
                          <span className={`px-2 py-1 ${c.chip}`}>
                            {p.category}
                          </span>
                          {p.featured && (
                            <span className="px-2 py-1 term-border bg-amber text-term">
                              ★ BOSS-FIGHT
                            </span>
                          )}
                        </div>

                        <h3 className="display-lg text-phos glow text-balance">
                          {p.title.replace(/^(.*?)( — | - )/, "$1 / ")}
                        </h3>

                        <p className="max-w-2xl body-mono text-phos-200">
                          {"> "}{p.shortDescription}
                        </p>

                        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3">
                          {p.technologies.slice(0, 6).map((t) => (
                            <span
                              key={t}
                              className="term-border bg-term px-2 py-0.5 label-mono-sm text-phos hover:bg-phos hover:text-term transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Image panel */}
                      <div className="relative col-span-12 sm:col-span-3 aspect-[5/4] sm:aspect-auto border-t-2 sm:border-t-0 sm:border-l-2 border-ink overflow-hidden">
                        <Image
                          src={p.thumbnailImage}
                          alt={p.title}
                          fill
                          sizes="(min-width: 640px) 25vw, 100vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-amber text-term term-border-2 transition-all duration-500 group-hover:rotate-45 group-hover:bg-phos">
                          <span className="font-display text-xs leading-none">↗</span>
                        </div>
                        {i === 0 && (
                          <div className="absolute bottom-3 left-3 term-border-2 bg-amber px-2 py-1 label-mono-sm text-term">
                            ★ FLAGSHIP
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom barcode-ish row */}
                    <div className="grid grid-cols-12 border-t-2 border-ink divide-x-2 divide-ink">
                      <div className="col-span-6 sm:col-span-3 px-4 py-2 label-mono-sm">
                        ROLE / {p.role}
                      </div>
                      <div className="col-span-6 sm:col-span-3 px-4 py-2 label-mono-sm">
                        TIME / {p.timeline}
                      </div>
                      <div className="hidden sm:block sm:col-span-3 px-4 py-2 label-mono-sm">
                        SLUG / {p.slug}
                      </div>
                      <div className="hidden sm:flex sm:col-span-3 items-center justify-end gap-2 px-4 py-2 label-mono-sm">
                        OPEN CASE → ↗
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            )
          })}

          {/* End marker */}
          <div className="term-border-2 bg-term flex h-16 items-center justify-center">
            <span className="display-md text-amber glow-amber blink">
              {"// END_OF_LIST"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
