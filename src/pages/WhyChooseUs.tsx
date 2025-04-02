import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Globe, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      title: 'Dynamic Team',
      description: 'We are a dynamic team of over 30+ professionals each with dynamic expertise across accounting, audit, tax, GST, corporate & legal compliance, financial management, business planning & advisory.',
      icon: Users,
    },
    {
      title: 'Proven Track Record',
      description: '5000+ clients happily served. We have worked with startups that have grown to great heights, as a trusted tax & compliance advisors.',
      icon: Award,
    },
    {
      title: 'Strong Reputation',
      description: 'Our strong reputation is built on delivering high quality services. We bring a wealth of experience in accounting, auditing, taxation, business planning, regulatory compliance, offers expert consultancy advisory solution.',
      icon: Globe,
    },
  ];

  const keyPoints = [
    'Comprehensive financial solutions',
    'Industry-specific expertise',
    'Personalized service approach', 
    'Innovative technology integration',
    'Proactive risk management',
    'Continuous support and guidance',
    'Regular updates and reporting',
    'Strategic growth planning',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 
            className={`text-4xl md:text-5xl font-bold mb-6 opacity-0 ${
              inView ? 'animate-fade-down' : ''
            }`}
            style={{ 
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }}
          >
            Why Choose Us?
          </h1>
          <p 
            className={`text-xl text-gray-200 max-w-2xl opacity-0 ${
              inView ? 'animate-fade-up' : ''
            }`}
            style={{ 
              animationDelay: '0.4s',
              animationFillMode: 'forwards'
            }}
          >
            Discover why leading businesses trust us as their financial advisory partner
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-0 ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ 
                    animationDelay: `${0.2 + index * 0.2}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <Icon className="w-12 h-12 text-navy mb-6" />
                  <h3 className="text-xl font-semibold text-navy mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 
            className={`section-title text-center mb-12 opacity-0 ${
              inView ? 'animate-fade-down' : ''
            }`}
            style={{ 
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }}
          >
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-center p-4 bg-white rounded-lg shadow-lg opacity-0 ${
                  inView ? 'animate-fade-up' : ''
                }`}
                style={{ 
                  animationDelay: `${0.4 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <CheckCircle className="w-6 h-6 text-navy mr-3 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 opacity-0 ${
              inView ? 'animate-fade-down' : ''
            }`}
            style={{ 
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }}
          >
            Ready to Experience the Difference?
          </h2>
          <p 
            className={`text-xl text-gray-200 mb-8 max-w-2xl mx-auto opacity-0 ${
              inView ? 'animate-fade-up' : ''
            }`}
            style={{ 
              animationDelay: '0.3s',
              animationFillMode: 'forwards'
            }}
          >
            Contact us today to discuss how we can help your business thrive
          </p>
          <a
            href="/contact"
            className={`inline-block bg-white text-navy px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors opacity-0 ${
              inView ? 'animate-fade-up' : ''
            }`}
            style={{ 
              animationDelay: '0.4s',
              animationFillMode: 'forwards'
            }}
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;