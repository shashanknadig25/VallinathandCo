import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ChevronRight, Tag, Search, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the New Tax Reforms 2024',
      excerpt: 'A comprehensive guide to the latest tax reforms and how they affect your business operations and financial planning strategies.',
      content: `The landscape of taxation is continuously evolving, and 2024 brings significant changes that businesses need to understand and adapt to. This comprehensive guide breaks down the key reforms and their implications.

Key Changes in 2024:
• Updated tax slabs and rates
• New compliance requirements
• Digital taxation initiatives
• Changes in deduction schemes

Impact on Businesses:
The new reforms introduce several changes that directly impact business operations, from reporting requirements to tax calculation methodologies. Understanding these changes is crucial for maintaining compliance and optimizing tax positions.

Strategic Considerations:
1. Review your current tax planning strategies
2. Update compliance procedures
3. Implement new documentation requirements
4. Consider technology upgrades for tax management

We recommend businesses take a proactive approach to these changes by conducting a thorough review of their tax positions and consulting with tax professionals to ensure proper implementation of the new requirements.`,
      author: 'CA Shashank Nadig',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Tax Updates',
      tags: ['Tax Reform', 'Business Tax', 'Compliance'],
    },
    {
      id: 2,
      title: 'GST Compliance: Essential Guide for Businesses',
      excerpt: 'Navigate the complexities of GST compliance with our comprehensive guide covering registration, filing, and best practices.',
      content: `Understanding and maintaining GST compliance is crucial for business success. This guide provides essential information and practical tips for effective GST management.`,
      author: 'CA Vallinath NP',
      date: 'March 12, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'GST',
      tags: ['GST', 'Compliance', 'Business'],
    },
    {
      id: 3,
      title: 'International Tax Planning Strategies',
      excerpt: 'Expert insights into international tax planning, covering cross-border transactions, transfer pricing, and global compliance.',
      content: `Effective international tax planning is essential for businesses operating across borders. Learn about key strategies and considerations for optimizing your global tax position.`,
      author: 'CA Shashank Nadig',
      date: 'March 10, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'International Tax',
      tags: ['International Tax', 'Global Business', 'Tax Planning'],
    },
    {
      id: 4,
      title: 'Digital Transformation in Tax Management',
      excerpt: 'Explore how digital technologies are revolutionizing tax management and compliance processes.',
      content: `The digital transformation of tax management is reshaping how businesses handle their tax obligations. Discover the latest technologies and their applications in tax processes.`,
      author: 'CA Vallinath NP',
      date: 'March 8, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Technology',
      tags: ['Digital Transformation', 'Technology', 'Tax Management'],
    },
    {
      id: 5,
      title: 'Startup Tax Benefits and Incentives',
      excerpt: 'A detailed guide to tax benefits, exemptions, and incentives available for startups in India.',
      content: `Discover the various tax advantages and incentives designed to support startup growth and innovation. Learn how to maximize these benefits for your startup.`,
      author: 'CA Shashank Nadig',
      date: 'March 6, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Startup Finance',
      tags: ['Startups', 'Tax Benefits', 'Business Growth'],
    },
    {
      id: 6,
      title: 'Real Estate Taxation: Complete Guide',
      excerpt: 'Understanding tax implications for real estate transactions, investments, and property management.',
      content: `Navigate the complex world of real estate taxation with our comprehensive guide covering various aspects of property-related taxes.`,
      author: 'CA Vallinath NP',
      date: 'March 4, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Real Estate',
      tags: ['Real Estate', 'Property Tax', 'Investment'],
    },
    {
      id: 7,
      title: 'Transfer Pricing in International Business',
      excerpt: 'Essential guidelines for managing transfer pricing compliance and documentation in global operations.',
      content: `Learn about transfer pricing regulations, documentation requirements, and best practices for international business transactions.`,
      author: 'CA Shashank Nadig',
      date: 'March 2, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'International Tax',
      tags: ['Transfer Pricing', 'Global Business', 'Compliance'],
    },
    {
      id: 8,
      title: 'ESG Reporting and Tax Implications',
      excerpt: 'Understanding the intersection of ESG compliance and tax considerations for modern businesses.',
      content: `Explore how Environmental, Social, and Governance (ESG) reporting affects tax planning and compliance in the modern business landscape.`,
      author: 'CA Vallinath NP',
      date: 'February 28, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'ESG',
      tags: ['ESG', 'Sustainability', 'Corporate Responsibility'],
    },
    {
      id: 9,
      title: 'Tax Planning for High Net Worth Individuals',
      excerpt: 'Strategic tax planning approaches for high net worth individuals to optimize their tax position.',
      content: `Comprehensive guide to tax planning strategies specifically designed for high net worth individuals, covering investments, estate planning, and wealth preservation.`,
      author: 'CA Shashank Nadig',
      date: 'February 26, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Personal Tax',
      tags: ['Wealth Management', 'Tax Planning', 'Personal Finance'],
    },
    {
      id: 10,
      title: 'Navigating Tax Audits Successfully',
      excerpt: 'Essential preparation and management strategies for handling tax audits effectively.',
      content: `Learn how to prepare for and manage tax audits successfully, including documentation requirements, common pitfalls to avoid, and best practices.`,
      author: 'CA Vallinath NP',
      date: 'February 24, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Tax Compliance',
      tags: ['Tax Audit', 'Compliance', 'Risk Management'],
    },
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="section-title text-center">Our Blog</h1>
          <p className="section-subtitle text-center">
            Stay updated with the latest insights in finance and taxation
          </p>

          {/* Search Section */}
          <div className="flex flex-col md:flex-row gap-4 mt-8 mb-12">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="mt-12 space-y-12" ref={ref}>
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  inView ? 'animate-fade-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">
                        {post.category}
                      </span>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-2xl font-bold text-navy mb-4">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-navy font-medium hover:text-navy-700"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;