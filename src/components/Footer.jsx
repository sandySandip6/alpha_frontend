'use client'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  // { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' }
]

const services = [
  'General Dentistry',
  'Cosmetic Dentistry',
  'Orthodontics',
  'Dental Implants',
  'Pediatric Dentistry',
  'Emergency Care'
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🦷</div>
              <div className="text-2xl font-bold">SmileCare</div>
            </div>
            <p className="text-gray-400 mb-4">
              Providing exceptional dental care with compassion and expertise since 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-gray-400 hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link href="/services" className="text-gray-400 hover:text-white transition">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <div>(+977) 98********</div>
                  <div className="text-sm">Sun-Fri: 8AM - 7PM</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <div>info@dentalclinic.com</div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <div>Buspark Road<br />Tulsipur Dang</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Alpha Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}