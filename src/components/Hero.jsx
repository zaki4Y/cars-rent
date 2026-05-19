import { motion } from 'framer-motion';
import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06)_0%,transparent_70%)]" />

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gold/10 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gold/10 hidden lg:block" />

      <div className="section-container relative z-10 w-full pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="section-label mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Premium Car Rental
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-text-primary leading-[0.95] tracking-tight mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Drive the
            <br />
            <span className="italic text-gold">Extraordinary</span>
          </motion.h1>

          <motion.p
            className="text-text-secondary text-lg md:text-xl font-light max-w-xl mx-auto mb-14 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Curated collection of the world&apos;s finest automobiles, delivered to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SearchForm />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
