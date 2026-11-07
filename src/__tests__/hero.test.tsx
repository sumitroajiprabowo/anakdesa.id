import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders headline and CTA', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toContain('Suara Desa')
    expect(screen.getByText('Lihat Karya')).toBeInTheDocument()
  })
})
