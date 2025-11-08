
// ===== FILE: components/Hero.tsx =====
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Smile, Our Priority
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Experience world-class dental care with cutting-edge technology and compassionate professionals dedicated to your oral health.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition flex items-center gap-2 shadow-lg"
              >
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link 
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-8xl text-center mb-4">🦷</div>
              <div className="grid grid-cols-2 gap-4 text-gray-800">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm">Happy Patients</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-sm">Expert Dentists</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
