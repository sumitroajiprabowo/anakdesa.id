import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// Mock async server component Channel
vi.mock('@/components/Channel', () => ({
  default: () => <div data-testid="channel">Channel Mock</div>,
}))

// Mock youtube lib used by Channel
vi.mock('@/lib/youtube', () => ({
  getLatestVideo: vi.fn().mockResolvedValue(null),
}))

describe('Home page', () => {
  it('renders all major sections', async () => {
    const { default: Home } = await import('@/app/page')
    render(<Home />)

    // Hero
    expect(screen.getByText(/Suara Desa/)).toBeInTheDocument()
    // Stats
    expect(screen.getAllByText(/Subscriber/i).length).toBeGreaterThan(0)
    // Karya
    expect(screen.getByText('Karya Pilihan')).toBeInTheDocument()
    // Layanan
    expect(screen.getByText('Yang Kami Lakukan')).toBeInTheDocument()
    // CaraKerja
    expect(screen.getByText('Alur Kolaborasi')).toBeInTheDocument()
    // CTA
    expect(screen.getByText('Ayo Bergerak Bersama')).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/2026 Anak Desa/)).toBeInTheDocument()
    // Mitra
    expect(screen.getByText(/Pernah Berkolaborasi/i)).toBeInTheDocument()
  })

  it('exports revalidate = 3600', async () => {
    const page = await import('@/app/page')
    expect(page.revalidate).toBe(3600)
  })
})
