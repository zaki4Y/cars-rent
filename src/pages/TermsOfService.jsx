import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <div className="pt-28 min-h-screen">
      <SEO
        title="Terms of Service — DriveEase"
        description="DriveEase terms of service. Read our rental agreement, policies, and user obligations."
        noindex
      />
      <div className="section-container max-w-3xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-8">Terms of Service</h1>
          <div className="gold-divider mb-8" />
          <p className="text-text-muted text-sm mb-12">Last updated: May 19, 2026</p>

          <div className="space-y-10 text-text-secondary font-light leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using the DriveEase website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services. We reserve the right to modify these terms at any time, and continued use constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">2. Eligibility</h2>
              <p className="mb-4">
                To rent a vehicle through DriveEase, you must be at least 21 years of age, hold a valid driver&apos;s license issued in your country of residence for a minimum of one year, possess a valid credit card in your name, and have a clean driving record with no major violations in the past three years.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">3. Reservations and Payments</h2>
              <p className="mb-4">
                Reservations are confirmed upon receipt of a valid credit card authorization. Prices displayed on our website include base rental rates and standard insurance. Additional charges may apply for optional coverage, late returns, fuel replacement, tolls, and traffic violations. Payment is processed at the time of vehicle pickup.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">4. Cancellation Policy</h2>
              <p className="mb-4">
                Reservations may be cancelled without charge up to 24 hours before the scheduled pickup time. Cancellations made within 24 hours of pickup may be subject to a fee equivalent to one day&apos;s rental. No-shows will be charged the full reservation amount.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">5. Vehicle Use</h2>
              <p className="mb-4">
                Vehicles may only be operated by the registered renter and any additional drivers listed on the rental agreement. Use of vehicles for racing, off-road driving, towing, or any illegal activity is strictly prohibited. Vehicles must be returned in the same condition as received, normal wear excepted.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">6. Insurance and Liability</h2>
              <p className="mb-4">
                Comprehensive insurance is included with every rental, covering collision damage and third-party liability. A deductible applies to all claims. Renters are responsible for damage resulting from negligence, unauthorized use, or violation of these terms. Additional coverage options are available at pickup.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">7. Fuel Policy</h2>
              <p className="mb-4">
                All vehicles are provided with a full tank of fuel and must be returned with a full tank. Failure to refuel will result in a refueling charge at prevailing market rates plus a service fee.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                DriveEase shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific rental giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">9. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of New York. Any disputes shall be resolved in the courts of New York County.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
