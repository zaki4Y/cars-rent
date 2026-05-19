import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaUser, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowUserMenu(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/cars' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md py-4 border-b border-gold/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm font-medium tracking-wide uppercase group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  <span className="text-gold font-medium">{user.name.split(' ')[0]}</span>
                  <span className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                    <FaUser size={12} />
                  </span>
                </button>

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-3 w-52 luxury-card rounded-lg overflow-hidden shadow-xl"
                    >
                      <Link to="/profile" className="flex items-center gap-3 px-5 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors" onClick={() => setShowUserMenu(false)}>
                        <FaUser size={14} className="text-gold/60" /> Profile
                      </Link>
                      <Link to="/my-bookings" className="flex items-center gap-3 px-5 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors" onClick={() => setShowUserMenu(false)}>
                        <FaCalendarAlt size={14} className="text-gold/60" /> My Bookings
                      </Link>
                      <div className="gold-divider" />
                      <button onClick={() => { logout(); setShowUserMenu(false); }} className="flex items-center gap-3 px-5 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-surface-hover transition-colors w-full">
                        <FaSignOutAlt size={14} /> Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/login" className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium tracking-wide uppercase">
                Sign In
              </Link>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('search-form')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#search-form';
                }
              }}
              className="btn-primary text-xs"
            >
              Book Now
            </motion.button>
          </div>

          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-bg/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-text-secondary hover:text-text-primary py-3 text-sm font-medium tracking-wide uppercase transition-colors border-b border-gold/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="text-text-secondary hover:text-text-primary py-3 text-sm font-medium tracking-wide uppercase transition-colors border-b border-gold/5" onClick={() => setIsOpen(false)}>
                    Profile
                  </Link>
                  <Link to="/my-bookings" className="text-text-secondary hover:text-text-primary py-3 text-sm font-medium tracking-wide uppercase transition-colors border-b border-gold/5" onClick={() => setIsOpen(false)}>
                    My Bookings
                  </Link>
                  <button onClick={() => { logout(); setIsOpen(false); }} className="text-red-400 hover:text-red-300 py-3 text-sm font-medium tracking-wide uppercase transition-colors text-left">
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-gold hover:text-gold-light py-3 text-sm font-medium tracking-wide uppercase transition-colors border-b border-gold/5" onClick={() => setIsOpen(false)}>
                  Sign In
                </Link>
              )}

              <button
                className="btn-primary w-full mt-2 text-xs"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
