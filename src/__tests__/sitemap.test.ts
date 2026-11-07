import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'

describe('sitemap', () => {
  it('returns an array with the homepage entry', () => {
    const result = sitemap()
    expect(result).toHaveLength(1)
    expect(result[0].url).toBe('https://anakdesa.id')
    expect(result[0].changeFrequency).toBe('monthly')
    expect(result[0].priority).toBe(1)
  })

  it('has a recent lastModified date', () => {
    const result = sitemap()
    const modified = result[0].lastModified
    expect(modified).toBeInstanceOf(Date)
  })
})
