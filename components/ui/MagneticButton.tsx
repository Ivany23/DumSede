'use client';

import React, { useRef, useState, useCallback } from 'react';
import Link from 'next/link';

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

/**
 * Magnetic button using CSS transitions for high-performance micro-interactions.
 */
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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    setPosition({ x: distanceX * 0.22, y: distanceY * 0.22 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
    md: 'px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider',
    lg: 'px-8 py-3.5 text-sm sm:text-base font-semibold tracking-wide',
  };

  const variantClasses = {
    primary:
      'bg-[#1D4ED8] hover:bg-[#1E40AF] text-white shadow-md hover:shadow-lg border border-blue-500/30 font-bold',
    secondary:
      'bg-slate-100 hover:bg-slate-200 text-[#0F172A] border border-slate-200 shadow-2xs font-semibold',
    outline:
      'bg-transparent border border-[#1D4ED8] text-[#1D4ED8] hover:bg-blue-50',
    glass:
      'bg-white/90 hover:bg-white text-[#0F172A] border border-slate-200 shadow-sm hover:border-slate-300',
  };

  const content = (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      className={`relative inline-flex items-center justify-center gap-2.5 rounded-full uppercase transition-all duration-200 group overflow-hidden select-none cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </span>
    </div>
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
