'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'emerald' | 'glass' | 'accent';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-[10px] tracking-wider font-semibold',
    md: 'px-3.5 py-1 text-xs tracking-wider font-medium',
  };

  const variantClasses = {
    gold: 'bg-[#0052CC]/15 text-[#0066FF] border border-[#0066FF]/30',
    emerald: 'bg-[#E7F6EC] text-[#15803D] border border-[#22C55E]/30',
    glass: 'bg-[#EAF1FF]/70 text-[#0B1B3A] border border-[#0052CC]/25 backdrop-blur-md',
    accent: 'bg-red-50 text-red-600 border border-red-200',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full uppercase transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
