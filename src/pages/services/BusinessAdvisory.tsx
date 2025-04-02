import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Target, 
  Briefcase, 
  LineChart, 
  Users, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  PieChart,
  BarChart2,
  Shuffle,
  GitMerge,
  Clock,
  Award
} from 'lucide-react';

const BusinessAdvisory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: TrendingUp,
      title: 'Business Growth Strategy',
      description: 'Strategic planning for sustainable business growth and expansion.',
      features: [
        'Market analysis',
        'Growth roadmap',
        'Performance metrics',
        'Implementation plan',
      ]
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Improving operational efficiency and financial performance.',
      features: [
        'Process optimization',
        'Cost reduction',
        'Revenue enhancement',
        'KPI monitoring',
      ]
    },
    {
      icon: Briefcase,
      title: 'Business Restructuring',
      description: 'Expert guidance on business restructuring and reorganization.',
      features: [
        'Organization design',
        'Process reengineering',
        'Change management',
        'Implementation support',
      ]
    },
    {
      icon: LineChart,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning and forecasting services.',
      features: [
        'Budgeting',
        'Cash flow planning',
        'Investment strategy',
        'Risk assessment',
      ]
    },
    {
      icon: Users,
      title: 'Succession Planning',
      description: 'Strategic succession planning for business continuity.',
      features: [
        'Leadership assessment',
        'Transition planning',
        'Training programs',
        'Implementation support',
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Guidance on business innovation and transformation.',
      features: [
        'Digital transformation',
        'Innovation strategy',
        'Technology adoption',
        'Change management',
      ]
    },
  ];

  const expertise = [
    {
      icon: PieChart,
      title: 'Strategic Planning',
      description: 'Developing comprehensive business strategies aligned with your goals.',
    },
    {
      icon: BarChart2,
      title: 'Performance Analysis',
      description: 'In-depth analysis of business performance and improvement opportunities.',
    },
    {
      icon: Shuffle,
      title: 'Process Optimization',
      description: 'Streamlining operations for maximum efficiency and productivity.',
    },
    {
      icon: GitMerge,
      title: 'Change Management',
      description: 'Guiding organizations through successful transformations.',
    },
  ];

  const benefits = [
    'Enhanced business performance',
    'Improved operational efficiency',
    'Strategic growth planning',
    'Risk mitigation strategies',
    'Innovation and transformation',
    'Sustainable business practices',
    'Competitive advantage',
    'Long-term value creation',
  ];

  const industries = [
    'Manufacturing',
    'Technology',
    'Healthcare',
    'Retail & E-commerce',
    'Financial Services',
    'Professional Services',
    'Real Estate',
    'Education',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Advisory Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Strategic business advisory solutions to drive growth, optimize performance, and achieve
            your business objectives. Our expert team provides comprehensive guidance tailored to
            your specific industry needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Advisory Solutions</h2>
          <p className="section-subtitle text-center">
            Comprehensive business advisory services tailored to your needs
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
            Areas where we excel in delivering value
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
            Why choose our business advisory services
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Industries We Serve</h2>
          <p className="section-subtitle text-center">
            Our expertise spans across various sectors
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all"
              >
                <span className="text-navy font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Advisory Process</h2>
          <p className="section-subtitle text-center">
            A systematic approach to business transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Understanding your business needs and objectives',
                icon: Clock,
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing comprehensive solutions',
                icon: Target,
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Executing planned initiatives',
                icon: GitMerge,
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous improvement and refinement',
                icon: Award,
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <phase.icon className="w-8 h-8 text-navy mx-auto mb-4" />
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
            Transform Your Business Today
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Partner with our expert advisors to achieve your business goals
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

export default BusinessAdvisory;