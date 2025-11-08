
'use client'
// ===== FILE: app/contact/page.tsx =====
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import BookingModal from '@/components/BookingModal'

export default function Contact() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  return (
    <>
      <Header onBookNowClick={() => setIsBookingModalOpen(true)} />
      <main className="py-20 bg-white"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us to schedule your appointment or ask any questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}