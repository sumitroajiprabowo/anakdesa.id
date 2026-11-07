<p align="center">
  <img src="public/images/logo-anakdesa.png" alt="Anak Desa Indonesia" height="48" />
</p>

<h3 align="center">anakdesa.id</h3>

<p align="center">
  Showcase landing page for Anak Desa Indonesia — a digital media community producing content, managing social channels, and building audiences for villages and local institutions across Indonesia.
</p>

<p align="center">
  <a href="https://anakdesa.id">Live Site</a> · <a href="#getting-started">Getting Started</a> · <a href="#project-structure">Structure</a>
</p>

---

## Tech Stack

| Category | Details |
|----------|---------|
| **Framework** | [Next.js 16](https://nextjs.org) — App Router, React Server Components, ISR (1h revalidation) |
| **Language** | [TypeScript 6](https://www.typescriptlang.org) (strict mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/postcss` |
| **Animation** | [Motion 14](https://motion.dev) — scroll-triggered reveals, stagger orchestration, spring physics, `layoutId` transitions |
| **Icons** | [Radix UI Icons](https://www.radix-ui.com/icons) |
| **Testing** | [Vitest 5](https://vitest.dev) + [Testing Library](https://testing-library.com) (unit) · [Playwright](https://playwright.dev) (E2E) |
| **Hosting** | [Vercel](https://vercel.com) — auto-deploy on push to `main`, preview URLs on branches |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |

## Features

**Content & Data**
- YouTube latest video fetched via RSS, cached with ISR (1-hour revalidation, no redeploy needed)
- All page content lives in a single data file — swap text without touching components

**Animation**
- Scroll-triggered blur+translate reveals on every section (`MotionReveal`)
- Staggered entrance orchestration for grouped elements (`StaggerContainer`/`StaggerItem`)
- Spring-animated filter pill that slides between active categories (Motion `layoutId`)
- Physics-based magnetic hover on CTA buttons (`useMotionValue`/`useSpring`/`useTransform`)
- Hover lift on cards, animated number counters on scroll

**Performance & SEO**
- Lite YouTube embed — loads thumbnail first, swaps to iframe on click
- Open Graph + Twitter Card meta, JSON-LD Organization schema, auto-generated `sitemap.xml`
- `prefers-reduced-motion` respected for marquee and pulse animations

**Mobile**
- Mobile-first responsive layout
- `overflow-x: hidden` on both `<html>` and `<body>` to prevent horizontal scroll from Motion's off-screen initial transforms

## Getting Started

```bash
git clone https://github.com/sumitroajiprabowo/anakdesa.id.git
cd anakdesa.id
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `YOUTUBE_CHANNEL_ID` | Channel ID for fetching the latest video | No (falls back to placeholder) |

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint on src/
npm test             # Run unit tests
npm run test:coverage # Unit tests with coverage report
npm run test:e2e     # Run Playwright E2E tests
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx          # Home page (composes all sections)
│   ├── globals.css       # Theme tokens, marquee, shimmer, reduced-motion
│   ├── not-found.tsx     # 404 page
│   └── sitemap.ts        # Auto-generated sitemap
│
├── components/
│   ├── Navbar.tsx         # Top nav + mobile hamburger menu
│   ├── Hero.tsx           # Hero section — staggered entrance with blur
│   ├── Stats.tsx          # Animated number counters
│   ├── Karya.tsx          # Portfolio grid with animated filter tabs
│   ├── Channel.tsx        # YouTube channel section + lite embed
│   ├── Layanan.tsx        # Services list
│   ├── CaraKerja.tsx      # Collaboration steps with hover lift
│   ├── CTA.tsx            # Call-to-action section
│   ├── Mitra.tsx          # Partner logo marquee
│   ├── Footer.tsx         # Footer with links and social icons
│   ├── MotionReveal.tsx   # Reusable scroll-reveal, stagger container/item, text reveal
│   ├── MagneticButton.tsx # Spring-physics magnetic hover wrapper
│   ├── AnimatedCounter.tsx # Count-up animation triggered on scroll
│   └── YouTubePlayer.tsx  # Click-to-play YouTube embed
│
├── content/
│   └── data.ts            # All page content: karya, layanan, stats, partners, nav links
│
└── lib/
    └── youtube.ts         # YouTube RSS feed parser for ISR
```

### Editing Content

All text, portfolio items, services, stats, and partner logos are in `src/content/data.ts`. Edit that file to update the landing page — no component changes needed.

## Testing

Unit tests run on [Vitest](https://vitest.dev) with [Happy-DOM](https://github.com/nicedoc/happy-dom). Motion is mocked at the test setup level to avoid animation lifecycle errors in the DOM environment.

Current coverage:

| Metric | Coverage |
|--------|----------|
| Lines | 100% |
| Functions | 100% |
| Statements | 98.13% |
| Branches | 88.05% |

## Deployment

Push to `main` triggers a Vercel production deploy. Any other branch gets a preview deployment with its own URL.

The YouTube latest video refreshes automatically every hour through Next.js ISR — no manual redeploy required.

## License

[MIT](LICENSE)
