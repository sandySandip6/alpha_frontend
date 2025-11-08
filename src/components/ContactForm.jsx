'use client'
import { useState } from 'react'
import { Calendar } from 'lucide-react'
import api from '@/utils/api'



const services = [
  { value: 'general', label: 'General Dentistry' },
  { value: 'cosmetic', label: 'Cosmetic Dentistry' },
  { value: 'orthodontics', label: 'Orthodontics' },
  { value: 'implants', label: 'Dental Implants' },
  { value: 'pediatric', label: 'Pediatric Dentistry' },
  { value: 'emergency', label: 'Emergency Care' }
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    appointment_date: '',
    appointment_time: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await api.post('', formData)
      const data = response.data

      if (data.success) {
        setSuccess(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          appointment_date: '',
          appointment_time: '',
          message: ''
        })
        
        // Show success message for 5 seconds
        setTimeout(() => setSuccess(false), 5000)
      } else {
        // Handle validation errors
        if (data.errors) {
          const errorMessages = Object.values(data.errors).flat().join(', ')
          setError(errorMessages)
        } else {
          setError(data.message || 'Failed to book appointment. Please try again.')
        }
      }
    } catch (err) {
      console.error('Error booking appointment:', err)
      if (err.response && err.response.data) {
        // Handle backend validation errors
        const errorData = err.response.data
        if (errorData.errors) {
          const errorMessages = Object.values(errorData.errors).flat().join(', ')
          setError(errorMessages)
        } else {
          setError(errorData.message || 'Failed to book appointment. Please try again.')
        }
      } else {
        setError('Unable to connect to the server. Please check your connection and try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Book an Appointment</h2>
      
      {/* Success Message */}
      {success && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p className="font-semibold">✓ Success!</p>
          <p>Your appointment has been booked successfully. We will contact you shortly to confirm.</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="font-semibold">✗ Error</p>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            placeholder="enter your fullname"
            disabled={loading}
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            placeholder="enter your email"
            disabled={loading}

          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            placeholder="enter your phone number"
            disabled={loading}
          />
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Service <span className="text-red-500">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            disabled={loading}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Preferred Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="appointment_date"
              value={formData.appointment_date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Preferred Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              name="appointment_time"
              value={formData.appointment_time}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              disabled={loading}
            />
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Additional Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
            placeholder="Tell us about your dental concerns or any specific requirements..."
            disabled={loading}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2 ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Booking...
            </>
          ) : (
            <>
              <Calendar size={24} />
              Book Appointment
            </>
          )}
        </button>
      </form>

      {/* Info Text */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>By booking an appointment, you agree to our terms and conditions.</p>
        <p className="mt-2">We will contact you within 24 hours to confirm your appointment.</p>
      </div>
    </div>
  )
}
