'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-primary-950/80 backdrop-blur-md border-b border-primary-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary-200 hover:text-white transition-colors">
            🧊 Ice Whistle Roanoke
          </Link>
          
          {/* Desktop Navigation - hidden on mobile, visible on md+ */}
          <div className="hidden md:flex space-x-1">
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
          
          {/* Mobile Hamburger Button - visible on mobile, hidden on md+ */}
          <button
            className="md:hidden p-2 rounded-lg text-primary-200 hover:bg-primary-800/50 hover:text-white transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="px-4 py-2 rounded-lg text-primary-200 hover:bg-primary-800/50 hover:text-white transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/donate" 
                className="px-4 py-2 rounded-lg text-primary-200 hover:bg-primary-800/50 hover:text-white transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
              <Link 
                href="/download" 
                className="px-4 py-2 rounded-lg text-primary-200 hover:bg-primary-800/50 hover:text-white transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Download & Print
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
