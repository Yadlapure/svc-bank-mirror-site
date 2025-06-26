
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveTab(sectionId);
  };

  return (
    <>
      {/* Fixed container for both notification and header */}
      <div className="fixed top-0 w-full z-50 bg-white shadow-md">
        {/* Top notification bar */}
        <div className="bg-blue-800 text-white py-2 px-4 text-center text-sm overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="animate-marquee whitespace-nowrap">
              Dear Demat Account holders, Please update your CKYC No., duly filled-in KRA Form (available at the Branch), Mobile No. & Email ID at your nearest SVC Bank Branch.
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              {/* Logo and Bank Name */}
              <div className="flex items-center flex-shrink-0">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-sm">SVC</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-blue-800">SVC COOPERATIVE BANK LTD</h1>
                  <p className="text-xs text-gray-600">Established 1993 | RBI License No. 12345</p>
                </div>
                <div className="sm:hidden">
                  <h1 className="text-sm font-bold text-blue-800">SVC BANK</h1>
                </div>
              </div>

              {/* Contact Info - Desktop Only */}
              <div className="hidden lg:flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-blue-800">Customer Care</div>
                  <div className="text-gray-600">1800-123-4567</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-blue-800">Email</div>
                  <div className="text-gray-600">info@svcbank.co.in</div>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded text-gray-700 hover:bg-gray-100"
              >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>

            {/* Navigation Bar */}
            <div className="border-t border-gray-100">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center justify-between py-2">
                <div className="flex items-center space-x-8">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className={`font-medium px-3 py-2 border-b-2 transition-colors text-sm ${
                      activeTab === 'home' 
                        ? 'text-blue-600 border-blue-600' 
                        : 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600'
                    }`}
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className={`font-medium px-3 py-2 border-b-2 transition-colors text-sm ${
                      activeTab === 'about' 
                        ? 'text-blue-600 border-blue-600' 
                        : 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600'
                    }`}
                  >
                    About Us
                  </button>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className={`font-medium px-3 py-2 border-b-2 transition-colors text-sm ${
                      activeTab === 'products' 
                        ? 'text-blue-600 border-blue-600' 
                        : 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600'
                    }`}
                  >
                    Products & Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('rates')}
                    className={`font-medium px-3 py-2 border-b-2 transition-colors text-sm ${
                      activeTab === 'rates' 
                        ? 'text-blue-600 border-blue-600' 
                        : 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600'
                    }`}
                  >
                    Interest Rates
                  </button>
                  <button 
                    onClick={() => scrollToSection('directors')}
                    className={`font-medium px-3 py-2 border-b-2 transition-colors text-sm ${
                      activeTab === 'directors' 
                        ? 'text-blue-600 border-blue-600' 
                        : 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600'
                    }`}
                  >
                    Directors
                  </button>
                  <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 hover:border-b-2 hover:border-blue-600 transition-colors text-sm">
                    Branch Locator
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`font-medium px-3 py-2 border-b-2 transition-colors text-sm ${
                      activeTab === 'contact' 
                        ? 'text-blue-600 border-blue-600' 
                        : 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600'
                    }`}
                  >
                    Contact Us
                  </button>
                </div>

                {/* Login Buttons - Desktop */}
                <div className="flex items-center space-x-3">
                  <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors">
                    Internet Banking
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                    Mobile Banking
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                    Login
                  </button>
                </div>
              </nav>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="lg:hidden pb-4 border-t border-gray-200 bg-white">
                  <div className="flex flex-col space-y-1 pt-2">
                    <button 
                      onClick={() => scrollToSection('home')}
                      className={`font-medium py-3 px-4 text-left text-sm ${
                        activeTab === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className={`font-medium py-3 px-4 text-left text-sm ${
                        activeTab === 'about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      About Us
                    </button>
                    <button 
                      onClick={() => scrollToSection('products')}
                      className={`font-medium py-3 px-4 text-left text-sm ${
                        activeTab === 'products' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Products & Services
                    </button>
                    <button 
                      onClick={() => scrollToSection('rates')}
                      className={`font-medium py-3 px-4 text-left text-sm ${
                        activeTab === 'rates' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Interest Rates
                    </button>
                    <button 
                      onClick={() => scrollToSection('directors')}
                      className={`font-medium py-3 px-4 text-left text-sm ${
                        activeTab === 'directors' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Directors
                    </button>
                    <button className="text-gray-700 py-3 px-4 hover:bg-gray-50 text-left text-sm">
                      Branch Locator
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className={`font-medium py-3 px-4 text-left text-sm ${
                        activeTab === 'contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Contact Us
                    </button>
                    
                    {/* Mobile Contact Info */}
                    <div className="px-4 py-2 bg-gray-50 text-xs">
                      <div className="mb-1">
                        <span className="font-semibold text-blue-800">Customer Care:</span>
                        <span className="text-gray-600 ml-1">1800-123-4567</span>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-800">Email:</span>
                        <span className="text-gray-600 ml-1">info@svcbank.co.in</span>
                      </div>
                    </div>

                    {/* Mobile Login Buttons */}
                    <div className="px-4 py-2 space-y-2">
                      <button className="w-full bg-green-600 text-white py-2 px-4 rounded text-sm hover:bg-green-700 transition-colors">
                        Internet Banking
                      </button>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm hover:bg-blue-700 transition-colors">
                        Mobile Banking
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded text-sm hover:bg-gray-50 transition-colors">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translate3d(100%, 0, 0); }
            100% { transform: translate3d(-100%, 0, 0); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `
      }} />
    </>
  );
};

export default Header;
