import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  BookOpen,
  FileText,
  Calculator,
  BarChart,
  Briefcase,
  Scale,
  MessageSquare
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const navigate = useNavigate();

  const services = [
    {
      icon: Building2,
      title: 'Startup Incorporation',
      description:
        'Complete assistance with company formation, registration, and compliance setup for new businesses.',
      features: [
        'Company Registration',
        'Compliance Setup',
        'Legal Documentation',
        'Business Structure Advisory',
      ],
      path: '/services/startup-incorporation',
    },
    {
      icon: BookOpen,
      title: 'Accounting Services',
      description:
        'Professional bookkeeping and accounting services to maintain accurate financial records.',
      features: [
        'Financial Statements',
        'Bookkeeping Services',
        'Payroll Processing',
        'Financial Reporting',
      ],
      path: '/services/accounting-services',
    },
    {
      icon: BarChart,
      title: 'Auditing & Assurance',
      description:
        'Comprehensive audit services ensuring accuracy, compliance, and identifying areas for improvement.',
      features: [
        'Statutory Audit',
        'Internal Audit',
        'Compliance Audit',
        'Risk Assessment',
      ],
      path: '/services/audit-assurance',
    },
    {
      icon: Calculator,
      title: 'Income Tax Planning and Filing',
      description:
        'Strategic tax planning and compliance services to optimize your tax position.',
      features: [
        'Personal & Business Tax Planning',
        'Tax Return Preparation',
        'Tax Audit Support',
        'International Tax Planning',
      ],
      path: '/services/tax-planning',
    },
    {
      icon: FileText,
      title: 'GST Compliance',
      description:
        'Complete GST services from registration to regular filing and compliance.',
      features: [
        'GST Registration',
        'Monthly/Quarterly Returns',
        'GST Audit',
        'GST Compliance Review',
      ],
      path: '/services/gst-services',
    },
    {
      icon: Briefcase,
      title: 'Business Advisory',
      description:
        'Expert financial advice and strategic guidance for business growth and success.',
      features: [
        'Business Planning',
        'Growth Strategy',
        'Risk Management',
        'Performance Optimization',
      ],
      path: '/services/business-advisory',
    },
    {
      icon: Scale,
      title: 'Income Tax and GST Litigations',
      description:
        'Professional representation and support for tax-related disputes and litigation.',
      features: [
        'Tax Dispute Resolution',
        'Appeal Representation',
        'Legal Documentation',
        'Compliance Defense',
      ],
      path: '/services/tax-litigation',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="section-title text-center">Our Services</h1>
          <p className="section-subtitle text-center">
            Comprehensive financial solutions tailored to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" ref={ref}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => navigate(service.path)}
                  className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-navy mb-6" />
                  <h3 className="text-xl font-semibold text-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-navy rounded-full mr-2" />
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
    </div>
  );
};

export default Services;