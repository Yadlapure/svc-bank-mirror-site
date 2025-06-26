
import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-6">
              Banking Made
              <span className="text-blue-600 block">Simple & Secure</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Experience modern banking with SVC Cooperative Bank. We provide comprehensive financial solutions 
              with personalized service and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Open Account <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Shield className="text-blue-600 mb-2" size={32} />
                <span className="text-sm font-medium text-gray-700">Secure Banking</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="text-blue-600 mb-2" size={32} />
                <span className="text-sm font-medium text-gray-700">50K+ Customers</span>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="text-blue-600 mb-2" size={32} />
                <span className="text-sm font-medium text-gray-700">Growth Focused</span>
              </div>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="bg-white rounded-2xl shadow-2xl p-8 inline-block">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Quick Access</h3>
                <p className="text-gray-600">Login to your account</p>
              </div>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="User ID" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Login
                </button>
                <div className="text-center">
                  <a href="#" className="text-blue-600 text-sm hover:underline">Forgot Password?</a>
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
