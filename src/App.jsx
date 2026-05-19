import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { ProtectedRoute } from './context/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Bookings from './pages/Bookings';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiesPolicy from './pages/CookiesPolicy';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function AnimatedRoutes() {
  const location = useLocation();
  const knownPaths = ['/', '/cars', '/about', '/contact', '/login', '/register', '/my-bookings', '/profile', '/privacy', '/terms', '/cookies'];
  const isCarDetail = location.pathname.startsWith('/cars/') && location.pathname !== '/cars';
  const is404 = !knownPaths.includes(location.pathname) && !isCarDetail;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname + (is404 ? '-404' : '')}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {is404 ? (
          <NotFound />
        ) : (
          <>
            <Header />
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/cars/:id" element={<CarDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiesPolicy />} />
            </Routes>
            <Footer />
            <BackToTop />
          </>
        )}
      </motion.main>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastProvider>
          <AnimatedRoutes />
        </ToastProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
