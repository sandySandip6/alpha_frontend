
export default function TeamMemberCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-12 text-center">
        <div className="text-8xl mb-4">{member.image}</div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
        <p className="text-gray-600 mb-3">{member.specialty}</p>
        <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-sm font-semibold text-blue-700">
          {member.experience}
        </div>
      </div>
    </div>
  )
}