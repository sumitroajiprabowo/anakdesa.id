# Anak Desa Indonesia

Landing page [anakdesa.id](https://anakdesa.id) — komunitas media digital yang mengangkat cerita desa ke layar nasional.

## Stack

Next.js 15 · Tailwind CSS v4 · TypeScript · Radix UI Icons · Vercel

## Setup

```bash
npm install
npm run dev
```

Buka [localhost:3000](http://localhost:3000).

## Scripts

| Command            | Keterangan             |
| ------------------ | ---------------------- |
| `npm run dev`      | Development server     |
| `npm run build`    | Production build       |
| `npm run lint`     | ESLint                 |
| `npm test`         | Unit tests (Vitest)    |
| `npm run test:e2e` | E2E tests (Playwright) |

## Deploy

Push ke `main` → Vercel auto-deploy. Video YouTube terbaru di-refresh otomatis tiap jam via ISR.

## Struktur

```
src/
├── app/          # Pages, layout, sitemap
├── components/   # UI components
├── content/      # Data konten (edit di sini)
└── lib/          # Utilities (YouTube RSS fetcher)
```

Mau ganti konten? Edit `src/content/data.ts`.

## License

[MIT](LICENSE)
