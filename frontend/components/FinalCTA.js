'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from '@/components/animate-ui/components/buttons/flip'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Ready to start trading?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Join thousands of satisfied clients who trust PrimeAI.Trade.
          </p>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <Link href="#plans">
              <FlipButton
                variant="ghost"
                className="teal-border-buttons btn-teal-border flip-button-glow focus-visible:ring-0 focus-visible:ring-offset-0 mx-auto"
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
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00CED1] mb-3 sm:mb-4">
            PrimeAI.Trade: Technology meets expertise
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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
            <Link href="/auth/login">
              <FlipButton
                variant="ghost"
                className="teal-border-buttons btn-teal-border flip-button-glow focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <FlipButtonFront
                  variant="ghost"
                  className="flip-button-face flip-button-transparent-front focus-visible:ring-0 focus-visible:ring-offset-0 gap-2"
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                >
                  <span>Login</span>
                  <ArrowRight size={20} />
                </FlipButtonFront>
                <FlipButtonBack
                  variant="ghost"
                  className="flip-button-face flip-button-teal-back focus-visible:ring-0 focus-visible:ring-offset-0 gap-2"
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                >
                  <span>Login</span>
                  <ArrowRight size={20} />
                </FlipButtonBack>
              </FlipButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
