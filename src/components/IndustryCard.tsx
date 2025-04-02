import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCard from './AnimatedCard';

interface IndustryCardProps {
  icon: React.ElementType;
  title: string;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon: Icon, title, index }) => {
  return (
    <AnimatedCard
      index={index}
      animation="scale-up"
      className="h-full"
    >
      <Link
        to="/industries"
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center group h-full flex flex-col items-center justify-center"
      >
        <Icon className="w-12 h-12 text-navy mx-auto mb-4 transition-transform group-hover:scale-110" />
        <h3 className="text-lg font-semibold text-navy group-hover:text-navy/80">{title}</h3>
      </Link>
    </AnimatedCard>
  );
};

export default IndustryCard;