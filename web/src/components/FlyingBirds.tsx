
import React from 'react';

interface BirdProps {
  id: number;
  size: number;
  speed: number;
  delay: number;
  top: string;
}

const Bird: React.FC<BirdProps> = ({ id, size, speed, delay, top }) => (
  <svg
    className="absolute animate-fly"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${speed}s`,
      animationDelay: `${delay}s`,
      top: top,
      zIndex: -1,
      opacity: 0.6,
    }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 7l-4 4-4-4" />
    <path d="M16 17l-4-4-4 4" />
  </svg>
);

const FlyingBirds: React.FC = () => {
  const birds = [
    { id: 1, size: 30, speed: 15, delay: 0, top: '10%' },
    { id: 2, size: 25, speed: 18, delay: 3, top: '30%' },
    { id: 3, size: 35, speed: 12, delay: 6, top: '50%' },
    { id: 4, size: 20, speed: 20, delay: 9, top: '70%' },
    { id: 5, size: 40, speed: 10, delay: 12, top: '20%' },
    { id: 6, size: 28, speed: 16, delay: 15, top: '40%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {birds.map((bird) => (
        <Bird key={bird.id} {...bird} />
      ))}
    </div>
  );
};

export default FlyingBirds;
