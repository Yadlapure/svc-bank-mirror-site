
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  bgColor: string;
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "SVC Shakti Savings Account",
      subtitle: "Tailored banking services for Women",
      description: "Special savings account designed for women with exclusive benefits and features",
      buttonText: "Know More",
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "Fixed Deposits",
      subtitle: "Earn assured returns with high liquidity",
      description: "Secure your future with our attractive fixed deposit schemes",
      buttonText: "Know More",
      bgColor: "from-green-600 to-green-800"
    },
    {
      id: 3,
      title: "Gold Loan",
      subtitle: "Finance your urgent needs",
      description: "Get instant loans against your gold with competitive interest rates",
      buttonText: "Know More",
      bgColor: "from-yellow-600 to-yellow-800"
    },
    {
      id: 4,
      title: "Insurance",
      subtitle: "Protect yourself and your loved ones",
      description: "Comprehensive insurance solutions for all your needs",
      buttonText: "Know More",
      bgColor: "from-purple-600 to-purple-800"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg bg-white shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${slide.bgColor} flex items-center justify-between px-8`}>
            <div className="text-white flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-4 text-blue-100">{slide.subtitle}</p>
              <p className="text-sm md:text-base mb-6 text-blue-50">{slide.description}</p>
              <button className="bg-white text-blue-800 px-6 py-2 rounded font-semibold hover:bg-blue-50 transition-colors">
                {slide.buttonText}
              </button>
            </div>
            <div className="hidden md:block flex-1 flex justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur">
                <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-6xl">🏦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur transition-colors"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur transition-colors"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
