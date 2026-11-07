'use client'

import {
  ChatBubbleIcon,
  Pencil2Icon,
  RocketIcon,
  BarChartIcon,
} from '@radix-ui/react-icons'
import { motion } from 'motion/react'
import { langkah } from '@/content/data'
import MotionReveal, { StaggerContainer, StaggerItem } from './MotionReveal'

const icons = [ChatBubbleIcon, Pencil2Icon, RocketIcon, BarChartIcon]

export default function CaraKerja() {
  return (
    <section className="border-border bg-kapur border-t py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <MotionReveal variant="up">
          <h2 className="font-display text-teks text-3xl tracking-tight uppercase md:text-5xl lg:text-6xl">
            Alur Kolaborasi
          </h2>
        </MotionReveal>

        <StaggerContainer
          className="bg-border mt-12 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 md:mt-16 md:grid-cols-4"
          stagger={0.1}
          delay={0.15}
        >
          {langkah.map((l, i) => {
            const Icon = icons[i]
            return (
              <StaggerItem key={l.judul} variant="scale">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group bg-kapur hover:bg-kapur-warm h-full cursor-default p-6 transition-colors duration-300 md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-merah/15 block text-5xl md:text-6xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon
                      width={20}
                      height={20}
                      className="text-teks-muted/30 group-hover:text-merah mt-2 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-display text-teks mt-4 text-lg">
                    {l.judul}
                  </h3>
                  <p className="text-teks-muted mt-2 text-sm leading-relaxed">
                    {l.deskripsi}
                  </p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
