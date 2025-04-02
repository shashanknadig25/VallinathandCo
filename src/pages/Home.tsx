import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  FileCheck,
  Award,
  ChevronRight,
  ChevronLeft,
  Building2,
  Factory,
  ShoppingBag,
  FileText,
  Calculator,
  BarChart,
  BookOpen,
  Briefcase,
  Phone,
  Mail,
  Calendar,
  Star,
  User,
  Flag,
  Target,
  TrendingUp,
  CheckCircle,
  Building,
  UserPlus,
  RefreshCw,
  MapPin,
  Clock,
  Globe,
  Store,
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [timelineInView, setTimelineInView] = useState(Array(10).fill(false));
  const timelineRefs = Array(10).fill(null).map(() => React.useRef(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          const index = timelineRefs.findIndex(ref => ref.current === target);
          if (index !== -1) {
            setTimelineInView(prev => {
              const newState = [...prev];
              newState[index] = entry.isIntersecting;
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px',
      }
    );

    timelineRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'Startup Incorporation',
      description: 'Complete assistance with company formation and registration',
      link: '/services/startup-incorporation'
    },
    {
      icon: Calculator,
      title: 'Tax Planning',
      description: 'Strategic tax planning and compliance services',
      link: '/services/tax-planning'
    },
    {
      icon: FileText,
      title: 'GST Services',
      description: 'Complete GST registration and filing support',
      link: '/services/gst-services'
    },
    {
      icon: BarChart,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring compliance',
      link: '/services/audit-assurance'
    }
  ];

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

  const clientele = [
    {
      icon: Globe,
      title: 'Foreign Entities',
      description: 'Expert guidance for international businesses operating in India, including cross-border taxation, transfer pricing, and regulatory compliance.',
    },
    {
      icon: Building2,
      title: 'Large Corporations',
      description: 'Comprehensive financial advisory and compliance services for established corporations, ensuring strategic growth and regulatory adherence.',
    },
    {
      icon: Store,
      title: 'SMEs',
      description: 'Tailored solutions for small and medium enterprises, focusing on business growth, tax optimization, and operational efficiency.',
    },
    {
      icon: Users,
      title: 'Individuals',
      description: 'Personalized tax planning and wealth management services for high-net-worth individuals and professionals.',
    },
  ];

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextService, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
                Your Trusted Financial & Tax Advisory Partner
              </h1>
              <p className="text-lg md:text-xl text-gray-200 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Expert guidance for your business success since 1996
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-navy"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Service Carousel */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 animate-fade-left" style={{ animationDelay: '0.4s' }}>
              <div className="overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out flex"
                  style={{ transform: `translateX(-${currentServiceIndex * 100}%)` }}
                >
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="text-white">
                          <Icon className="w-12 h-12 mb-4" />
                          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                          <p className="text-gray-200 mb-6">{service.description}</p>
                          <Link
                            to={service.link}
                            className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
                          >
                            Learn More
                            <ChevronRight className="ml-2 w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={prevService}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <div className="flex gap-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentServiceIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentServiceIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextService}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-light hidden md:block">
            <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-1 h-3 bg-white rounded-full animate-slide-down"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Building2, 
                count: '2500+',
                label: 'Companies Registered',
                delay: 0 
              },
              { 
                icon: FileCheck, 
                count: '10000+',
                label: 'Audits Completed',
                delay: 200 
              },
              { 
                icon: FileText, 
                count: '5000+',
                label: 'GST Registrations',
                delay: 400 
              }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ animationDelay: `${stat.delay}ms` }}
                >
                  <Icon className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-navy mb-2">
                    {stat.count}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center animate-fade-up">Our Journey of Excellence</h2>
          <p className="section-subtitle text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Three decades of growth, innovation, and trusted service since 1994
          </p>

          <div className="relative mt-20">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-navy/20"></div>

            <div className="space-y-16">
              {[
                {
                  year: '1994',
                  date: '06/09/1994',
                  icon: Flag,
                  title: 'Foundation',
                  description: 'Vallinath and Co founded',
                  position: 'left',
                },
                {
                  year: '1995',
                  icon: UserPlus,
                  title: 'Partnership Growth',
                  description: 'Induction of Partner Sham Sunder K',
                  position: 'right',
                },
                {
                  year: '1996',
                  icon: Building,
                  title: 'First Office',
                  description: 'Opening of Malleshwaram Office',
                  position: 'left',
                },
                {
                  year: '2001',
                  icon: MapPin,
                  title: 'Expansion',
                  description: 'Opening of 2nd Malleshwaram Office',
                  position: 'right',
                },
                {
                  year: '2005',
                  icon: Users,
                  title: 'Team Growth',
                  description: 'Office grows to 25 members',
                  position: 'left',
                },
                {
                  year: '2008',
                  icon: Users,
                  title: 'Further Growth',
                  description: 'Office grows to 50 members',
                  position: 'right',
                },
                {
                  year: '2009',
                  icon: Building,
                  title: 'Third Office',
                  description: 'Opening of 3rd Malleshwaram Office',
                  position: 'left',
                },
                {
                  year: '2015',
                  icon: RefreshCw,
                  title: 'Strategic Shift',
                  description: 'Regrouped and refocused areas of services',
                  position: 'right',
                },
                {
                  year: '2019',
                  icon: Building,
                  title: 'New Location',
                  description: 'Opening of new Rajajinagar Office',
                  position: 'left',
                },
                {
                  year: '2023',
                  icon: UserPlus,
                  title: 'New Partnership',
                  description: 'Induction of Partner Shashank Nadig',
                  position: 'right',
                },
              ].map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="relative" ref={timelineRefs[index]}>
                    <div className={`flex items-center justify-between ${
                      milestone.position === 'left' ? 'flex-row' : 'flex-row-reverse'
                    }`}>
                      {/* Content */}
                      <div className={`w-5/12 ${milestone.position === 'left' ? 'text-right' : 'text-left'}`}>
                        <div className={`transform transition-all duration-1000 ${
                          timelineInView[index] 
                            ? 'opacity-100 translate-x-0' 
                            : milestone.position === 'left' 
                              ? 'opacity-0 -translate-x-16' 
                              : 'opacity-0 translate-x-16'
                        }`}>
                          <div className={`flex items-center ${milestone.position === 'left' ? 'justify-end' : 'justify-start'} mb-2`}>
                            <span className={`text-navy font-bold text-2xl transform transition-all duration-800 ${
                              timelineInView[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`}>
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold text-navy mb-2 transform transition-all duration-800 delay-100 ${
                            timelineInView[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}>
                            {milestone.title}
                          </h3>
                          <p className={`text-gray-600 transform transition-all duration-800 delay-200 ${
                            timelineInView[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}>
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                        <div className={`w-12 h-12 rounded-full bg-navy flex items-center justify-center transform transition-all duration-800 ${
                          timelineInView[index] 
                            ? 'opacity-100 scale-100 rotate-0' 
                            : 'opacity-0 scale-50 rotate-180'
                        }`}>
                          <Icon className={`w-6 h-6 text-white transform transition-all duration-500 ${
                            timelineInView[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                          }`} />
                        </div>
                      </div>

                      {/* Empty space for the other side */}
                      <div className="w-5/12"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center" ref={ref}>
            <h2 className={`section-title ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
              Our Services
            </h2>
            <p className={`section-subtitle ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Building2,
                title: 'Startup Incorporation',
                description: 'Complete assistance with company formation and registration',
                link: '/services',
                animation: 'slide-in-left'
              },
              {
                icon: BookOpen,
                title: 'Accounting Services',
                description: 'Professional bookkeeping and accounting solutions',
                link: '/services',
                animation: 'scale-up'
              },
              {
                icon: BarChart,
                title: 'Auditing & Assurance',
                description: 'Comprehensive audit services ensuring compliance',
                link: '/services/audit-assurance',
                animation: 'slide-in-right'
              },
              {
                icon: Calculator,
                title: 'Income Tax Planning',
                description: 'Strategic tax planning and compliance services',
                link: '/services/tax-planning',
                animation: 'slide-in-left'
              },
              {
                icon: FileText,
                title: 'GST Compliance',
                description: 'Complete GST registration and filing support',
                link: '/services/gst-services',
                animation: 'scale-up'
              },
              {
                icon: Briefcase,
                title: 'Business Advisory',
                description: 'Expert guidance for business growth and success',
                link: '/services/business-advisory',
                animation: 'slide-in-right'
              }
            ].map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
          
          <div className={`text-center mt-12 ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <Link to="/services" className="btn-primary inline-flex items-center group">
              View All Services
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Industries We Serve</h2>
          <p className="section-subtitle text-center">
            Specialized expertise across diverse sectors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Building2, title: 'Real Estate' },
              { icon: Factory, title: 'Manufacturing' },
              { icon: ShoppingBag, title: 'Retail & E-commerce' },
              { icon: Briefcase, title: 'Professional Services' },
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={index}
                  to="/industries"
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center group"
                >
                  <Icon className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-navy group-hover:text-navy/80">{industry.title}</h3>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/industries" className="btn-secondary inline-flex items-center group">
              Explore All Industries
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Clientele Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Clientele</h2>
          <p className="section-subtitle text-center">
            Trusted by diverse clients across different sectors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {clientele.map((client, index) => {
              const Icon = client.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-navy" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-4">{client.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{client.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Client Testimonials</h2>
          <p className="section-subtitle text-center">
            What our clients say about our services
          </p>

          <div className="relative mt-16 max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
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
              onClick={() => setCurrentTestimonialIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentTestimonialIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
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
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonialIndex ? 'bg-navy' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-secondary inline-flex items-center group">
              View All Testimonials
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with the latest insights, news, and expert advice
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Contact us today for a free consultation and discover how we can help your business thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>+91 9880851333</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>Contact@vallinathandco.com</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <Link
                to="/contact"
                className="inline-block bg-white text-navy px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;