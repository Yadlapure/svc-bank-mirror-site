
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white text-blue-900 p-3 rounded-lg mr-3">
                <span className="font-bold text-xl">SVC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SVC Cooperative Bank</h3>
                <p className="text-blue-200 text-sm">Your Trusted Partner</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6">
              Serving the community with reliable banking services since 1993. 
              Your financial growth is our priority.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-blue-200 hover:text-white cursor-pointer transition-colors" size={24} />
              <Twitter className="text-blue-200 hover:text-white cursor-pointer transition-colors" size={24} />
              <Instagram className="text-blue-200 hover:text-white cursor-pointer transition-colors" size={24} />
              <Linkedin className="text-blue-200 hover:text-white cursor-pointer transition-colors" size={24} />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Interest Rates</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Savings Account</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Fixed Deposits</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home Loans</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Business Banking</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Digital Banking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-blue-200 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-blue-200">Head Office:</p>
                  <p className="text-white">123 Banking Street, Financial District, Mumbai - 400001</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-200 mr-3" size={20} />
                <div>
                  <p className="text-white">+91-22-XXXX-XXXX</p>
                  <p className="text-blue-200 text-sm">Mon-Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-200 mr-3" size={20} />
                <div>
                  <p className="text-white">info@svcbank.com</p>
                  <p className="text-blue-200 text-sm">24/7 Email Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; 2024 SVC Cooperative Bank Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">DICGC Insurance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
