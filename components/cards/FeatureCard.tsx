'use client';

import React from 'react';
import { GlassCard3D } from './GlassCard3D';

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
    <GlassCard3D className="h-full" intensity={14}>
      <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden">
        {/* Background Subtle Gradient Glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#0066FF] rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />

        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/70 border border-[#0B1B3A]/10 flex items-center justify-center text-[#0066FF] shadow-[0_4px_15px_rgba(0,102,255,0.15)]">
              {icon}
            </div>
            <span className="text-xs font-mono text-[#94A3B8]">
              0{index + 1}
            </span>
          </div>

          <span className="inline-block text-[11px] font-semibold text-[#0066FF] tracking-widest uppercase mb-2">
            {tag}
          </span>
          
          <h3 className="text-xl font-bold text-[#0B1B3A] mb-3">
            {title}
          </h3>

          <p className="text-sm text-[#64748B] leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#0B1B3A]/10 flex items-center text-xs text-[#0066FF]/80 font-medium">
          <span>Padrão de Excelência DUM</span>
        </div>
      </div>
    </GlassCard3D>
  );
};
