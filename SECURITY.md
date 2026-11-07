# Security Policy

## Melaporkan Kerentanan

Jangan buka issue publik. Kirim email ke **anakdesaindonesia@gmail.com** dengan:

- Deskripsi kerentanan
- Langkah reproduksi
- Dampak potensial

Kami akan merespons dalam 48 jam.

## Cakupan

Ini adalah landing page Next.js yang di-deploy di Vercel. Tidak ada database, API endpoint, atau autentikasi. Fokus keamanan:

- **Supply chain** — dependency npm (di-monitor via Dependabot)
- **Build pipeline** — CI/CD via GitHub Actions
- **Integritas konten** — semua konten hardcoded di repo

## Versi yang Didukung

Hanya versi terbaru di branch `main`.
