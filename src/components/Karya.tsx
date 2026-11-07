'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { karya, type KaryaKategori } from '@/content/data'
import MotionReveal from './MotionReveal'

const filters: Array<KaryaKategori | 'Semua'> = [
  'Semua',
  'Aplikasi',
  'Fanbase Instansi',
  'Video',
  'Media Sosial',
  'Channel',
]

function KaryaRow({ item }: { item: (typeof karya)[number] }) {
  const inner = (
    <>
      {/* Project name */}
      <h3 className="font-display group-hover:text-merah text-2xl tracking-tight text-white uppercase transition-colors duration-300 md:text-3xl lg:text-4xl">
        {item.mitra}
      </h3>

      {/* Category + result */}
      <div className="flex items-baseline gap-4 sm:gap-8">
        <span className="text-xs font-medium tracking-widest text-white/30 uppercase">
          {item.kategori}
        </span>

        {item.link && (
          <ArrowTopRightIcon
            width={20}
            height={20}
            className="group-hover:text-merah hidden shrink-0 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
          />
        )}
      </div>
    </>
  )

  const className =
    'group grid grid-cols-1 items-baseline gap-2 border-t border-white/10 py-6 sm:grid-cols-[1fr_auto] sm:gap-8 md:py-8'

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} transition-colors duration-300 hover:bg-white/[0.03]`}
      >
        {inner}
      </a>
    )
  }

  return <div className={className}>{inner}</div>
}

export default function Karya() {
  const [active, setActive] = useState<KaryaKategori | 'Semua'>('Semua')

  const filtered =
    active === 'Semua' ? karya : karya.filter((k) => k.kategori === active)

  return (
    <section id="karya" className="bg-arang py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <MotionReveal variant="left">
            <h2 className="font-display text-3xl tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
              Karya Pilihan
            </h2>
          </MotionReveal>

          {/* Filter tabs */}
          <MotionReveal variant="right" delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    active === f
                      ? 'bg-merah text-white'
                      : 'text-white/35 hover:text-white/60'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </MotionReveal>
        </div>

        {/* Typography-driven portfolio list with AnimatePresence */}
        <div className="mt-10 md:mt-14">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.mitra}-${item.kategori}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                layout
              >
                <KaryaRow item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}
