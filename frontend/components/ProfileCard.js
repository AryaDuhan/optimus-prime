'use client'

import { useState } from 'react'
import { userAPI } from '@/lib/api'

export default function ProfileCard({ user: initialUser }) {
  const [user, setUser] = useState(initialUser)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    try {
      const response = await userAPI.updateProfile(formData)
      setUser(response.user)
      setIsEditing(false)
    } catch (error) {
      setErrors({ submit: error.response?.data?.message || 'Update failed' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || ''
    })
    setErrors({})
    setIsEditing(false)
  }

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#00CED1]/20">
      <h2 className="text-xl font-bold text-white mb-4">Profile</h2>
      {!isEditing ? (
        <div className="space-y-3">
          <div>
            <p className="text-sm text-[#00CED1]">Name</p>
            <p className="text-white font-medium">{user?.name}</p>
          </div>
          <div>
            <p className="text-sm text-[#00CED1]">Email</p>
            <p className="text-white font-medium">{user?.email}</p>
          </div>
          <div>
            <p className="text-sm text-[#00CED1]">Member since</p>
            <p className="text-white font-medium">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
            </p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="btn-teal-bg w-full mt-4"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.submit && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded text-sm">
              {errors.submit}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-[#00CED1] mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-[#000000] border border-[#00CED1]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#00CED1] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-[#000000] border border-[#00CED1]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 btn-teal-bg disabled:opacity-50"
            >
              {isLoading ? 'Saving...' : 'Save'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 btn-teal-border"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
