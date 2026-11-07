import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import YouTubePlayer from '@/components/YouTubePlayer'

describe('YouTubePlayer', () => {
  const props = {
    videoId: 'abc123',
    title: 'Test Video Title',
    thumbnail: 'https://i.ytimg.com/vi/abc123/maxresdefault.jpg',
  }

  it('renders thumbnail and play button initially', () => {
    render(<YouTubePlayer {...props} />)
    expect(
      screen.getByRole('button', { name: /putar video/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Video Terbaru')).toBeInTheDocument()
    expect(screen.getByText('Test Video Title')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'alt',
      'Test Video Title',
    )
  })

  it('switches to iframe when play button is clicked', () => {
    const { container } = render(<YouTubePlayer {...props} />)
    const playBtn = screen.getByRole('button', { name: /putar video/i })
    fireEvent.click(playBtn)

    const iframe = container.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe?.src).toContain('youtube-nocookie.com/embed/abc123')
    expect(iframe?.src).toContain('autoplay=1')
    expect(iframe).toHaveAttribute('title', 'Test Video Title')
  })
})
