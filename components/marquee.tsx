"use client"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  items: string[]
  className?: string
  separator?: string
  reverse?: boolean
  speed?: "slow" | "fast"
}

/** Edge-to-edge infinite marquee using duplicated track + CSS keyframes. */
export function Marquee({
  items,
  className,
  separator = "•",
  reverse = false,
  speed = "fast",
}: MarqueeProps) {
  const track = [...items, ...items]

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-8 whitespace-nowrap",
          speed === "fast" ? "animate-marquee" : "animate-marquee-slow",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-bone/80"
            aria-hidden={i >= items.length}
          >
            <span className="display-md tracking-tight">{item}</span>
            <span className="display-md text-citrus">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
