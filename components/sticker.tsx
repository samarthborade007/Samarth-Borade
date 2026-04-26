"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const colorMap = {
  cobalt: "bg-cobalt text-paper",
  cinnabar: "bg-cinnabar text-paper",
  sun: "bg-sun text-ink",
  ink: "bg-ink text-paper",
  paper: "bg-paper text-ink",
} as const

interface StickerProps {
  children: React.ReactNode
  color?: keyof typeof colorMap
  rotate?: number
  className?: string
  shape?: "pill" | "square" | "tag"
  bob?: boolean
}

/** Decorative annotation badge — like a printed sticker slapped onto paper. */
export function Sticker({
  children,
  color = "ink",
  rotate = -6,
  className = "",
  shape = "pill",
  bob = true,
}: StickerProps) {
  const shapeClass =
    shape === "pill"
      ? "rounded-full px-4 py-1.5"
      : shape === "tag"
        ? "rounded-sm px-3 py-1"
        : "px-3 py-1.5"
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.4, rotate: rotate + 30 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 280, damping: 16 }}
      style={{ "--r": `${rotate}deg` } as React.CSSProperties}
      className={cn(
        "inline-flex items-center gap-1.5 ink-border label-mono shadow-[3px_3px_0_0_#0a0a0a]",
        bob && "animate-sticker",
        shapeClass,
        colorMap[color],
        className,
      )}
    >
      {children}
    </motion.span>
  )
}
