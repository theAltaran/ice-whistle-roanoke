import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

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
      <body className={inter.className}>
        <nav className="bg-primary-950/80 backdrop-blur-md border-b border-primary-800 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold text-primary-200 hover:text-white transition-colors">
                🧊 Ice Whistle Roanoke
              </Link>
              <div className="flex space-x-1">
                <Link 
                  href="/" 
                  className="px-4 py-2 rounded-lg text-primary-200 hover:bg-primary-800/50 hover:text-white transition-all duration-200"
                >
                  Home
                </Link>
                <Link 
                  href="/donate" 
                  className="px-4 py-2 rounded-lg text-primary-200 hover:bg-primary-800/50 hover:text-white transition-all duration-200"
                >
                  Donate
                </Link>
                <Link 
                  href="/download" 
                  className="px-4 py-2 rounded-lg text-primary-200 hover:bg-primary-800/50 hover:text-white transition-all duration-200"
                >
                  Download & Print
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-primary-950/80 border-t border-primary-800 py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-primary-400">
            <p>© {new Date().getFullYear()} Ice Whistle Roanoke. Solidarity Forever.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
