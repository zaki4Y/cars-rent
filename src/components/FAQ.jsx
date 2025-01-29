import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I rent a car?",
      answer: "Renting a car is easy! Simply browse our selection, choose your dates, and complete the booking form. We'll handle the rest."
    },
    {
      question: "What documents do I need?",
      answer: "You'll need a valid driver's license, credit card, and proof of insurance. International renters may need additional documentation."
    },
    {
      question: "Is insurance included?",
      answer: "Basic insurance is included in all rentals. Additional coverage options are available for extra peace of mind."
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer: "Yes, you can modify or cancel your reservation up to 24 hours before pickup without any fees."
    },
    {
      question: "What's your fuel policy?",
      answer: "We provide cars with a full tank, and we ask that you return them with a full tank. This ensures fair pricing for all customers."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="section-padding glass-card">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">Find answers to common questions about our car rental service</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-lg overflow-hidden hover-lift"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex justify-between items-center w-full p-4 text-left text-white hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="transform"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;