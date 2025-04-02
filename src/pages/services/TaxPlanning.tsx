import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calculator, Shield, FileCheck, TrendingUp, Globe, ArrowRight } from 'lucide-react';

const TaxPlanning = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Calculator,
      title: 'Personal Tax Planning',
      description: 'Strategic tax planning for individuals to optimize tax positions and ensure compliance.',
    },
    {
      icon: Shield,
      title: 'Corporate Tax Planning',
      description: 'Comprehensive tax strategies for businesses to maximize efficiency and minimize liability.',
    },
    {
      icon: FileCheck,
      title: 'Tax Compliance',
      description: 'Ensuring adherence to tax regulations and timely filing of returns.',
    },
    {
      icon: Globe,
      title: 'International Taxation',
      description: 'Expert guidance on cross-border transactions and international tax implications.',
    },
    {
      icon: TrendingUp,
      title: 'Tax Advisory',
      description: 'Ongoing tax consultation and advisory services for strategic decision-making.',
    },
  ];

  const deliverables = [
    'Tax Planning Strategy Document',
    'Tax Return Preparation',
    'Tax Compliance Calendar',
    'Tax Health Check Reports',
    'Advance Tax Computation',
    'Tax Optimization Recommendations',
    'International Tax Structure',
    'Regular Tax Updates and Alerts',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Income Tax Planning Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Strategic tax planning and compliance services to optimize your tax position while ensuring full regulatory compliance. Our expert team provides comprehensive solutions for both individuals and businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Tax Solutions</h2>
          <p className="section-subtitle text-center">
            Comprehensive tax planning services tailored to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-navy mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Tax Planning Process</h2>
          <p className="section-subtitle text-center">
            A systematic approach to optimize your tax position
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluating current tax position',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing tax optimization plan',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Executing tax planning measures',
              },
              {
                step: '04',
                title: 'Monitoring',
                description: 'Ongoing review and adjustments',
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Service Deliverables</h2>
          <p className="section-subtitle text-center">
            What you receive with our tax planning services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-white rounded-lg shadow-lg"
              >
                <ArrowRight className="w-6 h-6 text-navy mr-4" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Tax Position?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our tax experts for a personalized consultation
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default TaxPlanning;