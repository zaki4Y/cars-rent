import { motion } from 'framer-motion';
import { FaCar } from 'react-icons/fa';

const Logo = ({ className = '' }) => {
  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light blur-sm opacity-75" />
        <div className="relative bg-black rounded-full p-2">
          <FaCar className="w-6 h-6 text-primary" />
        </div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
        DriveEase
      </span>
    </motion.div>
  );
};

export default Logo; 