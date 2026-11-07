import { describe, it, expect } from 'vitest'
import {
  navLinks,
  layanan,
  channels,
  karya,
  partners,
  langkah,
} from '@/content/data'

describe('content/data exports', () => {
  it('navLinks has items with href and label', () => {
    expect(navLinks.length).toBeGreaterThan(0)
    navLinks.forEach((link) => {
      expect(link.href).toMatch(/^#/)
      expect(link.label).toBeTruthy()
    })
  })

  it('layanan has items with judul and deskripsi', () => {
    expect(layanan.length).toBeGreaterThan(0)
    layanan.forEach((s) => {
      expect(s.judul).toBeTruthy()
      expect(s.deskripsi).toBeTruthy()
    })
  })

  it('channels has at least one entry with required fields', () => {
    expect(channels.length).toBeGreaterThan(0)
    const ch = channels[0]
    expect(ch.nama).toBeTruthy()
    expect(ch.subscriber).toBeTruthy()
    expect(ch.link).toMatch(/^https:\/\//)
  })

  it('karya items have judul and thumbnail', () => {
    expect(karya.length).toBeGreaterThan(0)
    karya.forEach((p) => {
      expect(p.judul).toBeTruthy()
      expect(p.thumbnail).toMatch(/^\/images\//)
    })
  })

  it('partners have nama and logo path', () => {
    expect(partners.length).toBeGreaterThan(0)
    partners.forEach((p) => {
      expect(p.nama).toBeTruthy()
      expect(p.logo).toMatch(/^\/images\/partners\//)
    })
  })

  it('langkah has items with judul and deskripsi', () => {
    expect(langkah.length).toBeGreaterThan(0)
    langkah.forEach((s) => {
      expect(s.judul).toBeTruthy()
      expect(s.deskripsi).toBeTruthy()
    })
  })
})
