"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Soft blob cursor that morphs into a labeled pill on hover targets.
 * Hover targets use `data-cursor="text-here"` to set a label.
 */
export function CustomCursor() {
  const blobRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    if (!fine) return
    setEnabled(true)

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const cur = { x: pos.x, y: pos.y, scale: 1 }
    let scaleTarget = 1
    let isHover = false
    let raf = 0

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
    }

    const setLabel = (text: string | null) => {
      const el = labelRef.current
      if (!el) return
      if (text) {
        el.textContent = text
        el.style.opacity = "1"
      } else {
        el.style.opacity = "0"
      }
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (!t) return
      const target = t.closest<HTMLElement>(
        "a, button, [role='button'], input, textarea, [data-cursor]",
      )
      if (target) {
        isHover = true
        const cursorAttr = target.getAttribute("data-cursor")
        if (cursorAttr && cursorAttr !== "hover" && cursorAttr !== "true") {
          // Smaller multiplier so the label inside reads at a sensible size.
          scaleTarget = 2.4
          setLabel(cursorAttr)
        } else {
          scaleTarget = 1.6
          setLabel(null)
        }
      } else {
        isHover = false
        scaleTarget = 1
        setLabel(null)
      }
    }

    const onDown = () => {
      scaleTarget = isHover ? 2.0 : 0.6
    }
    const onUp = () => {
      scaleTarget = isHover ? 2.0 : 1
    }

    const tick = () => {
      cur.x += (pos.x - cur.x) * 0.22
      cur.y += (pos.y - cur.y) * 0.22
      cur.scale += (scaleTarget - cur.scale) * 0.18
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) translate(-50%, -50%) scale(${cur.scale})`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={blobRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] flex h-10 w-10 items-center justify-center rounded-none bg-phos"
      style={{ willChange: "transform", boxShadow: "0 0 12px rgba(57,255,124,0.7), 0 0 28px rgba(57,255,124,0.35)" }}
    >
      <span
        ref={labelRef}
        className="select-none whitespace-nowrap font-medium uppercase tracking-[0.14em] text-term opacity-0 transition-opacity duration-200"
        style={{ fontSize: "6px", lineHeight: 1, padding: "0 4px" }}
      />
    </div>
  )
}
