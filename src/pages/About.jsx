import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
  const stats = [
    { label: 'Vehicles in Fleet', value: '100+' },
    { label: 'Clients Served', value: '5,000+' },
    { label: 'Years of Excellence', value: '10+' },
    { label: 'Industry Awards', value: '15+' },
  ];

  const team = [
    { name: 'John Smith', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop', bio: '15 years in the automotive industry, leading our vision for premium rentals.' },
    { name: 'Sarah Johnson', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', bio: 'Ensures smooth operations and exceptional service across all locations.' },
    { name: 'Michael Chen', role: 'Fleet Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', bio: 'Oversees our premium fleet, ensuring every vehicle meets our standards.' },
  ];

  return (
    <div className="pt-28 min-h-screen">
      <SEO
        title="About DriveEase — 10+ Years of Premium Car Rental"
        description="Learn about DriveEase, New York's premier car rental service. Over 100 luxury vehicles, 5,000+ satisfied clients, and a decade of automotive excellence."
        keywords="about DriveEase, car rental company New York, luxury rental service, premium car rental history"
        canonical="https://driveease.com/about"
      />
      <div className="section-container">
        {/* Page header */}
        <div className="text-center mb-20">
          <p className="section-label">Our Story</p>
          <h1 className="section-title mb-6">About DriveEase</h1>
          <p className="section-subtitle mx-auto">
            Delivering premium car rental experiences since 2014. We believe luxury should be effortless.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/5 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-bg p-8 md:p-10 text-center"
            >
              <p className="font-display text-4xl md:text-5xl text-gold mb-2">{stat.value}</p>
              <p className="text-text-secondary text-xs font-medium tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <div className="gold-divider mx-auto w-16 mb-8" />
          <p className="font-display text-2xl md:text-3xl text-text-primary italic leading-relaxed font-light">
            At DriveEase, we&apos;re committed to providing exceptional car rental experiences through our premium fleet, outstanding service, and innovative solutions. We believe in making luxury accessible and every journey memorable.
          </p>
          <div className="gold-divider mx-auto w-16 mt-8" />
        </motion.div>

        {/* Team */}
        <div className="mb-20">
          <p className="section-label text-center">The Team</p>
          <h2 className="section-title text-center mb-16">Meet Our People</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="luxury-card rounded-lg overflow-hidden group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-text-primary mb-1">{member.name}</h3>
                  <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">{member.role}</p>
                  <p className="text-text-secondary text-sm font-light leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
