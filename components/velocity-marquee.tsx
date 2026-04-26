"use client"

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion"
import { useRef } from "react"

interface Props {
  children: React.ReactNode
  baseVelocity?: number
  className?: string
}

/**
 * Marquee that bends with scroll velocity (Locomotive-style).
 * baseVelocity: pixels/sec at rest. Negative = right-to-left, positive = left-to-right.
 */
export function VelocityMarquee({ children, baseVelocity = -3, className = "" }: Props) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })
  const x = useTransform(baseX, (v) => `${wrap(-25, -75, v)}%`)
  const directionFactor = useRef(1)

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 100
    if (velocityFactor.get() < 0) directionFactor.current = -1
    else if (velocityFactor.get() > 0) directionFactor.current = 1
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <span className="mr-12 flex items-center gap-12">{children}</span>
        <span className="mr-12 flex items-center gap-12" aria-hidden>
          {children}
        </span>
        <span className="mr-12 flex items-center gap-12" aria-hidden>
          {children}
        </span>
        <span className="mr-12 flex items-center gap-12" aria-hidden>
          {children}
        </span>
      </motion.div>
    </div>
  )
}
