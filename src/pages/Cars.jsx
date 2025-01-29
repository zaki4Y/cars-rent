import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaCar, FaGasPump, FaCog } from 'react-icons/fa';
import BookingModal from '../components/BookingModal';

const Cars = () => {
  // Convert the cars array to state
  const initialCars = [
    {
      name: "Tesla Model 3",
      type: "Electric",
      price: 90,
      image: "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["Autopilot", "360° Camera", "Wireless Charging"],
      available: true,
      bookedUntil: null
    },
    {
      name: "Mercedes-Benz S-Class",
      type: "Luxury",
      price: 150,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["Massage Seats", "Night Vision", "Executive Package"],
      available: true,
      bookedUntil: null
    },
    {
      name: "BMW M4",
      type: "Sports",
      price: 180,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["M Performance", "Carbon Roof", "Sport Exhaust"],
      available: true,
      bookedUntil: null
    },
    {
      name: "Porsche 911 GT3",
      type: "Sports",
      price: 250,
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["Track Mode", "Carbon Ceramic Brakes", "PDK"],
      available: true,
      bookedUntil: null
    },
    {
      name: "Range Rover Velar",
      type: "SUV",
      price: 140,
      image: "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["Terrain Response", "Meridian Sound", "Panoramic Roof"],
      available: true,
      bookedUntil: null
    },
    {
      name: "Audi RS7",
      type: "Sports",
      price: 200,
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
      transmission: "Auto",
      features: ["V8 Twin-Turbo", "Sport Differential", "Carbon Package"],
      available: true,
      bookedUntil: null
    },
    {
      name: "BMW X7",
      type: "SUV",
      price: 160,
      image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["7 Seats", "Sky Lounge", "Executive Drive"],
      available: true,
      bookedUntil: null
    },
    {
      name: "Lamborghini Huracán",
      type: "Sports",
      price: 300,
      image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["V10 Engine", "Corsa Mode", "Carbon Interior"],
      available: true,
      bookedUntil: null
    },
    {
      name: "Mercedes-AMG GT",
      type: "Sports",
      price: 220,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["Biturbo V8", "Race Mode", "AMG Dynamics"],
      available: true,
      bookedUntil: null
    },
    {
      name: "Rolls-Royce Cullinan",
      type: "Luxury",
      price: 400,
      image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["Starlight Headliner", "Champagne Cooler", "Viewing Suite"],
      available: true,
      bookedUntil: null
    },
    {
      name: "Ferrari F8 Tributo",
      type: "Sports",
      price: 350,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
      transmission: "Auto",
      features: ["Twin-Turbo V8", "Ferrari Dynamic Enhancer", "Carbon Racing Seats"],
      available: true,
      bookedUntil: null
    },
    {
      name: "Bentley Flying Spur",
      type: "Luxury",
      price: 280,
      image: "https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=2071&auto=format&fit=crop",
      transmission: "Auto",
      features: ["Mulliner Driving", "Naim Audio", "Rear Entertainment"],
      available: true,
      bookedUntil: null
    }
  ];

  const [cars, setCars] = useState(initialCars);
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userBookings, setUserBookings] = useState([]);
  const [bookingError, setBookingError] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Filter cars based on all criteria
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      // Search filter
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Type filter
      const matchesType = filters.type === 'all' || car.type.toLowerCase() === filters.type.toLowerCase();
      
      // Price range filter
      let matchesPrice = true;
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (max) {
          matchesPrice = car.price >= min && car.price <= max;
        } else {
          // For "201+" case
          matchesPrice = car.price >= min;
        }
      }

      return matchesSearch && matchesType && matchesPrice;
    });
  }, [cars, searchQuery, filters]);

  // Get unique car types for filter options
  const carTypes = useMemo(() => {
    const types = [...new Set(cars.map(car => car.type))];
    return types.sort();
  }, [cars]);

  // Price range options
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: '$50 - $100/day', value: '50-100' },
    { label: '$101 - $200/day', value: '101-200' },
    { label: '$201 and above', value: '201-9999' },
  ];

  // Function to check if user has active bookings
  const hasActiveBooking = () => {
    return userBookings.some(booking => {
      const bookingEndDate = new Date(booking.endDate);
      const today = new Date();
      return bookingEndDate > today;
    });
  };

  // Modified handleBookNow function
  const handleBookNow = (car) => {
    // First check if car is available
    if (!car.available) {
      setBookingError({
        carName: car.name,
        message: `This ${car.name} is not available until ${car.bookedUntil}. Please select another vehicle.`
      });
      setTimeout(() => setBookingError(null), 5000);
      return;
    }

    // Then check if user has active bookings
    if (hasActiveBooking()) {
      const activeBooking = userBookings.find(booking => {
        const bookingEndDate = new Date(booking.endDate);
        const today = new Date();
        return bookingEndDate > today;
      });

      setBookingError({
        carName: car.name,
        message: `You already have an active booking for ${activeBooking.carName} until ${new Date(activeBooking.endDate).toLocaleDateString()}. Please wait for your current booking to end before making a new one.`
      });
      setTimeout(() => setBookingError(null), 5000);
      return;
    }

    setSelectedCar(car);
    setIsModalOpen(true);
    setBookingError(null);
  };

  // Add function to handle successful booking
  const handleBookingSuccess = (bookingDetails) => {
    // Update the cars array with the new booking
    const updatedCars = cars.map(car => {
      if (car.name === selectedCar.name) {
        return {
          ...car,
          available: false,
          bookedUntil: new Date(bookingDetails.returnDate).toLocaleDateString()
        };
      }
      return car;
    });

    // Update the cars state
    setCars(updatedCars);

    // Add to user bookings
    setUserBookings([...userBookings, {
      carName: selectedCar.name,
      startDate: bookingDetails.pickupDate,
      endDate: bookingDetails.returnDate
    }]);

    // Close modal and clear selection
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  // Also, let's add a function to check if a booking has expired and update availability
  const checkAndUpdateBookings = () => {
    const today = new Date();
    const updatedCars = cars.map(car => {
      if (!car.available && car.bookedUntil) {
        const bookingEnd = new Date(car.bookedUntil);
        if (today > bookingEnd) {
          return {
            ...car,
            available: true,
            bookedUntil: null
          };
        }
      }
      return car;
    });
    setCars(updatedCars);
  };

  // Add useEffect to check bookings periodically
  useEffect(() => {
    checkAndUpdateBookings();
    const interval = setInterval(checkAndUpdateBookings, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Clear the selected car after a short delay to prevent UI flicker
    setTimeout(() => {
      setSelectedCar(null);
    }, 200);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop"
            alt="Luxury Cars" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Fleet</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Choose from our selection of premium vehicles
            </p>
          </div>
        </div>
      </section>

      <div className="section-container">
        {/* Add current booking status if exists */}
        {hasActiveBooking() && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-blue-500/10 border border-blue-500 rounded-lg"
          >
            <p className="text-blue-500">
              You have an active booking for {userBookings[userBookings.length - 1].carName} 
              until {new Date(userBookings[userBookings.length - 1].endDate).toLocaleDateString()}
            </p>
          </motion.div>
        )}

        {/* Search and Filter Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card p-6 rounded-xl mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                           text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                           focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={filters.type}
                onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                         text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                         focus:border-transparent transition-all duration-200"
              >
                <option value="all">All Types</option>
                {carTypes.map(type => (
                  <option key={type} value={type.toLowerCase()}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                         text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                         focus:border-transparent transition-all duration-200"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-gray-400">
            Found {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'}
          </div>
        </motion.div>

        {/* Add error message display */}
        {bookingError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg"
          >
            <p className="text-red-500">{bookingError.message}</p>
          </motion.div>
        )}

        {/* Cars Grid - Now using filteredCars instead of cars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass-card rounded-xl overflow-hidden hover-lift group
                  ${!car.available ? 'opacity-75' : ''}`}
              >
                {/* Car Image */}
                <div className="relative h-48">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-300 
                             group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">
                      ${car.price}/day
                    </span>
                    {!car.available && (
                      <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                        Booked
                      </span>
                    )}
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{car.name}</h3>
                    {!car.available && (
                      <span className="text-sm text-red-400">
                        Available from {car.bookedUntil}
                      </span>
                    )}
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Specs */}
                  <div className="flex items-center justify-between text-gray-400 mb-6">
                    <div className="flex items-center">
                      <FaCar className="mr-2" />
                      <span>{car.type}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCog className="mr-2" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>

                  {/* Modified Book Button */}
                  <button
                    onClick={() => handleBookNow(car)}
                    className={`w-full py-3 rounded-lg font-medium transition-colors duration-300
                      ${car.available 
                        ? 'bg-primary text-white hover:bg-primary-dark' 
                        : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                    disabled={!car.available}
                  >
                    {car.available ? 'Book Now' : 'Currently Unavailable'}
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              variants={itemVariants}
              className="col-span-full text-center text-gray-400 py-12"
            >
              <p className="text-xl">No cars found matching your criteria</p>
              <button
                onClick={() => {
                  setFilters({ type: 'all', priceRange: 'all' });
                  setSearchQuery('');
                }}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark 
                         transition-colors duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modified BookingModal component */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        car={selectedCar}
        onBookingSuccess={handleBookingSuccess}
      />
    </div>
  );
};

export default Cars; 