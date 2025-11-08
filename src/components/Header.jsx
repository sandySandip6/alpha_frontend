// ===== FILE: components/Header.jsx =====
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  // { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' }
  
]

export default function Header({ onBookNowClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-4xl">🦷</div>
            <div>
              <div className="text-2xl font-bold text-blue-600">Alpha Dental Clinic</div>
              <div className="text-xs text-gray-600">Your Perfect Smile Partner</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-semibold transition ${
                  pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => onBookNowClick && onBookNowClick()}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 font-semibold transition ${
                  pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onBookNowClick && onBookNowClick()
              }}
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4 text-center"
            >
              Book Now
            </button>
          </nav>
        )}
      </div>

    </header>
  )
}
