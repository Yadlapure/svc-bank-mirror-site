
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-blue-800 text-white py-2 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="animate-marquee whitespace-nowrap">
            Dear Demat Account holders, Please update your CKYC No., duly filled-in KRA Form (available at the Branch), Mobile No. & Email ID at your nearest SVC Bank Branch.
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md fixed top-12 w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Bank Name */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <span className="font-bold text-lg">SVC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-800">SVC CO-OPERATIVE BANK LTD</h1>
                <p className="text-xs text-gray-600">Established 1991</p>
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-green-600 hover:text-green-700 font-medium px-3 py-2 border-b-2 border-green-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 hover:border-b-2 hover:border-blue-600 transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 hover:border-b-2 hover:border-blue-600 transition-colors"
              >
                Make Payment
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 hover:border-b-2 hover:border-blue-600 transition-colors"
              >
                Offers
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 hover:border-b-2 hover:border-blue-600 transition-colors"
              >
                Ways to Bank
              </button>
              <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 hover:border-b-2 hover:border-blue-600 transition-colors">
                Auction Notices
              </button>
              <button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 hover:border-b-2 hover:border-blue-600 transition-colors">
                Help & Support
              </button>
            </nav>

            {/* Login Button - Desktop */}
            <div className="hidden lg:flex">
              <button className="bg-green-600 text-white px-6 py-2 rounded border border-green-600 hover:bg-green-700 transition-colors font-medium">
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-2 pt-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-green-600 font-medium py-2 px-4 bg-green-50 text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-700 py-2 px-4 hover:bg-gray-50 text-left"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 py-2 px-4 hover:bg-gray-50 text-left"
                >
                  Make Payment
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 py-2 px-4 hover:bg-gray-50 text-left"
                >
                  Offers
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 py-2 px-4 hover:bg-gray-50 text-left"
                >
                  Ways to Bank
                </button>
                <button className="text-gray-700 py-2 px-4 hover:bg-gray-50 text-left">
                  Auction Notices
                </button>
                <button className="text-gray-700 py-2 px-4 hover:bg-gray-50 text-left">
                  Help & Support
                </button>
                <button className="bg-green-600 text-white py-2 px-4 rounded mx-4 mt-2 hover:bg-green-700 transition-colors">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translate3d(100%, 0, 0); }
            100% { transform: translate3d(-100%, 0, 0); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `
      }} />
    </>
  );
};

export default Header;
