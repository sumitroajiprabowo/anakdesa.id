import type { NextConfig } from 'next'

const isCloudflare = process.env.DEPLOY_TARGET === 'cloudflare'

// Initialize Cloudflare dev proxy only when targeting Cloudflare
if (isCloudflare) {
  import('@opennextjs/cloudflare').then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev()
  })
}

const nextConfig: NextConfig = {
  // Vercel needs standalone output; Cloudflare uses OpenNext adapter
  ...(isCloudflare ? {} : { output: 'standalone' }),
  poweredByHeader: false,
  images: {
    // Cloudflare free plan has no image optimization; Vercel has it built-in
    unoptimized: isCloudflare,
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
}

export default nextConfig
