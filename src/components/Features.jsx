import { Award, Users, Heart, CheckCircle } from 'lucide-react'

const features = [
  { icon: Award, title: 'Expert Team', desc: 'Highly qualified professionals' },
  { icon: Users, title: 'Patient-Centered', desc: 'Your comfort is our priority' },
  { icon: Heart, title: 'Compassionate Care', desc: 'Gentle and understanding approach' },
  { icon: CheckCircle, title: 'Modern Technology', desc: 'State-of-the-art equipment' }
]

export default function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Experience the difference in dental care</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
