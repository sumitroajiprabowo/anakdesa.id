# Panduan Kontribusi

Terima kasih sudah tertarik berkontribusi di **Anak Desa Indonesia**! Berikut panduan singkatnya.

## Cara Kontribusi

### Laporkan Bug atau Usulkan Fitur

Buka [issue baru](https://github.com/anakdesaid/anakdesa.id/issues) dengan deskripsi yang jelas. Sertakan screenshot jika relevan.

### Kirim Pull Request

1. Fork repo ini
2. Buat branch dari `main`: `git checkout -b fitur/nama-fitur`
3. Install dependencies: `npm install`
4. Kerjakan perubahanmu
5. Pastikan semua check lolos:
   ```bash
   npm run lint        # ESLint
   npm test            # Unit tests
   npm run build       # Build check
   ```
6. Commit dengan pesan yang jelas
7. Push dan buat Pull Request ke `main`

## Setup Lokal

```bash
git clone https://github.com/anakdesaid/anakdesa.id.git
cd anakdesa.id
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Struktur Project

```
src/
  app/          → Halaman (Next.js App Router)
  components/   → Komponen UI
  content/      → Data konten (teks, daftar mitra, dll)
  lib/          → Utilitas (YouTube fetcher, dll)
```

## Konvensi

- **Bahasa kode:** English (variabel, fungsi, komentar)
- **Bahasa konten:** Indonesian (teks yang tampil di website)
- **Styling:** Tailwind CSS v4
- **Formatting:** Prettier (otomatis via config)
- **Linting:** ESLint dengan aturan Next.js

## Catatan

- Jangan commit file `.env` atau kredensial apapun
- Semua perubahan masuk lewat Pull Request, bukan push langsung ke `main`
- Satu PR untuk satu perubahan — jangan campur banyak hal dalam satu PR

Punya pertanyaan? Buka issue atau hubungi kami lewat media sosial yang tertera di website.
