'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PlayIcon } from '@radix-ui/react-icons'

type Props = {
  videoId: string
  title: string
  thumbnail: string
}

export default function YouTubePlayer({ videoId, title, thumbnail }: Props) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
      aria-label={`Putar video: ${title}`}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-merah/90 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-merah group-hover:shadow-xl md:h-20 md:w-20">
            <PlayIcon width={28} height={28} className="ml-1" />
          </div>
        </div>

        {/* "Video Terbaru" tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-merah rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider text-white uppercase">
            Video Terbaru
          </span>
        </div>
      </div>

      {/* Video title bar */}
      <div className="border-t border-white/10 px-5 py-4">
        <p className="line-clamp-2 text-sm leading-snug font-medium text-white/80">
          {title}
        </p>
      </div>
    </button>
  )
}
