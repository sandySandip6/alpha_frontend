import { Star } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
      <div className="flex items-center gap-2 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
        ))}
      </div>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
      <div className="border-t pt-4">
        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
        <div className="text-blue-600">{testimonial.service}</div>
      </div>
    </div>
  )
}