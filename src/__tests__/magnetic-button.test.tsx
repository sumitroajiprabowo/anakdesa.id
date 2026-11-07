import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import MagneticButton from '@/components/MagneticButton'

describe('MagneticButton', () => {
  it('renders children', () => {
    render(
      <MagneticButton>
        <button>Click me</button>
      </MagneticButton>,
    )
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles mouse move and leave events', () => {
    render(
      <MagneticButton>
        <span>Hover target</span>
      </MagneticButton>,
    )
    const wrapper = screen.getByText('Hover target').parentElement!
    // Simulate mouse move
    fireEvent.mouseMove(wrapper, { clientX: 100, clientY: 100 })
    // Simulate mouse leave
    fireEvent.mouseLeave(wrapper)
    // Component should still be intact
    expect(screen.getByText('Hover target')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <MagneticButton className="test-class">
        <span>Content</span>
      </MagneticButton>,
    )
    const wrapper = screen.getByText('Content').parentElement!
    expect(wrapper.className).toContain('test-class')
  })
})
