'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  variant?: 'up' | 'fade' | 'scale' | 'stagger'
  delay?: number
}

export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add('is-visible'), delay)
          } else {
            el.classList.add('is-visible')
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const base =
    variant === 'stagger'
      ? 'reveal-stagger'
      : variant === 'fade'
        ? 'reveal reveal-fade'
        : variant === 'scale'
          ? 'reveal reveal-scale'
          : 'reveal'

  return (
    <div ref={ref} className={`${base} ${className}`}>
      {children}
    </div>
  )
}
