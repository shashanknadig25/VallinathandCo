import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Scale, 
  Shield, 
  FileText, 
  Gavel, 
  ArrowRight,
  CheckCircle,
  BookOpen,
  AlertTriangle,
  BarChart,
  Users,
  Clock,
  Award
} from 'lucide-react';

const TaxLitigation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Scale,
      title: 'Income Tax Dispute Resolution',
      description: 'Expert handling of income tax disputes and resolution with tax authorities.',
      features: [
        'Assessment proceedings',
        'Appeal representation',
        'Settlement facilitation',
        'Documentation support',
      ]
    },
    {
      icon: Shield,
      title: 'GST Litigation Support',
      description: 'Professional representation for GST-related disputes and appeals.',
      features: [
        'GST appeal handling',
        'Show cause notices',
        'Refund claims',
        'Dispute resolution',
      ]
    },
    {
      icon: FileText,
      title: 'Tax Notice Management',
      description: 'Comprehensive handling of tax notices and communications.',
      features: [
        'Notice interpretation',
        'Response preparation',
        'Follow-up management',
        'Compliance assurance',
      ]
    },
    {
      icon: Gavel,
      title: 'Legal Representation',
      description: 'Expert representation before various tax authorities and tribunals.',
      features: [
        'Tribunal representation',
        'Case preparation',
        'Legal documentation',
        'Hearing assistance',
      ]
    },
    {
      icon: BookOpen,
      title: 'Advisory Services',
      description: 'Preventive consultation and strategic tax planning advice.',
      features: [
        'Risk assessment',
        'Compliance review',
        'Strategic planning',
        'Prevention guidance',
      ]
    },
    {
      icon: BarChart,
      title: 'Tax Compliance Defense',
      description: 'Defense against tax compliance issues and penalties.',
      features: [
        'Penalty abatement',
        'Compliance defense',
        'Record maintenance',
        'Audit support',
      ]
    },
  ];

  const expertise = [
    {
      icon: Scale,
      title: 'Direct Tax Litigation',
      description: 'Expert handling of income tax disputes at all levels.',
    },
    {
      icon: Shield,
      title: 'Indirect Tax Disputes',
      description: 'Comprehensive support for GST and other indirect tax matters.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep tax litigation expertise.',
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management',
      description: 'Proactive approach to identify and mitigate tax risks.',
    },
  ];

  const benefits = [
    'Expert representation at all levels',
    'Comprehensive case preparation',
    'Strategic dispute resolution',
    'Minimized tax liability exposure',
    'Timely response to notices',
    'Prevention of future disputes',
    'Cost-effective solutions',
    'Peace of mind with expert handling',
  ];

  const stages = [
    {
      step: '01',
      title: 'Case Assessment',
      description: 'Thorough evaluation of the case and documentation',
      icon: Clock,
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Creating a robust legal and technical approach',
      icon: Shield,
    },
    {
      step: '03',
      title: 'Representation',
      description: 'Expert representation before authorities',
      icon: Gavel,
    },
    {
      step: '04',
      title: 'Resolution',
      description: 'Achieving favorable resolution of disputes',
      icon: Award,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tax Litigation Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Expert representation and support for all your tax-related disputes and litigation matters.
            Our experienced team helps you navigate complex tax laws and ensures your rights are protected.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Litigation Services</h2>
          <p className="section-subtitle text-center">
            Comprehensive support for all tax disputes and legal matters
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
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-navy mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Expertise</h2>
          <p className="section-subtitle text-center">
            Specialized knowledge in tax litigation matters
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <Icon className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Key Benefits</h2>
          <p className="section-subtitle text-center">
            Why choose our tax litigation services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-white rounded-lg shadow-lg"
              >
                <ArrowRight className="w-6 h-6 text-navy mr-4" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Litigation Process</h2>
          <p className="section-subtitle text-center">
            A systematic approach to tax dispute resolution
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {stage.step}
                </div>
                <stage.icon className="w-8 h-8 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{stage.title}</h3>
                <p className="text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with Tax Disputes?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our expert team for professional assistance with your tax litigation matters
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

export default TaxLitigation;