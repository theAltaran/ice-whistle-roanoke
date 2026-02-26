import Link from 'next/link'

export default function Donate() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
        Support Our Mission
      </h1>

      <div className="bg-primary-900/50 rounded-2xl p-8 border border-primary-700/50 mb-8">
        <p className="text-xl text-primary-100 leading-relaxed mb-6">
          Your donation helps us continue our work distributing free ICE whistles to community members who need them most. Every contribution makes a difference in protecting our neighbors.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30 text-center">
            <span className="text-4xl mb-4 block">$10</span>
            <p className="text-primary-200">Provides materials for 5 whistles</p>
          </div>
          <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30 text-center">
            <span className="text-4xl mb-4 block">$25</span>
            <p className="text-primary-200">Provides materials for 15 whistles</p>
          </div>
          <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30 text-center">
            <span className="text-4xl mb-4 block">$50</span>
            <p className="text-primary-200">Provides materials for 30 whistles</p>
          </div>
          <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30 text-center">
            <span className="text-4xl mb-4 block">$100</span>
            <p className="text-primary-200">Provides materials for 60 whistles + educational materials</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-8 border border-primary-500/50 text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">How to Donate</h2>
        <p className="text-primary-100 mb-6">
          We accept donations through various methods. Contact us to learn how to contribute.
        </p>
        <div className="text-primary-200">
          <p className="mb-2">📧 Email: <a href="mailto:donate@icewhistleroanoke.org" className="text-primary-200 underline hover:text-white">donate@icewhistleroanoke.org</a></p>
        </div>
      </div>

      <div className="bg-primary-900/30 rounded-2xl p-8 border border-primary-700/30">
        <h3 className="text-2xl font-bold text-white mb-4">What Your Donation Supports</h3>
        <ul className="space-y-3 text-primary-200">
          <li className="flex items-start">
            <span className="text-primary-400 mr-2">✓</span>
            <span>Materials for 3D printed whistles (PLA filament, equipment maintenance)</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-400 mr-2">✓</span>
            <span>Traditional whistle purchases for communities without 3D printer access</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-400 mr-2">✓</span>
            <span>Educational materials on how to use the whistles safely and effectively</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-400 mr-2">✓</span>
            <span>Community organizing and outreach to distribute whistles</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-400 mr-2">✓</span>
            <span>Legal support and Know Your Rights training</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-primary-700 hover:bg-primary-600 text-white rounded-lg transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
