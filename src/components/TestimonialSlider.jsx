import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Business Traveler",
      content: "Best car rental service I've ever used. The process was smooth and the car was in perfect condition.",
      image: "/images/testimonials/user1.jpg"
    },
    // Add more testimonials...
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="testimonial-slider"
    >
      {testimonials.map(testimonial => (
        <SwiperSlide key={testimonial.id}>
          <div className="p-8 text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
