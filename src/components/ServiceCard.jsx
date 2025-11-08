import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-center">
        <div className="text-7xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
      </div>
      <div className="p-8">
        <p className="text-gray-600 mb-6">{service.description}</p>
        <div className="space-y-3">
          {service.features.map((feature, fidx) => (
            <div key={fidx} className="flex items-center gap-3">
              <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <Link 
          href="/contact"
          className="block w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  )
}