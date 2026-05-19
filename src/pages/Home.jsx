import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
