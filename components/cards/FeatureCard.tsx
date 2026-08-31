'use client';

import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  tag,
  index,
}) => {
  return (
    <div className="h-full p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8] shadow-2xs">
            {icon}
          </div>
          <span className="text-xs font-mono text-slate-400">
            0{index + 1}
          </span>
        </div>

        <span className="inline-block text-[11px] font-bold text-[#1D4ED8] tracking-widest uppercase mb-2">
          {tag}
        </span>
        
        <h3 className="text-lg font-bold text-[#0F172A] mb-2.5">
          {title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed font-light">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-500 font-medium">
        <span>Padrão de Excelência DUM</span>
      </div>
    </div>
  );
};
