"use client"

import { motion } from "framer-motion"
import { Counter } from "@/components/counter"

const STATS = [
  { val: 91.3, suffix: "%", decimals: 1, label: "AUC-ROC",   caption: "CHURN.MODEL",     bg: "bg-term", fg: "text-phos", num: "text-phos glow" },
  { val: 1000, suffix: "+",                 label: "AGENTS",    caption: "NEURALOPS.RUNS",   bg: "bg-term", fg: "text-phos", num: "text-amber glow-amber" },
  { val: 2.4,  prefix: "$", suffix: "M", decimals: 1, label: "VALUATION", caption: "AI-HORIZON",      bg: "bg-term", fg: "text-phos", num: "text-phos glow" },
  { val: 18,   suffix: "%",               label: "LATE-Δ",    caption: "OLIST.DELIVERY",   bg: "bg-term", fg: "text-phos", num: "text-amber glow-amber" },
]

export function StatsCounter() {
  return (
    <section className="relative w-full px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="term-border-2 grid grid-cols-12 divide-x divide-phos-300 bg-term">
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center bg-amber p-3 text-term">
            <span className="font-display text-xs leading-none">03</span>
          </div>
          <div className="col-span-10 sm:col-span-7 flex items-center px-4 sm:px-6">
            <h2 className="display-md text-phos glow">
              {"// receipts.log"}
            </h2>
          </div>
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between bg-term px-4 py-3 text-phos sm:px-6">
            <span className="label-mono text-phos-300">SAMPLED · {new Date().getFullYear()}</span>
            <span className="label-mono text-amber glow-amber">✓ VERIFIED</span>
          </div>
        </div>

        {/* Monitor tiles */}
        <div className="term-border-2 mt-2 grid grid-cols-2 divide-x divide-y divide-phos-300 bg-term lg:grid-cols-4 lg:divide-y-0">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col justify-between aspect-[5/4] p-5 sm:p-7 ${s.bg} ${s.fg} transition-colors`}
            >
              <div className="flex items-center justify-between label-mono">
                <span className="opacity-65">{String(i + 1).padStart(2, "0")}</span>
                <span>{s.label}</span>
              </div>

              <div className="my-2 term-border-2 bg-term p-3">
                <div
                  className={`font-display ${s.num} leading-[1] text-center`}
                  style={{ fontSize: "clamp(1.4rem, 3vw, 3rem)" }}
                >
                  <Counter
                    to={s.val}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between label-mono-sm opacity-85">
                <span>{s.caption}</span>
                <span className="font-display text-xl leading-none">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
