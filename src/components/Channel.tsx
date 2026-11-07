import Image from 'next/image'
import { ArrowTopRightIcon, PlayIcon } from '@radix-ui/react-icons'
import { channels } from '@/content/data'
import { getLatestVideo } from '@/lib/youtube'

export default async function Channel() {
  const ch = channels[0]
  const latest = await getLatestVideo()

  // Use fetched video or fall back to channel link
  const videoUrl = latest?.url ?? ch.link
  const videoTitle = latest?.title ?? `Channel ${ch.nama}`
  const videoThumb = latest?.thumbnail ?? '/images/placeholder-video.svg'

  return (
    <section id="channel" className="bg-arang py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold tracking-widest text-white/30 uppercase">
              YouTube
            </span>
            <h2 className="font-display mt-2 text-3xl tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
              {ch.nama}
            </h2>
          </div>

          {/* Stats row */}
          <div className="flex gap-8">
            <div>
              <span className="font-display block text-2xl text-white md:text-3xl">
                {ch.subscriber}
              </span>
              <span className="text-xs font-medium tracking-widest text-white/30 uppercase">
                Subscriber
              </span>
            </div>
            <div>
              <span className="font-display block text-2xl text-white md:text-3xl">
                946
              </span>
              <span className="text-xs font-medium tracking-widest text-white/30 uppercase">
                Video
              </span>
            </div>
            <div>
              <span className="font-display block text-2xl text-white md:text-3xl">
                82M+
              </span>
              <span className="text-xs font-medium tracking-widest text-white/30 uppercase">
                Tayangan
              </span>
            </div>
          </div>
        </div>

        {/* Video thumbnail — links to latest video or channel */}
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-arang-light relative mt-10 block overflow-hidden rounded-2xl md:mt-14"
        >
          <div className="relative aspect-video w-full">
            <Image
              src={videoThumb}
              alt={videoTitle}
              width={1200}
              height={675}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-merah shadow-merah/30 group-hover:shadow-merah/40 flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl md:h-24 md:w-24">
                <PlayIcon width={32} height={32} className="ml-1" />
              </div>
            </div>
          </div>

          {/* Latest video title badge */}
          {latest && (
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="line-clamp-2 text-sm font-medium text-white/90 md:text-base">
                {latest.title}
              </p>
              <p className="mt-1 text-xs text-white/40">Video Terbaru</p>
            </div>
          )}
        </a>

        {/* Description + CTA */}
        <div className="mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_auto] md:gap-16">
          <p className="max-w-xl text-base leading-relaxed text-white/50">
            {ch.deskripsi}
          </p>

          <a
            href={ch.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:text-merah inline-flex items-center gap-2 text-sm font-bold tracking-wider text-white uppercase transition-colors"
          >
            Kunjungi Channel
            <ArrowTopRightIcon
              width={18}
              height={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
