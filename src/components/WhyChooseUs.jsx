import { motion } from 'framer-motion';
import { 
  FaCar, 
  FaMoneyBillWave, 
  FaHeadset, 
  FaCalendarCheck 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Premium Fleet",
      description: "Choose from our extensive collection of luxury and performance vehicles",
      icon: <FaCar className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Best Price Guarantee",
      description: "We offer competitive rates and match any comparable rental price",
      icon: <FaMoneyBillWave className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is always here to assist you anytime",
      icon: <FaHeadset className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Flexible Booking",
      description: "Easy modification and free cancellation up to 24 hours before pickup",
      icon: <FaCalendarCheck className="w-8 h-8" />,
      color: "from-red-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section-padding glass-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-description">Experience the difference with our premium car rental service</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="glass-card rounded-xl p-6 h-full hover-lift">
                {/* Icon Container */}
                <div className={`
                  w-16 h-16 mb-6 rounded-lg flex items-center justify-center
                  bg-gradient-to-br ${feature.color} shadow-lg
                  transform group-hover:scale-110 transition-transform duration-300
                `}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
