"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Sticker } from "@/components/sticker"
import { getCredentialsInfo, getPublicationsInfo } from "@/lib/data"

export function PublicationsRecognition() {
  const pubs = getPublicationsInfo() as any
  const creds = getCredentialsInfo() as any
  const research: any[] = pubs.research ?? []

  const trophyColors = [
    { bg: "bg-term", fg: "text-phos" },
    { bg: "bg-term", fg: "text-phos" },
    { bg: "bg-term", fg: "text-phos" },
  ]

  // Compact label for the right "trophy" cell of each research entry.
  const trophyFor = (entry: any) => {
    if (/book/i.test(entry.type)) return { label: "CO-AUTHOR", source: "AMAZON · USA" }
    if (/research|paper/i.test(entry.type)) return { label: "PEER-REVIEWED", source: "SPRINGER · SG" }
    return { label: "PUBLISHED", source: entry.publisher }
  }

  const totalEntries = research.length + (pubs.articles?.length ?? 0)

  return (
    <section id="writing" className="relative w-full px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="term-border-2 grid grid-cols-12 divide-x divide-phos-300 bg-term">
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center bg-amber p-3 text-term">
            <span className="font-display text-xs leading-none">06</span>
          </div>
          <div className="col-span-10 sm:col-span-7 flex items-center px-4 sm:px-6">
            <h2 className="display-md text-phos glow">{"// achievements.log"}</h2>
          </div>
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between bg-term px-4 py-3 text-phos sm:px-6">
            <span className="label-mono text-phos-300">{totalEntries} ENTRIES</span>
            <span className="label-mono text-amber glow-amber">★ RECORDED</span>
          </div>
        </div>

        {/* Research stack — book + paper, both clickable when url present */}
        <div className="space-y-2 mt-2">
          {research.map((entry, idx) => {
            const trophy = trophyFor(entry)
            const Wrapper: any = entry.url ? motion.a : motion.div
            const wrapperProps = entry.url
              ? {
                  href: entry.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-cursor": "OPEN",
                }
              : {}

            return (
              <Wrapper
                key={idx}
                {...wrapperProps}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group block term-border-2 grid grid-cols-12 divide-x divide-phos-300 bg-term text-phos transition-all duration-300 hover:translate-x-1"
              >
                {/* Big numeral */}
                <div className="col-span-3 sm:col-span-2 flex items-center justify-center p-4 sm:p-6 bg-amber text-term">
                  <span
                    className="font-display leading-none"
                    style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Body */}
                <div className="col-span-9 sm:col-span-7 flex flex-col gap-4 p-5 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-2 label-mono">
                    <span className="term-border bg-term px-2 py-1 text-phos">{entry.type}</span>
                    <span className="term-border bg-term px-2 py-1 text-phos">{entry.period}</span>
                    {entry.doi && (
                      <span className="term-border bg-amber px-2 py-1 text-term">
                        DOI · {entry.doi}
                      </span>
                    )}
                    {entry.asin && (
                      <span className="term-border bg-amber px-2 py-1 text-term">
                        ASIN · {entry.asin}
                      </span>
                    )}
                  </div>
                  <h3 className="display-md text-phos glow text-balance leading-[1.4]">
                    {entry.title}
                  </h3>
                  <p className="label-mono text-phos-200">{"// "}{entry.publisher}</p>
                  <p className="max-w-2xl body-mono-lg text-phos">{"> "}{entry.description}</p>
                  {entry.isbn && (
                    <div className="mt-2 flex flex-wrap gap-2 label-mono-sm">
                      <span className="term-border bg-term px-2 py-1 text-phos-200">HC · {entry.isbn.hardcover}</span>
                      <span className="term-border bg-term px-2 py-1 text-phos-200">EB · {entry.isbn.ebook}</span>
                    </div>
                  )}
                </div>

                {/* Trophy banner */}
                <div className="col-span-12 sm:col-span-3 relative flex flex-col items-center justify-center gap-2 bg-term p-4 sm:p-6">
                  <span className="label-mono text-phos-300">{`// trophy.${String(idx + 1).padStart(3, "0")}`}</span>
                  <span className="display-md text-amber glow-amber text-center">{trophy.label}</span>
                  <span className="label-mono text-phos text-center">{trophy.source}</span>
                  {entry.url && (
                    <span className="mt-3 flex items-center gap-1 label-mono-sm text-phos-300 group-hover:text-amber">
                      $ open <ExternalLink className="h-3 w-3 transition-transform group-hover:rotate-45" />
                    </span>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </div>

        {/* Articles ledger */}
        <div className="term-border-2 mt-2 bg-term">
          <div className="grid grid-cols-12 divide-x divide-phos-300 border-b border-phos-300 bg-term text-phos">
            <div className="col-span-1 px-4 py-2 label-mono text-phos-300">#</div>
            <div className="col-span-7 sm:col-span-6 px-4 py-2 label-mono text-phos-300">TITLE</div>
            <div className="hidden sm:block sm:col-span-2 px-4 py-2 label-mono text-phos-300">PLATFORM</div>
            <div className="hidden sm:block sm:col-span-1 px-4 py-2 label-mono text-phos-300">DATE</div>
            <div className="col-span-4 sm:col-span-2 px-4 py-2 label-mono text-amber glow-amber">VIEWS</div>
          </div>
          {pubs.articles?.map((a: any, i: number) => (
            <motion.a
              key={i}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="READ"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group grid grid-cols-12 items-center divide-x divide-phos-300 border-b border-phos-300 last:border-b-0 transition-all duration-300 hover:bg-amber hover:translate-x-1"
            >
              <div className="col-span-1 px-4 py-3 label-mono text-phos-300 group-hover:text-term">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-7 sm:col-span-6 px-4 py-3 body-mono-lg text-phos group-hover:text-term">
                {a.title}
              </div>
              <div className="hidden sm:block sm:col-span-2 px-4 py-3 label-mono text-phos-200 group-hover:text-term">
                {a.platform}
              </div>
              <div className="hidden sm:block sm:col-span-1 px-4 py-3 label-mono-sm text-phos-300 group-hover:text-term">
                {a.period}
              </div>
              <div className="col-span-4 sm:col-span-2 flex items-center justify-between px-4 py-3 label-mono">
                {a.views ? (
                  <span className="text-amber glow-amber group-hover:text-term group-hover:[text-shadow:none]">{a.views}</span>
                ) : (
                  <span className="text-phos-300 group-hover:text-term">—</span>
                )}
                <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-45 group-hover:text-term" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Recognition trophies */}
        <div className="mt-2">
          <div className="term-border-2 bg-term p-3">
            <div className="label-mono text-phos-300">{"// trophies.dat"}</div>
          </div>
          <div className="term-border-2 mt-2 grid grid-cols-1 divide-x divide-y divide-phos-300 bg-term md:grid-cols-3 md:divide-y-0">
            {creds.achievements?.map((a: any, i: number) => {
              const c = trophyColors[i % trophyColors.length]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative flex flex-col gap-4 ${c.bg} ${c.fg} p-6 sm:p-8`}
                >
                  <div className="flex items-center justify-between label-mono">
                    <span className="text-phos-300">{a.year}</span>
                    <span className="font-display text-xs leading-none text-amber glow-amber">★</span>
                  </div>
                  <h4 className="display-md text-phos glow text-balance">
                    {a.title}
                  </h4>
                  <p className="body-mono text-phos-200">{"> "}{a.description}</p>
                  <div className="mt-auto label-mono-sm text-phos-300">{"// trophy_"}{String(i + 1).padStart(2, "0")}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
