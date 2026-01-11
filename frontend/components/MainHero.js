'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FlipButton, FlipButtonFront, FlipButtonBack } from '@/components/animate-ui/components/buttons/flip'
import Link from 'next/link'

export default function MainHero() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white"
          >
            Advanced AI meets{' '}
            <span className="text-[#00CED1]">financial expertise</span>
          </motion.h1>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 text-xs sm:text-sm md:text-base"
          >
            <div className="flex items-center space-x-2">
              <span className="text-[#00CED1]">★</span>
              <span className="font-semibold text-white">4.9</span>
              <span className="text-gray-400">Client Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-white">5,236+</span>
              <span className="text-gray-400">Active Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-white">Market</span>
              <span className="text-gray-400">Neutral Strategy</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16"
          >
            <Link href="/auth/register">
              <FlipButton 
                variant="ghost"
                className="teal-bg-buttons font-bold text-xl flex items-center space-x-2 flip-button-glow focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <FlipButtonFront 
                  variant="ghost"
                  className="flip-button-face flip-button-teal-front focus-visible:ring-0 focus-visible:ring-offset-0 gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </FlipButtonFront>
                <FlipButtonBack 
                  variant="ghost"
                  className="flip-button-face flip-button-black-back focus-visible:ring-0 focus-visible:ring-offset-0 gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </FlipButtonBack>
              </FlipButton>
            </Link>
            <Link href="#plans">
              <FlipButton 
                variant="ghost"
                className="teal-border-buttons btn-teal-border flip-button-glow focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <FlipButtonFront 
                  variant="ghost"
                  className="flip-button-face flip-button-transparent-front focus-visible:ring-0 focus-visible:ring-offset-0 gap-2"
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                >
                  <span>View Plans</span>
                  <ArrowRight size={20} />
                </FlipButtonFront>
                <FlipButtonBack 
                  variant="ghost"
                  className="flip-button-face flip-button-teal-back focus-visible:ring-0 focus-visible:ring-offset-0 gap-2"
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                >
                  <span>View Plans</span>
                  <ArrowRight size={20} />
                </FlipButtonBack>
              </FlipButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
