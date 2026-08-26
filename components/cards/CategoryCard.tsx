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
import { GlassCard3D } from './GlassCard3D';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-8 h-8" />,
  Wine: <Wine className="w-8 h-8" />,
  Milk: <Milk className="w-8 h-8" />,
  Snowflake: <Snowflake className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Cookie: <Cookie className="w-8 h-8" />,
  HeartHandshake: <HeartHandshake className="w-8 h-8" />,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index = 0 }) => {
  const icon = iconMap[category.iconName] || <Layers className="w-8 h-8" />;

  return (
    <Link href={`/categorias/${category.slug}`} className="block h-full">
      <GlassCard3D className="h-full min-h-[360px]" intensity={12}>
        <div className="relative w-full h-full p-6 flex flex-col justify-between overflow-hidden group">
          {/* Background Stage */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-white">
            {category.image ? (
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.45] group-hover:brightness-[0.6]"
              />
            ) : (
              <div className="absolute inset-0">
                {/* Radial Glow and geometric accent */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-dum-primary/5 rounded-full blur-2xl group-hover:bg-dum-primary/10 transition-colors duration-500" />
                <div className="absolute bottom-10 left-6 w-32 h-32 bg-dum-primary/5 rounded-full blur-xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/20 to-transparent" />
            <div className="absolute inset-0 bg-dum-primary/5 mix-blend-soft-light" />
          </div>

          {/* Top Tag, Icon & Number */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-white/70 border border-[#0B1B3A]/10 flex items-center justify-center text-dum-primary shadow-md group-hover:scale-110 group-hover:border-dum-primary/60 transition-all duration-300">
              {icon}
            </div>
            
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/70 border border-[#0B1B3A]/10 text-dum-primary text-[11px] font-semibold tracking-wider backdrop-blur-md">
                {category.itemCount}
              </span>
              <span className="text-xs font-mono text-[#94A3B8]">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 pt-12">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-dum-text-primary group-hover:text-dum-primary transition-colors duration-300">
                {category.name}
              </h3>
              <div className="w-9 h-9 rounded-full bg-white/70 border border-[#0B1B3A]/10 flex items-center justify-center text-dum-primary group-hover:bg-dum-primary group-hover:text-white transition-all duration-300 shrink-0 transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <p className="text-sm text-dum-text-secondary line-clamp-2 mb-4 font-light leading-relaxed">
              {category.shortDescription}
            </p>

            {/* Highlights pills */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#0B1B3A]/10">
              {category.highlights.slice(0, 2).map((h, i) => (
                <span
                  key={i}
                  className="text-[11px] text-[#1E293B] bg-white/70 px-2.5 py-0.5 rounded-md border border-[#0B1B3A]/10"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </GlassCard3D>
    </Link>
  );
};
