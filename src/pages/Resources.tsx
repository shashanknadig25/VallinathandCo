import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react';

const Resources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resources = [
    {
      category: 'Tax Guides',
      items: [
        {
          title: 'Income Tax Filing Guide 2024',
          description: 'Comprehensive guide for filing income tax returns',
          type: 'PDF',
        },
        {
          title: 'GST Compliance Handbook',
          description: 'Complete guide to GST registration and filing',
          type: 'PDF',
        },
        {
          title: 'International Tax Planning',
          description: 'Guide to international tax regulations and planning',
          type: 'PDF',
        },
      ],
    },
    {
      category: 'Business Resources',
      items: [
        {
          title: 'Starting a Business Checklist',
          description: 'Essential steps for new business setup',
          type: 'PDF',
        },
        {
          title: 'Financial Planning Templates',
          description: 'Excel templates for business financial planning',
          type: 'Excel',
        },
        {
          title: 'Audit Preparation Guide',
          description: 'How to prepare for business audits',
          type: 'PDF',
        },
      ],
    },
    {
      category: 'Latest Updates',
      items: [
        {
          title: 'Tax Law Changes 2024',
          description: 'Summary of recent tax law updates',
          type: 'Article',
        },
        {
          title: 'Budget Impact Analysis',
          description: 'Analysis of the latest budget implications',
          type: 'Article',
        },
        {
          title: 'Regulatory Changes',
          description: 'Recent changes in financial regulations',
          type: 'Article',
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Downloads</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Access our comprehensive collection of guides, templates, and updates to help you
            navigate financial matters effectively.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          {resources.map((category, index) => (
            <div
              key={index}
              className={`mb-16 ${inView ? 'animate-fade-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="text-2xl font-bold text-navy mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-navy mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                        <span className="inline-block bg-navy/10 text-navy text-sm px-3 py-1 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      {item.type === 'Article' ? (
                        <ExternalLink className="w-6 h-6 text-navy flex-shrink-0" />
                      ) : (
                        <Download className="w-6 h-6 text-navy flex-shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge Center */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Knowledge Center</h2>
          <p className="section-subtitle text-center">
            Stay informed with our latest publications and research
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: FileText,
                title: 'Publications',
                description: 'Access our library of professional publications and whitepapers.',
              },
              {
                icon: BookOpen,
                title: 'Research Papers',
                description: 'In-depth research on various financial and tax topics.',
              },
              {
                icon: Download,
                title: 'Templates',
                description: 'Download useful templates for business and tax planning.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <Icon className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to receive the latest updates, guides, and resources
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 w-full"
              />
              <button
                type="submit"
                className="bg-white text-navy px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;