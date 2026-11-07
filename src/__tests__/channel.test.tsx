import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// Mock the youtube module before importing Channel
vi.mock('@/lib/youtube', () => ({
  getLatestVideo: vi.fn().mockResolvedValue({
    id: 'test123',
    title: 'Video Terbaru Test',
    url: 'https://youtube.com/watch?v=test123',
    thumbnail: 'https://i.ytimg.com/vi/test123/maxresdefault.jpg',
    published: '2026-01-01T00:00:00Z',
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

describe('Channel (no video)', () => {
  it('renders placeholder when no latest video', async () => {
    // Reset modules to apply new mock
    vi.resetModules()
    vi.doMock('@/lib/youtube', () => ({
      getLatestVideo: vi.fn().mockResolvedValue(null),
    }))

    const { default: Channel } = await import('@/components/Channel')
    const jsx = await Channel()
    const { container } = render(jsx)

    // Should show empty placeholder div instead of YouTubePlayer
    const placeholder = container.querySelector('.aspect-video')
    expect(placeholder).toBeInTheDocument()
    // Should NOT show the "Video Terbaru" tag
    expect(screen.queryByText('Video Terbaru')).not.toBeInTheDocument()
  })
})
