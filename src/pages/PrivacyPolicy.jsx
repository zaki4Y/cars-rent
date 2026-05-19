import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="pt-28 min-h-screen">
      <SEO
        title="Privacy Policy — DriveEase"
        description="DriveEase privacy policy. Learn how we collect, use, and protect your personal information."
        noindex
      />
      <div className="section-container max-w-3xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-8">Privacy Policy</h1>
          <div className="gold-divider mb-8" />
          <p className="text-text-muted text-sm mb-12">Last updated: May 19, 2026</p>

          <div className="space-y-10 text-text-secondary font-light leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly, including your name, email address, phone number, driver&apos;s license details, and payment information when you create an account or make a reservation. We also automatically collect certain information when you use our service, such as IP address, browser type, device information, and usage data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to process your reservations, verify your identity, communicate with you about bookings and account updates, improve our services and website, send promotional communications (with your consent), and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your data with trusted service providers who assist in operating our business, such as payment processors and booking management systems. We may also disclose information when required by law or to protect our rights and safety.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your personal information, including encryption of sensitive data, secure server infrastructure, and regular security assessments. While we strive to protect your data, no method of electronic transmission or storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to access, correct, or delete your personal data at any time through your account settings or by contacting us. You may also opt out of marketing communications by clicking the unsubscribe link in any email. California residents have additional rights under the CCPA, and EU residents have rights under the GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">6. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information for as long as your account is active or as needed to provide services, comply with legal obligations, resolve disputes, and enforce our agreements. Inactive accounts may be deleted after 24 months.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this privacy policy or our data practices, please contact us at privacy@driveease.com or write to us at 123 Avenue Road, New York, NY 10001.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
