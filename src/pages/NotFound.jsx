import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="error-page">
      <div className="error-page__number">404</div>

      <div className="error-page__content">
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Page Not Found
        </motion.p>

        <motion.h1
          className="error-page__title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The road you&apos;re looking for<br />doesn&apos;t exist.
        </motion.h1>

        <motion.p
          className="error-page__text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The page you&apos;re looking for may have been moved, renamed, or no longer exists. Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/" className="btn-outline">
            Return Home
          </Link>
        </motion.div>
      </div>

      <style>{`
        #root > div > header,
        #root > div > footer {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
