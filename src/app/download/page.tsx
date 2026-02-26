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
              <a 
                href="https://makerworld.com/en/models/1986369-ice-out-whistle-keychain-open-license-support-free"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 hover:bg-primary-600 text-white rounded-lg transition-colors"
              >
                🔗 Original STL Location
              </a>
            </div>
            <p className="text-primary-300 text-sm mt-4">
              Original design by <a href="https://makerworld.com/en/@3LittleBirds3D" target="_blank" rel="noopener noreferrer" className="text-primary-200 underline hover:text-white">ThreeLittleBirds 3D</a> on MakerWorld
            </p>
          </div>
        </div>
      </div>

      {/* Request Whistles Form */}
      <div className="bg-primary-900/30 rounded-2xl p-8 border border-primary-700/30">
        <h3 className="text-2xl font-bold text-white mb-4">Request Free Whistles</h3>
        <p className="text-primary-100 mb-6">
          If you cannot print your own, request free pre-made whistles. I will get back to you regarding availability and to arrange pickup or delivery.
        </p>
        
        <form id="whistleRequestForm" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-primary-200 mb-1">Your Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              className="w-full px-4 py-2 bg-primary-800 border border-primary-600 rounded-lg text-white focus:outline-none focus:border-primary-400"
            />
          </div>
          
          <div>
            <label htmlFor="quantity" className="block text-primary-200 mb-1">How many whistles do you need? *</label>
            <input 
              type="number" 
              id="quantity" 
              name="quantity" 
              min="1" 
              required
              className="w-full px-4 py-2 bg-primary-800 border border-primary-600 rounded-lg text-white focus:outline-none focus:border-primary-400"
            />
          </div>
          
          <div>
            <label htmlFor="deliveryMethod" className="block text-primary-200 mb-1">Pickup or Delivery? *</label>
            <select 
              id="deliveryMethod" 
              name="deliveryMethod" 
              required
              className="w-full px-4 py-2 bg-primary-800 border border-primary-600 rounded-lg text-white focus:outline-none focus:border-primary-400"
            >
              <option value="">Select an option</option>
              <option value="Pickup">Pickup</option>
              <option value="Delivery">Delivery</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="color" className="block text-primary-200 mb-1">Preferred Color (optional)</label>
            <input 
              type="text" 
              id="color" 
              name="color" 
              placeholder="e.g., Blue, Purple, White"
              className="w-full px-4 py-2 bg-primary-800 border border-primary-600 rounded-lg text-white focus:outline-none focus:border-primary-400"
            />
            <p className="text-primary-400 text-sm mt-1">Note: Color choices are only available if I have that filament in stock at the time.</p>
          </div>
          
          <div>
            <label htmlFor="notes" className="block text-primary-200 mb-1">Additional Notes (optional)</label>
            <textarea 
              id="notes" 
              name="notes" 
              rows={3}
              className="w-full px-4 py-2 bg-primary-800 border border-primary-600 rounded-lg text-white focus:outline-none focus:border-primary-400"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors font-semibold"
          >
            Submit Request
          </button>
        </form>
        
        <p id="formStatus" className="mt-4 text-center text-primary-200 hidden"></p>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        document.getElementById('whistleRequestForm').addEventListener('submit', async (e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);
          const data = {
            name: formData.get('name'),
            quantity: formData.get('quantity'),
            deliveryMethod: formData.get('deliveryMethod'),
            color: formData.get('color'),
            notes: formData.get('notes')
          };
          const statusEl = document.getElementById('formStatus');
          const submitBtn = form.querySelector('button[type="submit"]');
          
          submitBtn.disabled = true;
          submitBtn.textContent = 'Submitting...';
          statusEl.classList.add('hidden');
          
          try {
            const response = await fetch('/api/request-whistle', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok) {
              statusEl.textContent = 'Request submitted successfully! I will get back to you soon.';
              statusEl.className = 'mt-4 text-center text-green-400';
              form.reset();
            } else {
              throw new Error(result.error || 'Failed to submit');
            }
          } catch (error) {
            statusEl.textContent = 'Failed to submit request. Please try again or email directly.';
            statusEl.className = 'mt-4 text-center text-red-400';
          } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Request';
          }
        });
      `}} />

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
