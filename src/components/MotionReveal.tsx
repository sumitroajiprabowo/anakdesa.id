'use client'

import { motion, type Variants } from 'motion/react'
import { type ReactNode } from 'react'

type Variant = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'blur'

type Props = {
  children: ReactNode
  className?: string
  variant?: Variant
  delay?: number
  duration?: number
  once?: boolean
}

/* ── Variant definitions ─────────────────────────────────────
   Every spatial variant includes a subtle blur for premium feel.
   Easing: custom cubic for smooth deceleration.
   ──────────────────────────────────────────────────────────── */
const variants: Record<Variant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  down: {
    hidden: { opacity: 0, y: -60, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  left: {
    hidden: { opacity: 0, x: -60, filter: 'blur(8px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  right: {
    hidden: { opacity: 0, x: 60, filter: 'blur(8px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  fade: {
    hidden: { opacity: 0, filter: 'blur(6px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85, filter: 'blur(6px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(16px)', scale: 0.95 },
    visible: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  },
}

export default function MotionReveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Stagger container ───────────────────────────────────────
   Orchestrates children via staggerChildren.
   ──────────────────────────────────────────────────────────── */
export function StaggerContainer({
  children,
  className = '',
  stagger = 0.1,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Stagger item ────────────────────────────────────────────
   Individual child inside a StaggerContainer.
   ──────────────────────────────────────────────────────────── */
export function StaggerItem({
  children,
  className = '',
  variant = 'up',
}: {
  children: ReactNode
  className?: string
  variant?: Variant
}) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── TextReveal ──────────────────────────────────────────────
   Split text reveal for headlines — each word animates in.
   ──────────────────────────────────────────────────────────── */
export function TextReveal({
  children,
  className = '',
  stagger = 0.05,
  delay = 0,
}: {
  children: string
  className?: string
  stagger?: number
  delay?: number
}) {
  const words = children.split(' ')

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
