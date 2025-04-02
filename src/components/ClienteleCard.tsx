import React from 'react';
import AnimatedCard from './AnimatedCard';

interface ClienteleCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const ClienteleCard: React.FC<ClienteleCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <AnimatedCard
      index={index}
      animation="fade-up"
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-navy" />
        </div>
        <h3 className="text-xl font-semibold text-navy mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </AnimatedCard>
  );
};

export default ClienteleCard;