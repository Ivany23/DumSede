'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  external = false,
}) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic pull factor
    setPosition({ x: distanceX * 0.28, y: distanceY * 0.28 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs font-medium tracking-wider',
    md: 'px-7 py-3.5 text-sm font-semibold tracking-wider',
    lg: 'px-9 py-4 text-base font-semibold tracking-wide',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#0066FF] via-[#0052CC] to-[#1E40AF] text-[#FFFFFF] shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_30px_rgba(0,102,255,0.55)] border border-[#93C5FD]/40 font-bold',
    secondary:
      'bg-[#0066FF]/90 hover:bg-[#0052CC] text-[#FFFFFF] border border-[#93C5FD]/40 shadow-[0_4px_20px_rgba(0,102,255,0.35)]',
    outline:
      'bg-transparent border border-[#0052CC]/50 text-[#0066FF] hover:bg-[#0052CC]/10 hover:border-[#0066FF]',
    glass:
      'glass-panel text-[#0B1B3A] hover:bg-[#0066FF]/40 border-[#0066FF]/25 hover:border-[#0066FF]/60',
  };

  const content = (
    <motion.div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 14, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center gap-3 rounded-full uppercase transition-all duration-300 group overflow-hidden select-none cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {/* Specular glare shine effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0 focus:outline-none">
      {content}
    </button>
  );
};
