'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import MainHero from '@/components/MainHero'
import Features from '@/components/Features'
import CardSection from '@/components/CardSection'
import About from '@/components/About'
import Support from '@/components/Support'
import Contact from '@/components/Contact'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import AnnouncementBar from '@/components/AnnouncementBar'

export default function Home() {
  const router = useRouter()
  const { user, loading } = useAuth()

  // for redirecting if logged in
  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00CED1]"></div>
      </div>
    )
  }

  if (user) {
    return null
  }

  return (
    <main className="min-h-screen bg-black">
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <MainHero />
      <Features />
      <CardSection />
      <About />
      <Contact />
      <Support />
      <FinalCTA />
      <Footer />
    </main>
  )
}
