import SEO from '../components/SEO';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <main>
      <SEO
        title="Premium Car Rental in New York — Luxury & Sports Cars"
        description="Rent premium luxury vehicles in New York. Browse our curated collection of Mercedes, BMW, Porsche, SUVs and sports cars. Book online with free cancellation and comprehensive insurance included."
        keywords="car rental New York, luxury car rental, sports car rental, premium car rental, rent Mercedes, rent BMW, SUV rental"
        canonical="https://driveease.com"
      />
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
