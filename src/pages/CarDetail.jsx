import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaUsers, FaGasPump, FaCog, FaTachometerAlt, FaBolt, FaRoad, FaFlagCheckered } from 'react-icons/fa';
import { getCarById, carsData } from '../data/cars';
import { saveBooking, isCarAvailable, hasActiveBooking, getActiveBooking, setCarUnavailable } from '../data/bookings';
import { getAverageRating } from '../data/reviews';
import { StarRating } from '../components/StarRating';
import { ReviewsSection } from '../components/ReviewsSection';
import BookingModal from '../components/BookingModal';
import CarCard from '../components/CarCard';

const specIcons = {
  engine: { icon: <FaCog />, label: 'Engine' },
  horsepower: { icon: <FaBolt />, label: 'Power' },
  '0-60': { icon: <FaTachometerAlt />, label: '0-60 mph' },
  range: { icon: <FaRoad />, label: 'Range' },
  drivetrain: { icon: <FaRoad />, label: 'Drivetrain' },
  topSpeed: { icon: <FaFlagCheckered />, label: 'Top Speed' },
};

import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const CarDetail = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const car = getCarById(id);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState({ average: 0, count: 0 });

  useEffect(() => {
    if (!car) navigate('/cars');
  }, [car, navigate]);

  useEffect(() => {
    if (car) setRating(getAverageRating(car.id));
  }, [car]);

  if (!car) return null;

  const available = isCarAvailable(car.id);
  const relatedCars = carsData.filter(c => c.type === car.type && c.id !== car.id).slice(0, 3);

  const handleBookNow = () => {
    if (!isAuthenticated) {
      addToast('Please sign in to reserve a vehicle.', 'info', 2000);
      setTimeout(() => window.location.href = '/login', 1500);
      return;
    }
    if (!available) {
      addToast('This vehicle is currently booked.', 'error');
      return;
    }
    if (hasActiveBooking()) {
      const active = getActiveBooking();
      addToast(`You have an active booking until ${new Date(active.returnDate).toLocaleDateString()}.`, 'error');
      return;
    }
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleBookingSuccess = (bookingDetails) => {
    saveBooking({
      carId: car.id,
      carName: car.name,
      pickupDate: bookingDetails.pickupDate,
      returnDate: bookingDetails.returnDate,
      pickupLocation: bookingDetails.pickupLocation,
      pickupTime: bookingDetails.pickupTime,
      returnTime: bookingDetails.returnTime,
      totalPrice: bookingDetails.totalPrice,
    });
    setCarUnavailable(car.id, bookingDetails.returnDate);
    addToast(`${car.name} reserved successfully!`, 'success');
    setSelectedCar(null);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCar(null), 200);
  };

  const nextImage = () => setActiveImage((prev) => (prev + 1) % car.gallery.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + car.gallery.length) % car.gallery.length);

  return (
    <div className="pt-28 min-h-screen">
      <div className="section-container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/cars" className="hover:text-gold transition-colors">Fleet</Link>
          <span>/</span>
          <span className="text-text-primary">{car.name}</span>
        </nav>

        {/* Image Gallery */}
        <div className="relative mb-12 rounded-lg overflow-hidden luxury-card">
          <div className="relative h-[400px] md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={car.gallery[activeImage]}
                alt={car.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />

            {/* Navigation arrows */}
            {car.gallery.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg/60 backdrop-blur-sm flex items-center justify-center text-text-primary hover:bg-gold/20 transition-colors">
                  <FaChevronLeft size={16} />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg/60 backdrop-blur-sm flex items-center justify-center text-text-primary hover:bg-gold/20 transition-colors">
                  <FaChevronRight size={16} />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 right-4 text-xs text-text-secondary bg-bg/60 backdrop-blur-sm px-3 py-1.5 rounded">
              {activeImage + 1} / {car.gallery.length}
            </div>
          </div>

          {/* Thumbnails */}
          {car.gallery.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto">
              {car.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-all duration-300 ${
                    idx === activeImage ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Car Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left: Info + Specs */}
          <div className="lg:col-span-2">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="section-label mb-2">{car.type}</p>
                <h1 className="font-display text-4xl md:text-5xl text-text-primary">{car.name}</h1>
                {rating.count > 0 && (
                  <div className="flex items-center gap-2 mt-3">
                    <StarRating rating={Math.round(rating.average)} size="sm" />
                    <span className="text-text-secondary text-sm">{rating.average} ({rating.count})</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-text-secondary font-light leading-relaxed text-lg mb-10">{car.description}</p>

            {/* Specs Grid */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-text-primary mb-6">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gold/5 rounded-lg overflow-hidden">
                {Object.entries(car.specs).map(([key, value]) => {
                  const spec = specIcons[key];
                  return (
                    <div key={key} className="bg-bg p-5 text-center">
                      <div className="text-gold/70 text-lg mb-2 flex justify-center">{spec.icon}</div>
                      <p className="text-text-muted text-[0.65rem] font-semibold uppercase tracking-wider mb-1">{spec.label}</p>
                      <p className="text-text-primary font-medium text-sm">{value}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-display text-2xl text-text-primary mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pricing Card */}
          <div>
            <div className="luxury-card rounded-lg p-8 sticky top-28">
              <div className="text-center mb-6">
                <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">Starting from</p>
                <p className="font-display text-5xl text-gold">${car.price}</p>
                <p className="text-text-muted text-sm mt-1">per day</p>
              </div>

              <div className="gold-divider mb-6" />

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary flex items-center gap-2"><FaUsers className="text-gold/60 text-xs" /> Seats</span>
                  <span className="text-text-primary font-medium">{car.seats}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary flex items-center gap-2"><FaGasPump className="text-gold/60 text-xs" /> Fuel</span>
                  <span className="text-text-primary font-medium">{car.fuelType}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary flex items-center gap-2"><FaCog className="text-gold/60 text-xs" /> Transmission</span>
                  <span className="text-text-primary font-medium">{car.transmission}</span>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                disabled={!available}
                className={`w-full py-3.5 text-xs font-semibold tracking-widest uppercase rounded transition-all duration-400 ${
                  available ? 'btn-primary' : 'bg-bg-subtle text-text-muted cursor-not-allowed'
                }`}
              >
                {available ? 'Reserve Now' : 'Currently Unavailable'}
              </button>

              {!available && (
                <p className="text-text-muted text-xs text-center mt-3">This vehicle is booked</p>
              )}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <ReviewsSection carId={car.id} />

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section className="mt-20">
            <div className="gold-divider mb-12" />
            <p className="section-label mb-2">Similar Vehicles</p>
            <h2 className="section-title text-3xl mb-10">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCars.map((relatedCar) => (
                <Link key={relatedCar.id} to={`/cars/${relatedCar.id}`}>
                  <CarCard car={relatedCar} />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} car={selectedCar} onBookingSuccess={handleBookingSuccess} />
    </div>
  );
};

export default CarDetail;
