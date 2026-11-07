import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Karya from '@/components/Karya'

describe('Karya', () => {
  it('renders portfolio heading', () => {
    render(<Karya />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('filters items by category', () => {
    render(<Karya />)
    const videoBtn = screen.getByRole('button', { name: /^Video$/i })
    fireEvent.click(videoBtn)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBeGreaterThan(0)
  })
})
