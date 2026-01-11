'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, User, LogOut } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  // for menu items
  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard'
    },
    {
      title: 'Profile',
      icon: User,
      path: '/dashboard/profile'
    }
  ]

  // for checking if menu item is active
  const isActive = (path) => {
    return pathname === path
  }

  return (
    <aside className="w-64 bg-[#1A1A1A] border-r border-[#00CED1]/20 min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white">
          PrimeAI<span className="text-[#00CED1]">.Trade</span>
        </h2>
      </div>

      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path)
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                active
                  ? 'bg-[#00CED1]/20 text-[#00CED1] border border-[#00CED1]/30'
                  : 'text-gray-300 hover:bg-[#00CED1]/10 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.title}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-8">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-500/10 hover:text-red-400 w-full transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
