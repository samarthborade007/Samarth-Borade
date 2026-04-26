"use client"

import { motion } from "framer-motion"
import { getExperienceInfo } from "@/lib/data"

interface Experience {
  title: string
  company: string
  location?: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

const TAPE_COLORS = ["bg-amber", "bg-amber", "bg-amber", "bg-amber"]

export function ExperienceTimeline() {
  const experience = getExperienceInfo() as Experience[]

  return (
    <section id="experience" className="relative w-full px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="term-border-2 grid grid-cols-12 divide-x divide-phos-300 bg-term">
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center bg-amber p-3 text-term">
            <span className="font-display text-xs leading-none">05</span>
          </div>
          <div className="col-span-10 sm:col-span-7 flex items-center px-4 sm:px-6">
            <h2 className="display-md text-phos glow">{"// quest_log.txt"}</h2>
          </div>
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between bg-term px-4 py-3 text-phos sm:px-6">
            <span className="label-mono text-phos-300">{experience.length} QUESTS</span>
            <span className="label-mono text-amber glow-amber">✓ CLEARED</span>
          </div>
        </div>

        {/* Quest rows */}
        <div className="term-border-2 mt-2 divide-y divide-phos-300 bg-term">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 items-stretch divide-x divide-phos-300"
            >
              {/* Index stripe */}
              <div className={`col-span-2 sm:col-span-1 ${TAPE_COLORS[i % TAPE_COLORS.length]} flex flex-col items-center justify-center gap-2 p-3 transition-colors duration-300 group-hover:bg-phos`}>
                <span className="label-mono-sm text-term">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xs leading-none text-term">★</span>
              </div>

              {/* Period */}
              <div className="col-span-10 sm:col-span-2 flex flex-col justify-center gap-1 px-4 py-4 sm:px-5">
                <span className="label-mono-sm text-phos-300">{"date:"}</span>
                <span className="label-mono text-phos">{exp.period}</span>
                {exp.location && (
                  <span className="label-mono-sm text-phos-300">@ {exp.location}</span>
                )}
              </div>

              {/* Role + company */}
              <div className="col-span-12 sm:col-span-5 flex flex-col justify-center gap-2 px-4 py-4 sm:px-6 transition-colors group-hover:bg-phos-400/30">
                <h3 className="display-md text-phos glow">
                  {exp.title}
                </h3>
                <div className="label-mono text-amber glow-amber">@ {exp.company}</div>
              </div>

              {/* Top achievement / pull-quote */}
              <div className="col-span-12 sm:col-span-3 flex flex-col justify-center gap-2 bg-term px-4 py-4 sm:px-6">
                <span className="label-mono-sm text-phos-300">{"// reward:"}</span>
                <p className="body-mono text-phos">
                  {"> "}{exp.achievements[0]}
                </p>
              </div>

              {/* Open arrow */}
              <div className="col-span-12 sm:col-span-1 flex items-center justify-center bg-term text-phos transition-colors group-hover:bg-amber group-hover:text-term p-3">
                <span className="font-display text-xs leading-none transition-transform duration-500 group-hover:rotate-[-12deg]">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
