'use client'
// ===== FILE: app/team/page.tsx =====
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'
import TeamMemberCard from '@/components/TeamMemberCard'
import { teamData } from '@/data/teamData'
import { Award, Heart, Users } from 'lucide-react'
import BookingModal from '@/components/BookingModal'

export default function Team() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  return (
    <>
      <Header onBookNowClick={() => setIsBookingModalOpen(true)} />
      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your smile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </div>

          <div className="mt-20 bg-blue-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Team Stands Out</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-blue-600 rounded-full mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Board Certified</h3>
                <p className="text-gray-600">All our dentists are board certified and continuously trained</p>
              </div>
              <div className="text-center">
                <div className="inline-block p-4 bg-blue-600 rounded-full mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Patient-Focused</h3>
                <p className="text-gray-600">Your comfort and satisfaction are our top priorities</p>
              </div>
              <div className="text-center">
                <div className="inline-block p-4 bg-blue-600 rounded-full mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Collaborative Care</h3>
                <p className="text-gray-600">Our team works together to provide comprehensive treatment</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}