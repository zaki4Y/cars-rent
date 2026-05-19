import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaGasPump, FaCog } from 'react-icons/fa';
import { carsData } from '../data/cars';
import { getAverageRating } from '../data/reviews';
import { StarRating } from '../components/StarRating';

const FeaturedCars = () => {
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const r = {};
    carsData.forEach(c => { r[c.id] = getAverageRating(c.id); });
    setRatings(r);
  }, []);

  const featured = carsData.filter(c => [1, 2, 4, 8, 10, 11].includes(c.id));

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="section-label">Our Collection</p>
            <h2 className="section-title">Featured Vehicles</h2>
          </div>
          <Link to="/cars" className="btn-outline text-xs mt-4 md:mt-0">
            View All {carsData.length} Vehicles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((car, index) => {
            const rating = ratings[car.id];
            return (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/cars/${car.id}`} className="luxury-card rounded-lg overflow-hidden group cursor-pointer block">
                  <div className="relative h-56 overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

                    <div className="absolute top-4 left-4">
                      <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-gold bg-bg/90 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-gold/20">
                        {car.type}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-semibold text-gold bg-bg/90 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                        ${car.price}<span className="text-text-muted font-normal text-[0.65rem]">/day</span>
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-text-secondary text-[0.65rem] font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="flex items-center gap-1.5">
                        <FaUsers className="text-gold/70 text-xs" /> {car.seats}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaGasPump className="text-gold/70 text-xs" /> {car.fuelType}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaCog className="text-gold/70 text-xs" /> {car.transmission}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-2xl text-text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                      {car.name}
                    </h3>

                    {rating && rating.count > 0 && (
                      <div className="flex items-center gap-2 mb-3">
                        <StarRating rating={Math.round(rating.average)} size="sm" />
                        <span className="text-text-muted text-xs">{rating.average} ({rating.count})</span>
                      </div>
                    )}

                    <p className="text-text-secondary text-sm font-light leading-relaxed mb-5 line-clamp-2">
                      {car.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {car.features.map((f, i) => (
                        <span key={i} className="text-[0.65rem] text-text-muted bg-bg-subtle px-2.5 py-1 rounded-sm tracking-wide border border-gold/5">
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="gold-divider-left mb-4" />

                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold group-hover:text-gold-light transition-colors duration-300">
                      Reserve Now
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
