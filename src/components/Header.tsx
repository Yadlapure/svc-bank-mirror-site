
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-red-600 text-white py-1 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto">
          <marquee>Important: Internet Banking services will be temporarily unavailable on Sunday from 2:00 AM to 6:00 AM for system maintenance.</marquee>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Bank Name */}
            <div className="flex items-center">
              <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-xl">SVC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-800">SVC COOPERATIVE BANK LTD</h1>
                <p className="text-sm text-gray-600">Established 1993 | RBI License No. 12345</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-blue-800 font-semibold">Customer Care</div>
                <div className="text-gray-600">1800-123-4567</div>
              </div>
              <div className="text-center">
                <div className="text-blue-800 font-semibold">Email</div>
                <div className="text-gray-600">info@svcbank.co.in</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="hidden md:flex space-x-8 py-4">
                <a href="#home" className="text-blue-800 hover:text-blue-600 font-medium px-4 py-2 border-b-2 border-blue-800">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 hover:border-b-2 hover:border-blue-600">About Us</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 hover:border-b-2 hover:border-blue-600">Products & Services</a>
                <a href="#rates" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 hover:border-b-2 hover:border-blue-600">Interest Rates</a>
                <a href="#branches" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 hover:border-b-2 hover:border-blue-600">Branch Locator</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 hover:border-b-2 hover:border-blue-600">Contact Us</a>
              </div>

              <div className="hidden md:flex space-x-2 py-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700">
                  Internet Banking
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
                  Mobile Banking
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded text-gray-700"
              >
                <div className="w-6 h-6 flex flex-col justify-center">
                  <span className="block w-full h-0.5 bg-gray-700 mb-1"></span>
                  <span className="block w-full h-0.5 bg-gray-700 mb-1"></span>
                  <span className="block w-full h-0.5 bg-gray-700"></span>
                </div>
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden pb-4 border-t border-gray-200">
                <div className="flex flex-col space-y-2 pt-4">
                  <a href="#home" className="text-blue-800 font-medium py-2 px-4 bg-blue-50">Home</a>
                  <a href="#about" className="text-gray-700 py-2 px-4 hover:bg-gray-50">About Us</a>
                  <a href="#services" className="text-gray-700 py-2 px-4 hover:bg-gray-50">Products & Services</a>
                  <a href="#rates" className="text-gray-700 py-2 px-4 hover:bg-gray-50">Interest Rates</a>
                  <a href="#branches" className="text-gray-700 py-2 px-4 hover:bg-gray-50">Branch Locator</a>
                  <a href="#contact" className="text-gray-700 py-2 px-4 hover:bg-gray-50">Contact Us</a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
