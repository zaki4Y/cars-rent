import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { updateUser } from '../data/users';
import { getBookingsByUserId, getBookingStatus } from '../data/bookings';
import { useToast } from '../context/ToastContext';
import { FiCalendar, FiKey, FiCheckCircle, FiLogOut, FiGrid, FiEdit2, FiSave, FiX } from 'react-icons/fi';
import SEO from '../components/SEO';

const AnimatedCounter = ({ target, duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
};

const Profile = () => {
  const { user, logout } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ name: user?.name || '', phone: user?.phone || '' });

  if (!user) {
    navigate('/login');
    return null;
  }

  const allBookings = getBookingsByUserId(user.id).map(b => ({ ...b, status: getBookingStatus(b) }));
  const activeBookings = allBookings.filter(b => b.status === 'active' || b.status === 'upcoming');
  const completedBookings = allBookings.filter(b => b.status === 'completed');
  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  const handleSave = () => {
    updateUser(user.id, formData);
    setEditing(false);
    addToast('Profile updated successfully.', 'success');
  };

  const handleCancel = () => {
    setFormData({ name: user.name, phone: user.phone || '' });
    setEditing(false);
  };

  const handleLogout = () => {
    logout();
    addToast('Signed out successfully.', 'info');
    navigate('/');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="pt-28 min-h-screen pb-20">
      <SEO
        title="My Profile — DriveEase"
        description="Manage your DriveEase profile, view account details, and track your booking history."
        noindex
      />
      <div className="section-container max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Hero Identity */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="profile-monogram flex-shrink-0">
              {initials}
            </div>
            <div className="flex-1">
              <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-2">{user.name}</h1>
              <p className="text-text-secondary font-light mb-3">{user.email}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-semibold tracking-wider uppercase">Member</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
            <div className="profile-stat-card">
              <div className="profile-action-icon mx-auto mb-3">
                <FiCalendar size={18} />
              </div>
              <p className="font-display text-3xl text-gold mb-1">
                <AnimatedCounter target={allBookings.length} />
              </p>
              <p className="text-text-muted text-xs font-semibold tracking-widest uppercase">Total</p>
            </div>
            <div className="profile-stat-card">
              <div className="profile-action-icon mx-auto mb-3">
                <FiKey size={18} />
              </div>
              <p className="font-display text-3xl text-gold mb-1">
                <AnimatedCounter target={activeBookings.length} />
              </p>
              <p className="text-text-muted text-xs font-semibold tracking-widest uppercase">Active</p>
            </div>
            <div className="profile-stat-card">
              <div className="profile-action-icon mx-auto mb-3">
                <FiCheckCircle size={18} />
              </div>
              <p className="font-display text-3xl text-gold mb-1">
                <AnimatedCounter target={completedBookings.length} />
              </p>
              <p className="text-text-muted text-xs font-semibold tracking-widest uppercase">Completed</p>
            </div>
          </motion.div>

          {/* Membership Card */}
          <motion.div variants={itemVariants} className="profile-membership-card">
            <div className="corner-accent top-left" />
            <div className="corner-accent top-right" />
            <div className="corner-accent bottom-left" />
            <div className="corner-accent bottom-right" />

            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl text-text-primary">Personal Information</h2>
              {!editing ? (
                <button
                  onClick={() => setEditing(true)}
                  className="flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase hover:text-gold-light transition-colors"
                >
                  <FiEdit2 size={12} />
                  Edit
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 text-text-muted text-xs font-semibold tracking-widest uppercase hover:text-text-secondary transition-colors"
                  >
                    <FiX size={12} />
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase hover:text-gold-light transition-colors"
                  >
                    <FiSave size={12} />
                    Save
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-0">
              <div className="profile-field-row">
                <span className="profile-field-label">Full Name</span>
                {editing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-luxury rounded text-right w-48"
                  />
                ) : (
                  <span className="profile-field-value">{user.name}</span>
                )}
              </div>

              <div className="profile-field-row">
                <span className="profile-field-label">Email</span>
                <span className="profile-field-value">{user.email}</span>
              </div>

              <div className="profile-field-row">
                <span className="profile-field-label">Phone</span>
                {editing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-luxury rounded text-right w-48"
                    placeholder="Not provided"
                  />
                ) : (
                  <span className="profile-field-value">{user.phone || 'Not provided'}</span>
                )}
              </div>

              <div className="profile-field-row">
                <span className="profile-field-label">Member Since</span>
                <span className="profile-field-value">
                  {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/my-bookings" className="profile-action-card">
              <div className="profile-action-icon">
                <FiCalendar size={18} />
              </div>
              <div>
                <p className="text-text-primary text-sm font-medium">My Bookings</p>
                <p className="text-text-muted text-xs">View reservations</p>
              </div>
            </Link>

            <Link to="/cars" className="profile-action-card">
              <div className="profile-action-icon">
                <FiGrid size={18} />
              </div>
              <div>
                <p className="text-text-primary text-sm font-medium">Browse Fleet</p>
                <p className="text-text-muted text-xs">Explore vehicles</p>
              </div>
            </Link>

            <button onClick={handleLogout} className="profile-action-card">
              <div className="profile-action-icon" style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                <FiLogOut size={18} />
              </div>
              <div>
                <p className="text-red-400 text-sm font-medium">Sign Out</p>
                <p className="text-text-muted text-xs">End session</p>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
