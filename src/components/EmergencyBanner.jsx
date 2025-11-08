export default function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">24/7 Emergency Dental Care</h2>
        <p className="text-xl mb-6">Dental emergencies don't wait. Neither do we.</p>
        <a href="tel:+1234567890" className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
          Call Now: (123) 456-7890
        </a>
      </div>
    </div>
  )
}