# AGENTS.md

Panduan untuk AI agent yang bekerja di repo ini.

## Project Overview

**anakdesa.id** adalah showcase landing page untuk Anak Desa Indonesia, sebuah komunitas/CSO (bukan bisnis). Website ini menampilkan karya, channel YouTube, mitra, dan layanan komunitas.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`, `@theme` directive)
- **Language:** TypeScript (strict mode)
- **Deployment:** Vercel (ISR, `revalidate: 3600`)
- **Analytics:** Vercel Analytics

## Project Structure

```
src/
  app/          → Pages (layout, page, not-found, sitemap)
  components/   → UI components
  content/      → Content data (data.ts)
  lib/          → Utilities (youtube.ts)
```

## Key Conventions

- Content data uses Indonesian field names: `judul` (not `nama`), `layanan` (not `services`), `karya` (not `portfolio`), `langkah` (not `steps`)
- Fonts loaded via `next/font/google`: Sora, Inter, Plus Jakarta Sans
- Tailwind v4 font tokens use `--font-<name>` (not `--font-family-<name>`)
- All images use `next/image`, external images configured in `next.config.ts`

## Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
npm test             # Unit tests (Vitest)
npm run test:e2e     # E2E tests (Playwright)
```

## Rules

- No secrets or credentials in code
- All changes via Pull Request
- Commit messages in English
- Content text in Indonesian
