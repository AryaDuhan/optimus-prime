'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = {
  company: [
    'About Us',
    'Trading Plans',
    'How It Works',
  ],
  support: [
    'Contact Us',
    'FAQs',
    'Support',
  ],
  legal: [
    'Privacy Policy',
    'Terms of Service',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#00CED1]/20 py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          <div>
            <h3 className="text-[#00CED1] font-bold text-base sm:text-lg mb-3 sm:mb-4">PrimeAI.Trade</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              World&apos;s best arbitrage company providing AI-powered trading strategies for consistent returns.
            </p>
          </div>

          <div>
            <h3 className="text-[#00CED1] font-bold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#00CED1] transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#00CED1] font-bold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#00CED1] transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#00CED1] font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Phone: +447 4026 26804</li>
              <li>Email: support@primeai.trade</li>
              <li>Location: Hyderabad, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00CED1]/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 sm:space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-xl sm:text-2xl font-bold text-[#00CED1] mb-1 sm:mb-2">PrimeAI.Trade</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Technology meets expertise</p>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              Copyright ©{new Date().getFullYear()} PrimeAI.Trade. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
