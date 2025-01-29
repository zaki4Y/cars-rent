import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <main className="space-y-8">
      <Hero />
      <div className="space-y-8 px-4">
        <FeaturedCars />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </div>
    </main>
  );
};

export default Home; 