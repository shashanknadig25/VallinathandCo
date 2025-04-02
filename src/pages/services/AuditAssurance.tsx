import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, Shield, FileCheck, Eye, PieChart, ArrowRight } from 'lucide-react';

const AuditAssurance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Search,
      title: 'Statutory Audit',
      description: 'Comprehensive audit services ensuring compliance with legal requirements and regulations.',
    },
    {
      icon: Shield,
      title: 'Internal Audit',
      description: 'Detailed evaluation of internal controls, processes, and risk management systems.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Audit',
      description: 'Verification of adherence to regulatory requirements and industry standards.',
    },
    {
      icon: Eye,
      title: 'Due Diligence',
      description: 'Thorough investigation and analysis for mergers, acquisitions, and investments.',
    },
    {
      icon: PieChart,
      title: 'Risk Assessment',
      description: 'Identification and evaluation of business risks and control measures.',
    },
  ];

  const deliverables = [
    'Audit Reports and Certificates',
    'Management Letter with Recommendations',
    'Internal Control Evaluation Reports',
    'Compliance Status Reports',
    'Risk Assessment Documentation',
    'Process Improvement Suggestions',
    'Financial Statement Analysis',
    'Regulatory Compliance Review',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Audit & Assurance Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive audit and assurance services to ensure accuracy, compliance, and business efficiency. Our expert team provides thorough evaluations and valuable insights for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Audit Solutions</h2>
          <p className="section-subtitle text-center">
            Professional audit services tailored to your needs
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
          <h2 className="section-title text-center">Our Audit Process</h2>
          <p className="section-subtitle text-center">
            A systematic approach to ensure thorough evaluation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Planning',
                description: 'Understanding scope and objectives',
              },
              {
                step: '02',
                title: 'Execution',
                description: 'Detailed testing and analysis',
              },
              {
                step: '03',
                title: 'Evaluation',
                description: 'Assessment of findings',
              },
              {
                step: '04',
                title: 'Reporting',
                description: 'Comprehensive report preparation',
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
            What you receive with our audit services
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
            Ready for Professional Audit Services?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our expert team to discuss your audit requirements
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

export default AuditAssurance;