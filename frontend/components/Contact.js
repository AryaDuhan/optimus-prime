'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#1A1A1A] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Contact With Us</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            For Further Enquiries, speaking with Agents and Customer service, feel free to drop a message with us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#000000] rounded-xl p-8 border border-[#00CED1]/20"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#00CED1] mb-2">
                Phone
              </label>
              <p className="text-white font-semibold">+447 4026 26804</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#00CED1] mb-2">
                Email
              </label>
              <p className="text-white font-semibold">support@primeai.trade</p>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#00CED1] mb-2">
              Location
            </label>
            <p className="text-white font-semibold">Hyderabad, India</p>
          </div>

          <div className="border-t border-[#00CED1]/20 pt-6">
            <h3 className="text-xl font-bold text-white mb-4">About PrimeAI.Trade</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              PrimeAI Trade stands at the forefront of innovative asset management. By harnessing the power 
              of advanced computational techniques and maintaining a disciplined risk framework, the firm is 
              dedicated to delivering superior performance for its investors.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether for individual portfolios or institutional assets, PrimeAI Trade is a trusted partner 
              in navigating the complexities of today&apos;s financial markets. Investors seeking consistent, 
              market-neutral returns can rely on PrimeAI Trade&apos;s expertise and commitment to excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
