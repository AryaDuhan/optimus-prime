'use client'

import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnnouncement } from '@/contexts/AnnouncementContext'
import Link from 'next/link'

export default function AnnouncementBar() {
  const { isVisible, setIsVisible } = useAnnouncement()

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-[#00CED1] to-[#008B8B] text-black py-2 px-4 relative z-50"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2 text-sm font-medium flex-wrap">
            <span>Join 5,236+ active clients</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Market-neutral returns</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/register" className="text-sm font-semibold hover:underline text-black">
              Get Started
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="hover:opacity-70 transition-opacity text-black"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
