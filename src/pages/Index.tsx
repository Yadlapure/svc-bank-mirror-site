
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import InterestRates from '../components/InterestRates';
import About from '../components/About';
import Directors from '../components/Directors';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div id="products" className="pt-20">
        <Services />
      </div>
      <div id="rates" className="pt-20">
        <InterestRates />
      </div>
      <div id="about" className="pt-20">
        <About />
      </div>
      <div id="directors" className="pt-20">
        <Directors />
      </div>
      <div id="contact" className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
