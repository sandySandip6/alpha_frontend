import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We're here to help you achieve your perfect smile. Contact us today to schedule 
          your appointment or ask any questions about our dental services.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Our Clinic</h3>
            <p className="text-gray-600">
              Buspark Road <br/>
              Tulsipur, <br />
              Dang, Nepal.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
            <p className="text-gray-600">
              <a href="tel:+1234567890" className="hover:text-blue-600 transition">
                (+977) 98********
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Available 24/7 for emergencies
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
            <p className="text-gray-600">
              <a href="mailto:info@smilecare.com" className="hover:text-blue-600 transition">
                info@smilecare.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              We'll respond within 24 hours
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Hours</h3>
            <div className="text-gray-600 space-y-1">
              <p>Sunday - Friday: 8:00 AM - 7:00 PM</p>
              <p>Saturday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Emergency Services</h3>
        </div>
        <p className="text-gray-700 mb-4">
          Need immediate dental care? We provide emergency dental services 24/7. 
          Don't hesitate to call us for urgent dental issues.
        </p>
        <a 
          href="tel:+1234567890" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Emergency Line
        </a>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition">
            <span className="text-sm font-bold">f</span>
          </a>
          <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition">
            <span className="text-sm font-bold">t</span>
          </a>
          <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition">
            <span className="text-sm font-bold">ig</span>
          </a>
          <a href="#" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-900 transition">
            <span className="text-sm font-bold">in</span>
          </a>
        </div>
      </div>
    </div>
  )
}
