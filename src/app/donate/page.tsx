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
            <p className="text-primary-200">Provides filament for ~175 whistles</p>
          </div>
          <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30 text-center">
            <span className="text-4xl mb-4 block">$25</span>
            <p className="text-primary-200">Provides filament for ~450 whistles</p>
          </div>
          <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30 text-center">
            <span className="text-4xl mb-4 block">$50</span>
            <p className="text-primary-200">Provides filament for ~900 whistles</p>
          </div>
          <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30 text-center">
            <span className="text-4xl mb-4 block">$100</span>
            <p className="text-primary-200">Provides filament for ~1,800 whistles</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-8 border border-primary-500/50 text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">How to Donate</h2>
        <p className="text-primary-100 mb-6">
          Your support helps protect immigrant families in Roanoke. Together, we turn silence into action. Solidarity forever.
        </p>
        <a 
          href="https://www.paypal.com/donate/?hosted_button_id=JZR99LRVENVBY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white rounded-lg transition-colors text-lg font-semibold"
        >
          Donate with PayPal
        </a>
        <div className="mt-6 text-primary-200">
          <p className="mb-2">Or contact us directly:</p>
          <p>Email: <a href="mailto:icewhistleroanoke@gmail.com" className="text-primary-200 underline hover:text-white">icewhistleroanoke@gmail.com</a></p>
        </div>
      </div>

      <div className="bg-primary-900/30 rounded-2xl p-8 border border-primary-700/30">
        <h3 className="text-2xl font-bold text-white mb-4">What Your Donation Supports</h3>
        <ul className="space-y-3 text-primary-200">
          <li className="flex items-start">
            <span className="text-primary-400 mr-2">✓</span>
            <span>PLA filament for 3D printed whistles (1kg spool prints approx 175-180 whistles)</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-400 mr-2">✓</span>
            <span>Electrical costs to run printers</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-400 mr-2">✓</span>
            <span>Equipment maintenance and supplies</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-400 mr-2">✓</span>
            <span>Second 3D printer ($300 needed) to increase production from 50 to 100+ whistles per day</span>
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
