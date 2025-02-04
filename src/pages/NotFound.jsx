import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="error-page">
      <header className="top-header"></header>
      
      {/* Dust particles */}
      <div className="dust-container">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      {/* Lamp */}
      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>

      {/* Error Content */}
      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <motion.h1 
              className="message__title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              404
            </motion.h1>
            <motion.h2 
              className="message__title"
              style={{ fontSize: '2.5rem', paddingBottom: '20px' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Page Not Found
            </motion.h2>
            <motion.p 
              className="message__text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're sorry, the page you were looking for isn't found here. 
              The link you followed may either be broken or no longer exists.
            </motion.p>
          </div>
          <motion.div 
            className="error__nav e-nav"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/" className="e-nav__link">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hide header and footer */}
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