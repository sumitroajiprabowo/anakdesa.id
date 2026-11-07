import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Layanan from '@/components/Layanan'

describe('Layanan', () => {
  it('renders service heading and items', () => {
    render(<Layanan />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(0)
  })
})
