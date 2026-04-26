"use client"

import { useEffect, useRef, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?#@$%&*+=<>/"

/** Decrypts text in place when it scrolls into view. */
export function ScrambleText({
  children,
  className = "",
  duration = 800,
  delay = 0,
  trigger = "view",
}: {
  children: string
  className?: string
  duration?: number
  delay?: number
  trigger?: "view" | "mount"
}) {
  const [out, setOut] = useState(children)
  const ref = useRef<HTMLSpanElement>(null)
  const playedRef = useRef(false)

  useEffect(() => {
    if (playedRef.current) return
    const el = ref.current
    if (!el) return

    let raf = 0
    let start = 0

    const run = () => {
      playedRef.current = true
      const total = duration
      const step = (now: number) => {
        if (!start) start = now
        const t = Math.min(1, (now - start) / total)
        // chars revealed from left to right
        const reveal = Math.floor(t * children.length)
        let s = ""
        for (let i = 0; i < children.length; i++) {
          if (children[i] === " ") {
            s += " "
            continue
          }
          if (i < reveal) {
            s += children[i]
          } else {
            s += CHARS[Math.floor(Math.random() * CHARS.length)]
          }
        }
        setOut(s)
        if (t < 1) raf = requestAnimationFrame(step)
        else setOut(children)
      }
      raf = requestAnimationFrame(step)
    }

    if (trigger === "mount") {
      const id = window.setTimeout(run, delay)
      return () => {
        clearTimeout(id)
        cancelAnimationFrame(raf)
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !playedRef.current) {
            window.setTimeout(run, delay)
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [children, duration, delay, trigger])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {out}
    </span>
  )
}
