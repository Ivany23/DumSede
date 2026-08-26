'use client';

import React from 'react';

interface MorphDividerProps {
  variant?: 'curve-down' | 'wave' | 'slant' | 'gentle';
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

export const MorphDivider: React.FC<MorphDividerProps> = ({
  variant = 'gentle',
  fillColor = '#FFFFFF',
  className = '',
  flip = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none ${
        flip ? 'rotate-180 -mt-1' : '-mb-1'
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-[50px] md:h-[90px]"
        preserveAspectRatio="none"
      >
        {variant === 'curve-down' && (
          <path
            d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
        {variant === 'wave' && (
          <path
            d="M0,45 C320,95 680,10 1020,60 C1200,85 1350,70 1440,55 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
        {variant === 'slant' && (
          <path
            d="M0,80 L1440,15 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
        {variant === 'gentle' && (
          <path
            d="M0,20 C480,90 960,30 1440,80 L1440,120 L0,120 Z"
            fill={fillColor}
          />
        )}
      </svg>
    </div>
  );
};
