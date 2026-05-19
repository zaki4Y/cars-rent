import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I rent a car?",
      answer: "Simply browse our collection, select your preferred vehicle and dates, then complete the booking form. Our concierge team will confirm your reservation within the hour."
    },
    {
      question: "What documents are required?",
      answer: "A valid driver's license, credit card in the primary driver's name, and proof of insurance. International clients may require an International Driving Permit."
    },
    {
      question: "Is insurance included?",
      answer: "Comprehensive insurance is included with every rental. Additional coverage options are available for enhanced peace of mind."
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer: "Reservations may be modified or cancelled without charge up to 24 hours before the scheduled pickup time."
    },
    {
      question: "What is your fuel policy?",
      answer: "All vehicles are provided with a full tank and should be returned the same way. This ensures transparent and fair pricing for all clients."
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="section-padding">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label">FAQ</p>
          <h2 className="section-title mb-4">Common Questions</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about renting with DriveEase.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`faq-card ${isActive ? 'active' : ''}`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="flex items-center gap-4 w-full text-left"
                >
                  <span className="faq-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-display text-xl text-text-primary group-hover:text-gold transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <div className="faq-icon">
                    <motion.span
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm"
                    >
                      +
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 pl-[64px]">
                        <p className="text-text-secondary font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
