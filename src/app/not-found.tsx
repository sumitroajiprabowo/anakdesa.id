import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-arang flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <span className="text-merah font-display text-8xl font-bold md:text-9xl">
        404
      </span>
      <h1 className="font-display mt-4 text-2xl tracking-tight text-white uppercase md:text-3xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-4 max-w-md text-base text-white/50">
        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="bg-merah hover:bg-merah-deep mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-bold tracking-wider text-white uppercase transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </main>
  )
}
