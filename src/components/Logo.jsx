import React from 'react';

export const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 50 50" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fb923c', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Hexagon */}
      <polygon 
        points="25,5 40,12.5 40,32.5 25,40 10,32.5 10,12.5" 
        fill="none" 
        stroke="url(#iconGrad)" 
        strokeWidth="2"
      />
      <polygon 
        points="25,5 40,12.5 40,32.5 25,40 10,32.5 10,12.5" 
        fill="url(#iconGrad)" 
        opacity="0.15"
      />
      
      {/* Letter J */}
      <text 
        x="25" 
        y="31" 
        fontSize="20" 
        fontWeight="900" 
        fill="url(#iconGrad)" 
        fontFamily="Inter, Arial, sans-serif" 
        textAnchor="middle"
      >
        J
      </text>
    </svg>
  );
};