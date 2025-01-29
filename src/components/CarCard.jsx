import { cn } from '../lib/utils';
import { FaGasPump, FaCar, FaUsers } from 'react-icons/fa';

const CarCard = ({ car }) => {
  return (
    <div className="max-w-sm w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-[400px] rounded-lg shadow-xl mx-auto flex flex-col justify-between bg-cover",
        )}
        style={{ backgroundImage: `url(${car.image})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/40 transition duration-300 group-hover/card:bg-black/60" />

        {/* Price Tag */}
        <div className="relative z-10 p-6">
          <div className="bg-primary text-white px-4 py-2 rounded-full inline-block">
            ${car.pricePerDay}/day
          </div>
        </div>

        {/* Car Details */}
        <div className="relative z-10 p-6 mt-auto">
          <h2 className="font-bold text-2xl text-white mb-4">{car.name}</h2>
          
          <div className="flex items-center gap-4 mb-6 text-gray-100">
            <span className="flex items-center">
              <FaUsers className="mr-2" />
              {car.seats} Seats
            </span>
            <span className="flex items-center">
              <FaGasPump className="mr-2" />
              {car.fuelType}
            </span>
            <span className="flex items-center">
              <FaCar className="mr-2" />
              {car.transmission}
            </span>
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
