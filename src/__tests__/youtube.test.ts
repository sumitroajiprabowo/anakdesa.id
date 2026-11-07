import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getLatestVideo } from '@/lib/youtube'

describe('getLatestVideo', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('parses RSS feed and returns the latest video', async () => {
    const mockXml = `<?xml version="1.0" encoding="UTF-8"?>
      <feed xmlns:yt="http://www.youtube.com/xml/schemas/2015"
            xmlns:media="http://search.yahoo.com/mrss/">
        <entry>
          <yt:videoId>abc123</yt:videoId>
          <title>Desa Hebat Episode 10</title>
          <published>2026-11-01T10:00:00+00:00</published>
        </entry>
      </feed>`

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(mockXml, { status: 200 }),
    )

    const video = await getLatestVideo()

    expect(video).toEqual({
      id: 'abc123',
      title: 'Desa Hebat Episode 10',
      thumbnail: 'https://i.ytimg.com/vi/abc123/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=abc123',
      published: '2026-11-01T10:00:00+00:00',
    })
  })

  it('returns null when fetch fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('network'))

    const video = await getLatestVideo()
    expect(video).toBeNull()
  })

  it('returns null when feed has no entries', async () => {
    const emptyFeed = `<?xml version="1.0"?><feed></feed>`
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(emptyFeed, { status: 200 }),
    )

    const video = await getLatestVideo()
    expect(video).toBeNull()
  })

  it('returns null on non-ok response', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response('', { status: 500 }),
    )

    const video = await getLatestVideo()
    expect(video).toBeNull()
  })

  it('returns null when entry lacks videoId or title', async () => {
    const noTitle = `<?xml version="1.0"?>
      <feed xmlns:yt="http://www.youtube.com/xml/schemas/2015">
        <entry>
          <yt:videoId>xyz789</yt:videoId>
        </entry>
      </feed>`
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(noTitle, { status: 200 }),
    )

    expect(await getLatestVideo()).toBeNull()
  })

  it('falls back to empty string when published is missing', async () => {
    const noPub = `<?xml version="1.0"?>
      <feed xmlns:yt="http://www.youtube.com/xml/schemas/2015">
        <entry>
          <yt:videoId>nopub1</yt:videoId>
          <title>No Published Date</title>
          <link rel="alternate" href="https://youtube.com/watch?v=nopub1"/>
        </entry>
      </feed>`
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(noPub, { status: 200 }),
    )

    const video = await getLatestVideo()
    expect(video).toEqual({
      id: 'nopub1',
      title: 'No Published Date',
      thumbnail: 'https://i.ytimg.com/vi/nopub1/hqdefault.jpg',
      url: 'https://youtube.com/watch?v=nopub1',
      published: '',
    })
  })
})
