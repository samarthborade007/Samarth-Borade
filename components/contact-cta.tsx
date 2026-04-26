"use client"

import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Download, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { Magnetic } from "@/components/magnetic"
import { Sticker } from "@/components/sticker"
import { getPersonalInfo } from "@/lib/data"

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
}

const socialColors = [
  { bg: "bg-term", fg: "text-phos", hov: "hover:bg-phos hover:text-term" },
  { bg: "bg-term", fg: "text-phos", hov: "hover:bg-amber hover:text-term" },
  { bg: "bg-term", fg: "text-phos", hov: "hover:bg-phos hover:text-term" },
  { bg: "bg-term", fg: "text-phos", hov: "hover:bg-amber hover:text-term" },
]

export function ContactCTA() {
  const personal = getPersonalInfo()

  return (
    <section id="contact" className="relative w-full px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="term-border-2 grid grid-cols-12 divide-x divide-phos-300 bg-term">
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center bg-amber p-3 text-term">
            <span className="font-display text-xs leading-none">07</span>
          </div>
          <div className="col-span-10 sm:col-span-7 flex items-center px-4 sm:px-6">
            <h2 className="display-md text-phos glow">{"// connect.exe"}</h2>
          </div>
          <div className="col-span-12 sm:col-span-4 flex items-center justify-between bg-term px-4 py-3 text-phos sm:px-6">
            <span className="flex items-center gap-2 label-mono">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping bg-amber opacity-70" />
                <span className="relative h-2 w-2 bg-amber" />
              </span>
              <span className="text-amber glow-amber">OPEN FOR WORK</span>
            </span>
            <span className="label-mono text-phos-300">{personal.workingHours}</span>
          </div>
        </div>

        {/* Mega arcade button */}
        <Magnetic strength={0.12}>
          <motion.a
            href={`mailto:${personal.email}`}
            data-cursor="PRESS"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mt-2 block term-border-2 bg-term text-phos transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:bg-phos-400"
          >
            {/* Top spec strip */}
            <div className="grid grid-cols-12 divide-x divide-phos-300 border-b border-phos-300">
              <div className="col-span-3 sm:col-span-2 px-3 py-2 label-mono text-phos-300">CMD</div>
              <div className="col-span-6 sm:col-span-7 px-3 py-2 label-mono text-phos">{"$ mail -s 'hire' samarth"}</div>
              <div className="col-span-3 sm:col-span-3 px-3 py-2 text-right label-mono text-amber glow-amber">{"// READY"}</div>
            </div>

            {/* Big PRESS START */}
            <div className="relative px-4 py-12 sm:px-8 sm:py-16">
              <div className="absolute right-3 top-3 hidden md:block term-border bg-amber px-2 py-1 label-mono-sm text-term">
                ★ NEW · 2026
              </div>
              <div className="absolute left-3 bottom-3 hidden md:block term-border bg-term px-2 py-1 label-mono-sm text-phos">
                RESPONDS ≤ 24H
              </div>
              <h3 className="display-xl text-phos glow text-center flicker">
                PRESS <span className="text-amber glow-amber">START</span>
                <span className="blink" aria-hidden />
              </h3>
              <p className="mt-6 text-center display-md text-phos-200 break-all">
                {"> "}{personal.email}
              </p>
            </div>

            {/* Bottom barcode strip */}
            <div className="grid grid-cols-12 divide-x divide-phos-300 border-t border-phos-300">
              <div className="col-span-6 sm:col-span-3 px-3 py-2 label-mono text-phos-300">P1 / READY</div>
              <div className="hidden sm:block sm:col-span-3 px-3 py-2 label-mono text-phos-300">LAT 34.02°N</div>
              <div className="hidden sm:block sm:col-span-3 px-3 py-2 label-mono text-phos-300">LON 118.28°W</div>
              <div className="col-span-6 sm:col-span-3 flex items-center justify-end gap-2 px-3 py-2 label-mono text-amber glow-amber">
                CLICK · ↗
              </div>
            </div>
          </motion.a>
        </Magnetic>

        {/* 3-up action dock */}
        <div className="term-border-2 mt-2 grid grid-cols-1 divide-x divide-y divide-phos-300 bg-term md:grid-cols-3 md:divide-y-0">
          <a
            href={`mailto:${personal.email}`}
            data-cursor="EMAIL"
            className="group flex items-center justify-between p-4 transition-colors hover:bg-phos hover:text-term"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-amber group-hover:text-term" />
              <span className="label-mono text-phos group-hover:text-term">$ mail</span>
            </div>
            <span className="label-mono-sm text-phos-300 group-hover:text-term">{personal.email}</span>
          </a>
          <a
            href={`tel:${personal.phone}`}
            data-cursor="CALL"
            className="group flex items-center justify-between p-4 transition-colors hover:bg-amber hover:text-term"
          >
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 group-hover:text-term" />
              <span className="label-mono">$ call</span>
            </div>
            <span className="label-mono-sm text-phos-300 group-hover:text-term">{personal.phone}</span>
          </a>
          <a
            href="/Samarth_Borade_AI_Engineer_Resume.pdf"
            download="Samarth_Borade_Resume.pdf"
            data-cursor="GET CV"
            className="group flex items-center justify-between p-4 transition-colors hover:bg-phos hover:text-term"
          >
            <div className="flex items-center gap-3">
              <Download className="h-4 w-4 text-amber group-hover:text-term" />
              <span className="label-mono">$ wget cv.pdf</span>
            </div>
            <span className="font-display text-xs leading-none text-amber group-hover:text-term transition-transform duration-500 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        {/* Socials — terminal block grid */}
        <div className="term-border-2 mt-2 grid grid-cols-2 divide-x divide-y divide-phos-300 bg-term md:grid-cols-4 md:divide-y-0">
          {personal.social.map((s, i) => {
            const Icon = iconMap[s.icon] ?? ArrowUpRight
            const c = socialColors[i % socialColors.length]
            return (
              <motion.a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor={s.platform.toUpperCase()}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative flex aspect-square flex-col justify-between p-5 sm:p-6 ${c.bg} ${c.fg} ${c.hov} transition-colors`}
              >
                <div className="flex items-center justify-between label-mono">
                  <span className="text-phos-300 group-hover:text-term/80">{String(i + 1).padStart(2, "0")}</span>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="space-y-2">
                  <div className="display-md leading-[1.1] uppercase">
                    {s.platform}
                  </div>
                  <div className="flex items-center gap-1 label-mono-sm opacity-80">
                    <span>$ open</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
