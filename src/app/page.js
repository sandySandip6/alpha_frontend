'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ServicesPreview from '@/components/ServicePreview'
import EmergencyBanner from '@/components/EmergencyBanner'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'
import BookingModal from '@/components/BookingModal'

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookNowClick = () => {
    setIsBookingModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsBookingModalOpen(false)
  }

  return (
    <>
      <Header onBookNowClick={handleBookNowClick} />
      <main>
        <Hero />
        <Features />
        <ServicesPreview />
        <EmergencyBanner />
      </main>
      <Footer />
      <FloatingButton />
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
    </>
  )
}









