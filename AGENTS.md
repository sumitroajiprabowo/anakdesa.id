# AGENTS.md

Panduan untuk AI agent yang bekerja di repo ini.

## Project Overview

**anakdesa.id** adalah showcase landing page untuk Anak Desa Indonesia, sebuah komunitas/CSO (bukan bisnis). Website ini menampilkan karya, channel YouTube, mitra, dan layanan komunitas.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`, `@theme` directive)
- **Animation:** Motion 14 (scroll-triggered reveals, stagger, spring physics)
- **Language:** TypeScript 6 (strict mode)
- **Deployment:** Dual-platform — Cloudflare Workers (primary) or Vercel (fallback)
- **Cache:** R2 incremental cache (Cloudflare) / Vercel CDN
- **Config:** `DEPLOY_TARGET` env var in `next.config.ts` auto-detects platform

## Project Structure

```
src/
  app/          → Pages (layout, page, not-found, sitemap)
  components/   → UI components
  content/      → Content data (data.ts)
  lib/          → Utilities (youtube.ts)
  __tests__/    → Unit tests (per-component files)
```

## Key Conventions

- Content data uses Indonesian field names: `judul` (not `nama`), `layanan` (not `services`), `karya` (not `portfolio`), `langkah` (not `steps`)
- Fonts loaded via `next/font/google`: Sora, Inter, Plus Jakarta Sans
- Tailwind v4 font tokens use `--font-<name>` (not `--font-family-<name>`)
- All images use `next/image`, external images configured in `next.config.ts`
- ISR: `revalidate = 3600` in `page.tsx` (YouTube latest video auto-refreshes)

## Commands

```bash
npm run dev            # Development server
npm run build          # Production build (Vercel)
npm run lint           # ESLint
npm test               # Unit tests (Vitest)
npm run test:e2e       # E2E tests (Playwright)
npm run cf-build       # Build for Cloudflare Workers
npm run preview        # Build + local preview (wrangler)
npm run deploy         # Build + deploy to Cloudflare Workers
```

## Rules

- No secrets or credentials in code
- All changes via Pull Request
- Commit messages in English
- Content text in Indonesian

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
