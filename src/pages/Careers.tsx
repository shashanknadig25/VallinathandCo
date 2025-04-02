import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Award, Briefcase } from 'lucide-react';

const Careers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openings = [
    {
      position: 'Senior Tax Consultant',
      location: 'No 64, Dr Rajkumar Road, Rajajinagar, Bengaluru, Karnataka 560010',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Looking for an experienced tax professional to handle complex tax planning and compliance.',
    },
    {
      position: 'Audit Manager',
      location: 'No 64, Dr Rajkumar Road, Rajajinagar, Bengaluru, Karnataka 560010',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Seeking an audit manager to lead audit engagements and manage client relationships.',
    },
    {
      position: 'GST Specialist',
      location: 'No 64, Dr Rajkumar Road, Rajajinagar, Bengaluru, Karnataka 560010',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Need a GST expert to handle compliance and advisory services for our clients.',
    },
  ];

  const handleApply = (position: string) => {
    const subject = encodeURIComponent(`Job Application for ${position}`);
    const body = encodeURIComponent(`I am interested in applying for the ${position} position.`);
    window.location.href = `mailto:Contact@vallinathandco.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at CA Firm</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Join our team of professionals and build a rewarding career in finance and taxation.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Why Join Us</h2>
          <p className="section-subtitle text-center">
            Discover the benefits of building your career with us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: Users,
                title: 'Great Culture',
                description: 'Work in a collaborative and supportive environment',
              },
              {
                icon: Target,
                title: 'Growth Opportunities',
                description: 'Clear career progression and learning paths',
              },
              {
                icon: Award,
                title: 'Professional Development',
                description: 'Regular training and certification support',
              },
              {
                icon: Briefcase,
                title: 'Work-Life Balance',
                description: 'Flexible working hours and hybrid work model',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6"
                >
                  <Icon className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Current Openings</h2>
          <p className="section-subtitle text-center">
            Explore exciting opportunities to join our team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {openings.map((job, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                  inView ? 'animate-fade-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-navy mb-3">{job.position}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> {job.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Type:</span> {job.type}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Experience:</span> {job.experience}
                  </p>
                </div>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <button 
                  onClick={() => handleApply(job.position)}
                  className="btn-primary w-full"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;