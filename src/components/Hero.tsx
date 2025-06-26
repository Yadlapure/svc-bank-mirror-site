
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Welcome to SVC Cooperative Bank
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Your trusted banking partner since 1993. Experience personalized banking services 
                with competitive interest rates and modern banking solutions.
              </p>
              
              {/* Key Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">50,000+</div>
                  <div className="text-blue-100">Satisfied Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">25+</div>
                  <div className="text-blue-100">Branch Locations</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">30+</div>
                  <div className="text-blue-100">Years of Service</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Open Account Online
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Login Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-2xl p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Internet Banking Login</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">User ID</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter User ID"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                  <input 
                    type="password" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter Password"
                  />
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2"/>
                  <label htmlFor="remember" className="text-sm text-gray-600">Remember User ID</label>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Login
                </button>
                
                <div className="text-center space-y-2">
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Forgot User ID?</a>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Forgot Password?</a>
                  <a href="#" className="text-green-600 text-sm hover:underline block font-medium">New User? Register Here</a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-700 mb-2">Download Mobile App</div>
                  <div className="flex justify-center space-x-2">
                    <button className="bg-gray-800 text-white px-3 py-1 rounded text-xs">Google Play</button>
                    <button className="bg-gray-800 text-white px-3 py-1 rounded text-xs">App Store</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
