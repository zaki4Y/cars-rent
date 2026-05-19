import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaTimes, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import "react-datepicker/dist/react-datepicker.css";

const BookingModal = ({ isOpen, onClose, car, onBookingSuccess }) => {
  const { user } = useAuth();
  const [step, setStep] = useState('form');
  const [bookingData, setBookingData] = useState({
    pickupDate: new Date(),
    returnDate: new Date(),
    pickupLocation: '',
    pickupTime: '10:00',
    returnTime: '10:00',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const days = Math.max(1, Math.ceil((bookingData.returnDate - bookingData.pickupDate) / (1000 * 60 * 60 * 24)));
    const totalPrice = days * car.price;
    onBookingSuccess({ ...bookingData, days, totalPrice, userId: user?.id || null });
    setStep('success');
  };

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  const days = Math.max(0, Math.ceil((bookingData.returnDate - bookingData.pickupDate) / (1000 * 60 * 60 * 24)));
  const totalPrice = car ? days * car.price : 0;

  if (!car) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="relative w-full max-w-xl luxury-card rounded-lg max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={handleClose} className="absolute top-5 right-5 text-text-muted hover:text-text-primary transition-colors z-10">
              <FaTimes size={18} />
            </button>

            <div className="p-8">
              {step === 'success' ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <FaCheck className="text-gold text-2xl" />
                  </motion.div>
                  <h3 className="font-display text-3xl text-text-primary mb-3">Reservation Confirmed</h3>
                  <p className="text-text-secondary font-light mb-2">
                    Your {car.name} has been reserved.
                  </p>
                  <p className="text-gold text-sm mb-8">
                    Pickup: {new Date(bookingData.pickupDate).toLocaleDateString()} at {bookingData.pickupTime}
                  </p>
                  <div className="gold-divider mx-auto w-12 mb-8" />
                  <button onClick={handleClose} className="btn-primary rounded">
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-5 mb-8">
                    <img src={car.image} alt={car.name} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h3 className="font-display text-2xl text-text-primary">{car.name}</h3>
                      <p className="text-gold text-sm font-medium">${car.price} <span className="text-text-muted font-light">per day</span></p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Pickup Location</label>
                      <div className="relative">
                        <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                        <input
                          type="text"
                          value={bookingData.pickupLocation}
                          onChange={(e) => setBookingData({ ...bookingData, pickupLocation: e.target.value })}
                          className="input-luxury rounded pl-11"
                          placeholder="Enter pickup location"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Pickup Date</label>
                        <div className="relative">
                          <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40 z-10 pointer-events-none" />
                          <DatePicker
                            selected={bookingData.pickupDate}
                            onChange={(date) => setBookingData({ ...bookingData, pickupDate: date })}
                            minDate={new Date()}
                            className="input-luxury rounded pl-11"
                            dateFormat="MMMM d, yyyy"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Return Date</label>
                        <div className="relative">
                          <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40 z-10 pointer-events-none" />
                          <DatePicker
                            selected={bookingData.returnDate}
                            onChange={(date) => setBookingData({ ...bookingData, returnDate: date })}
                            minDate={bookingData.pickupDate}
                            className="input-luxury rounded pl-11"
                            dateFormat="MMMM d, yyyy"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Pickup Time</label>
                        <div className="relative">
                          <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                          <input type="time" value={bookingData.pickupTime} onChange={(e) => setBookingData({ ...bookingData, pickupTime: e.target.value })} className="input-luxury rounded pl-11" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Return Time</label>
                        <div className="relative">
                          <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                          <input type="time" value={bookingData.returnTime} onChange={(e) => setBookingData({ ...bookingData, returnTime: e.target.value })} className="input-luxury rounded pl-11" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-bg-subtle p-5 rounded border border-gold/5">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-text-secondary">Duration</span>
                        <span className="text-text-primary font-medium">{days} {days === 1 ? 'day' : 'days'}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-text-secondary">Rate</span>
                        <span className="text-text-primary font-medium">${car.price}/day</span>
                      </div>
                      <div className="gold-divider-left mb-3" />
                      <div className="flex justify-between">
                        <span className="text-text-primary font-medium">Total</span>
                        <span className="font-display text-2xl text-gold">${totalPrice}</span>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="btn-primary w-full rounded"
                    >
                      Confirm Reservation
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
