import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// Mock the youtube module before importing Channel
vi.mock('@/lib/youtube', () => ({
  getLatestVideo: vi.fn().mockResolvedValue({
    title: 'Video Terbaru Test',
    url: 'https://youtube.com/watch?v=test123',
    thumbnail: 'https://i.ytimg.com/vi/test123/maxresdefault.jpg',
  }),
}))

describe('Channel', () => {
  it('renders channel name and stats', async () => {
    // Dynamic import after mock is set up
    const { default: Channel } = await import('@/components/Channel')

    // Channel is an async server component — call it as a function
    const jsx = await Channel()
    render(jsx)

    expect(screen.getByText('Anak Desa Indonesia')).toBeInTheDocument()
    expect(screen.getByText('Subscriber')).toBeInTheDocument()
    expect(screen.getByText('Kunjungi Channel')).toBeInTheDocument()
  })

  it('renders latest video title when available', async () => {
    const { default: Channel } = await import('@/components/Channel')
    const jsx = await Channel()
    render(jsx)

    expect(screen.getByText('Video Terbaru Test')).toBeInTheDocument()
    expect(screen.getByText('Video Terbaru')).toBeInTheDocument()
  })
})
