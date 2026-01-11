'use client'

import { motion } from 'framer-motion'
import TypingText from '@/components/text/typing-text'
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from '@/components/animate-ui/components/buttons/flip'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BrandSection() {
  return (
    <div className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-4 sm:pb-6 md:pb-8 lg:pb-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center justify-center w-full">
          {/* Brand Name with Typing Animation */}
          <div className="relative w-full flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 pt-[4px] sm:pt-[12px] md:pt-[20px] lg:pt-[12px] mb-[72px] sm:mb-[76px] md:mb-[84px] lg:mb-[92px]">
            <div className="flex items-center justify-center flex-wrap sm:flex-nowrap sm:whitespace-nowrap">
              <h1 className="text-foreground font-bold leading-none tracking-tight text-[3rem] xs:text-[3.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] text-black">
                <TypingText
                  text={['PrimeAI.Trade']}
                  typingSpeed={180}
                  pauseDuration={2500}
                  deletingSpeed={60}
                  showCursor={true}
                  cursorCharacter="|"
                  textColors={['#000000']}
                  variableSpeed={{ min: 120, max: 240 }}
                  loop={false}
                  className="text-black"
                />
              </h1>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/auth/register">
              <FlipButton 
                variant="ghost"
                className="teal-bg-buttons px-8 py-4 text-base sm:px-12 sm:py-6 sm:text-lg md:px-16 md:py-8 md:text-xl lg:px-20 lg:py-9 lg:text-2xl font-bold shadow-lg flip-button-glow focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <FlipButtonFront 
                  variant="ghost"
                  className="flip-button-face flip-button-teal-front focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  Start Trading
                </FlipButtonFront>
                <FlipButtonBack 
                  variant="ghost"
                  className="flip-button-face flip-button-black-back focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  Start Trading
                </FlipButtonBack>
              </FlipButton>
            </Link>
          </motion.div>

          {/* Company Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full flex justify-center mt-8 sm:mt-12"
          >
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl px-4">
              PrimeAI.Trade manages assets for individuals and institutional investors 
              using computationally intensive, low-latency arbitrage strategies. We maintain 
              a market-neutral portfolio and generate returns by exploiting market volatility, 
              market inefficiencies and price dislocations.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
