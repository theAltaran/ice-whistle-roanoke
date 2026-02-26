import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 bg-clip-text text-transparent">
          Ice Whistle Roanoke
        </h1>
        <p className="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
          Community solidarity against ICE raids. Turning silence into action.
        </p>
      </section>

      {/* Video Section */}
      <section className="mb-16">
        <div className="bg-primary-900/50 rounded-2xl p-8 border border-primary-700/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">See How It Works</h2>
          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/reels/DRVYvFeifho/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-md aspect-[9/16] rounded-xl overflow-hidden shadow-2xl shadow-primary-900/50 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center hover:scale-[1.02] transition-transform"
            >
              <div className="text-center p-6">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-white font-semibold text-lg">Watch Video</p>
                <p className="text-primary-200 text-sm mt-2">Click to open on Instagram</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-3 text-center">
                <p className="text-white text-sm">📹 ICE Whistle Demo</p>
              </div>
            </a>
          </div>
          <p className="text-center text-primary-300 mt-4">
            Video by <span className="text-primary-200 font-semibold">New York Immigration Coalition</span> on Instagram
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <div className="bg-primary-900/30 rounded-2xl p-8 border border-primary-700/30">
          <h2 className="text-3xl font-bold text-white mb-6">What is an ICE Whistle?</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-primary-100 text-lg leading-relaxed mb-6">
              ICE whistles are a grassroots, low-tech, and high-volume communication tool used by community members in cities like Chicago, Los Angeles, and Minneapolis to alert neighbors to the presence of U.S. Immigration and Customs Enforcement (ICE) agents. These small, often 3D-printed devices are used to signal nearby raids and document potential detainments, allowing residents to rally, protect, and document.
            </p>
            
            <h3 className="text-2xl font-semibold text-primary-200 mb-4 mt-8">Purpose and Usage</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30">
                <div className="text-4xl mb-4">🔔</div>
                <h4 className="text-xl font-semibold text-white mb-2">Alerting Presence</h4>
                <p className="text-primary-200">
                  Three short blasts signal that ICE agents are in the immediate vicinity, allowing residents to take protective measures.
                </p>
              </div>
              
              <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30">
                <div className="text-4xl mb-4">🚨</div>
                <h4 className="text-xl font-semibold text-white mb-2">Signaling Detainment</h4>
                <p className="text-primary-200">
                  A long, sustained blast (or &quot;code red&quot;) indicates that ICE is actively detaining or arresting someone, drawing witnesses to document the scene.
                </p>
              </div>
              
              <div className="bg-primary-800/40 rounded-xl p-6 border border-primary-600/30">
                <div className="text-4xl mb-4">✊</div>
                <h4 className="text-xl font-semibold text-white mb-2">Solidarity and Resistance</h4>
                <p className="text-primary-200">
                  The whistles are considered a tool of resistance, turning silence into immediate community action to prevent undocumented neighbors from being taken quietly.
                </p>
              </div>
            </div>

            {/* How to Use Your Whistle - Prominent Section */}
            <div className="mt-12 bg-gradient-to-r from-primary-700/50 to-primary-800/50 rounded-2xl p-8 border-2 border-primary-500/50">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">📢 How to Use Your Whistle</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔔🔔🔔</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">3 Short Blasts</h4>
                  <p className="text-primary-100 text-lg">
                    <strong>ICE is nearby!</strong><br/>
                    Alert your neighbors to get to safety
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📢</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Long Sustained Blast</h4>
                  <p className="text-primary-100 text-lg">
                    <strong>Code Red - Detainment in progress!</strong><br/>
                    Rally witnesses to document
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="grid md:grid-cols-2 gap-6">
        <Link 
          href="/donate"
          className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-2xl p-8 border border-primary-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-900/50"
        >
          <div className="text-center">
            <span className="text-5xl mb-4 block">💜</span>
            <h3 className="text-2xl font-bold text-white mb-2">Donate</h3>
            <p className="text-primary-100">
              Support our mission to distribute free ICE whistles to our community members who need them most.
            </p>
          </div>
        </Link>
        
        <Link 
          href="/download"
          className="group bg-gradient-to-r from-primary-700 to-primary-800 hover:from-primary-600 hover:to-primary-700 rounded-2xl p-8 border border-primary-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-900/50"
        >
          <div className="text-center">
            <span className="text-5xl mb-4 block">🖨️</span>
            <h3 className="text-2xl font-bold text-white mb-2">Download & Print</h3>
            <p className="text-primary-100">
              Download the 3D print files or printable templates to make your own ICE whistle at home.
            </p>
          </div>
        </Link>
      </section>

      {/* Emergency Info */}
      <section className="mt-16">
        <div className="bg-red-900/20 rounded-2xl p-8 border border-red-700/30">
          <h3 className="text-2xl font-bold text-red-300 mb-4">🚨 Emergency Information</h3>
          <p className="text-primary-100">
            If you witness an ICE raid or detention, stay calm, document safely from a distance, and contact local immigrant rights organizations for support.
          </p>
        </div>
      </section>
    </div>
  )
}
