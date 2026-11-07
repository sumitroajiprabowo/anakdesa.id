import { ChatBubbleIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

export default function CTA() {
  return (
    <section id="kontak" className="bg-merah py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="font-display text-4xl tracking-tight text-white uppercase md:text-6xl lg:text-7xl">
          Ayo Bergerak Bersama
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base text-white/70">
          Punya cerita atau pesan yang ingin sampai ke warga? Gabung dan
          kolaborasi bersama komunitas Anak Desa.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/6287878022856"
            className="group text-merah inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-bold tracking-wider uppercase transition-all hover:bg-white/90 active:scale-[0.96]"
          >
            <ChatBubbleIcon
              width={18}
              height={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            Chat WhatsApp
          </a>
          <a
            href="mailto:admin@anakdesa.id"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold tracking-wider text-white uppercase transition-all hover:border-white/60 hover:bg-white/10 active:scale-[0.96]"
          >
            <EnvelopeClosedIcon
              width={18}
              height={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            Kirim Email
          </a>
        </div>
      </div>
    </section>
  )
}
