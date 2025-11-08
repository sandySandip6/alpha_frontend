import { Phone } from 'lucide-react'

export default function FloatingButton() {
  return (
    <a
      href="tel:+1234567890"
      className="fixed bottom-15 right-8 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition z-50 flex items-center gap-2 font-bold"
    >
      <Phone size={24} />
      <span className="hidden sm:inline">Emergency</span>
    </a>
  )
}