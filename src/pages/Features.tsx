import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Database, 
  Globe, 
  Award, 
  Target,
  Settings,
  Users,
  TrendingUp,
  Shield
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Database,
      title: 'Data-Driven Insights',
      description: 'Leverage our advanced analytics to uncover patterns, solve challenges, and guide smarter financial decisions for your business.',
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Every client is unique, so we craft solutions that perfectly align with your goals and priorities, ensuring optimal results.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'With 21+ years of experience, we have consistently delivered results which build trust and drive long-term partnerships.',
    },
    {
      icon: Globe,
      title: 'Global Experience',
      description: 'Our global perspective combined with local knowledge ensures you get the right advice wherever you operate.',
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Comprehensive financial planning aligned with your business objectives.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to experienced professionals with diverse expertise.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focus',
      description: 'Solutions designed to drive sustainable business growth.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Proactive approach to identifying and mitigating financial risks.',
    },
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
            Features That Supercharge Your Business
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
            Explore our key features that empower your business with data-driven insights and expert solutions.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 
            className={`section-title text-center opacity-0 ${
              inView ? 'animate-fade-down' : ''
            }`}
            style={{ 
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }}
          >
            Core Features
          </h2>
          <p 
            className={`section-subtitle text-center opacity-0 ${
              inView ? 'animate-fade-up' : ''
            }`}
            style={{ 
              animationDelay: '0.3s',
              animationFillMode: 'forwards'
            }}
          >
            Discover how our features drive success for your business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-0 ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ 
                    animationDelay: `${0.4 + index * 0.2}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Icon className="w-12 h-12 text-navy" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 
            className={`section-title text-center opacity-0 ${
              inView ? 'animate-fade-down' : ''
            }`}
            style={{ 
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }}
          >
            Key Benefits
          </h2>
          <p 
            className={`section-subtitle text-center opacity-0 ${
              inView ? 'animate-fade-up' : ''
            }`}
            style={{ 
              animationDelay: '0.3s',
              animationFillMode: 'forwards'
            }}
          >
            How our features translate into tangible benefits
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 opacity-0 ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ 
                    animationDelay: `${0.4 + index * 0.2}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <Icon className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
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
            Ready to Experience These Features?
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
            Contact us today to see how our features can benefit your business
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

export default Features;