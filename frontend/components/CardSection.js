'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FlipButton, FlipButtonFront, FlipButtonBack } from '@/components/animate-ui/components/buttons/flip'

export default function CardSection() {
  const plans = [
    {
      name: 'Mutual Assets Plan',
      range: '$300 - $199,999',
      dailyProfit: '1.2%',
      duration: '30 Days',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Leveraged ETFs Plan',
      range: '$200,000 - $999,999',
      dailyProfit: '1.6%',
      duration: '28 Days',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'ETFs Plan',
      range: '$1,000,000+',
      dailyProfit: '1.9%',
      duration: '28 Days',
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'Retirement Plan',
      range: '$401,000',
      annualProfit: '70%',
      duration: '1 Year',
      gradient: 'from-orange-500 to-orange-600',
      isRetirement: true
    }
  ]

  return (
    <section id="plans" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Trading Packages
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-[#00CED1]">
            Choose your investment strategy
          </h3>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the limitless opportunities of trading arbitrage with our flexible platform, 
            tailored for all levels of experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1A1A1A] rounded-xl border border-[#00CED1]/20 hover:border-[#00CED1] transition-colors duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${plan.gradient} text-white p-6`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold mb-1">{plan.range}</div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">
                    {plan.isRetirement ? 'Annual Profit' : 'Daily Profit'}
                  </div>
                  <div className="text-3xl font-bold text-[#00CED1]">
                    {plan.isRetirement ? plan.annualProfit : plan.dailyProfit}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">Plan Duration</div>
                  <div className="text-lg font-semibold text-white">{plan.duration}</div>
                </div>
                
                <Link href="/auth/register" className="block mt-6">
                  <FlipButton 
                    variant="ghost"
                    className="w-full teal-bg-buttons font-bold text-lg flip-button-glow focus-visible:ring-0 focus-visible:ring-offset-0"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
