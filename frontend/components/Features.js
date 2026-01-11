'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap, Shield } from 'lucide-react'

const features = [
  {
    title: 'Powerful Mobile and Online App',
    description: 'Access your portfolio and trading dashboard from anywhere with our advanced mobile and web applications. Monitor your investments in real-time with seamless synchronization across all devices.',
    icon: TrendingUp,
    gradient: 'from-[#00CED1] to-[#008B8B]',
  },
  {
    title: 'Brings More Transparency and Speed',
    description: 'Experience complete transparency with real-time reporting and instant updates. Our low-latency arbitrage system executes trades at remarkable speeds, ensuring you never miss an opportunity.',
    icon: Zap,
    gradient: 'from-[#00CED1] to-[#40E0D0]',
  },
  {
    title: 'Special for Multiple Use Capabilities',
    description: 'From individual investors to institutional clients, our platform scales to meet your needs. Multiple investment plans and strategies tailored for different risk profiles and financial objectives.',
    icon: Shield,
    gradient: 'from-[#40E0D0] to-[#00CED1]',
  },
]

export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            PrimeAI.Trade leverages cutting-edge technology and algorithms to deliver consistent, 
            market-neutral returns through sophisticated arbitrage strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#000000] rounded-xl p-6 sm:p-8 border border-[#00CED1]/20 hover:border-[#00CED1] transition-colors duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
