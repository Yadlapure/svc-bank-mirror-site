
const Services = () => {
  const services = [
    {
      title: "Savings Bank Account",
      description: "High interest savings account with minimum balance of Rs. 1000. Enjoy free cheque book, debit card and internet banking facilities.",
      features: ["4.50% p.a. Interest", "Free Debit Card", "SMS Banking", "Internet Banking"],
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-600"
    },
    {
      title: "Fixed Deposit",
      description: "Secure your future with our attractive fixed deposit schemes. Flexible tenure from 1 month to 10 years with competitive interest rates.",
      features: ["Up to 7.25% p.a.", "Flexible Tenure", "Loan Against FD", "Auto Renewal"],
      bgColor: "bg-green-50",
      iconColor: "bg-green-600"
    },
    {
      title: "Recurring Deposit",
      description: "Build your savings systematically with our recurring deposit scheme. Start with as low as Rs. 100 per month.",
      features: ["Monthly Investment", "High Returns", "Flexible Amount", "Loan Facility"],
      bgColor: "bg-yellow-50",
      iconColor: "bg-yellow-600"
    },
    {
      title: "Home Loan",
      description: "Fulfill your dream of owning a home with our attractive home loan schemes. Quick processing and competitive interest rates.",
      features: ["8.75% p.a. onwards", "Up to 85% Finance", "Quick Approval", "Flexible Repayment"],
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-600"
    },
    {
      title: "Vehicle Loan",
      description: "Drive your dream car or bike with our easy vehicle loan schemes. New and used vehicle financing available.",
      features: ["9.25% p.a. onwards", "90% Finance", "Fast Processing", "No Hidden Charges"],
      bgColor: "bg-red-50",
      iconColor: "bg-red-600"
    },
    {
      title: "Business Loan",
      description: "Grow your business with our comprehensive business loan solutions. Working capital and term loans available.",
      features: ["Competitive Rates", "Quick Disbursement", "Flexible Terms", "Minimal Documentation"],
      bgColor: "bg-indigo-50",
      iconColor: "bg-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Products & Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of banking products designed to meet all your financial needs. 
            From savings accounts to loans, we have solutions for every stage of your financial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`${service.bgColor} rounded-lg p-6 hover:shadow-lg transition-shadow`}>
              <div className={`${service.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                  Learn More →
                </button>
                <button className="text-green-600 text-sm font-medium hover:text-green-800">
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Other Banking Services</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h4 className="font-semibold text-gray-800">RTGS/NEFT</h4>
              <p className="text-sm text-gray-600">Fast & Secure Money Transfer</p>
            </div>
            <div className="p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h4 className="font-semibold text-gray-800">Locker Facility</h4>
              <p className="text-sm text-gray-600">Safe & Secure Storage</p>
            </div>
            <div className="p-4">
              <div className="bg-yellow-100 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-600 rounded"></div>
              </div>
              <h4 className="font-semibold text-gray-800">DD/Cheque</h4>
              <p className="text-sm text-gray-600">Demand Draft & Pay Orders</p>
            </div>
            <div className="p-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h4 className="font-semibold text-gray-800">Insurance</h4>
              <p className="text-sm text-gray-600">Life & General Insurance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
