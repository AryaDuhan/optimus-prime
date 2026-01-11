'use client'

import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-black/95 backdrop-blur-md shadow-lg border-b border-[#00CED1]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/dashboard" className="text-xl font-bold text-white">
            PrimeAI<span className="text-[#00CED1]">.Trade</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Welcome, {user?.name}</span>
            <button
              onClick={logout}
              className="btn-teal-border text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
