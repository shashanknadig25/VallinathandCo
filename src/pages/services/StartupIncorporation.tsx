import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Building2, FileCheck, Shield, Users, Target, ArrowRight } from 'lucide-react';

const StartupIncorporation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: FileCheck,
      title: 'Comprehensive Registration',
      description: 'Complete assistance with company registration, documentation, and legal compliance.',
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Ensuring all statutory requirements and regulations are met from day one.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Professional advice on business structure and incorporation strategy.',
    },
    {
      icon: Target,
      title: 'Future-Ready Setup',
      description: 'Strategic planning for scalable business growth and compliance.',
    },
  ];

  const deliverables = [
    'Company Registration Certificate',
    'PAN & TAN Registration',
    'GST Registration',
    'Bank Account Opening Assistance',
    'Compliance Calendar Setup',
    'Initial Statutory Registrations',
    'Director Identification Numbers (DIN)',
    'Digital Signature Certificates (DSC)',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Startup Incorporation Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive startup incorporation services to help you establish your business on a strong foundation. We handle all aspects of company formation, ensuring compliance and setting you up for success.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Key Benefits</h2>
          <p className="section-subtitle text-center">
            Why choose our incorporation services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-navy mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Process</h2>
          <p className="section-subtitle text-center">
            A streamlined approach to company incorporation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Understanding your business needs and objectives',
              },
              {
                step: '02',
                title: 'Documentation',
                description: 'Preparing and collecting required documents',
              },
              {
                step: '03',
                title: 'Registration',
                description: 'Filing for incorporation and registrations',
              },
              {
                step: '04',
                title: 'Compliance Setup',
                description: 'Setting up ongoing compliance systems',
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
            What you get with our incorporation service
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
            Ready to Start Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to begin your incorporation journey
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

export default StartupIncorporation;