'use client'

import { stats } from '@/content/data'
import AnimatedCounter from './AnimatedCounter'

export default function Stats() {
  return (
    <section className="bg-arang border-t border-white/10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4 md:py-20">
        {stats.map((s, i) => (
          <div key={s.label}>
            <AnimatedCounter
              value={s.nilai}
              className="font-display block text-4xl text-white sm:text-5xl md:text-6xl"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            />
            <p className="mt-2 text-xs font-medium tracking-widest text-white/30 uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
