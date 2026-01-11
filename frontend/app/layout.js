import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './provider'
import { AnnouncementProvider } from '@/contexts/AnnouncementContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'PrimeAI.Trade',
  description: 'Arbitrage trading platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <AnnouncementProvider>
          <Providers>{children}</Providers>
        </AnnouncementProvider>
      </body>
    </html>
  )
}
