import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The most refined car rental experience I&apos;ve ever had. Rented the Mercedes S-Class for a week and every detail was considered — from the pristine vehicle condition to the seamless handover at JFK. Will absolutely be returning.",
      name: "Alexandra Chen",
      role: "CEO, Luminary Ventures",
      car: "Mercedes-Benz S-Class",
      date: "March 2026",
      rating: 5,
    },
    {
      quote: "DriveEase understands that luxury isn&apos;t just about the car — it&apos;s about the entire experience. The Porsche 911 GT3 was delivered to my hotel in perfect condition. Impeccable service from start to finish.",
      name: "James Whitfield",
      role: "Travel Editor, Condé Nast Traveler",
      car: "Porsche 911 GT3",
      date: "February 2026",
      rating: 5,
    },
    {
      quote: "I&apos;ve rented from every premium service in the city. Nothing comes close to the attention to detail here. The Range Rover Velar was spotless, fully fueled, and ready exactly when promised. The concierge team was incredibly responsive.",
      name: "Sophia Laurent",
      role: "Fashion Director, Vogue",
      car: "Range Rover Velar",
      date: "January 2026",
      rating: 5,
    },
    {
      quote: "Booked the BMW M4 for a weekend track day. The car was in phenomenal condition — clearly well maintained between rentals. The transparent pricing was refreshing. No surprise fees, no hidden charges. Exactly what they quoted online.",
      name: "Marcus Rivera",
      role: "Automotive Journalist",
      car: "BMW M4",
      date: "April 2026",
      rating: 5,
    },
    {
      quote: "My family needed the BMW X7 for a week-long trip upstate. Seven seats, plenty of space, and the kids loved the panoramic roof. DriveEase made the whole process effortless. The free cancellation policy gave us peace of mind when our plans changed.",
      name: "Emily Nakamura",
      role: "Architect, Foster + Partners",
      car: "BMW X7",
      date: "December 2025",
      rating: 5,
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="text-gold/30 text-6xl font-display mb-8 leading-none">&ldquo;</div>

          <div className="relative min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <FaStar key={i} className="text-gold text-sm" />
                  ))}
                </div>
                <p className="font-display text-xl md:text-2xl text-text-primary italic leading-relaxed mb-8 font-light">
                  {testimonials[active].quote}
                </p>
                <div className="gold-divider mx-auto w-12 mb-6" />
                <p className="text-text-primary font-medium text-sm tracking-wide uppercase">
                  {testimonials[active].name}
                </p>
                <p className="text-text-muted text-sm mt-1 font-light">
                  {testimonials[active].role}
                </p>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <span className="text-xs text-gold/60 bg-gold/5 px-3 py-1 rounded-sm border border-gold/10">
                    {testimonials[active].car}
                  </span>
                  <span className="text-xs text-text-muted">
                    {testimonials[active].date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-8 h-px transition-all duration-500 ${
                  index === active ? 'bg-gold' : 'bg-gold/20'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
