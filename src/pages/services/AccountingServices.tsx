import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calculator, FileText, PieChart, BarChart, ArrowRight } from 'lucide-react';

const AccountingServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Calculator,
      title: 'Bookkeeping',
      description: 'Accurate recording of daily financial transactions and maintenance of books of accounts.',
    },
    {
      icon: FileText,
      title: 'Financial Statements',
      description: 'Preparation of balance sheets, profit & loss statements, and cash flow statements.',
    },
    {
      icon: PieChart,
      title: 'Management Accounts',
      description: 'Detailed financial reports and analysis for better business decision-making.',
    },
    {
      icon: BarChart,
      title: 'Financial Analysis',
      description: 'In-depth analysis of financial data to identify trends and opportunities.',
    },
  ];

  const deliverables = [
    'Monthly Financial Statements',
    'Bank Reconciliation Statements',
    'Accounts Receivable/Payable Management',
    'Payroll Processing',
    'Expense Tracking',
    'Financial Reports',
    'Cash Flow Management',
    'Budget Preparation and Monitoring',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Accounting Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional accounting services to maintain accurate financial records and provide valuable insights for your business growth. Our comprehensive solutions ensure compliance while supporting informed decision-making.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Accounting Solutions</h2>
          <p className="section-subtitle text-center">
            Comprehensive accounting services tailored to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
          <h2 className="section-title text-center">Our Process</h2>
          <p className="section-subtitle text-center">
            A systematic approach to financial management
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Data Collection',
                description: 'Gathering and organizing financial information',
              },
              {
                step: '02',
                title: 'Processing',
                description: 'Recording and categorizing transactions',
              },
              {
                step: '03',
                title: 'Analysis',
                description: 'Reviewing and analyzing financial data',
              },
              {
                step: '04',
                title: 'Reporting',
                description: 'Generating comprehensive financial reports',
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
            What you receive with our accounting services
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
            Need Professional Accounting Services?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can help manage your financial records
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default AccountingServices;