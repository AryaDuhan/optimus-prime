'use client'

import { motion } from 'framer-motion'
import { DollarSign, BarChart, Globe, Bitcoin, TrendingUp, Briefcase, Target, Users, Award, Zap } from 'lucide-react'

const instruments = [
  {
    title: 'Derivative Markets',
    description: 'When we buy low and sell high, Arbitrage opportunities arise between different derivative markets.',
    icon: DollarSign,
  },
  {
    title: 'Commodities',
    description: 'Our transactions entailing the risk free exploration of differences between identical assets price or rate.',
    icon: BarChart,
  },
  {
    title: 'Forex Market',
    description: 'Our forex arbitrage deploys triangular arbitrage, which takes advantage of exchange rate discrepancies.',
    icon: Globe,
  },
  {
    title: 'Crypto Currencies',
    description: 'Our cryptocurrency arbitrage bot tracks the best opportunities on the market to exploit price differentials amongst exchanges.',
    icon: Bitcoin,
  },
  {
    title: 'Bond CDS',
    description: 'The return differential between LOW and HIGH quintile basis portfolios, is an empirical proxy that captures the new risks.',
    icon: TrendingUp,
  },
  {
    title: 'Stock Market',
    description: 'We specifically focus on buying stocks in one market and selling them simultaneously in another for a profit.',
    icon: Briefcase,
  },
]

const stats = [
  { number: '5,236+', label: 'Active Clients', icon: Users },
  { number: 'Market', label: 'Neutral Strategy', icon: Target },
  { number: 'AI', label: 'Powered Trading', icon: Zap },
  { number: '24/7', label: 'Support', icon: Award },
]

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            DEDICATED TRADING STRATEGY TO GROWING YOUR INVESTMENT WITH PRIMEAI.Trade
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In the rapidly evolving landscape of finance, investors seek innovative methods to manage their assets, 
            striving for consistent returns while minimizing risk. PrimeAI.Trade emerges as a leader in this domain, 
            leveraging advanced computational techniques and low-latency arbitrage strategies to deliver exceptional 
            asset management services.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-xl p-4 sm:p-6 border border-[#00CED1]/20 text-center hover:border-[#00CED1] transition-colors duration-300"
              >
                <Icon className="text-[#00CED1] w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#00CED1] mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trading Instruments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
            Our Trading Instruments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {instruments.map((instrument, index) => {
              const Icon = instrument.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1A1A1A] rounded-xl p-6 sm:p-8 border border-[#00CED1]/20 hover:border-[#00CED1] transition-colors duration-300"
                >
                  <Icon className="text-[#00CED1] w-12 h-12 mb-4" />
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{instrument.title}</h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{instrument.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Trusted Expert Advice Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-[#00CED1] to-[#008B8B] rounded-xl p-6 sm:p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black">
            Trusted Expert Advice
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-black/90 max-w-3xl mx-auto leading-relaxed">
            PrimeAI.Trade prides itself on transparency and alignment with clients&apos; investment goals. 
            Regular performance reporting and open communication channels ensure clients remain informed 
            about their investments and market conditions. The firm believes in building lasting relationships 
            based on trust and performance.
          </p>
        </motion.div>

        {/* Company Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                PrimeAI Trade stands at the forefront of innovative asset management. By harnessing the power 
                of advanced computational techniques and maintaining a disciplined risk framework, the firm 
                is dedicated to delivering superior performance for its investors.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Whether for individual portfolios or institutional assets, PrimeAI Trade is a trusted partner 
                in navigating the complexities of today&apos;s financial markets. Investors seeking consistent, 
                market-neutral returns can rely on PrimeAI Trade&apos;s expertise and commitment to excellence.
              </p>
            </div>
            <div className="bg-[#1A1A1A] rounded-xl p-6 sm:p-8 border border-[#00CED1]/20">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">Why Choose PrimeAI.Trade?</h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Market-neutral arbitrage strategies',
                  'AI-powered trading algorithms',
                  'Low-latency execution',
                  'Transparent reporting',
                  '24/7 customer support',
                  'Proven track record'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#00CED1] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
