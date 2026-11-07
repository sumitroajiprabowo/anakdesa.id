import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders logo and desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByAltText('Anak Desa Indonesia')).toBeInTheDocument()
    expect(screen.getByText('Ajak Kolaborasi')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)
    const burger = screen.getByLabelText('Buka menu')
    fireEvent.click(burger)
    // Mobile menu should now be open — links appear twice (desktop + mobile)
    expect(screen.getByLabelText('Tutup menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />)
    const burger = screen.getByLabelText('Buka menu')
    fireEvent.click(burger)
    // Click a mobile nav link
    const mobileLinks = screen.getAllByText('Ajak Kolaborasi')
    fireEvent.click(mobileLinks[mobileLinks.length - 1])
    // Menu should close
    expect(screen.getByLabelText('Buka menu')).toBeInTheDocument()
  })

  it('applies scrolled style on scroll', () => {
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)
    // The nav should have the scrolled class
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('shadow-md')
  })
})
