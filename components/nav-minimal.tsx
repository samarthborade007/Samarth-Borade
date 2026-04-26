"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { getNavItems } from "@/lib/data"

export function NavMinimal() {
  const navItems = getNavItems()
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      setTime(`${fmt.format(new Date())} PST`)
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 mx-3 mt-3 sm:mx-4 sm:mt-4">
      <div className="term-border-2 bg-term/90 backdrop-blur-sm">
        <div className="grid grid-cols-12 items-stretch divide-x divide-phos-300">
          {/* Logo block — phos prompt */}
          <Link
            href="/"
            data-cursor="HOME"
            className="col-span-4 sm:col-span-3 lg:col-span-3 flex items-center gap-2 px-3 py-2.5 text-phos transition-colors hover:bg-phos hover:text-term sm:px-4"
          >
            <span className="font-display text-xs leading-none glow">{"> sb.exe"}</span>
            <span className="hidden md:inline label-mono-sm text-phos-200 blink-slim" aria-hidden />
          </Link>

          {/* Center nav — index numerals */}
          <nav
            className={cn(
              "col-span-8 sm:col-span-6 lg:col-span-6 hidden md:flex items-center justify-center divide-x divide-phos-300",
            )}
          >
            {navItems.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                data-cursor={item.label.toUpperCase()}
                className="group relative flex flex-1 items-center justify-center gap-2 px-3 py-2.5 text-phos transition-colors hover:bg-phos hover:text-term"
              >
                <span className="label-mono-sm text-phos-300 group-hover:text-term/65">
                  0{i + 1}
                </span>
                <span className="label-mono">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Status block */}
          <div className="hidden lg:col-span-2 lg:flex items-center justify-center gap-2 border-l border-phos-300 px-4 text-phos">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping bg-blood opacity-70" />
              <span className="relative h-2 w-2 bg-blood" />
            </span>
            <span className="label-mono glow-blood">REC · {time}</span>
          </div>

          {/* CTA block */}
          <a
            href="#contact"
            data-cursor="HIRE"
            className="col-span-8 sm:col-span-3 lg:col-span-1 flex items-center justify-center gap-2 bg-amber px-3 py-2.5 text-term transition-colors hover:bg-blood hover:text-term"
          >
            <span className="label-mono">HIRE</span>
            <span className="font-display text-[10px] leading-none">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}
