'use client'

import ProtectedRoute from '@/components/ProtectedRoute'
import Sidebar from '@/components/Sidebar'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { LayoutDashboard, User, LogOut } from 'lucide-react'

export default function DashboardLayout({ children }) {
  const { logout } = useAuth()

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          {/* Mobile Navigation Bar */}
          <nav className="lg:hidden bg-[#1A1A1A] border-b border-[#00CED1]/20 px-4 py-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">
                PrimeAI<span className="text-[#00CED1]">.Trade</span>
              </h2>
              <div className="flex items-center gap-2">
                <Link
                  href="/dashboard"
                  className="p-2 text-gray-300 hover:text-[#00CED1] transition-colors"
                >
                  <LayoutDashboard size={20} />
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="p-2 text-gray-300 hover:text-[#00CED1] transition-colors"
                >
                  <User size={20} />
                </Link>
                <button
                  onClick={logout}
                  className="p-2 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </nav>
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
