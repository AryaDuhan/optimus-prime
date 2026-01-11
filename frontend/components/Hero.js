'use client'

import { motion } from 'framer-motion'
import BrandSection from './BrandSection'
import { SplittingText } from '@/components/text/splitting-text'
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from '@/components/animate-ui/components/buttons/flip'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-x-hidden pt-20 sm:pt-24 md:pt-28">
      <div
        className="flex-1 flex items-end px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6"
        style={{
          overflow: 'visible',
          clipPath: 'none',
        }}
      >
        <div
          className="max-w-7xl mx-auto w-full"
          style={{
            overflow: 'visible',
            clipPath: 'none',
          }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-end mb-4 sm:mb-6"
            style={{
              overflow: 'visible',
              clipPath: 'none',
            }}
          >
            {/* Left Side - Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                <SplittingText
                  text="Join The World's Best"
                  type="words"
                  inView={true}
                  motionVariants={{
                    initial: { opacity: 0, x: 100 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.3 },
                    stagger: 0.05,
                  }}
                />
                <span className="block mt-2 text-[#00CED1]">
                  <SplittingText
                    text="Arbitrage Company."
                    type="words"
                    inView={true}
                    motionVariants={{
                      initial: { opacity: 0, x: 100 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.3, delay: 0.2 },
                      stagger: 0.05,
                    }}
                  />
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                <SplittingText
                  text="We provide best profiting arbitraging portfolio services for clients achieving our client's trust and satisfaction."
                  type="words"
                  inView={true}
                  motionVariants={{
                    initial: { opacity: 0, x: 100 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.3, delay: 0.4 },
                    stagger: 0.03,
                  }}
                />
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link href="/auth/register">
                  <FlipButton
                    variant="ghost"
                    className="teal-bg-buttons font-bold text-xl flip-button-glow focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    <FlipButtonFront
                      variant="ghost"
                      className="flip-button-face flip-button-teal-front focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      Get Started
                    </FlipButtonFront>
                    <FlipButtonBack
                      variant="ghost"
                      className="flip-button-face flip-button-black-back focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      Get Started
                    </FlipButtonBack>
                  </FlipButton>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center pt-4 px-8 pb-8 sm:pt-6 sm:px-12 sm:pb-12 md:pt-8 md:px-16 md:pb-16"
              style={{
                overflow: 'visible',
                clipPath: 'none',
              }}
            >
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#00CED1]/20 text-center">
                  <div className="text-3xl font-bold text-[#00CED1] mb-2">5,236+</div>
                  <div className="text-sm text-gray-400">Active Clients</div>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#00CED1]/20 text-center">
                  <div className="text-3xl font-bold text-[#00CED1] mb-2">Market</div>
                  <div className="text-sm text-gray-400">Neutral</div>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#00CED1]/20 text-center">
                  <div className="text-3xl font-bold text-[#00CED1] mb-2">AI</div>
                  <div className="text-sm text-gray-400">Powered</div>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#00CED1]/20 text-center">
                  <div className="text-3xl font-bold text-[#00CED1] mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Brand Section with White Background */}
      <div className="w-full px-5">
        <div className="bg-white rounded-t-[3rem] sm:rounded-t-[4rem] rounded-b-[3rem] sm:rounded-b-[4rem]">
          <BrandSection />
        </div>
      </div>
    </section>
  )
}
