import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Stats from '@/components/Stats'

describe('Stats', () => {
  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getAllByText(/Subscriber/i).length).toBeGreaterThan(0)
  })
})
