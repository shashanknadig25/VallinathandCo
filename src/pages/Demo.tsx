import React, { useState } from 'react';
import NumberCounter from '../components/NumberCounter';

const Demo = () => {
  const [maxNumber, setMaxNumber] = useState(10);
  const [delay, setDelay] = useState(100);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleComplete = () => {
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-navy mb-8">Number Counter Demo</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Maximum Number
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={maxNumber}
              onChange={(e) => setMaxNumber(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Delay (milliseconds)
            </label>
            <input
              type="number"
              min="50"
              max="1000"
              step="50"
              value={delay}
              onChange={(e) => setDelay(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
            />
          </div>

          <button
            onClick={handleStart}
            disabled={isRunning}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRunning ? 'Counting...' : 'Start Counting'}
          </button>
        </div>

        {isRunning && (
          <NumberCounter
            maxNumber={maxNumber}
            delay={delay}
            onComplete={handleComplete}
          />
        )}
      </div>
    </div>
  );
};

export default Demo;