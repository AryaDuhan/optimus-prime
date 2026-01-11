'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { authAPI } from '@/lib/api'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const AuthContext = createContext()

// for auth context
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  // for checking if user is logged in
  const checkAuth = async () => {
    const token = Cookies.get('token')
    if (token) {
      try {
        const response = await authAPI.getMe()
        setUser(response.user)
      } catch (error) {
        Cookies.remove('token')
        setUser(null)
      }
    }
    setLoading(false)
  }

  // for login
  const login = async (email, password) => {
    try {
      const response = await authAPI.login({ email, password })
      Cookies.set('token', response.token, { expires: 7 })
      setUser(response.user)
      return { success: true }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      }
    }
  }

  // for registration
  const register = async (name, email, password) => {
    try {
      const response = await authAPI.register({ name, email, password })
      Cookies.set('token', response.token, { expires: 7 })
      setUser(response.user)
      return { success: true }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed',
        errors: error.response?.data?.errors
      }
    }
  }

  // for logout
  const logout = () => {
    Cookies.remove('token')
    setUser(null)
    router.push('/auth/login')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
