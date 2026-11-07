# Anak Desa Indonesia

Landing page [anakdesa.id](https://anakdesa.id) — komunitas media digital yang mengangkat cerita desa ke layar nasional.

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | Next.js 16 (App Router, ISR) |
| UI | React 19, Tailwind CSS v4, Radix UI Icons |
| Animasi | Motion 14 (scroll-reveal, stagger, magnetic hover, spring filter pill) |
| Bahasa | TypeScript 6 (strict) |
| Testing | Vitest 5 + Testing Library (unit), Playwright (E2E) |
| Hosting | Vercel (auto-deploy dari `main`) |
| Analytics | Vercel Analytics |

## Fitur

- **ISR** — video YouTube terbaru di-refresh tiap jam tanpa redeploy
- **Scroll animations** — blur entrance, staggered reveal, scale transitions via Motion
- **Magnetic hover** — efek spring pada tombol CTA
- **Animated filter** — pill yang bergerak antar kategori di section Karya (Motion `layoutId`)
- **Lite YouTube embed** — thumbnail dulu, iframe saat diklik (hemat bandwidth)
- **Marquee logo** — infinite scroll logo mitra, pause on hover
- **SEO** — Open Graph, Twitter Card, JSON-LD Organization schema, sitemap.xml
- **Responsive** — mobile-first, `overflow-x: hidden` pada html+body mencegah zoom-out dari Motion transforms

## Setup

```bash
npm install
npm run dev
```

Buka [localhost:3000](http://localhost:3000).

## Scripts

| Command | Fungsi |
|---------|--------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm test` | Unit tests (Vitest) |
| `npm run test:coverage` | Coverage report |
| `npm run test:e2e` | E2E tests (Playwright) |

## Struktur

```
src/
├── app/            # Pages, layout, globals.css, sitemap
├── components/     # UI components
│   ├── Hero.tsx          # Hero + cinematic stagger entrance
│   ├── Karya.tsx         # Portfolio grid + animated filter pill
│   ├── Channel.tsx       # YouTube channel + lite embed
│   ├── Layanan.tsx       # Daftar layanan
│   ├── CaraKerja.tsx     # Alur kolaborasi + hover lift
│   ├── Stats.tsx         # Animated counter
│   ├── CTA.tsx           # Call-to-action
│   ├── Mitra.tsx         # Partner logos marquee
│   ├── Navbar.tsx        # Navigation + mobile menu
│   ├── Footer.tsx        # Footer links + social
│   ├── MotionReveal.tsx  # Scroll-reveal + stagger components
│   ├── MagneticButton.tsx # Magnetic hover effect
│   ├── AnimatedCounter.tsx # Number count-up on scroll
│   └── YouTubePlayer.tsx  # Lite YouTube embed
├── content/
│   └── data.ts     # Semua konten landing page
└── lib/
    └── youtube.ts  # YouTube RSS fetcher
```

Mau ganti konten? Edit `src/content/data.ts`.

## Deploy

Push ke `main` → Vercel auto-deploy. Branch lain dapat preview URL.

## License

[MIT](LICENSE)
