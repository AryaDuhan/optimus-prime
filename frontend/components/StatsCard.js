'use client'

export default function StatsCard({ title, value, icon: Icon, color = 'teal' }) {
  // for color classes
  const colorClasses = {
    teal: 'bg-[#00CED1]/20 text-[#00CED1] border-[#00CED1]/30',
    green: 'bg-green-500/20 text-green-400 border-green-500/30',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    red: 'bg-red-500/20 text-red-400 border-red-500/30'
  }

  return (
    <div className="bg-[#1A1A1A] border border-[#00CED1]/20 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-2">{value}</p>
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg border ${colorClasses[color]}`}>
            <Icon size={24} />
          </div>
        )}
      </div>
    </div>
  )
}
