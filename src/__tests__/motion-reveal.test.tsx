import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MotionReveal, {
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from '@/components/MotionReveal'

describe('MotionReveal', () => {
  it('renders children with default variant', () => {
    render(<MotionReveal>Hello World</MotionReveal>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders with all variants', () => {
    const variants = ['up', 'down', 'left', 'right', 'fade', 'scale', 'blur'] as const
    variants.forEach((variant) => {
      const { unmount } = render(
        <MotionReveal variant={variant}>Content {variant}</MotionReveal>,
      )
      expect(screen.getByText(`Content ${variant}`)).toBeInTheDocument()
      unmount()
    })
  })

  it('applies custom className', () => {
    render(<MotionReveal className="custom-class">Test</MotionReveal>)
    expect(screen.getByText('Test').parentElement?.className || screen.getByText('Test').className).toContain('custom-class')
  })
})

describe('StaggerContainer', () => {
  it('renders children', () => {
    render(
      <StaggerContainer>
        <div>Item 1</div>
        <div>Item 2</div>
      </StaggerContainer>,
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })
})

describe('StaggerItem', () => {
  it('renders children with variant', () => {
    render(
      <StaggerItem variant="scale">
        <span>Stagger child</span>
      </StaggerItem>,
    )
    expect(screen.getByText('Stagger child')).toBeInTheDocument()
  })
})

describe('TextReveal', () => {
  it('renders each word as a separate span', () => {
    render(<TextReveal>Hello World Test</TextReveal>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('World')).toBeInTheDocument()
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <TextReveal className="text-reveal-class">One Two</TextReveal>,
    )
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('text-reveal-class')
  })
})
