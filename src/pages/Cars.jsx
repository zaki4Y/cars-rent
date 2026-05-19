import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaUsers, FaGasPump, FaCog, FaSort } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { carsData, priceRanges } from '../data/cars';
import {
  saveBooking, getAvailability, refreshAvailability,
  isCarAvailable, hasActiveBooking, getActiveBooking
} from '../data/bookings';
import { getAverageRating } from '../data/reviews';
import { StarRating } from '../components/StarRating';
import BookingModal from '../components/BookingModal';

import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const Cars = () => {
  const { isAuthenticated } = useAuth();
  const { addToast } = useToast();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({ type: 'all', priceRange: 'all' });
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [sortBy, setSortBy] = useState('default');
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availability, setAvailability] = useState({});
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    refreshAvailability();
    setAvailability(getAvailability());

    const r = {};
    carsData.forEach(c => { r[c.id] = getAverageRating(c.id); });
    setRatings(r);
  }, []);

  useEffect(() => {
    const pickupDate = searchParams.get('pickupDate');
    const returnDate = searchParams.get('returnDate');
    if (pickupDate || returnDate) {
      // Could pre-fill a date filter here in the future
    }
  }, [searchParams]);

  const carTypes = useMemo(() => [...new Set(carsData.map(c => c.type))].sort(), []);

  const filteredCars = useMemo(() => {
    let result = carsData.filter(car => {
      const matchesSearch = !searchQuery || car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.type.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filters.type === 'all' || car.type.toLowerCase() === filters.type.toLowerCase();
      let matchesPrice = true;
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (max) matchesPrice = car.price >= min && car.price <= max;
        else matchesPrice = car.price >= min;
      }
      return matchesSearch && matchesType && matchesPrice;
    });

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'rating') result.sort((a, b) => (ratings[b.id]?.average || 0) - (ratings[a.id]?.average || 0));

    return result;
  }, [searchQuery, filters, sortBy, ratings]);

  const handleBookNow = (car) => {
    if (!isAuthenticated) {
      addToast('Please sign in to reserve a vehicle.', 'info', 2000);
      setTimeout(() => window.location.href = '/login', 1500);
      return;
    }
    if (!isCarAvailable(car.id)) {
      const avail = getAvailability()[car.id];
      addToast(`This ${car.name} is booked until ${new Date(avail.bookedUntil).toLocaleDateString()}.`, 'error');
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
      carId: selectedCar.id,
      carName: selectedCar.name,
      pickupDate: bookingDetails.pickupDate,
      returnDate: bookingDetails.returnDate,
      pickupLocation: bookingDetails.pickupLocation,
      pickupTime: bookingDetails.pickupTime,
      returnTime: bookingDetails.returnTime,
      totalPrice: bookingDetails.totalPrice,
    });
    setAvailability(prev => ({
      ...prev,
      [selectedCar.id]: { available: false, bookedUntil: bookingDetails.returnDate }
    }));
    addToast(`${selectedCar.name} reserved successfully!`, 'success');
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCar(null), 200);
  };

  const activeBooking = getActiveBooking();

  return (
    <div className="pt-28 min-h-screen">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label">The Fleet</p>
          <h1 className="section-title mb-4">Our Collection</h1>
          <p className="section-subtitle mx-auto">
            {carsData.length} exceptional vehicles, each chosen for its character and performance.
          </p>
        </div>

        {activeBooking && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-4 border border-gold/20 rounded text-center">
            <p className="text-gold text-sm">
              Active booking: {activeBooking.carName} until {new Date(activeBooking.returnDate).toLocaleDateString()}
            </p>
          </motion.div>
        )}

        <div className="luxury-card rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="md:col-span-2">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                <input
                  type="text"
                  placeholder="Search by name or type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-luxury rounded pl-11"
                />
              </div>
            </div>
            <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="input-luxury rounded appearance-none cursor-pointer"
            >
              <option value="all">All Types</option>
              {carTypes.map(type => <option key={type} value={type.toLowerCase()}>{type}</option>)}
            </select>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
              className="input-luxury rounded appearance-none cursor-pointer"
            >
              {priceRanges.map(range => <option key={range.value} value={range.value}>{range.label}</option>)}
            </select>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-text-muted text-xs font-medium tracking-wide">
              {filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'}
            </p>
            <div className="flex items-center gap-2">
              <FaSort className="text-gold/40 text-xs" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-text-muted text-xs font-medium tracking-wide cursor-pointer focus:outline-none"
              >
                <option value="default" className="bg-bg">Default</option>
                <option value="price-asc" className="bg-bg">Price: Low to High</option>
                <option value="price-desc" className="bg-bg">Price: High to Low</option>
                <option value="name" className="bg-bg">Name A-Z</option>
                <option value="rating" className="bg-bg">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCars.length > 0 ? filteredCars.map((car, index) => {
            const carAvail = availability[car.id];
            const available = carAvail ? carAvail.available : true;
            const rating = ratings[car.id];

            return (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className={`luxury-card rounded-lg overflow-hidden group ${!available ? 'opacity-60 pointer-events-none' : ''}`}>
                  <Link to={`/cars/${car.id}`} className="block">
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
                  </Link>

                  <div className="p-6">
                    <Link to={`/cars/${car.id}`}>
                      <h3 className="font-display text-xl text-text-primary group-hover:text-gold transition-colors duration-300 mb-1">
                        {car.name}
                      </h3>
                    </Link>

                    {rating && rating.count > 0 && (
                      <div className="flex items-center gap-2 mb-3">
                        <StarRating rating={Math.round(rating.average)} size="sm" />
                        <span className="text-text-muted text-xs">{rating.average} ({rating.count})</span>
                      </div>
                    )}

                    <p className="text-text-secondary text-sm font-light leading-relaxed mb-4 line-clamp-2">
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

                    <button
                      onClick={() => handleBookNow(car)}
                      className="w-full py-3 text-xs font-semibold tracking-widest uppercase rounded transition-all duration-400 btn-outline bg-transparent group-hover:bg-gold group-hover:text-bg group-hover:border-gold"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          }) : (
            <div className="col-span-full text-center py-20">
              <p className="font-display text-2xl text-text-secondary mb-4">No vehicles found</p>
              <button onClick={() => { setFilters({ type: 'all', priceRange: 'all' }); setSearchQuery(''); setSortBy('default'); }} className="btn-outline text-xs">
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} car={selectedCar} onBookingSuccess={handleBookingSuccess} />
    </div>
  );
};

export default Cars;
