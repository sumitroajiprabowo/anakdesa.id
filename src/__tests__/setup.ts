import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { createElement, forwardRef } from 'react'
import { afterEach, vi } from 'vitest'

// Strip motion-specific props, keep standard HTML props
const motionProps = new Set([
  'initial', 'animate', 'exit', 'variants', 'transition', 'whileInView',
  'whileHover', 'whileTap', 'whileFocus', 'whileDrag', 'viewport', 'layout',
  'onAnimationStart', 'onAnimationComplete',
])

function filterProps(props: Record<string, unknown>) {
  const filtered: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(props)) {
    if (!motionProps.has(k)) filtered[k] = v
  }
  return filtered
}

// Mock motion/react to avoid animation lifecycle errors in Happy-DOM
vi.mock('motion/react', () => {
  const motion = new Proxy({}, {
    get(_, tag: string) {
      const Comp = forwardRef(function MotionProxy(
        props: Record<string, unknown>,
        ref: unknown,
      ) {
        return createElement(tag, { ...filterProps(props), ref })
      })
      Comp.displayName = `motion.${tag}`
      return Comp
    },
  })

  return {
    motion,
    AnimatePresence: ({ children }: { children: unknown }) => children,
    useMotionValue: (init: number) => ({
      get: () => init,
      set: () => {},
      onChange: () => () => {},
    }),
    useSpring: (value: unknown) => value,
    useTransform: () => ({
      get: () => 0,
      set: () => {},
      onChange: () => () => {},
    }),
  }
})

afterEach(() => {
  cleanup()
})
