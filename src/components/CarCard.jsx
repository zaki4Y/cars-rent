import { useState, useEffect } from 'react';
import { FaUsers, FaGasPump, FaCog } from 'react-icons/fa';
import { getAverageRating } from '../data/reviews';
import { StarRating } from './StarRating';

const CarCard = ({ car }) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    setRating(getAverageRating(car.id));
  }, [car.id]);

  return (
    <div className="luxury-card rounded-lg overflow-hidden group cursor-pointer">
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
          width="400"
          height="224"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold text-gold bg-bg/90 backdrop-blur-sm px-3 py-1.5 rounded-sm">
            ${car.pricePerDay || car.price}<span className="text-text-muted font-normal text-[0.65rem]">/day</span>
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

        <div className="flex items-center gap-5 text-text-secondary text-xs font-medium tracking-wide uppercase mb-6">
          <span className="flex items-center gap-1.5">
            <FaUsers className="text-gold/60" /> {car.seats}
          </span>
          <span className="flex items-center gap-1.5">
            <FaGasPump className="text-gold/60" /> {car.fuelType}
          </span>
          <span className="flex items-center gap-1.5">
            <FaCog className="text-gold/60" /> {car.transmission}
          </span>
        </div>

        <div className="gold-divider-left mb-4" />

        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold group-hover:text-gold-light transition-colors duration-300">
          View Details
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </div>
  );
};

export default CarCard;
