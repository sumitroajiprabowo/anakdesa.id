import Image from 'next/image'
import { partners } from '@/content/data'
import MotionReveal from './MotionReveal'

export default function Mitra() {
  return (
    <section
      id="mitra"
      className="bg-kapur-warm overflow-hidden py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <MotionReveal variant="fade">
          <p className="text-teks-muted text-center text-xs font-semibold tracking-widest uppercase">
            Pernah Berkolaborasi Dengan
          </p>
        </MotionReveal>
      </div>

      <MotionReveal variant="up" delay={0.15}>
        <div className="marquee-wrapper mt-10">
          {/* Two identical tracks side by side for seamless infinite scroll */}
          <div className="marquee-track">
            {partners.map((p) => (
              <Image
                key={p.nama}
                src={p.logo}
                alt={p.nama}
                width={120}
                height={56}
                className="h-14 w-auto shrink-0 object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            ))}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {partners.map((p) => (
              <Image
                key={p.nama}
                src={p.logo}
                alt={p.nama}
                width={120}
                height={56}
                className="h-14 w-auto shrink-0 object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  )
}
