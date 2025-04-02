import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  ClipboardCheck, 
  BarChart, 
  BookOpen, 
  Scale, 
  HelpCircle, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileSearch,
  RefreshCw,
  Shield
} from 'lucide-react';

const GSTServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FileText,
      title: 'GST Registration',
      description: 'Complete assistance with GST registration process and documentation.',
      features: [
        'New registration application',
        'Documentation support',
        'Registration amendments',
        'Cancellation of registration',
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'GST Returns Filing',
      description: 'Timely and accurate filing of monthly, quarterly, and annual GST returns.',
      features: [
        'GSTR-1 filing',
        'GSTR-3B filing',
        'Annual returns',
        'Reconciliation statements',
      ]
    },
    {
      icon: BarChart,
      title: 'GST Compliance',
      description: 'Ensuring full compliance with GST regulations and requirements.',
      features: [
        'Compliance review',
        'Risk assessment',
        'Internal audit',
        'Compliance calendar',
      ]
    },
    {
      icon: BookOpen,
      title: 'GST Advisory',
      description: 'Expert advice on GST implications and planning strategies.',
      features: [
        'Transaction structuring',
        'Rate classification',
        'Input tax credit optimization',
        'Industry-specific solutions',
      ]
    },
    {
      icon: Scale,
      title: 'GST Audit Support',
      description: 'Comprehensive support during GST audits and assessments.',
      features: [
        'Audit preparation',
        'Documentation management',
        'Reply to notices',
        'Assessment support',
      ]
    },
    {
      icon: HelpCircle,
      title: 'GST Consultation',
      description: 'Personalized consultation for complex GST matters.',
      features: [
        'Expert opinions',
        'Industry-specific guidance',
        'Process optimization',
        'Compliance strategy',
      ]
    },
  ];

  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Complex Compliance Requirements',
      description: 'Navigate through intricate GST compliance requirements with our expert guidance.',
    },
    {
      icon: FileSearch,
      title: 'Documentation Management',
      description: 'Efficient handling of extensive documentation and record-keeping requirements.',
    },
    {
      icon: RefreshCw,
      title: 'Regular Updates',
      description: 'Stay current with frequent changes in GST laws and regulations.',
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Identify and address potential GST-related risks before they become issues.',
    },
  ];

  const benefits = [
    'Timely compliance with GST regulations',
    'Optimization of input tax credit',
    'Reduced risk of penalties',
    'Expert handling of notices and audits',
    'Regular compliance updates',
    'Dedicated support team',
    'Industry-specific solutions',
    'Process automation recommendations',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GST Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive GST solutions to ensure compliance and optimize your business operations.
            Our expert team provides end-to-end GST services tailored to your specific industry needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our GST Solutions</h2>
          <p className="section-subtitle text-center">
            Comprehensive GST services tailored to your business needs
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

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Common GST Challenges</h2>
          <p className="section-subtitle text-center">
            We help you overcome complex GST-related challenges
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <Icon className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
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
            Why choose our GST services
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
          <h2 className="section-title text-center">Our GST Process</h2>
          <p className="section-subtitle text-center">
            A systematic approach to GST compliance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluating current GST status and requirements',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Developing comprehensive compliance strategy',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Executing GST processes and filings',
              },
              {
                step: '04',
                title: 'Monitoring',
                description: 'Ongoing compliance and optimization',
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

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with GST Compliance?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get expert assistance for all your GST-related requirements
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

export default GSTServices;