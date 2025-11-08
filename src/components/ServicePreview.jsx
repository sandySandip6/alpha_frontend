import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const servicesPreview = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
    icon: '🦷'
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our advanced cosmetic procedures.',
    icon: '✨'
  },
  {
    title: 'Orthodontics',
    description: 'Straighten your teeth with traditional braces or clear aligners.',
    icon: '🦷'
  }
]

export default function ServicesPreview() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive dental care for the whole family</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesPreview.map((service, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href="/services"
                className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  )
}