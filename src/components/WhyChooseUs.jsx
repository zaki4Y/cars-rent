import { motion } from 'framer-motion';
import { FaCar, FaMoneyBillWave, FaHeadset, FaCalendarCheck } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Premium Fleet",
      description: "An extensive collection of luxury and performance vehicles, meticulously maintained.",
      icon: <FaCar />,
    },
    {
      title: "Best Price Guarantee",
      description: "Competitive rates with a price-match promise on any comparable rental.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "24/7 Concierge",
      description: "A dedicated team available around the clock for seamless assistance.",
      icon: <FaHeadset />,
    },
    {
      title: "Flexible Booking",
      description: "Free modification and cancellation up to 24 hours before pickup.",
      icon: <FaCalendarCheck />,
    }
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label">The Experience</p>
          <h2 className="section-title">Why DriveEase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-bg p-8 md:p-10 group hover:bg-surface transition-colors duration-500"
            >
              <div className="text-gold/70 text-2xl mb-6 group-hover:text-gold transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
