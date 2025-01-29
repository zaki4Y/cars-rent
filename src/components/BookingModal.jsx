import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaTimes, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import "react-datepicker/dist/react-datepicker.css";

const BookingModal = ({ isOpen, onClose, car, onBookingSuccess }) => {
  const [bookingData, setBookingData] = useState({
    pickupDate: new Date(),
    returnDate: new Date(),
    pickupLocation: '',
    pickupTime: '10:00',
    returnTime: '10:00',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call onBookingSuccess with the booking details
    onBookingSuccess({
      ...bookingData,
      pickupDate: bookingData.pickupDate,
      returnDate: bookingData.returnDate
    });
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Calculate total price only if car exists
  const days = Math.ceil(
    (bookingData.returnDate - bookingData.pickupDate) / (1000 * 60 * 60 * 24)
  );
  const totalPrice = car ? days * car.price : 0;

  // Don't render anything if no car is selected
  if (!car) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes size={24} />
            </button>

            <div className="p-6">
              {/* Car Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">{car.name}</h3>
                  <p className="text-gray-400">${car.price} per day</p>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={bookingData.pickupLocation}
                      onChange={(e) => setBookingData({ ...bookingData, pickupLocation: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                               text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                               focus:border-transparent transition-all duration-200"
                      placeholder="Enter pickup location"
                      required
                    />
                  </div>
                </div>

                {/* Dates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pickup Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Pickup Date
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <DatePicker
                        selected={bookingData.pickupDate}
                        onChange={(date) => setBookingData({ ...bookingData, pickupDate: date })}
                        minDate={new Date()}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                                 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                                 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Return Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Return Date
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <DatePicker
                        selected={bookingData.returnDate}
                        onChange={(date) => setBookingData({ ...bookingData, returnDate: date })}
                        minDate={bookingData.pickupDate}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                                 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                                 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Pickup Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Pickup Time
                    </label>
                    <div className="relative">
                      <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="time"
                        value={bookingData.pickupTime}
                        onChange={(e) => setBookingData({ ...bookingData, pickupTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                                 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                                 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Return Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Return Time
                    </label>
                    <div className="relative">
                      <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="time"
                        value={bookingData.returnTime}
                        onChange={(e) => setBookingData({ ...bookingData, returnTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                                 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                                 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Days</span>
                    <span className="text-white font-medium">{days}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Price per day</span>
                    <span className="text-white font-medium">${car.price}</span>
                  </div>
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total</span>
                      <span className="text-white font-bold">${totalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-primary text-white rounded-lg font-medium
                           hover:bg-primary-dark transition-colors duration-300"
                >
                  Confirm Booking
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal; 