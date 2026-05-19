import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="border-t border-gold/10">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Logo className="mb-6" />
            <p className="text-text-secondary text-sm font-light leading-relaxed max-w-xs">
              Making premium car rental effortless. Every journey, curated with care.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Fleet', path: '/cars' },
                { name: 'My Bookings', path: '/my-bookings' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-text-secondary text-sm font-light">
              <li>123 Avenue Road</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@driveease.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
              Newsletter
            </h4>
            <p className="text-text-secondary text-sm font-light mb-4">
              Exclusive offers and fleet updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="input-luxury rounded-l rounded-r-none text-sm"
              />
              <button className="btn-primary rounded-l-none text-xs px-5">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="gold-divider mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs font-light">
            &copy; 2026 DriveEase. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-text-muted hover:text-gold text-xs transition-colors">Privacy</Link>
            <Link to="/terms" className="text-text-muted hover:text-gold text-xs transition-colors">Terms</Link>
            <Link to="/cookies" className="text-text-muted hover:text-gold text-xs transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
