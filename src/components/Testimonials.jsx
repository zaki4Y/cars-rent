import { AnimatedTestimonials } from './ui/animated-testimonials';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Best car rental experience ever! The service was impeccable and the car was in perfect condition.",
      name: "John Smith",
      designation: "Business Executive",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "Incredibly smooth booking process and fantastic customer service. Will definitely use again!",
      name: "Sarah Johnson",
      designation: "Travel Blogger",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "The variety of cars and competitive prices make this my go-to rental service.",
      name: "Michael Chen",
      designation: "Tech Entrepreneur",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "Professional, reliable, and excellent value for money. Highly recommended!",
      name: "Emma Davis",
      designation: "Marketing Director",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "Outstanding fleet of vehicles and exceptional customer care. A five-star experience!",
      name: "David Wilson",
      designation: "Hotel Manager",
      src: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section className="section-padding glass-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">Hear from our satisfied customers</p>
        </div>
        
        <AnimatedTestimonials 
          testimonials={testimonials}
          autoplay={true}
          className="glass-card rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Testimonials;
