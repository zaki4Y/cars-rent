import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCar, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: 'Cars in Fleet', value: '100+', icon: <FaCar />, color: 'from-blue-500 to-blue-600' },
    { label: 'Happy Clients', value: '5000+', icon: <FaUsers />, color: 'from-green-500 to-green-600' },
    { label: 'Years Experience', value: '10+', icon: <FaShieldAlt />, color: 'from-purple-500 to-purple-600' },
    { label: 'Awards Won', value: '15+', icon: <FaAward />, color: 'from-red-500 to-red-600' },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      bio: 'With over 15 years in the automotive industry, John leads our vision for premium car rentals.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
      bio: 'Sarah ensures smooth operations and exceptional service delivery across all locations.'
    },
    {
      name: 'Michael Chen',
      role: 'Fleet Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
      bio: 'Michael oversees our premium fleet, ensuring every vehicle meets our high standards.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury cars" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Delivering premium car rental experiences since 2014
            </p>
          </div>
        </div>
      </section>

      <div className="section-container">
        {/* Mission Statement */}
        <motion.section 
          className="glass-card p-8 rounded-2xl mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At CarRental, we're committed to providing exceptional car rental experiences through 
              our premium fleet, outstanding service, and innovative solutions. We believe in making 
              luxury accessible and every journey memorable.
            </p>
          </motion.div>
        </motion.section>

        {/* Stats */}
        <motion.section 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl text-center hover-lift"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center
                                bg-gradient-to-br ${stat.color} text-white text-2xl`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-gray-400 
                         bg-clip-text text-transparent mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl overflow-hidden hover-lift group"
              >
                <div className="relative h-64">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 
                             group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 