import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { channels } from '@/content/data'
import { getLatestVideo } from '@/lib/youtube'
import YouTubePlayer from './YouTubePlayer'

export default async function Channel() {
  const ch = channels[0]
  const latest = await getLatestVideo()

  const videoId = latest?.id ?? ''
  const videoTitle = latest?.title ?? `Channel ${ch.nama}`
  const videoThumb = latest
    ? `https://i.ytimg.com/vi/${latest.id}/maxresdefault.jpg`
    : '/images/placeholder-video.svg'

  return (
    <section id="channel" className="bg-arang py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Two-column layout: video left, info right */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          {/* Video — lite embed: thumbnail → iframe on click */}
          {videoId ? (
            <YouTubePlayer
              videoId={videoId}
              title={videoTitle}
              thumbnail={videoThumb}
            />
          ) : (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5" />
          )}

          {/* Channel info */}
          <div className="flex flex-col gap-8">
            {/* Label + heading */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <svg width="20" height="14" viewBox="0 0 24 17" fill="currentColor" className="text-merah" aria-hidden="true">
                  <path d="M23.498 2.641a3.016 3.016 0 00-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.623.505A3.017 3.017 0 00.502 2.641 31.56 31.56 0 000 8.455s0 5.814.502 7.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136c.502-2 .502-5.814.502-5.814a31.56 31.56 0 00-.502-5.814zM9.545 12.023V4.887L15.818 8.455l-6.273 3.568z" />
                </svg>
                <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                  YouTube Channel
                </span>
              </div>
              <h2 className="font-display text-3xl tracking-tight text-white uppercase md:text-4xl lg:text-5xl">
                {ch.nama}
              </h2>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 border-l-2 border-merah/40 pl-6">
              <div>
                <span className="font-display block text-2xl font-bold text-white md:text-3xl">
                  {ch.subscriber}
                </span>
                <span className="text-[11px] font-medium tracking-widest text-white/30 uppercase">
                  Subscriber
                </span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="font-display block text-2xl font-bold text-white md:text-3xl">
                  946
                </span>
                <span className="text-[11px] font-medium tracking-widest text-white/30 uppercase">
                  Video
                </span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="font-display block text-2xl font-bold text-white md:text-3xl">
                  82M+
                </span>
                <span className="text-[11px] font-medium tracking-widest text-white/30 uppercase">
                  Tayangan
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-md text-sm leading-relaxed text-white/50 md:text-base">
              {ch.deskripsi}
            </p>

            {/* CTA */}
            <a
              href={ch.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-merah hover:bg-merah-deep inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors"
            >
              Kunjungi Channel
              <ArrowTopRightIcon
                width={16}
                height={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
