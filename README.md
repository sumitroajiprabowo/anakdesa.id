<p align="center">
  <img src="public/images/logo-anakdesa.png" alt="Anak Desa Indonesia" height="48" />
</p>

<h3 align="center">anakdesa.id</h3>

<p align="center">
  Showcase landing page for Anak Desa Indonesia — a digital media community producing content, managing social channels, and building audiences for villages and local institutions across Indonesia.
</p>

<p align="center">
  <a href="https://anakdesa.id">Live Site</a> · <a href="#getting-started">Getting Started</a>
</p>

---

## Tech Stack

| Category | Details |
|----------|---------|
| **Framework** | [Next.js 16](https://nextjs.org) — App Router, React Server Components, ISR (1h revalidation) |
| **Language** | [TypeScript 6](https://www.typescriptlang.org) (strict mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/postcss` |
| **Animation** | [Motion 14](https://motion.dev) — scroll-triggered reveals, stagger orchestration, spring physics |
| **Icons** | [Radix UI Icons](https://www.radix-ui.com/icons) |
| **Testing** | [Vitest 5](https://vitest.dev) + [Testing Library](https://testing-library.com) (unit) · [Playwright](https://playwright.dev) (E2E) |
| **Hosting** | [Vercel](https://vercel.com) — auto-deploy on push to `main` |

## Getting Started

```bash
git clone https://github.com/sumitroajiprabowo/anakdesa.id.git
cd anakdesa.id
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint on src/
npm test             # Run unit tests
npm run test:coverage # Unit tests with coverage report
npm run test:e2e     # Run Playwright E2E tests
```

## Testing

Unit tests run on Vitest with Happy-DOM. Motion is mocked at setup level to avoid animation lifecycle errors.

| Metric | Coverage |
|--------|----------|
| Statements | 100% |
| Branches | 100% |
| Functions | 100% |
| Lines | 100% |

## Deployment

Push to `main` triggers a Vercel production deploy. YouTube latest video refreshes every hour through ISR — no manual redeploy needed.

## License

[MIT](LICENSE)
