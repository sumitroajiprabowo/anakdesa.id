'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/content/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close menu on navigation
  const close = () => setOpen(false)

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-arang/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-anakdesa-white.png"
              alt="Anak Desa Indonesia"
              width={160}
              height={40}
              loading="eager"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#kontak"
            className="bg-merah hover:bg-merah-deep hidden rounded-full px-5 py-2.5 text-sm font-bold text-white transition-colors md:inline-block"
          >
            Ajak Kolaborasi
          </a>

          {/* Hamburger — opens menu */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Buka menu"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu — outside nav to avoid backdrop-filter containing block */}
      {open && (
        <div className="bg-arang fixed inset-0 z-[55] flex flex-col items-center justify-center gap-8 md:hidden">
          {/* Close button — top right */}
          <button
            onClick={close}
            className="absolute right-6 top-4 flex h-10 w-10 items-center justify-center"
            aria-label="Tutup menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-white">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="font-display text-2xl text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={close}
            className="bg-merah mt-4 rounded-full px-8 py-3 text-lg font-bold text-white"
          >
            Ajak Kolaborasi
          </a>
        </div>
      )}
    </>
  )
}
