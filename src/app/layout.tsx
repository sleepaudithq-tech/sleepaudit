import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'SleepAudit.io - Evidence-Based Sleep Optimization',
    template: '%s | SleepAudit.io'
  },
  description: 'Science-backed sleep strategies, product reviews, and research summaries to improve your sleep quality.',
  keywords: ['sleep optimization', 'sleep science', 'sleep tips', 'sleep research', 'sleep products'],
  authors: [{ name: 'SleepAudit.io' }],
  openGraph: {
    title: 'SleepAudit.io - Evidence-Based Sleep Optimization',
    description: 'Science-backed sleep strategies, product reviews, and research summaries to improve your sleep quality.',
    url: 'https://sleepaudit.io',
    siteName: 'SleepAudit.io',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
