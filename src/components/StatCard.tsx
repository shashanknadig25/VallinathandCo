import React from 'react';
import AnimatedCard from './AnimatedCard';
import AnimatedCounter from './AnimatedCounter';

interface StatCardProps {
  icon: React.ElementType;
  count: string;
  label: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, count, label, index }) => {
  const numericCount = parseInt(count.replace(/\D/g, ''));

  return (
    <AnimatedCard
      index={index}
      animation="fade-up"
      className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
    >
      <Icon className="w-12 h-12 text-navy mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-navy mb-2">
        <AnimatedCounter end={numericCount} suffix="+" />
      </h3>
      <p className="text-gray-600">{label}</p>
    </AnimatedCard>
  );
};

export default StatCard;