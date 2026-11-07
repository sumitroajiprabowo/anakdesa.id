'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  value: string // e.g. "163K+", "82M+", "946", "6+"
  className?: string
  style?: React.CSSProperties
}

function parse(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseFloat(match[1]), suffix: match[2] }
}

export default function AnimatedCounter({ value, className, style }: Props) {
  const { num, suffix } = parse(value)
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          obs.disconnect()

          const duration = 1800
          const steps = 60
          let current = 0
          let step = 0

          const timer = setInterval(() => {
            step++
            // Ease-out cubic
            const t = step / steps
            const eased = 1 - Math.pow(1 - t, 3)
            current = num * eased

            if (step >= steps) {
              setDisplay(num)
              clearInterval(timer)
            } else {
              setDisplay(Math.floor(current * 10) / 10)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [num])

  const formatted = Number.isInteger(num)
    ? Math.round(display).toString()
    : display.toFixed(1)

  return (
    <span ref={ref} className={className} style={style}>
      {formatted}
      {suffix}
    </span>
  )
}
