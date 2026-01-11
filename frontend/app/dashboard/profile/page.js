'use client'

import { useState, useEffect } from 'react'
import { userAPI } from '@/lib/api'
import ProfileCard from '@/components/ProfileCard'

export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProfile()
  }, [])

  // for loading user profile
  const loadProfile = async () => {
    try {
      setLoading(true)
      const response = await userAPI.getProfile()
      setUser(response.user)
    } catch (error) {
      console.error('Error loading profile:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00CED1]"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400">Manage your account settings and preferences</p>
      </div>

      <div className="max-w-2xl">
        <ProfileCard user={user} />
      </div>
    </div>
  )
}
