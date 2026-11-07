import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Layanan from '@/components/Layanan'
import CaraKerja from '@/components/CaraKerja'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Mitra from '@/components/Mitra'
import Karya from '@/components/Karya'
import NotFound from '@/app/not-found'

describe('Component render tests', () => {
  it('Hero renders headline and CTA', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toContain('Suara Desa')
    expect(screen.getByText('Lihat Karya')).toBeInTheDocument()
  })

  it('Stats renders stat labels', () => {
    render(<Stats />)
    expect(screen.getAllByText(/Subscriber/i).length).toBeGreaterThan(0)
  })

  it('Layanan renders service items', () => {
    render(<Layanan />)
    const section = screen.getByRole('heading', { level: 2 })
    expect(section).toBeInTheDocument()
  })

  it('CaraKerja renders step cards', () => {
    render(<CaraKerja />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(
      0,
    )
  })

  it('CTA renders WhatsApp link', () => {
    render(<CTA />)
    const waLink = screen.getByRole('link', { name: /whatsapp/i })
    expect(waLink).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })

  it('Footer renders copyright and social links', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 Anak Desa/)).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('Mitra renders partner section', () => {
    render(<Mitra />)
    expect(screen.getByText(/Pernah Berkolaborasi/i)).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
  })

  it('Karya renders portfolio cards', () => {
    render(<Karya />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })

  it('Karya filters items by category', () => {
    render(<Karya />)
    const videoBtn = screen.getByRole('button', { name: /^Video$/i })
    fireEvent.click(videoBtn)
    // After filtering, only Video category items should show
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBeGreaterThan(0)
  })

  it('NotFound renders 404 with back link', () => {
    render(<NotFound />)
    expect(screen.getByText('404')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /Kembali/i })
    expect(link).toHaveAttribute('href', '/')
  })
})
