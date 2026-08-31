'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Eye, MapPin, Package, Tag, Store } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const categoryBadgeColors: Record<string, string> = {
  mercearia: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  bebidas: 'bg-blue-50 text-blue-700 border-blue-200',
  laticinios: 'bg-amber-50 text-amber-700 border-amber-200',
  congelados: 'bg-sky-50 text-sky-700 border-sky-200',
  higiene: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  limpeza: 'bg-teal-50 text-teal-700 border-teal-200',
  snacks: 'bg-rose-50 text-rose-700 border-rose-200',
  infantil: 'bg-purple-50 text-purple-700 border-purple-200',
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const badgeStyle =
    categoryBadgeColors[product.categorySlug] ||
    'bg-slate-50 text-slate-700 border-slate-200';

  if (viewMode === 'list') {
    return (
      <Link href={`/produtos/${product.slug}`} className="block w-full group">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-150 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative w-16 h-16 rounded-lg bg-slate-50 border border-slate-100 p-1 shrink-0 flex items-center justify-center overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="64px"
                  className="object-contain p-1 mix-blend-multiply"
                  loading="lazy"
                />
              ) : (
                <Package className="w-6 h-6 text-[#1D4ED8]" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {product.brand}
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badgeStyle}`}>
                  {product.category.split(' &')[0]}
                </span>
                {product.packaging && (
                  <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {product.packaging}
                  </span>
                )}
              </div>
              <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors line-clamp-1">
                {product.name}
              </h4>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
            <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Stock Loja Física
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8] text-xs font-bold text-slate-700 transition-all flex items-center gap-1">
              Ver Artigo &rarr;
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/produtos/${product.slug}`} className="block h-full group">
      <div className="h-full min-h-[410px] rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 p-5 flex flex-col justify-between group-hover:-translate-y-1 transform">
        {/* Top Badges Header */}
        <div className="flex items-center justify-between z-10 mb-3 gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1D4ED8] tracking-wider uppercase bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/70">
            <Tag className="w-3 h-3 text-[#1D4ED8]" />
            <span className="truncate max-w-[110px]">{product.brand}</span>
          </span>

          <div className="flex items-center gap-1.5">
            {product.packaging && (
              <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                {product.packaging}
              </span>
            )}

            {product.isFeatured ? (
              <span className="flex items-center gap-1 text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex-shrink-0">
                <Sparkles className="w-3 h-3 text-amber-600 fill-amber-500" />
                Destaque
              </span>
            ) : (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border truncate max-w-[100px] ${badgeStyle}`}>
                {product.category.split(' &')[0]}
              </span>
            )}
          </div>
        </div>

        {/* Studio Image Container */}
        <div className="relative w-full h-48 my-auto rounded-xl overflow-hidden bg-slate-50/60 border border-slate-100 flex items-center justify-center p-3 group-hover:border-blue-100 transition-colors">
          {product.image ? (
            <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-contain p-2 mix-blend-multiply"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-2">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8] mb-2 shadow-2xs group-hover:scale-105 transition-transform">
                <Package className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-[#1D4ED8] uppercase block">
                DUM Seleção
              </span>
              <span className="text-[9px] text-slate-500 mt-0.5 font-light">
                {product.packaging || 'Embalagem Original'}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-[#0B2545]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-xs font-bold text-white rounded-xl">
            <Eye className="w-4 h-4 text-blue-300" />
            <span>Ver Detalhes do Artigo</span>
          </div>
        </div>

        {/* Product Information Body */}
        <div className="mt-4 pt-3 border-t border-slate-100 z-10 flex flex-col justify-between flex-1">
          <div>
            <span className="text-[10px] font-semibold text-slate-400 block mb-1 uppercase tracking-wider">
              {product.category}
            </span>
            <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors line-clamp-2 leading-snug mb-1.5" title={product.name}>
              {product.name}
            </h4>
            <p className="text-[11px] text-slate-500 line-clamp-2 font-normal leading-relaxed mb-3">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs pt-2.5 border-t border-slate-100 mt-auto">
            <span className="text-slate-600 text-[11px] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Disponível em Loja
            </span>
            <span className="text-[#1D4ED8] text-[11px] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
              Ver Mais &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
