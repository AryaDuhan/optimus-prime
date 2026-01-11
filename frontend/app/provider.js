'use client'

import { AuthProvider } from '@/context/AuthContext'

// for auth provider
export function Providers({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}
