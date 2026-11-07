// Revalidate every hour — keeps YouTube latest video fresh without redeploy
export const revalidate = 3600

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Karya from '@/components/Karya'
import Channel from '@/components/Channel'
import Layanan from '@/components/Layanan'
import CaraKerja from '@/components/CaraKerja'
import Mitra from '@/components/Mitra'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Karya />
        <Channel />
        <Layanan />
        <CaraKerja />
        <Mitra />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
