import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import SEO from '../components/SEO';

const Contact = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Location', details: ['123 Avenue Road', 'New York, NY 10001'] },
    { icon: <FaPhone />, title: 'Phone', details: ['+1 (555) 123-4567', '+1 (555) 765-4321'] },
    { icon: <FaEnvelope />, title: 'Email', details: ['hello@driveease.com', 'support@driveease.com'] },
    { icon: <FaClock />, title: 'Hours', details: ['Mon – Fri: 9:00 – 18:00', 'Sat – Sun: 10:00 – 16:00'] },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="pt-28 min-h-screen">
      <SEO
        title="Contact DriveEase — Book Your Premium Car Rental"
        description="Get in touch with DriveEase. Call +1 (555) 123-4567, email hello@driveease.com, or visit us at 123 Avenue Road, New York. Open Mon-Fri 9AM-6PM, weekends 10AM-4PM."
        keywords="contact DriveEase, car rental phone number, car rental New York address, book luxury car"
      />
      <div className="section-container">
        {/* Page header */}
        <div className="text-center mb-20">
          <p className="section-label">Get in Touch</p>
          <h1 className="section-title mb-6">Contact DriveEase</h1>
          <p className="section-subtitle mx-auto">
            We&apos;re here to assist with any inquiries about our fleet or services.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/5 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-bg p-8 text-center group hover:bg-surface transition-colors duration-500"
            >
              <div className="text-gold/70 text-xl mb-4 group-hover:text-gold transition-colors duration-300">
                {info.icon}
              </div>
              <h3 className="font-display text-lg text-text-primary mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-text-secondary text-sm font-light">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card rounded-lg p-8 md:p-10"
          >
            <h2 className="font-display text-2xl text-text-primary mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">First Name</label>
                  <input type="text" className="input-luxury rounded" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Last Name</label>
                  <input type="text" className="input-luxury rounded" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Email</label>
                <input type="email" className="input-luxury rounded" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">Message</label>
                <textarea rows={5} className="input-luxury rounded resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full rounded">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card rounded-lg overflow-hidden"
          >
            <div className="p-6 pb-4">
              <h2 className="font-display text-2xl text-text-primary">Find Us</h2>
            </div>
            <div className="w-full h-[360px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564658846!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.7)' }}
                sandbox="allow-scripts allow-same-origin"
                referrerPolicy="no-referrer"
                allow="fullscreen"
                loading="lazy"
                title="Our Location"
              />
            </div>
          </motion.div>
        </div>

        {/* Social */}
        <div className="text-center pb-20">
          <h2 className="font-display text-2xl text-text-primary mb-8">Follow Us</h2>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/50 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
