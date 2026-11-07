const CHANNEL_ID = 'UCCSX7UVbgBS9N-gQXtIgmmw'
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`

export type LatestVideo = {
  id: string
  title: string
  thumbnail: string
  url: string
  published: string
}

/**
 * Fetch the latest video from the YouTube RSS feed.
 * Runs at build time (Server Component / static export).
 * Falls back to null if the feed is unavailable.
 */
export async function getLatestVideo(): Promise<LatestVideo | null> {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: false } })
    if (!res.ok) return null

    const xml = await res.text()

    // Parse the first <entry> from the Atom feed
    const entryMatch = xml.match(/<entry>([\s\S]*?)<\/entry>/)
    if (!entryMatch) return null

    const entry = entryMatch[1]

    const videoId = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]
    const title = entry.match(/<title>([^<]+)<\/title>/)?.[1]
    const published = entry.match(/<published>([^<]+)<\/published>/)?.[1]
    const linkMatch = entry.match(/<link rel="alternate" href="([^"]+)"/)
    const url = linkMatch?.[1]

    if (!videoId || !title) return null

    return {
      id: videoId,
      title,
      thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      url: url ?? `https://www.youtube.com/watch?v=${videoId}`,
      published: published ?? '',
    }
  } catch {
    return null
  }
}
