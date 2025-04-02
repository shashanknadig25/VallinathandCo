import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  index,
  className = '',
  animation = 'fade-up'
}) => {
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
        transform: 
          animation === 'fade-up' ? 'translateY(30px)' :
          animation === 'fade-left' ? 'translateX(-30px)' :
          animation === 'fade-right' ? 'translateX(30px)' :
          animation === 'scale-up' ? 'scale(0.95)' : 'none',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${index * 0.1}s`,
        ...(inView && {
          opacity: 1,
          transform: 'none'
        })
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;