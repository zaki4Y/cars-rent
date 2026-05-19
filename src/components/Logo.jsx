import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex flex-col ${className}`}>
      <motion.span
        className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-text-primary"
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        DriveEase
      </motion.span>
      <div className="h-px w-full bg-gold/40 mt-0.5" />
    </Link>
  );
};

export default Logo;
