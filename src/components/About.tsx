
import { Award, Users, Globe, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Customers" },
    { icon: Globe, number: "25+", label: "Branch Locations" },
    { icon: Award, number: "30+", label: "Years of Service" },
    { icon: Clock, number: "24/7", label: "Customer Support" }
  ];

  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About SVC Cooperative Bank</h2>
            <p className="text-lg text-gray-700 mb-6">
              Established in 1993, SVC Cooperative Bank Ltd has been serving the community with 
              dedication and trust for over three decades. We are committed to providing innovative 
              banking solutions while maintaining the personal touch that sets us apart.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our mission is to empower individuals and businesses with accessible, reliable, and 
              customer-centric banking services that contribute to their financial growth and success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">RBI Licensed Cooperative Bank</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">DICGC Insured Deposits</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Why Choose SVC Bank?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">Trusted Service</h4>
              <p className="text-gray-600">Three decades of reliable banking with community focus</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">Personal Touch</h4>
              <p className="text-gray-600">Personalized service with dedicated relationship managers</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-orange-600" size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">Modern Banking</h4>
              <p className="text-gray-600">Latest technology with traditional banking values</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
