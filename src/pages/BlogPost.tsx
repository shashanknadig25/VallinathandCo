import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ChevronLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the New Tax Reforms 2024',
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
      content: `Understanding and maintaining GST compliance is crucial for business success. This guide provides essential information and practical tips for effective GST management.

Key Aspects of GST Compliance:
• Registration requirements
• Filing deadlines
• Input tax credit
• Record keeping

Best Practices:
1. Regular review of GST returns
2. Maintaining proper documentation
3. Staying updated with changes
4. Using GST compliance software

Common Challenges and Solutions:
- Challenge: Complex filing requirements
  Solution: Implement systematic processes

- Challenge: Input tax credit tracking
  Solution: Regular reconciliation

- Challenge: Multiple state registrations
  Solution: Centralized compliance management

Future Trends:
• E-invoicing expansion
• Real-time reporting
• AI-based compliance tools
• Simplified returns`,
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
      content: `Effective international tax planning is essential for businesses operating across borders. This comprehensive guide explores key strategies and considerations for optimizing your global tax position.

Key Areas of Focus:
1. Cross-border transactions
2. Transfer pricing
3. Tax treaties
4. Foreign tax credits

Strategic Considerations:
• Entity structure optimization
• Repatriation strategies
• Permanent establishment issues
• Digital economy taxation

Risk Management:
- Transfer pricing documentation
- Country-by-country reporting
- Substance requirements
- Anti-avoidance rules

Implementation Steps:
1. Assessment of current structure
2. Identification of opportunities
3. Risk evaluation
4. Strategy implementation
5. Regular review and updates

Best Practices:
• Regular review of international operations
• Documentation maintenance
• Professional advice
• Technology adoption`,
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
      content: `The digital transformation of tax management is reshaping how businesses handle their tax obligations. Discover the latest technologies and their applications in tax processes.

Key Technologies:
• Artificial Intelligence
• Machine Learning
• Robotic Process Automation
• Blockchain

Applications in Tax:
1. Automated compliance
2. Real-time reporting
3. Risk assessment
4. Data analytics

Benefits:
- Improved accuracy
- Reduced costs
- Better compliance
- Enhanced decision-making

Implementation Strategy:
• Assessment of current systems
• Technology selection
• Phased implementation
• Training and adoption

Future Trends:
- Real-time tax reporting
- Predictive analytics
- Blockchain for transparency
- AI-driven planning`,
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
      content: `Discover the various tax advantages and incentives designed to support startup growth and innovation. This comprehensive guide outlines key benefits and how to maximize them.

Available Benefits:
1. Tax holidays
2. R&D credits
3. Investment incentives
4. Employment benefits

Eligibility Criteria:
• Registration requirements
• Sector specifications
• Timeline conditions
• Documentation needs

Application Process:
- Initial assessment
- Documentation preparation
- Application submission
- Compliance maintenance

Best Practices:
• Regular review of eligibility
• Proper documentation
• Professional guidance
• Compliance monitoring

Additional Considerations:
- State-specific benefits
- Industry-specific incentives
- Time-bound opportunities
- Compliance requirements`,
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
      content: `Navigate the complex world of real estate taxation with our comprehensive guide. Understanding tax implications for property transactions, investments, and management.

Key Areas:
• Property transfer tax
• Rental income taxation
• Capital gains implications
• Investment structures

Tax Planning Strategies:
1. Ownership structuring
2. Timing of transactions
3. Deduction optimization
4. Investment vehicles

Compliance Requirements:
- Regular tax filings
- Documentation needs
- Record keeping
- Reporting obligations

Special Considerations:
• Commercial vs. residential
• Foreign investment rules
• Joint development
• REITs and alternatives

Risk Management:
- Valuation issues
- Transaction structuring
- Compliance monitoring
- Professional guidance`,
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
      content: `Learn about transfer pricing regulations, documentation requirements, and best practices for international business transactions.

Key Components:
• Pricing methodologies
• Documentation requirements
• Risk assessment
• Compliance obligations

Documentation Needs:
1. Master file
2. Local file
3. Country-by-country reporting
4. Supporting analysis

Risk Management:
- Regular reviews
- Documentation updates
- Professional guidance
- Technology adoption

Best Practices:
• Regular policy updates
• Market analysis
• Documentation maintenance
• Professional consultation

Implementation Steps:
- Policy development
- System setup
- Training programs
- Regular monitoring`,
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
      content: `Environmental, Social, and Governance (ESG) reporting has become increasingly important in corporate reporting. This comprehensive guide explores the tax implications and considerations of ESG initiatives.

Key Areas of Focus:
• Environmental initiatives
• Social responsibility
• Governance structures
• Reporting requirements

Tax Considerations:
1. Environmental tax incentives
2. Social impact credits
3. Governance compliance
4. Reporting obligations

Implementation Strategy:
- Assessment of current practices
- Goal setting
- System development
- Regular monitoring

Benefits:
• Tax incentives
• Reputation enhancement
• Risk management
• Stakeholder confidence

Future Trends:
- Increased reporting requirements
- New tax incentives
- Stakeholder emphasis
- Technology integration`,
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
      content: `Comprehensive guide to tax planning strategies specifically designed for high net worth individuals. Learn about investment strategies, estate planning, and wealth preservation.

Key Strategies:
• Investment structuring
• Estate planning
• Charitable giving
• International considerations

Planning Areas:
1. Income tax optimization
2. Estate tax planning
3. Investment strategies
4. Risk management

Implementation Steps:
- Assessment of current position
- Strategy development
- Implementation plan
- Regular review

Best Practices:
• Regular portfolio review
• Professional consultation
• Documentation maintenance
• Risk assessment

Special Considerations:
- International investments
- Family business
- Succession planning
- Philanthropy`,
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
      content: `Learn how to prepare for and manage tax audits successfully. This guide covers documentation requirements, common pitfalls to avoid, and best practices.

Preparation Steps:
• Document organization
• Record maintenance
• Response planning
• Professional support

Key Areas of Focus:
1. Documentation review
2. Compliance check
3. Response strategy
4. Risk assessment

Best Practices:
- Regular internal audits
- Documentation systems
- Professional guidance
- Staff training

Common Challenges:
• Information gathering
• Timeline management
• Resource allocation
• Communication

Risk Management:
- Preventive measures
- Response planning
- Professional support
- Learning implementation`,
      author: 'CA Vallinath NP',
      date: 'February 24, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Tax Compliance',
      tags: ['Tax Audit', 'Compliance', 'Risk Management'],
    },
  ];

  const post = blogPosts.find(post => post.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold text-navy">Blog Post Not Found</h1>
          <Link to="/blog" className="text-navy hover:text-navy-700 inline-flex items-center mt-4">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-20">
        <Link to="/blog" className="text-navy hover:text-navy-700 inline-flex items-center mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
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

          <h1 className="text-4xl font-bold text-navy">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
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

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('•')) {
                return (
                  <ul key={index} className="list-disc pl-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('•', '').trim()}</li>
                    ))}
                  </ul>
                );
              } else if (paragraph.startsWith('-')) {
                return (
                  <ul key={index} className="list-disc pl-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('-', '').trim()}</li>
                    ))}
                  </ul>
                );
              } else if (paragraph.match(/^\d\./)) {
                return (
                  <ol key={index} className="list-decimal pl-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace(/^\d\./, '').trim()}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;