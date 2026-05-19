import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getBookings, cancelBooking, getBookingStatus } from '../data/bookings';
import { BookingCard } from '../components/BookingCard';
import { useToast } from '../context/ToastContext';

const tabs = [
  { key: 'active', label: 'Active' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'completed', label: 'Past' },
  { key: 'cancelled', label: 'Cancelled' },
];

const Bookings = () => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('active');
  const [bookings, setBookings] = useState([]);
  const [cancelConfirm, setCancelConfirm] = useState(null);

  useEffect(() => {
    const all = getBookings().map(b => ({ ...b, status: getBookingStatus(b) }));
    setBookings(all);
  }, []);

  const filtered = bookings.filter(b => b.status === activeTab);

  const handleCancel = (bookingId) => {
    setCancelConfirm(bookingId);
  };

  const confirmCancel = () => {
    if (cancelConfirm) {
      cancelBooking(cancelConfirm);
      const all = getBookings().map(b => ({ ...b, status: getBookingStatus(b) }));
      setBookings(all);
      setCancelConfirm(null);
      addToast('Booking cancelled successfully.', 'success');
    }
  };

  return (
    <div className="pt-28 min-h-screen">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label">Dashboard</p>
          <h1 className="section-title mb-4">My Bookings</h1>
          <p className="section-subtitle mx-auto">
            Manage your reservations and view your rental history.
          </p>
        </div>

        <div className="flex items-center gap-1 mb-10 border-b border-gold/10">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-300 relative ${
                activeTab === tab.key ? 'text-gold' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filtered.length > 0 ? (
            filtered.map(booking => (
              <BookingCard key={booking.id || booking.carName + booking.pickupDate} booking={booking} onCancel={handleCancel} />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-text-secondary mb-3">
                No {activeTab} bookings
              </p>
              <p className="text-text-muted text-sm font-light mb-6">
                {activeTab === 'active' && 'You have no active reservations right now.'}
                {activeTab === 'upcoming' && 'No upcoming reservations scheduled.'}
                {activeTab === 'completed' && 'Your completed rentals will appear here.'}
                {activeTab === 'cancelled' && 'No cancelled bookings.'}
              </p>
              <Link to="/cars" className="btn-outline text-xs">
                Browse Our Fleet
              </Link>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {cancelConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCancelConfirm(null)} />
            <motion.div className="relative luxury-card rounded-lg p-8 max-w-sm w-full" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
              <h3 className="font-display text-2xl text-text-primary mb-3">Cancel Booking?</h3>
              <p className="text-text-secondary text-sm font-light mb-8">
                This action cannot be undone. The vehicle will become available for other customers.
              </p>
              <div className="flex gap-3">
                <button onClick={() => setCancelConfirm(null)} className="btn-outline flex-1 rounded text-xs">
                  Keep Booking
                </button>
                <button onClick={confirmCancel} className="bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 flex-1 py-3 rounded text-xs font-semibold tracking-widest uppercase transition-colors">
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bookings;
