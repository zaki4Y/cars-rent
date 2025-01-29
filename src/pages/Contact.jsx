import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      details: ['123 Business Avenue', 'New York, NY 10001'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      details: ['info@carrental.com', 'support@carrental.com'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 - 18:00', 'Sat - Sun: 10:00 - 16:00'],
      color: 'from-red-500 to-red-600'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch with us for any questions or assistance
            </p>
          </div>
        </div>
      </section>

      <div className="section-container">
        {/* Contact Information */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl text-center hover-lift"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center
                              bg-gradient-to-br ${info.color} text-white text-2xl`}>
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-400">{detail}</p>
              ))}
            </motion.div>
          ))}
        </motion.section>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="glass-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                             text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                             focus:border-transparent transition-all duration-200"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                             text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                             focus:border-transparent transition-all duration-200"
                  />
                </motion.div>
              </div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                           text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                           focus:border-transparent transition-all duration-200"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                           text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary
                           focus:border-transparent transition-all duration-200"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-lg font-medium
                           hover:bg-primary-dark transition-colors duration-300"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="glass-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Find Us</h2>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564658846!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              />
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                         text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 