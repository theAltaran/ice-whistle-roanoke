import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ice Whistle Roanoke',
  description: 'Community solidarity against ICE raids - Ice Whistle Roanoke',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script defer data-domain="ice-whistle-roanoke.vercel.app" src="https://plausible.altaran.us/js/script.js" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
