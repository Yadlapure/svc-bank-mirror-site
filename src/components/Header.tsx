
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91-XXXX-XXXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@svcbank.com</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <span>Customer Care</span>
            <span>•</span>
            <span>Net Banking</span>
            <span>•</span>
            <span>Mobile Banking</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-3 rounded-lg mr-3">
                <span className="font-bold text-xl">SVC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">SVC Cooperative Bank Ltd</h1>
                <p className="text-sm text-gray-600">Your Trusted Banking Partner</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
              <a href="#loans" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Loans</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 py-2 font-medium">About Us</a>
                <a href="#loans" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Loans</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
