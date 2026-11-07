import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import NotFound from '@/app/not-found'

describe('NotFound', () => {
  it('renders 404 with back link', () => {
    render(<NotFound />)
    expect(screen.getByText('404')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /Kembali/i })
    expect(link).toHaveAttribute('href', '/')
  })
})
