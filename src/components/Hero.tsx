
import Carousel from './Carousel';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              Welcome to SVC Co-operative Bank
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your trusted banking partner since 1991. Experience personalized banking services 
              with competitive interest rates and modern banking solutions tailored for your needs.
            </p>
            
            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-600">
                <div className="text-2xl font-bold text-blue-800 mb-2">50,000+</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-600">
                <div className="text-2xl font-bold text-green-800 mb-2">25+</div>
                <div className="text-gray-600">Branch Locations</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-yellow-600">
                <div className="text-2xl font-bold text-yellow-800 mb-2">30+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Open Account Online
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
