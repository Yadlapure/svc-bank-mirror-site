
import { CreditCard, Smartphone, Home, Car, Briefcase, PiggyBank } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Savings Account",
      description: "High interest savings accounts with flexible terms and easy access to your funds.",
      features: ["4.5% Interest Rate", "No Minimum Balance", "Free Debit Card"]
    },
    {
      icon: Smartphone,
      title: "Digital Banking",
      description: "Complete banking solutions available 24/7 through our mobile app and internet banking.",
      features: ["Mobile Banking", "Online Transfers", "Bill Payments"]
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Competitive home loan rates with flexible repayment options for your dream home.",
      features: ["Low Interest Rates", "Quick Approval", "Flexible Tenure"]
    },
    {
      icon: Car,
      title: "Vehicle Loans",
      description: "Easy financing for cars, bikes, and commercial vehicles with attractive interest rates.",
      features: ["90% Financing", "Fast Processing", "No Hidden Charges"]
    },
    {
      icon: Briefcase,
      title: "Business Banking",
      description: "Comprehensive business banking solutions to help your business grow and prosper.",
      features: ["Business Accounts", "Trade Finance", "Cash Management"]
    },
    {
      icon: PiggyBank,
      title: "Fixed Deposits",
      description: "Secure your future with our fixed deposit schemes offering attractive returns.",
      features: ["High Returns", "Flexible Terms", "Auto Renewal"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Banking Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a complete range of banking products and services designed to meet all your financial needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-colors group">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <service.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
