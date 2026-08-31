'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  ShoppingBag,
  Wine,
  Milk,
  Snowflake,
  Sparkles,
  ShieldCheck,
  Cookie,
  HeartHandshake,
  Layers,
} from 'lucide-react';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Wine: <Wine className="w-6 h-6" />,
  Milk: <Milk className="w-6 h-6" />,
  Snowflake: <Snowflake className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Cookie: <Cookie className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
};

const categoryAccentColors: Record<string, { iconBg: string; text: string; border: string }> = {
  mercearia: { iconBg: 'bg-emerald-50 text-emerald-700', text: 'text-emerald-700', border: 'border-emerald-200' },
  bebidas: { iconBg: 'bg-blue-50 text-blue-700', text: 'text-blue-700', border: 'border-blue-200' },
  laticinios: { iconBg: 'bg-amber-50 text-amber-700', text: 'text-amber-700', border: 'border-amber-200' },
  congelados: { iconBg: 'bg-sky-50 text-sky-700', text: 'text-sky-700', border: 'border-sky-200' },
  higiene: { iconBg: 'bg-indigo-50 text-indigo-700', text: 'text-indigo-700', border: 'border-indigo-200' },
  limpeza: { iconBg: 'bg-teal-50 text-teal-700', text: 'text-teal-700', border: 'border-teal-200' },
  snacks: { iconBg: 'bg-rose-50 text-rose-700', text: 'text-rose-700', border: 'border-rose-200' },
  infantil: { iconBg: 'bg-purple-50 text-purple-700', text: 'text-purple-700', border: 'border-purple-200' },
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index = 0 }) => {
  const icon = iconMap[category.iconName] || <Layers className="w-6 h-6" />;
  const theme = categoryAccentColors[category.slug] || {
    iconBg: 'bg-blue-50 text-[#1D4ED8]',
    text: 'text-[#1D4ED8]',
    border: 'border-blue-200',
  };

  return (
    <Link href={`/categorias/${category.slug}`} className="block h-full group">
      <div className="relative w-full h-full min-h-[350px] p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between overflow-hidden">
        {/* Background Subtle Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-50/50 transition-colors" />

        {/* Top Tag, Icon & Number */}
        <div className="relative z-10 flex items-center justify-between">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${theme.iconBg} ${theme.border} shadow-2xs group-hover:scale-105 transition-transform`}>
            {icon}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-semibold tracking-wider">
              {category.itemCount}
            </span>
            <span className="text-xs font-mono text-slate-400">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 pt-8">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
              {category.name}
            </h3>
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8] transition-all shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 mb-4 font-light leading-relaxed">
            {category.shortDescription}
          </p>

          {/* Highlights pills */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
            {category.highlights.slice(0, 2).map((h, i) => (
              <span
                key={i}
                className="text-[10px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/80 font-medium"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
