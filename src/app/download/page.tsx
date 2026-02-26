import Link from 'next/link'

export default function Download() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
        Download & Print Your Ice Whistle
      </h1>

      <div className="bg-primary-900/50 rounded-2xl p-8 border border-primary-700/50 mb-8">
        <p className="text-xl text-primary-100 leading-relaxed mb-6">
          You can make your own Ice Whistle at home with a 3D printer!
        </p>
        
        <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30">
          <h3 className="text-2xl font-bold text-white mb-4">⚠️ Important Safety Notes</h3>
          <ul className="space-y-2 text-primary-200">
            <li>• Only print or use whistles for defensive, community safety purposes</li>
            <li>• Never use whistles to harass or intimidate others</li>
            <li>• Learn the proper signals: 3 short blasts = ICE nearby, long sustained blast = detention in progress</li>
            <li>• Always prioritize your safety and the safety of others</li>
          </ul>
        </div>
      </div>

      {/* 3D Print Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-8 border border-primary-500/50 mb-8">
        <div className="flex items-center mb-6">
          <span className="text-4xl mr-4">🖨️</span>
          <h2 className="text-3xl font-bold text-white">3D Printed Whistles</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-primary-900/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Recommended Settings</h3>
            <ul className="space-y-2 text-primary-200">
              <li>• <strong>Material:</strong> PLA or PETG (durable, non-toxic)</li>
              <li>• <strong>Layer Height:</strong> 0.2mm or lower for better air seal</li>
              <li>• <strong>Infill:</strong> 100% for solid whistle</li>
              <li>• <strong>No Supports:</strong> Design should be support-free</li>
            </ul>
          </div>
          
          <div className="bg-primary-900/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Download Files</h3>
            <p className="text-primary-200 mb-4">
              Download the STL file to 3D print your own Ice Whistle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://roanoke-ice-whistle.b-cdn.net/PentagonWhistleV2.stl"
                download
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
              >
                📥 Download STL File
              </a>
            </div>
            <p className="text-primary-300 text-sm mt-4">
              Original design by <a href="https://makerworld.com/en/models/1986369-ice-out-whistle-keychain-open-license-support-free?from=search#profileId-2438628" target="_blank" rel="noopener noreferrer" className="text-primary-200 underline hover:text-white">MakerWorld Designer</a>
            </p>
          </div>
        </div>
      </div>

      {/* Purchase Option */}
      <div className="bg-primary-900/30 rounded-2xl p-8 border border-primary-700/30">
        <h3 className="text-2xl font-bold text-white mb-4">Pre-Made Whistles Available</h3>
        <p className="text-primary-100 mb-4">
          If you can't print or make your own, we have pre-made whistles available for purchase or free distribution in the Roanoke area.
        </p>
        <Link 
          href="/donate"
          className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
        >
          Request a Whistle →
        </Link>
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
