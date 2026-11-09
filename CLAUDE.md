# CLAUDE.md

## Project

anakdesa.id — showcase landing page untuk Anak Desa Indonesia (komunitas/CSO).

## Stack

Next.js 16 App Router, Tailwind CSS v4, TypeScript strict, dual-platform (Cloudflare Workers primary / Vercel fallback).

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (Vercel)
- `npm run lint` — ESLint (`src/`)
- `npm test` — unit tests (Vitest)
- `npm run test:e2e` — E2E tests (Playwright)
- `npm run cf-build` — build for Cloudflare Workers
- `npm run preview` — build + local preview (wrangler)
- `npm run deploy` — build + deploy to Cloudflare Workers

## Conventions

- Content data: Indonesian field names (`judul`, `layanan`, `karya`, `langkah`)
- Tailwind v4: `@theme` with `--font-<name>`, bukan `--font-family-<name>`
- `next/image` untuk semua gambar, `next/link` untuk navigasi internal
- External images: configured via `remotePatterns` di `next.config.ts`
- ISR: `revalidate = 3600` di `page.tsx`

## Rules

- Commit tanpa Co-Authored-By
- Semua perubahan via Pull Request
- Squash commits sebelum push
- Jangan commit `.env`, credentials, atau private keys
