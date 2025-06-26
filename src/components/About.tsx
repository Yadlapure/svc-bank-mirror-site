
const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">About SVC Cooperative Bank Ltd</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                SVC Cooperative Bank Ltd was established in 1993 with a vision to provide quality banking services 
                to the common man. Over the past three decades, we have grown from a small cooperative institution 
                to a prominent multi-state scheduled cooperative bank.
              </p>
              <p className="mb-4">
                Licensed by the Reserve Bank of India and regulated under the Banking Regulation Act, 1949, 
                we are committed to maintaining the highest standards of banking operations while keeping our 
                cooperative spirit alive.
              </p>
              <p className="mb-6">
                Our bank is managed by a team of experienced professionals who understand the local needs and 
                aspirations of our customers. We believe in building long-term relationships based on trust, 
                transparency, and mutual respect.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-800">₹500+ Cr</div>
                <div className="text-sm text-gray-600">Total Business</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-800">50,000+</div>
                <div className="text-sm text-gray-600">Account Holders</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">RBI Licensed Multi-State Scheduled Cooperative Bank</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">DICGC Insured Deposits up to ₹5 Lakhs</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Member of Indian Banks' Association (IBA)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">ISO 9001:2015 Certified Quality Management System</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Chairman's Message */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Chairman's Message</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                "At SVC Cooperative Bank, we are committed to serving our members and the community with 
                dedication and integrity. Our focus remains on providing accessible banking services while 
                maintaining financial prudence and regulatory compliance."
              </p>
              <div className="text-sm">
                <div className="font-semibold">Shri. Rajesh Kumar</div>
                <div className="text-blue-200">Chairman, Board of Directors</div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Our Vision & Mission</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Vision</h4>
                  <p className="text-sm text-gray-600">
                    To be the most preferred cooperative bank, known for innovative banking solutions, 
                    customer service excellence, and community development.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mission</h4>
                  <p className="text-sm text-gray-600">
                    To provide comprehensive banking services with personalized attention, leveraging 
                    technology while maintaining our cooperative values and contributing to societal development.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Awards & Recognition</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Best Cooperative Bank Award 2023</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Excellence in Digital Banking 2022</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Community Service Recognition 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
