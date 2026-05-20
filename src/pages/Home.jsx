import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import WhyChooseUs from '../components/WhyChooseUs';
import BrowseByType from '../components/BrowseByType';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <main>
      <SEO
        title="Premium Car Rental in New York — Luxury & Sports Cars"
        description="Rent premium luxury vehicles in New York. Browse our curated collection of Mercedes, BMW, Porsche, SUVs and sports cars. Book online with free cancellation and comprehensive insurance included."
        keywords="car rental New York, luxury car rental, sports car rental, premium car rental, rent Mercedes, rent BMW, SUV rental"
      />
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />

      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label text-center mb-4">New York&apos;s Premier Car Rental Service</p>
              <h2 className="section-title text-center mb-8">Experience Luxury on Every Drive</h2>
              <div className="gold-divider mx-auto w-16 mb-8" />
              <div className="prose prose-invert max-w-none text-text-secondary font-light leading-relaxed space-y-6">
                <p>
                  DriveEase offers a curated selection of premium vehicles for discerning clients across New York City and the surrounding tri-state area. From sleek Mercedes-Benz sedans to powerful Porsche sports cars and spacious luxury SUVs, every vehicle in our fleet is meticulously maintained and prepared for your journey.
                </p>
                <p>
                  Whether you need a car for a weekend getaway, a business trip, or a special occasion, our streamlined booking process makes it simple. Browse our collection online, select your preferred vehicle and dates, and our concierge team will confirm your reservation within the hour. We offer flexible pickup and delivery options across Manhattan, Brooklyn, Queens, and all major airports including JFK, LaGuardia, and Newark.
                </p>
                <p>
                  Every rental includes comprehensive insurance coverage, 24/7 roadside assistance, and unlimited mileage within New York state. Our transparent pricing means no hidden fees — what you see is what you pay. With over 10 years of experience and 5,000+ satisfied clients, DriveEase has established itself as the trusted choice for luxury car rental in New York.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrowseByType />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
