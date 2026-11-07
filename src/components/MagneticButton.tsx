'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef, type ReactNode, type MouseEvent } from 'react'

type Props = {
  children: ReactNode
  className?: string
  intensity?: number
}

export default function MagneticButton({
  children,
  className = '',
  intensity = 0.3,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouse = (e: MouseEvent) => {
    const el = ref.current
    /* v8 ignore next -- ref is always set after mount */
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * intensity)
    y.set((e.clientY - cy) * intensity)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Subtle rotation based on position
  const rotateX = useTransform(springY, [-20, 20], [3, -3])
  const rotateY = useTransform(springX, [-20, 20], [-3, 3])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
      }}
      whileTap={{ scale: 0.96 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
