import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CaraKerja from '@/components/CaraKerja'

describe('CaraKerja', () => {
  it('renders section heading and step cards', () => {
    render(<CaraKerja />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(0)
  })
})
