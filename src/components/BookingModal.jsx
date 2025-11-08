'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import ContactForm from './ContactForm'

export default function BookingModal({ isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY
      
      // Prevent scrolling
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      // Get the scroll position and restore it
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = '' 
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
      }}
      onClick={(e) => {
        // Close modal when clicking outside the form
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] mx-4 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
        >
          <X size={24} className="text-gray-600" />
        </button>
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
}
