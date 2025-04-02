import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Senior Management',
      position: 'Real Estate Listed Company, India',
      content: "Shashank and the team at Vallinath and Co are very proactive with their work. They were able to draw key insights that our internal teams had missed out on. Whether it be advising on my business or my personal finances planning - they are the best at what they do.",
      rating: 5,
    },
    {
      name: 'Founder',
      position: 'Fast Growing Startup',
      content: "Vallinath and Shashank assisted me in incorporating my new startup. The teams' expertise in advising on our business model and strategic positioning has been invaluable for our startup.",
      rating: 5,
    },
    {
      name: 'HNI Client',
      position: 'Amsterdam',
      content: "The team's expertise in International Taxation has been crucial for my global operations. Their attention to detail and proactive reccomendations sets them apart from most service providers.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20">
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="section-title text-center">Client Testimonials</h1>
          <p className="section-subtitle text-center">
            What our clients say about our services
          </p>

          <div className="relative mt-16" ref={ref}>
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white p-10 rounded-2xl shadow-lg">
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-6 h-6 text-gold fill-current"
                            />
                          ))}
                        </div>
                        <blockquote className="text-xl text-gray-700 italic mb-8">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="border-t border-gray-200 pt-6">
                          <p className="text-xl font-semibold text-navy">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-navy' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Why Clients Trust Us</h2>
          <p className="section-subtitle text-center">
            Our commitment to excellence and client success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Expert Team',
                description: 'Highly qualified professionals with years of experience',
              },
              {
                title: 'Proven Track Record',
                description: 'Successfully serving clients since 1996',
              },
              {
                title: 'Client-Centric Approach',
                description: 'Tailored solutions for your specific needs',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and let us help you achieve your financial goals
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;