// ===== FILE: app/testimonials/page.tsx =====
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'
import TestimonialCard from '@/components/TestimonialCard'
import { testimonialsData } from '@/data/testimonialsData'
import Link from 'next/link'

export default function Testimonials() {
  return (
    <>
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Patient Testimonials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our patients have to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonialsData.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Join Thousands of Happy Patients</h2>
            <p className="text-xl mb-8 text-blue-100">Experience the difference that quality dental care makes</p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div>
                <div className="text-5xl font-bold">50K+</div>
                <div className="text-blue-100">Satisfied Patients</div>
              </div>
              <div>
                <div className="text-5xl font-bold">4.9/5</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
              <div>
                <div className="text-5xl font-bold">98%</div>
                <div className="text-blue-100">Would Recommend</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}