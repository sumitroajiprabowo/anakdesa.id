import {
  Share1Icon,
  PersonIcon,
  VideoIcon,
  SpeakerLoudIcon,
} from '@radix-ui/react-icons'
import { layanan } from '@/content/data'
import { StaggerContainer, StaggerItem } from './MotionReveal'

const icons = [Share1Icon, PersonIcon, VideoIcon, SpeakerLoudIcon]

export default function Layanan() {
  return (
    <section id="layanan" className="bg-kapur py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-teks text-3xl tracking-tight uppercase md:text-5xl lg:text-6xl">
          Yang Kami Lakukan
        </h2>

        <StaggerContainer className="mt-12 md:mt-16" stagger={0.12}>
          {layanan.map((l, i) => {
            const Icon = icons[i]
            return (
              <StaggerItem key={l.judul} variant="up">
                <div className="group border-border grid grid-cols-1 items-baseline gap-3 border-t py-8 first:border-t-0 first:pt-0 md:grid-cols-[4rem_1fr_1fr] md:gap-8 md:py-10">
                  <div className="flex items-center gap-3 md:block">
                    <Icon
                      width={20}
                      height={20}
                      className="text-merah/40 group-hover:text-merah transition-colors duration-300"
                    />
                    <span className="font-display text-teks-muted/30 text-xl md:mt-1 md:block md:text-2xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-teks text-xl md:text-2xl">
                    {l.judul}
                  </h3>
                  <p className="text-teks-muted text-sm leading-relaxed md:text-base">
                    {l.deskripsi}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
