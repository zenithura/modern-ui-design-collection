import Head from 'next/head'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { CardGallery } from '@/components/card-gallery'
import { Features } from '@/components/features'
import { CallToAction } from '@/components/call-to-action'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern UI Design Collection</title>
        <meta name="description" content="Modern UI tasarım öğeleri ve bileşenleri koleksiyonu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4">
          <HeroSection />
          <CardGallery />
          <Features />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  )
}