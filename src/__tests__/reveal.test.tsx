import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import Reveal from '@/components/Reveal'

describe('Reveal', () => {
  let observerCallback: IntersectionObserverCallback
  let mockUnobserve: ReturnType<typeof vi.fn>

  beforeEach(() => {
    mockUnobserve = vi.fn()
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(cb: IntersectionObserverCallback) {
          observerCallback = cb
        }
        observe() {}
        unobserve = mockUnobserve
        disconnect() {}
      },
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders children with default "up" variant', () => {
    const { container } = render(<Reveal>Hello</Reveal>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('reveal')
  })

  it('applies fade variant class', () => {
    const { container } = render(<Reveal variant="fade">Fade</Reveal>)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('reveal-fade')
  })

  it('applies scale variant class', () => {
    const { container } = render(<Reveal variant="scale">Scale</Reveal>)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('reveal-scale')
  })

  it('applies stagger variant class', () => {
    const { container } = render(<Reveal variant="stagger">Stagger</Reveal>)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('reveal-stagger')
  })

  it('adds is-visible class when intersecting', () => {
    const { container } = render(<Reveal>Visible</Reveal>)
    const el = container.firstElementChild as HTMLElement

    act(() => {
      observerCallback(
        [
          {
            isIntersecting: true,
            target: el,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
    })

    expect(el.classList.contains('is-visible')).toBe(true)
    expect(mockUnobserve).toHaveBeenCalled()
  })

  it('adds is-visible class with delay when intersecting', () => {
    vi.useFakeTimers()
    const { container } = render(<Reveal delay={200}>Delayed</Reveal>)
    const el = container.firstElementChild as HTMLElement

    act(() => {
      observerCallback(
        [
          {
            isIntersecting: true,
            target: el,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
    })

    // Not visible yet
    expect(el.classList.contains('is-visible')).toBe(false)

    // After delay
    act(() => {
      vi.advanceTimersByTime(200)
    })
    expect(el.classList.contains('is-visible')).toBe(true)
    vi.useRealTimers()
  })

  it('does not add is-visible when not intersecting', () => {
    const { container } = render(<Reveal>Hidden</Reveal>)
    const el = container.firstElementChild as HTMLElement

    act(() => {
      observerCallback(
        [
          {
            isIntersecting: false,
            target: el,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
    })

    expect(el.classList.contains('is-visible')).toBe(false)
  })

  it('passes custom className through', () => {
    const { container } = render(<Reveal className="mt-10">Custom</Reveal>)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('mt-10')
  })
})
