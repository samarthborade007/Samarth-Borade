"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ScrambleText } from "@/components/scramble-text"
import { getPersonalInfo } from "@/lib/data"

function pressStart() {
  const target = document.getElementById("work")
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" })
}

const STATS: { k: string; v: number; max: number; color: string }[] = [
  { k: "AI / LLM",  v: 96, max: 100, color: "bg-phos" },
  { k: "ML / RES",  v: 90, max: 100, color: "bg-phos" },
  { k: "INFRA",     v: 84, max: 100, color: "bg-phos-200" },
  { k: "SHIPPING",  v: 92, max: 100, color: "bg-phos-200" },
]

export function HeroSection() {
  const personal = getPersonalInfo()
  const [pressed, setPressed] = useState(false)

  // Trigger pressStart from anywhere via Enter / Space, but only if user
  // hasn't scrolled past the hero and isn't typing into a field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return
      const tag = (e.target as HTMLElement | null)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return
      if (window.scrollY > window.innerHeight * 0.7) return
      e.preventDefault()
      setPressed(true)
      window.setTimeout(() => setPressed(false), 220)
      pressStart()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const fire = () => {
    setPressed(true)
    window.setTimeout(() => setPressed(false), 220)
    pressStart()
  }

  return (
    <section className="relative isolate w-full overflow-hidden pb-6 pt-24 sm:pt-28">
      <div className="relative mx-auto max-w-[1600px] px-3 sm:px-4">
        {/* === Top status strip === */}
        <div className="term-border-2 grid grid-cols-12 divide-x divide-phos-300 bg-term">
          <Cell cols="col-span-3 sm:col-span-2">
            <span className="label-mono-sm text-phos-300">PLAYER</span>
            <span className="label-mono text-phos glow">P1</span>
          </Cell>
          <Cell cols="col-span-3 sm:col-span-2">
            <span className="label-mono-sm text-phos-300">CLASS</span>
            <span className="label-mono text-phos glow">AI ENG</span>
          </Cell>
          <Cell cols="col-span-3 sm:col-span-2">
            <span className="label-mono-sm text-phos-300">LV</span>
            <span className="label-mono text-amber glow-amber">99</span>
          </Cell>
          <Cell cols="col-span-3 sm:col-span-2">
            <span className="label-mono-sm text-phos-300">XP</span>
            <span className="label-mono text-phos glow">9999/9999</span>
          </Cell>
          <Cell cols="col-span-6 sm:col-span-2">
            <span className="label-mono-sm text-phos-300">NODE</span>
            <span className="label-mono text-phos glow">USC.LA</span>
          </Cell>
          <Cell cols="col-span-6 sm:col-span-2">
            <span className="label-mono-sm text-phos-300">BUILD</span>
            <span className="label-mono text-phos glow">v4.0.26</span>
          </Cell>
        </div>

        {/* === Main splash card === */}
        <div className="term-border-2 mt-2 grid grid-cols-12 divide-x divide-phos-300">
          {/* LEFT: portrait + ID card */}
          <div className="col-span-12 md:col-span-3 flex flex-col divide-y divide-phos-300">
            <div className="relative aspect-square w-full overflow-hidden bg-term-300">
              <Image
                src={personal.avatar || "/placeholder.svg"}
                alt={personal.name}
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover saturate-0 contrast-125"
              />
              {/* phosphor tint overlay */}
              <div className="pointer-events-none absolute inset-0 bg-phos/20 mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-phos-300" />
              <div className="absolute left-2 top-2 term-border bg-term px-2 py-1 label-mono-sm text-phos">
                ID:001
              </div>
              <div className="absolute right-2 bottom-2 term-border bg-amber px-2 py-1 label-mono-sm text-term">
                LIVE
              </div>
            </div>
            <Cell cols="">
              <span className="label-mono-sm text-phos-300">NAME</span>
              <span className="label-mono text-phos glow">SAMARTH B.</span>
            </Cell>
            <Cell cols="">
              <span className="label-mono-sm text-phos-300">REGION</span>
              <span className="label-mono text-phos glow">LOS ANGELES, CA</span>
            </Cell>
          </div>

          {/* CENTER: BIG pixel name */}
          <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center gap-6 px-4 py-10 sm:px-6 sm:py-14">
            <span className="label-mono text-amber glow-amber flicker">★ NOW PLAYING</span>

            <h1 className="text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block display-xl text-phos glow"
              >
                SAMARTH
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="block display-xl text-phos glow mt-2"
              >
                BORADE<span className="text-amber glow-amber">.</span>
              </motion.span>
            </h1>

            <div className="text-center label-mono text-phos-200">
              {"// AGENTIC AI / ML INFRA"}
            </div>

            <motion.button
              type="button"
              onClick={fire}
              data-cursor="START"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: pressed ? 0.94 : 1 }}
              transition={{ delay: 0.55, scale: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
              className={`group inline-flex items-center gap-3 term-border-2 px-5 py-3 transition-colors duration-200 ${
                pressed ? "bg-phos text-term" : "bg-term text-amber glow-amber hover:bg-amber hover:text-term"
              }`}
            >
              <span className="display-md flicker">
                <span className="blink">{"> PRESS START"}</span>
              </span>
              <span className="hidden sm:inline label-mono-sm border border-current px-1.5 py-0.5 opacity-80">
                ENTER ↵
              </span>
            </motion.button>

            {/* CRT flash overlay when fired */}
            <motion.div
              aria-hidden
              animate={{ opacity: pressed ? 0.18 : 0 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none fixed inset-0 z-[60] bg-phos"
            />
          </div>

          {/* RIGHT: STAT HUD */}
          <div className="col-span-12 md:col-span-3 flex flex-col divide-y divide-phos-300">
            <div className="px-4 py-3">
              <div className="label-mono text-phos">{"// STATS"}</div>
            </div>
            {STATS.map((s, i) => (
              <div key={s.k} className="px-4 py-3">
                <div className="flex items-center justify-between label-mono-sm">
                  <span className="text-phos-200">{s.k}</span>
                  <span className="text-amber glow-amber">{s.v}/{s.max}</span>
                </div>
                <div className="mt-2 grid h-3 gap-[2px]" style={{ gridTemplateColumns: "repeat(20, minmax(0, 1fr))" }}>
                  {Array.from({ length: 20 }).map((_, j) => {
                    const filled = j < Math.round((s.v / s.max) * 20)
                    return (
                      <motion.span
                        key={j}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: filled ? 1 : 0.3 }}
                        transition={{ duration: 0.04, delay: 0.6 + i * 0.15 + j * 0.025 }}
                        className={`origin-left h-full ${filled ? s.color : "bg-phos-400"}`}
                        style={{ opacity: filled ? 1 : 0.45 }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
            <div className="mt-auto px-4 py-3">
              <span className="label-mono-sm text-phos-300">{"> open_to_hire = true"}</span>
            </div>
          </div>
        </div>

        {/* === Bottom command dock === */}
        <div className="term-border-2 mt-2 grid grid-cols-12 divide-x divide-phos-300">
          <a
            href="#work"
            data-cursor="WORK"
            className="group col-span-6 md:col-span-3 flex items-center justify-between gap-3 px-4 py-3 text-phos transition-colors hover:bg-phos hover:text-term"
          >
            <span className="label-mono glow group-hover:text-term">{"> START.work"}</span>
            <span className="font-display text-[10px] leading-none">▶</span>
          </a>
          <a
            href="#about"
            data-cursor="ABOUT"
            className="group col-span-6 md:col-span-3 flex items-center justify-between gap-3 px-4 py-3 text-phos transition-colors hover:bg-phos hover:text-term"
          >
            <span className="label-mono group-hover:text-term">{"> exec.about"}</span>
            <span className="font-display text-[10px] leading-none">▶</span>
          </a>
          <a
            href="/Samarth_Borade_AI_Engineer_Resume.pdf"
            download="Samarth_Borade_Resume.pdf"
            data-cursor="CV.PDF"
            className="group col-span-6 md:col-span-3 flex items-center justify-between gap-3 bg-phos px-4 py-3 text-term transition-colors hover:bg-amber"
          >
            <span className="label-mono">{"> dl_cv.pdf"}</span>
            <span className="font-display text-[10px] leading-none">↓</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            data-cursor="EMAIL"
            className="group col-span-6 md:col-span-3 flex items-center justify-between gap-3 bg-amber px-4 py-3 text-term transition-colors hover:bg-blood hover:text-term"
          >
            <span className="label-mono">{"> mailto:sb"}</span>
            <span className="font-display text-[10px] leading-none">↗</span>
          </a>
        </div>

        {/* Console echo line */}
        <div className="mt-2 px-1 label-mono-sm text-phos-200">
          <ScrambleText delay={700} duration={1000}>
            {"sys: ready. awaiting input from recruiter terminal..."}
          </ScrambleText>
        </div>
      </div>
    </section>
  )
}

function Cell({ cols, children }: { cols: string; children: React.ReactNode }) {
  return (
    <div className={`${cols} flex flex-col justify-center gap-1 px-3 py-2`}>
      {children}
    </div>
  )
}
