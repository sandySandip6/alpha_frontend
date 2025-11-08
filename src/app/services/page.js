
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'
import ServiceCard from '@/components/ServiceCard'
import { servicesData } from '@/data/servicesData'
import Link from 'next/link'

export default function Services() {
  return (
    <>
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a consultation and we will help you find the perfect treatment plan
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}