'use client';

import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export const StoreStatus: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      // Loja aberta das 08:00 às 20:00
      setIsOpen(hour >= 8 && hour < 20);
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md transition-all ${
        isOpen
          ? 'bg-[#E7F6EC] text-[#15803D] border border-[#22C55E]/30'
          : 'bg-[#FFF7E6] text-[#B45309] border border-[#FF9800]/30'
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {isOpen ? (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </>
        ) : (
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
        )}
      </span>
      <span className="tracking-wide">
        {isOpen ? 'Loja Aberta Hoje até às 20:00' : 'Abre amanhã às 08:00'}
      </span>
      <Clock className="w-3.5 h-3.5 opacity-70 ml-0.5" />
    </div>
  );
};
