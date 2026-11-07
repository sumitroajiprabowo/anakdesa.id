import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import AnimatedCounter from '@/components/AnimatedCounter'

describe('AnimatedCounter', () => {
  let observerCallback: IntersectionObserverCallback

  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(cb: IntersectionObserverCallback) {
          observerCallback = cb
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      },
    )
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders initial state with suffix', () => {
    render(<AnimatedCounter value="163K+" />)
    expect(screen.getByText(/0/)).toBeInTheDocument()
    expect(screen.getByText(/K\+/)).toBeInTheDocument()
  })

  it('renders initial state without suffix', () => {
    render(<AnimatedCounter value="946" />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders as a span element', () => {
    const { container } = render(<AnimatedCounter value="100" />)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('animates to target value when intersecting', () => {
    render(<AnimatedCounter value="100" />)

    // Trigger intersection
    act(() => {
      observerCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    // Advance through all animation steps (60 steps, 1800ms / 60 = 30ms each)
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByText('100')).toBeInTheDocument()
  })

  it('handles decimal target values', () => {
    render(<AnimatedCounter value="6.5+" />)

    act(() => {
      observerCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByText(/6\.5/)).toBeInTheDocument()
  })

  it('does not animate when not intersecting', () => {
    render(<AnimatedCounter value="100" />)

    act(() => {
      observerCallback(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('handles unparseable value gracefully', () => {
    render(<AnimatedCounter value="N/A" />)
    expect(screen.getByText('0N/A')).toBeInTheDocument()
  })
})
