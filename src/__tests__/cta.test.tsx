import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CTA from '@/components/CTA'

describe('CTA', () => {
  it('renders WhatsApp link', () => {
    render(<CTA />)
    const waLink = screen.getByRole('link', { name: /whatsapp/i })
    expect(waLink).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })

  it('renders email link', () => {
    render(<CTA />)
    const emailLink = screen.getByRole('link', { name: /email/i })
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'))
  })
})
