/* ────────────────────────────────────────────────
 * Semua konten landing page ada di sini.
 * Edit file ini untuk menambah karya, channel, dsb.
 * ──────────────────────────────────────────────── */

// ── Portfolio ──────────────────────────────────

export type KaryaKategori =
  'Fanbase Instansi' | 'Video' | 'Media Sosial' | 'Channel' | 'Aplikasi'

export type Karya = {
  judul: string
  mitra: string
  kategori: KaryaKategori
  thumbnail: string
  hasil: string
  link?: string
}

export const karya: Karya[] = [
  {
    judul: 'Pengelolaan Fanbase',
    mitra: 'Satlantas',
    kategori: 'Fanbase Instansi',
    thumbnail: '/images/karya/satlantas.svg',
    hasil: 'Pengelolaan fanbase & konten instansi',
  },
  {
    judul: 'Konten Media Sosial',
    mitra: 'Bapenda Jateng',
    kategori: 'Media Sosial',
    thumbnail: '/images/karya/bapenda.svg',
    hasil: 'Strategi konten & manajemen akun',
  },
  {
    judul: 'Produksi Video',
    mitra: 'Sahabat Rakyat',
    kategori: 'Video',
    thumbnail: '/images/karya/sahabat-rakyat.svg',
    hasil: 'Dokumentasi kegiatan & liputan',
  },
  {
    judul: 'Konten Media Sosial',
    mitra: 'Kala Pemalang',
    kategori: 'Media Sosial',
    thumbnail: '/images/karya/kala.svg',
    hasil: 'Konten kreatif media sosial',
  },
  {
    judul: 'Produksi Video',
    mitra: 'Mas Sajak',
    kategori: 'Video',
    thumbnail: '/images/karya/mas-sajak.svg',
    hasil: 'Produksi video profil & dokumenter',
  },
  {
    judul: 'Pengelolaan Channel',
    mitra: 'Puspindes',
    kategori: 'Channel',
    thumbnail: '/images/karya/puspindes.svg',
    hasil: 'Pengelolaan channel YouTube',
  },
  {
    judul: 'Konten Media Sosial',
    mitra: 'Naryama Trans',
    kategori: 'Media Sosial',
    thumbnail: '/images/karya/naryamatrans.svg',
    hasil: 'Pengelolaan konten Instagram',
    link: 'https://www.instagram.com/naryamatrans/',
  },
  {
    judul: 'Kawal Pilkades',
    mitra: 'Kawal Pilkades',
    kategori: 'Aplikasi',
    thumbnail: '/images/karya/puspindes.svg',
    hasil:
      'Platform kawal pemilihan kepala desa untuk transparansi demokrasi desa',
    link: 'https://pilkades.anakdesa.id',
  },
  {
    judul: 'Kawal Mudik',
    mitra: 'Kawal Mudik',
    kategori: 'Aplikasi',
    thumbnail: '/images/karya/puspindes.svg',
    hasil: 'Pemantauan arus mudik saat COVID-19 untuk keselamatan warga desa',
  },
]

// ── Channels ───────────────────────────────────

export type Channel = {
  nama: string
  deskripsi: string
  subscriber: string
  link: string
}

export const channels: Channel[] = [
  {
    nama: 'Anak Desa Indonesia',
    deskripsi:
      'Kami adalah komunitas media kecil yang berikhtiar mengunggah sosok inspirasi dari Desa — Kepala Desa, Pemerintah Desa, Masyarakat, Budaya, Pegiat, serta Potensi Desa.',
    subscriber: '163K',
    link: 'https://www.youtube.com/@AnakDesaIndonesia',
  },
]

// ── Kolaborator ────────────────────────────────

export type Partner = {
  nama: string
  logo: string
  url?: string
}

export const partners: Partner[] = [
  { nama: 'Bapenda Jateng', logo: '/images/partners/logo-bapenda.png' },
  { nama: 'Satlantas', logo: '/images/partners/logo-satlantas.jpg' },
  { nama: 'Sahabat Rakyat', logo: '/images/partners/logo-sahabatrakyat.jpg' },
  { nama: 'Kala Pemalang', logo: '/images/partners/logo-kala.jpg' },
  { nama: 'Mas Sajak', logo: '/images/partners/logo-massajak.jpg' },
  { nama: 'Puspindes', logo: '/images/partners/logo-puspindes.jpg' },
  { nama: 'Kilat.net', logo: '/images/partners/logo-kilatnet.svg', url: 'https://kilat.net.id' },
]

// ── Stats ──────────────────────────────────────

export type Stat = {
  nilai: string
  label: string
}

export const stats: Stat[] = [
  { nilai: '163K+', label: 'Subscriber' },
  { nilai: '82M+', label: 'Total Tayangan' },
  { nilai: '946', label: 'Video Diproduksi' },
  { nilai: '6+', label: 'Kolaborator' },
]

// ── Yang Kami Lakukan ──────────────────────────

export type Layanan = {
  judul: string
  deskripsi: string
  icon: 'share' | 'users' | 'video' | 'megaphone'
}

export const layanan: Layanan[] = [
  {
    judul: 'Kelola Media Sosial',
    deskripsi:
      'Bantu bikin strategi, kalender konten, desain, posting, dan pantau performanya bareng.',
    icon: 'share',
  },
  {
    judul: 'Fanbase Instansi',
    deskripsi:
      'Bangun dan kelola akun fanbase biar informasi layanan publik lebih dekat sama warga.',
    icon: 'users',
  },
  {
    judul: 'Produksi Video',
    deskripsi:
      'Profil, dokumenter, liputan acara, sampai konten pendek reels, shorts, dan TikTok.',
    icon: 'video',
  },
  {
    judul: 'Tayangkan Pesanmu',
    deskripsi:
      'Sampaikan program dan pesanmu lewat jaringan channel Anak Desa ke audiens desa.',
    icon: 'megaphone',
  },
]

// ── Alur Kolaborasi ────────────────────────────

export type Langkah = {
  judul: string
  deskripsi: string
}

export const langkah: Langkah[] = [
  {
    judul: 'Ngobrol Bareng',
    deskripsi: 'Ceritakan tujuan dan siapa yang mau kamu jangkau.',
  },
  {
    judul: 'Rancang Bareng',
    deskripsi: 'Kita susun ide, format, dan jadwal konten bersama.',
  },
  {
    judul: 'Produksi & Publish',
    deskripsi: 'Tim komunitas memproduksi dan mempublikasikan konten.',
  },
  {
    judul: 'Evaluasi Bareng',
    deskripsi: 'Kita review hasil dan insight-nya bersama.',
  },
]

// ── Navigation ─────────────────────────────────

export const navLinks = [
  { label: 'Karya', href: '#karya' },
  { label: 'Channel', href: '#channel' },
  { label: 'Kegiatan', href: '#layanan' },
  { label: 'Kolaborator', href: '#mitra' },
  { label: 'Kontak', href: '#kontak' },
]
