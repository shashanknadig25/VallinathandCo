import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Building2,
  Factory,
  ShoppingBag,
  Truck,
  Building,
  Laptop,
  Briefcase,
  Heart,
  GraduationCap,
} from 'lucide-react';

const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const industries = [
    {
      icon: Building2,
      title: 'Real Estate & Construction',
      description: 'Specialized financial services for property developers, construction firms, and real estate investors.',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Comprehensive accounting and tax solutions for manufacturing businesses.',
    },
    {
      icon: ShoppingBag,
      title: 'Retail & E-commerce',
      description: 'Financial advisory services tailored for modern retail businesses.',
    },
    {
      icon: Truck,
      title: 'Logistics & Transportation',
      description: 'Expert guidance for logistics companies and transportation services.',
    },
    {
      icon: Building,
      title: 'Banking & Finance',
      description: 'Specialized services for financial institutions and banking sector.',
    },
    {
      icon: Laptop,
      title: 'Technology & IT',
      description: 'Financial solutions for tech startups and established IT companies.',
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Tailored solutions for law firms, consultancies, and service providers.',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Financial management services for healthcare providers and facilities.',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Specialized financial services for educational institutions.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Expertise</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Specialized financial solutions across diverse industries, backed by years of experience
            and deep sector knowledge.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-navy mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-3">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Why Choose Our Industry Expertise</h2>
          <p className="section-subtitle text-center">
            Benefit from our deep understanding of industry-specific challenges and opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Sector-Specific Knowledge',
                description: 'Deep understanding of industry regulations, challenges, and best practices.',
              },
              {
                title: 'Customized Solutions',
                description: 'Tailored financial strategies that address your industry\'s unique needs.',
              },
              {
                title: 'Industry Network',
                description: 'Access to our extensive network of industry contacts and resources.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-navy mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Looking for Industry-Specific Solutions?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connect with our experts to discuss your industry's unique financial challenges
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;