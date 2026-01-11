'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Clock } from 'lucide-react'
import { FlipButton, FlipButtonFront, FlipButtonBack } from '@/components/animate-ui/components/buttons/flip'
import Link from 'next/link'

export default function Support() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#00CED1]/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-[#00CED1]/20 flex items-center justify-center">
                  <MessageCircle size={32} className="text-[#00CED1]" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Clock size={20} className="text-[#00CED1]" />
                    <span className="text-sm text-gray-400">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#00CED1] mt-2"></div>
                  <p className="text-gray-300">Expert trading assistance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#00CED1] mt-2"></div>
                  <p className="text-gray-300">Portfolio management guidance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#00CED1] mt-2"></div>
                  <p className="text-gray-300">Quick response time</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              We&apos;ve got your back
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-[#00CED1]">
              Around-the-clock customer support
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Whether you&apos;re choosing your first investment plan or need help with portfolio 
              management, our support team is here to help 24/7. We&apos;re committed to ensuring 
              you achieve your financial goals.
            </p>
            <div className="space-y-4">
              <Link href="#contact" className="text-[#00CED1] font-semibold hover:text-[#40E0D0] transition-colors duration-200 inline-flex items-center">
                Need help? <span className="ml-2">→</span>
              </Link>
              <div>
                <Link href="#contact">
                  <FlipButton 
                    variant="ghost"
                    className="teal-border-buttons btn-teal-border flip-button-glow focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    <FlipButtonFront 
                      variant="ghost"
                      className="flip-button-face flip-button-transparent-front focus-visible:ring-0 focus-visible:ring-offset-0"
                      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                    >
                      Contact Support
                    </FlipButtonFront>
                    <FlipButtonBack 
                      variant="ghost"
                      className="flip-button-face flip-button-teal-back focus-visible:ring-0 focus-visible:ring-offset-0"
                      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                    >
                      Contact Support
                    </FlipButtonBack>
                  </FlipButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
