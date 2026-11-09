import type { Metadata } from 'next'
import { Sora, Inter, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const siteUrl = 'https://anakdesa.id'
const siteName = 'Anak Desa Indonesia'
const siteDescription =
  'Komunitas media digital yang memproduksi konten, mengelola media sosial, dan membangun fanbase untuk instansi dan desa di Indonesia.'
const siteTitle = `${siteName} — Komunitas Media Digital dari Desa`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'Anak Desa Indonesia',
    'komunitas media digital',
    'konten desa',
    'media sosial desa',
    'YouTube desa',
    'fanbase instansi',
    'produksi video desa',
    'media digital Indonesia',
    'channel YouTube Indonesia',
    'konten kreator desa',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anak Desa Indonesia — Komunitas Media Digital dari Desa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/images/og-image.png',
        alt: 'Anak Desa Indonesia — Komunitas Media Digital dari Desa',
      },
    ],
    creator: '@anakdesaid',
    site: '@anakdesaid',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'theme-color': '#E3120B',
    'msapplication-TileColor': '#E3120B',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  alternateName: 'Anak Desa',
  url: siteUrl,
  logo: `${siteUrl}/images/logo-anakdesa.png`,
  image: `${siteUrl}/images/og-image.png`,
  description: siteDescription,
  foundingDate: '2019',
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62-878-7802-2856',
    contactType: 'customer service',
    availableLanguage: 'Indonesian',
  },
  sameAs: [
    'https://www.youtube.com/@AnakDesaIndonesia',
    'https://www.instagram.com/anakdesaid/',
    'https://www.facebook.com/anakdesaind/',
    'https://www.tiktok.com/@anakdesa.id',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${sora.variable} ${inter.variable} ${jakarta.variable}`}
    >
      <head>
        <meta name="theme-color" content="#E3120B" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-body overflow-x-hidden antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
