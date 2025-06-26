
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Bank Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <span className="font-bold text-lg">SVC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">SVC Cooperative Bank Ltd</h3>
                <p className="text-blue-200 text-sm">Est. 1993</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              A Multi-State Scheduled Cooperative Bank licensed by RBI, committed to serving 
              our members with quality banking services since 1993.
            </p>
            <div className="text-sm text-blue-200">
              <div>RBI License: UCB/123/2023</div>
              <div>DICGC Insured</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Products & Services</a></li>
              <li><a href="#rates" className="text-blue-200 hover:text-white transition-colors">Interest Rates</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Annual Reports</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Tenders</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Savings Account</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Fixed Deposits</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Recurring Deposits</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home Loans</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Vehicle Loans</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Business Loans</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Locker Facility</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-semibold text-white">Head Office:</div>
                <div className="text-blue-200">
                  SVC House, Plot No. 123<br/>
                  Financial District, Bandra Kurla Complex<br/>
                  Mumbai - 400 051, Maharashtra
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-white">Phone:</div>
                <div className="text-blue-200">
                  +91-22-2659-1234<br/>
                  +91-22-2659-5678
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-white">Customer Care:</div>
                <div className="text-blue-200">1800-123-4567 (Toll Free)</div>
              </div>
              
              <div>
                <div className="font-semibold text-white">Email:</div>
                <div className="text-blue-200">
                  info@svcbank.co.in<br/>
                  customercare@svcbank.co.in
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-white">Banking Hours:</div>
                <div className="text-blue-200">
                  Mon-Fri: 10:00 AM - 4:00 PM<br/>
                  Sat: 10:00 AM - 2:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Links */}
        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Important Links</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors block">RBI</a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors block">DICGC</a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors block">NABARD</a>
                </div>
                <div>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors block">Banking Ombudsman</a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors block">Grievance Redressal</a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors block">RTI</a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Downloads</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-blue-200 hover:text-white transition-colors block">Account Opening Forms</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors block">Loan Application Forms</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors block">Service Request Forms</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors block">Mobile Banking App</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-blue-200 mb-4 md:mb-0">
              &copy; 2024 SVC Cooperative Bank Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Disclaimer</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Security Tips</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
