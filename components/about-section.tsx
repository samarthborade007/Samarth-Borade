"use client"

import { motion } from "framer-motion"
import { ScrambleText } from "@/components/scramble-text"

const LINES: { cmd: string; out: React.ReactNode; delay: number }[] = [
  {
    cmd: "whoami",
    out: <span className="text-phos glow">samarth.borade // ai-engineer · researcher · builder</span>,
    delay: 200,
  },
  {
    cmd: "cat ./now.md",
    out: (
      <span className="text-phos-100">
        usc · mscs · researching agentic LLM systems &amp; multi-agent infra.
      </span>
    ),
    delay: 600,
  },
  {
    cmd: "cat ./recent.md",
    out: (
      <span className="text-phos-100">
        founding eng @ ai-horizon — drove platform to <span className="text-amber glow-amber">$2.4M</span> valuation.
      </span>
    ),
    delay: 1100,
  },
  {
    cmd: "cat ./always.md",
    out: (
      <span className="text-phos-100">
        co-author <span className="text-amber glow-amber">age of agentic ai</span> // amazon, jan 2026.
      </span>
    ),
    delay: 1600,
  },
]

const STATS = [
  { k: "AI / LLM",    v: 96 },
  { k: "ML / RES",    v: 90 },
  { k: "INFRA",       v: 84 },
  { k: "PRODUCT",     v: 78 },
]

export function AboutSection() {
  return (
    <section id="about" className="relative w-full px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Section header bar */}
        <div className="term-border-2 grid grid-cols-12 divide-x divide-phos-300 bg-term">
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center bg-amber p-3 text-term">
            <span className="font-display text-xs leading-none">01</span>
          </div>
          <div className="col-span-10 sm:col-span-7 flex items-center px-4 sm:px-6">
            <h2 className="display-md text-phos glow">
              {"// ./about_me.sh"}
            </h2>
          </div>
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between bg-term px-4 py-3 text-phos sm:px-6">
            <span className="label-mono text-phos-300">PROC</span>
            <span className="label-mono text-phos glow">ABOUT.EXE</span>
          </div>
        </div>

        {/* Terminal session card */}
        <div className="term-border-2 mt-2 grid grid-cols-12 divide-x divide-phos-300 bg-term">
          {/* LEFT: terminal output */}
          <div className="col-span-12 md:col-span-8 p-5 sm:p-7">
            <div className="label-mono text-phos-300">{"sb@portfolio:~$"}</div>
            <div className="mt-4 space-y-5 body-mono-lg">
              {LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.4, delay: line.delay / 1000 }}
                  className="space-y-1"
                >
                  <div className="text-phos">
                    <span className="text-phos-300">{"$ "}</span>
                    <span className="text-amber glow-amber">{line.cmd}</span>
                  </div>
                  <div className="pl-4 border-l-2 border-phos-400">{line.out}</div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ delay: 2.0 }}
                className="text-phos blink-slim"
              >
                <span className="text-phos-300">{"$ "}</span>
                <ScrambleText delay={2100}>awaiting_input</ScrambleText>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: stat HUD */}
          <div className="col-span-12 md:col-span-4 flex flex-col divide-y divide-phos-300">
            <div className="px-4 py-3">
              <span className="label-mono text-phos">{"// CHAR.STATS"}</span>
            </div>
            {STATS.map((s, i) => (
              <div key={s.k} className="px-4 py-3">
                <div className="flex items-center justify-between label-mono-sm">
                  <span className="text-phos-200">{s.k}</span>
                  <span className="text-amber glow-amber">{s.v}/100</span>
                </div>
                <div className="mt-2 grid h-2.5 gap-[2px]" style={{ gridTemplateColumns: "repeat(20, minmax(0, 1fr))" }}>
                  {Array.from({ length: 20 }).map((_, j) => {
                    const filled = j < Math.round((s.v / 100) * 20)
                    return (
                      <motion.span
                        key={j}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: filled ? 1 : 0.3 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.04, delay: 0.2 + i * 0.12 + j * 0.02 }}
                        className={`origin-left h-full ${filled ? "bg-phos" : "bg-phos-400"}`}
                        style={{ opacity: filled ? 1 : 0.4 }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
            <div className="mt-auto px-4 py-3 flex items-center justify-between">
              <span className="label-mono-sm text-phos-300">{"> save_slot:"}</span>
              <span className="label-mono text-phos glow">001</span>
            </div>
          </div>
        </div>

        {/* Bottom marquee strip */}
        <div className="term-border-2 mt-2 px-4 py-2 bg-term flex items-center justify-between flex-wrap gap-2">
          <span className="label-mono-sm text-phos-300">{"node@usc.la:~$"}</span>
          <span className="label-mono text-phos glow">USC · MSCS</span>
          <span className="label-mono-sm text-phos-300">·</span>
          <span className="label-mono text-amber glow-amber">★ CO-AUTHOR · AMAZON 2026</span>
          <span className="label-mono-sm text-phos-300">·</span>
          <span className="label-mono text-phos glow">{"open_to_hire = true"}</span>
        </div>
      </div>
    </section>
  )
}
