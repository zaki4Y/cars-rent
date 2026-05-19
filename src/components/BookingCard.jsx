import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getCarById } from '../data/cars';

const statusStyles = {
  active: { bg: 'bg-gold/10', text: 'text-gold', border: 'border-gold/30', label: 'Active' },
  upcoming: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30', label: 'Upcoming' },
  completed: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30', label: 'Completed' },
  cancelled: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30', label: 'Cancelled' },
};

export function BookingCard({ booking, onCancel }) {
  const car = getCarById(booking.carId);
  const status = statusStyles[booking.status] || statusStyles.completed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="luxury-card rounded-lg overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Car image */}
        <div className="md:w-48 h-40 md:h-auto flex-shrink-0">
          {car ? (
            <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-bg-subtle flex items-center justify-center text-text-muted text-xs">
              Image unavailable
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display text-xl text-text-primary">
                {car ? car.name : booking.carName}
              </h3>
              <p className="text-text-muted text-sm mt-0.5">
                {booking.id ? `Booking #${booking.id.slice(-8).toUpperCase()}` : booking.carName}
              </p>
            </div>
            <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-sm border ${status.bg} ${status.text} ${status.border}`}>
              {status.label}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-text-muted text-[0.65rem] font-semibold uppercase tracking-wider mb-1">Pickup</p>
              <p className="text-text-primary text-sm">{new Date(booking.pickupDate).toLocaleDateString()}</p>
              <p className="text-text-muted text-xs">{booking.pickupTime}</p>
            </div>
            <div>
              <p className="text-text-muted text-[0.65rem] font-semibold uppercase tracking-wider mb-1">Return</p>
              <p className="text-text-primary text-sm">{new Date(booking.returnDate).toLocaleDateString()}</p>
              <p className="text-text-muted text-xs">{booking.returnTime}</p>
            </div>
            <div>
              <p className="text-text-muted text-[0.65rem] font-semibold uppercase tracking-wider mb-1">Location</p>
              <p className="text-text-primary text-sm">{booking.pickupLocation || 'N/A'}</p>
            </div>
            <div>
              <p className="text-text-muted text-[0.65rem] font-semibold uppercase tracking-wider mb-1">Total</p>
              <p className="font-display text-xl text-gold">${booking.totalPrice || 0}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {car && (
              <Link to={`/cars/${car.slug}`} className="btn-outline text-xs py-2.5">
                View Car
              </Link>
            )}
            {(booking.status === 'active' || booking.status === 'upcoming') && onCancel && (
              <button
                onClick={() => onCancel(booking.id)}
                className="text-red-400 hover:text-red-300 text-xs font-medium tracking-wide uppercase transition-colors px-4 py-2.5 border border-red-500/20 rounded hover:border-red-500/40"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
