'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function TradingPlans() {
  const plans = [
    {
      name: 'Mutual Assets Plan',
      range: '$300 - $199,999',
      dailyProfit: '1.2%',
      duration: '30 Days',
      description: 'Perfect for beginners looking to start their investment journey',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Leveraged ETFs Plan',
      range: '$200,000 - $999,999',
      dailyProfit: '1.6%',
      duration: '28 Days',
      description: 'Designed for experienced investors seeking higher returns',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'ETFs Plan',
      range: '$1,000,000+',
      dailyProfit: '1.9%',
      duration: '28 Days',
      description: 'Tailored for hedge funds and banks with premium support',
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'Retirement Plan',
      range: '$401,000',
      annualProfit: '70%',
      duration: '1 Year',
      description: 'Long-term investment solution with scheduled pension-like returns',
      gradient: 'from-orange-500 to-orange-600',
      isRetirement: true
    }
  ]

  return (
    <section id="plans" className="py-20 bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Trading Packages</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the limitless opportunities of trading arbitrage with our flexible platform, 
            tailored for all levels of experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                
                <Link
                  href="/auth/register"
                  className="block w-full btn-teal-bg text-center font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
