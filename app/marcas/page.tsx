import React from 'react';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BrandCarousel } from '@/components/brands/BrandCarousel';
import { brands } from '@/data/brands';
import { Globe, Sparkles, ArrowRight, Tag } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

export default function MarcasPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Parcerias Globais & Nacionais"
          title="Marcas de Prestígio"
          subtitle="Trabalhamos exclusivamente com produtores e marcas certificadas, garantindo que cada artigo na nossa loja física cumpre os mais altos padrões de pureza, sabor e eficácia."
        />

        <div className="mb-14 rounded-2xl border border-slate-200 bg-slate-50 py-6">
          <BrandCarousel />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/produtos?marca=${encodeURIComponent(brand.name)}`}
              className="block group h-full"
            >
              <div className="p-8 h-full rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-black tracking-wider text-[#1D4ED8] group-hover:text-[#1E40AF] transition-colors">
                      {brand.logoText}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      <Globe className="w-3 h-3 text-[#1D4ED8]" />
                      {brand.origin}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#1D4ED8] block mb-2">
                    {brand.category}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6 line-clamp-3">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
                  <span className="flex items-center gap-1.5 text-[#1D4ED8] font-semibold">
                    <Tag className="w-3.5 h-3.5" />
                    {brand.featuredProductCount}+ Produtos
                  </span>
                  <span className="text-[#1D4ED8] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Ver no Catálogo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="p-10 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/80 via-slate-50 to-white text-center max-w-4xl mx-auto shadow-2xs">
          <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
            Compromisso com a Autenticidade
          </h3>
          <p className="text-sm text-slate-600 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            Todas as marcas comercializadas no armazém DUM Sociedade Lda contam com rastreabilidade de lote e certificados sanitários oficiais.
          </p>
          <MagneticButton href="/produtos" variant="primary" size="md">
            Ver Todos os Produtos das Marcas
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
