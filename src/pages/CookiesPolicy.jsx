import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const CookiesPolicy = () => {
  return (
    <div className="pt-28 min-h-screen">
      <SEO
        title="Cookies Policy — DriveEase"
        description="DriveEase cookies policy. Learn about the cookies we use and how you can manage them."
        noindex
      />
      <div className="section-container max-w-3xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-8">Cookies Policy</h1>
          <div className="gold-divider mb-8" />
          <p className="text-text-muted text-sm mb-12">Last updated: May 19, 2026</p>

          <div className="space-y-10 text-text-secondary font-light leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">1. What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files stored on your device when you visit our website. They help us provide a better experience by remembering your preferences, keeping you signed in, and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">2. Cookies We Use</h2>
              <p className="mb-4">
                <strong className="text-text-primary">Essential cookies</strong> are required for the website to function properly. These include authentication cookies that keep you signed in and session cookies that maintain your booking progress.
              </p>
              <p className="mb-4">
                <strong className="text-text-primary">Analytics cookies</strong> help us understand how visitors interact with our website by collecting anonymous usage data. This information is used to improve our site and services.
              </p>
              <p className="mb-4">
                <strong className="text-text-primary">Preference cookies</strong> remember your settings such as language, region, and display preferences to provide a personalized experience.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">3. Third-Party Cookies</h2>
              <p className="mb-4">
                We may use services from third parties that set their own cookies. These include Google Analytics for website analytics and Google Maps for location services. We do not control these cookies and recommend reviewing the respective privacy policies of these providers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">4. Managing Cookies</h2>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings. You can typically find these settings in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. Note that disabling essential cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">5. How Long We Keep Cookies</h2>
              <p className="mb-4">
                Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you manually delete them. Authentication cookies expire after 30 days of inactivity.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-4">6. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at privacy@driveease.com or write to us at 123 Avenue Road, New York, NY 10001.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
