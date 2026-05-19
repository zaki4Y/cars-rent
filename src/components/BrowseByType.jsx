import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { carsData } from '../data/cars';
import { FaCarSide, FaTruckMonster, FaBolt, FaCrown, FaFlagCheckered, FaCar } from 'react-icons/fa';

const typeIcons = {
  SUV: <FaTruckMonster />,
  Sedan: <FaCarSide />,
  Sports: <FaCar />,
  Luxury: <FaCrown />,
  Supercar: <FaFlagCheckered />,
  Electric: <FaBolt />,
};

const BrowseByType = () => {
  const types = [...new Set(carsData.map(c => c.type))].sort();
  const typeCounts = {};
  carsData.forEach(c => {
    typeCounts[c.type] = (typeCounts[c.type] || 0) + 1;
  });

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label">Browse by Category</p>
          <h2 className="section-title">Find Your Perfect Vehicle Type</h2>
          <p className="section-subtitle mx-auto">
            Explore our fleet by category. From daily drivers to weekend thrill machines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {types.map((type, index) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                to={`/cars?type=${type.toLowerCase()}`}
                className="luxury-card rounded-lg p-6 text-center group block hover:bg-surface transition-colors duration-500 h-full"
              >
                <div className="text-gold/70 text-3xl mb-4 group-hover:text-gold transition-colors duration-300 flex justify-center">
                  {typeIcons[type] || <FaCar />}
                </div>
                <h3 className="font-display text-lg text-text-primary mb-1 group-hover:text-gold transition-colors duration-300">
                  {type}
                </h3>
                <p className="text-text-muted text-xs font-medium">
                  {typeCounts[type]} {typeCounts[type] === 1 ? 'vehicle' : 'vehicles'}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByType;
