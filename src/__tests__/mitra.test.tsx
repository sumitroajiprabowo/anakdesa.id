import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Mitra from '@/components/Mitra'

describe('Mitra', () => {
  it('renders partner section with logos', () => {
    render(<Mitra />)
    expect(screen.getByText(/Pernah Berkolaborasi/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
  })
})
