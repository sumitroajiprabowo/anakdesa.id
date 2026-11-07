'use client'

import Image from 'next/image'
import { ArrowDownIcon, ChatBubbleIcon } from '@radix-ui/react-icons'
import { motion } from 'motion/react'
import MagneticButton from './MagneticButton'

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Hero() {
  return (
    <section className="bg-arang relative flex min-h-[100dvh] items-end">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/showreel-bg.svg"
          alt=""
          role="presentation"
          fill
          loading="eager"
          className="object-cover opacity-20"
        />
        <div className="from-arang via-arang/60 to-arang/20 absolute inset-0 bg-gradient-to-t" />
      </div>

      {/* Content — staggered entrance */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-32 pb-20 md:pb-28 lg:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="mb-8 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-white/80 uppercase backdrop-blur-sm"
          >
            Dari Desa untuk Indonesia
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl leading-[0.88] tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-[6.5rem]"
          >
            Suara Desa
            <br />
            di Layar <span className="text-shimmer">Indonesia</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-md text-base leading-relaxed text-white/50 md:text-lg"
          >
            Komunitas media digital yang mengangkat cerita, sosok, dan potensi
            desa ke layar nasional.
          </motion.p>

          {/* CTAs with magnetic hover */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton>
              <a
                href="#karya"
                className="group bg-merah hover:bg-merah-deep hover:shadow-merah/25 btn-pulse inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold tracking-wider text-white uppercase transition-all hover:shadow-lg active:scale-[0.96]"
              >
                Lihat Karya
                <ArrowDownIcon
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://wa.me/6287878022856"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold tracking-wider text-white/80 uppercase transition-all hover:border-white/40 hover:bg-white/5 hover:text-white active:scale-[0.96]"
              >
                <ChatBubbleIcon
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                Kolaborasi
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
