import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Trophy, Target, Heart, CheckCircle, Users, Award, Briefcase, ArrowRight } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'CA Vallinath NP',
      designation: 'Founding Partner',
      qualification: 'FCA',
      description: 'A Fellow member of the Institute of Chartered Accountants, Mr. Vallinath founded the firm. Ever since he began the practice in 1996, he has built a stronghold in key areas of Consulting, Advisory Audits and Direct Taxes practice.',
      image:'/images/team/2.png',
    },
    {
      name: 'CA Shashank Nadig',
      designation: 'Partner',
      qualification: 'ACA',
      description: 'An Associate member of the Institute of Chartered Accountants, Mr. Shashank joined the firm in 2021 and solidified the offerings of the firm in the areas of start-up advisory, Virtual-CFO, Audits, International Taxation, Direct Tax Litigation, Indirect Tax Litigation and GST Practice.',
      image:'/images/team/1.png',
    },
  ];

  return (
    <div className="pt-20">
      {/* Vision Mission Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="section-title text-center">About Our Firm</h1>
          <p className="section-subtitle text-center">
            Building trust through excellence in financial services since 1996
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Target className="w-12 h-12 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional financial services that empower businesses and individuals to achieve their goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Trophy className="w-12 h-12 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted financial advisory firm, known for integrity and excellence in service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Heart className="w-12 h-12 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Excellence, Innovation, and Client-First approach in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Perfect Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">What Makes Us The Perfect Choice?</h2>
          <p className="section-subtitle text-center">
            At V&Co, we go the extra mile to deliver personalized, impactful & one stop solution under one roof
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <CheckCircle className="w-6 h-6 text-navy mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">End to End Services</h3>
                  <p className="text-gray-600">
                    Delivering high quality end to end financial services, allowing you to focus on your core business.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <CheckCircle className="w-6 h-6 text-navy mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Experienced Team</h3>
                  <p className="text-gray-600">
                    Highly skilled & experienced professionals, managing complex, deadline-driven assignments with accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <CheckCircle className="w-6 h-6 text-navy mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Building Partnerships</h3>
                  <p className="text-gray-600">
                    We strive to build long term relationships as trusted partners in the growth journey of every client.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <CheckCircle className="w-6 h-6 text-navy mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Our Expanding Impact</h3>
                  <p className="text-gray-600">
                    Continually growing our reach & impact, thereby helping businesses achieve financial success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Your Trusted Chartered Accountants For Complete Financial Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With our 21+ years of experience, V&Co. has established itself as a niche advisory firm serving as a trusted 
              financial advisor to all clients regardless of size, scale, scope including corporate entities, startups, 
              and SMEs. We offer a broad spectrum of services including accounting, advisory and compliance through a 
              multidisciplinary approach.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          <p className="section-subtitle text-center">
            Meet our experienced professionals dedicated to your success
          </p>

          <div className="space-y-16 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Card */}
                <div 
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[400px] h-[600px] object-cover object-center mx-auto"
                  />
                </div>

                {/* Content Card */}
                <div 
                  className={`bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center transform hover:-translate-y-1 transition-all duration-300 ${
                    inView ? 'animate-fade-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <h3 className="text-2xl font-semibold text-navy mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-600 font-medium mb-2">{member.designation}</p>
                  <p className="text-gray-500 mb-6">{member.qualification}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;