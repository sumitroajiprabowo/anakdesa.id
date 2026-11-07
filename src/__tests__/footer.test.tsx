import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders copyright and social links', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 Anak Desa/)).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('TikTok')).toBeInTheDocument()
  })
})
