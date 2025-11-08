// ===== FILE: app/about/page.tsx =====
'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'
import BookingModal from '@/components/BookingModal'
import { Award, Users, Heart } from 'lucide-react'

export default function About() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <>
      <Header onBookNowClick={() => setIsBookingModalOpen(true)} />
      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Our Clinic</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing exceptional dental care with compassion and expertise for over 15 years
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2010, our dental clinic has been dedicated to providing the highest quality dental care to our community. What started as a small practice has grown into a comprehensive dental care center, serving thousands of happy patients.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We believe that everyone deserves a healthy, beautiful smile. Our team of experienced professionals uses the latest technology and techniques to ensure you receive the best possible care in a comfortable, welcoming environment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to continuous education and innovation means we are always at the forefront of dental advancements, providing you with cutting-edge treatments and superior results.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-12 rounded-3xl">
              <div className="text-8xl text-center mb-6">🏥</div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <Award className="text-blue-600" size={32} />
                    <div>
                      <div className="font-bold text-gray-600 text-lg">Award Winning</div>
                      <div className="text-gray-600 text-sm">Best Dental Clinic 2023</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-600" size={32} />
                    <div>
                      <div className="font-bold text-gray-600 text-lg">50,000+ Patients</div>
                      <div className="text-gray-600 text-sm">Served with care</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <Heart className="text-blue-600" size={32} />
                    <div>
                      <div className="font-bold text-gray-600 text-lg">100% Satisfaction</div>
                      <div className="text-gray-600 text-sm">Guaranteed quality care</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                <p className="text-blue-100">Delivering the highest standard of dental care with precision and expertise</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-3">Compassion</h3>
                <p className="text-blue-100">Treating every patient with kindness, understanding, and respect</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                <p className="text-blue-100">Embracing the latest technology and techniques for better outcomes</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Certifications & Affiliations</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['🏆 ADA Member', '✅ Board Certified', '🌟 ISO 9001', '💎 Excellence Award'].map((cert, idx) => (
                <div key={idx} className="bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold text-gray-700">
                  {cert}
                </div>
              ))}
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