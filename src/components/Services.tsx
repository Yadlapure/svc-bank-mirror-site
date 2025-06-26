
import { FaUniversity, FaCreditCard, FaMobile, FaShieldAlt, FaCoins, FaHandHoldingUsd } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCoins className="w-12 h-12 text-yellow-600" />,
      title: "Fixed Deposits",
      description: "Earn assured returns with high liquidity and flexible tenure options for your investments.",
      link: "#"
    },
    {
      icon: <FaCreditCard className="w-12 h-12 text-blue-600" />,
      title: "Pay Bills",
      description: "A convenient and hassle-free way to pay your utility bills online from anywhere.",
      link: "#"
    },
    {
      icon: <FaHandHoldingUsd className="w-12 h-12 text-green-600" />,
      title: "Gold Loan",
      description: "Finance your urgent needs with our instant disbursal advantage at competitive rates.",
      link: "#"
    },
    {
      icon: <FaShieldAlt className="w-12 h-12 text-purple-600" />,
      title: "Insurance",
      description: "Protect yourself and your loved ones against all uncertainties with comprehensive coverage.",
      link: "#"
    },
    {
      icon: <FaUniversity className="w-12 h-12 text-red-600" />,
      title: "Home Loans",
      description: "Make your dream home a reality with our attractive home loan schemes and easy EMIs.",
      link: "#"
    },
    {
      icon: <FaMobile className="w-12 h-12 text-green-600" />,
      title: "Mobile Banking",
      description: "Bank on the go with our secure and user-friendly mobile banking application.",
      link: "#"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
            What are you looking for?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of banking services designed to meet all your financial needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="flex items-center mb-4">
                <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <a 
                  href={service.link}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
                >
                  Know More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
