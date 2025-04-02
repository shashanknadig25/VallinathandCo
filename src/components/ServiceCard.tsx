import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    link: string;
    animation?: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${index * 0.1}s`,
        ...(inView && {
          opacity: 1,
          transform: 'none'
        })
      }}
    >
      <Link
        to={service.link}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full flex flex-col"
      >
        <Icon className="w-12 h-12 text-navy mb-4" />
        <h3 className="text-xl font-semibold text-navy mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
        <span className="text-navy font-medium inline-flex items-center group hover:text-navy/80">
          Learn More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </div>
  );
};

export default ServiceCard;