"use client"

import { motion } from "framer-motion"
import { getTechnicalSkillsInfo } from "@/lib/data"

const PANEL_META: Record<string, { title: string; tag: string; bg: string; fg: string; chip: string }> = {
  ai:    { title: "AI / ML",       tag: "PRIMARY", bg: "bg-term", fg: "text-phos", chip: "term-border bg-term text-phos hover:bg-phos hover:text-term" },
  infra: { title: "INFRA / OPS",   tag: "BACK-END", bg: "bg-term", fg: "text-phos", chip: "term-border bg-term text-phos hover:bg-amber hover:text-term" },
  stack: { title: "LANG / STACK",  tag: "BUILD",   bg: "bg-term", fg: "text-phos", chip: "term-border bg-term text-phos hover:bg-phos hover:text-term" },
  data:  { title: "DATA / VIZ",    tag: "PROOF",   bg: "bg-term", fg: "text-phos", chip: "term-border bg-term text-phos hover:bg-amber hover:text-term" },
}

export function SkillsStack() {
  const skills = getTechnicalSkillsInfo() as Record<string, string[]>
  const groups = (["ai", "infra", "stack", "data"] as const).filter((k) => skills[k]?.length)

  return (
    <section id="stack" className="relative w-full px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="term-border-2 grid grid-cols-12 divide-x divide-phos-300 bg-term">
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center bg-amber p-3 text-term">
            <span className="font-display text-xs leading-none">04</span>
          </div>
          <div className="col-span-10 sm:col-span-7 flex items-center px-4 sm:px-6">
            <h2 className="display-md text-phos glow">{"// inventory.json"}</h2>
          </div>
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between bg-term px-4 py-3 text-phos sm:px-6">
            <span className="label-mono text-phos-300">{groups.length} BAGS</span>
            <span className="label-mono text-amber glow-amber">★ EQUIPPED</span>
          </div>
        </div>

        {/* Inventory grid */}
        <div className="term-border-2 mt-2 grid grid-cols-12 divide-x divide-y divide-phos-300 bg-term">
          {groups.map((key, i) => {
            const meta = PANEL_META[key]
            const span = i === 0 ? "col-span-12 lg:col-span-7" : i === 1 ? "col-span-12 sm:col-span-6 lg:col-span-5" : i === 2 ? "col-span-12 sm:col-span-6 lg:col-span-5" : "col-span-12 lg:col-span-7"
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative ${span} ${meta.bg} ${meta.fg} p-5 sm:p-8`}
              >
                {/* Row header */}
                <div className="flex items-baseline justify-between border-b border-phos-300 pb-3">
                  <h3 className="display-md text-phos glow">{meta.title}</h3>
                  <span className="label-mono term-border bg-amber px-2 py-1 text-term">
                    {meta.tag}
                  </span>
                </div>
                {/* Chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills[key].map((s) => (
                    <span
                      key={s}
                      className={`label-mono ink-border px-3 py-2 transition-colors duration-200 cursor-default ${meta.chip}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {/* Index */}
                <div className="mt-5 flex items-end justify-between">
                  <span className="label-mono-sm text-phos-300">{"// "}{skills[key].length} ITEMS</span>
                  <span className="font-display text-2xl text-phos-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
