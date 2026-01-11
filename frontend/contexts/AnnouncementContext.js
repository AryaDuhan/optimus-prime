'use client'

import { createContext, useContext, useState } from 'react'

const AnnouncementContext = createContext(undefined)

export function AnnouncementProvider({ children }) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnnouncementContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </AnnouncementContext.Provider>
  )
}

export function useAnnouncement() {
  const context = useContext(AnnouncementContext)
  if (context === undefined) {
    throw new Error('useAnnouncement must be used within an AnnouncementProvider')
  }
  return context
}
