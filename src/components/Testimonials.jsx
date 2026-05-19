import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The most refined car rental experience I&apos;ve ever had. Every detail was considered, from the vehicle condition to the seamless handover.",
      name: "Alexandra Chen",
      role: "CEO, Luminary Ventures"
    },
    {
      quote: "DriveEase understands that luxury isn't just about the car — it's about the entire experience. Impeccable service from start to finish.",
      name: "James Whitfield",
      role: "Travel Editor, Condé Nast"
    },
    {
      quote: "I've rented from every premium service in the city. Nothing comes close to the attention to detail and personal touch here.",
      name: "Sophia Laurent",
      role: "Fashion Director"
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
          <h2 className="section-title">Client Voices</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="text-gold/30 text-6xl font-display mb-8 leading-none">&ldquo;</div>

          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-display text-2xl md:text-3xl text-text-primary italic leading-relaxed mb-8 font-light">
                  {testimonials[active].quote}
                </p>
                <div className="gold-divider mx-auto w-12 mb-6" />
                <p className="text-text-primary font-medium text-sm tracking-wide uppercase">
                  {testimonials[active].name}
                </p>
                <p className="text-text-muted text-sm mt-1 font-light">
                  {testimonials[active].role}
                </p>
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
