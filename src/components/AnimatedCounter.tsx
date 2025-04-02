import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  isInView?: boolean;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  isInView = false,
  suffix = ''
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const frameRef = useRef(0);
  countRef.current = count;

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutExpo(progress);
      const nextCount = Math.floor(easedProgress * end);

      if (nextCount !== countRef.current) {
        setCount(nextCount);
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    if (isInView) {
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(0);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, isInView]);

  return (
    <span className="inline-flex items-center justify-center transition-all duration-300 ease-out">
      <span className="tabular-nums font-bold tracking-tight">
        {count.toLocaleString()}
      </span>
      {suffix && (
        <span className="ml-1">{suffix}</span>
      )}
    </span>
  );
};

export default AnimatedCounter;