import React, { useState, useEffect } from 'react';

interface NumberCounterProps {
  maxNumber: number;
  delay?: number;
  onComplete?: () => void;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ 
  maxNumber, 
  delay = 100, 
  onComplete 
}) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentNumber <= maxNumber) {
      const timer = setTimeout(() => {
        setCurrentNumber(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentNumber, maxNumber, delay, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
      <div className="text-6xl font-bold text-navy mb-4 transition-all duration-300 transform">
        {currentNumber}
      </div>
      {isComplete && (
        <p className="text-green-600 font-medium animate-fade-up">
          Counting complete!
        </p>
      )}
    </div>
  );
};

export default NumberCounter;