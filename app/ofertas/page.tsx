'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { realCampaignBanners, RealCampaignBanner } from '@/data/gallery';
import { Sparkles, MapPin, ArrowRight, Eye, X, CheckCircle2, Store, Tag } from 'lucide-react';

export default function OfertasPage() {
  const [selectedBanner, setSelectedBanner] = useState<RealCampaignBanner | null>(null);

  return (
    <div className="min-h-screen bg-white pt-28 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Comunicação Visual DUM Sociedade Lda"
          title="Campanhas & Destaques Oficiais"
          subtitle="Conheça as campanhas exclusivas e marcas em destaque no armazém DUM. Imagens oficiais criadas para celebrar os melhores sabores e momentos da nossa terra."
        />

        <div className="space-y-10 mb-16">
          {realCampaignBanners.map((banner, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={banner.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-2xs hover:shadow-md transition-all duration-200"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:col-start-6' : ''}`}>
                    <div
                      onClick={() => setSelectedBanner(banner)}
                      className="group relative w-full rounded-xl overflow-hidden cursor-pointer shadow-sm border border-slate-200 bg-slate-900 transition-all duration-300 hover:scale-[1.01]"
                    >
                      {banner.aspectRatio === 'portrait' ? (
                        <div className="relative w-full h-[500px] max-w-md mx-auto">
                          <Image
                            src={banner.image}
                            alt={banner.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                            priority={index === 0}
                          />
                        </div>
                      ) : (
                        <div className="relative w-full aspect-[16/9] min-h-[280px] sm:min-h-[350px]">
                          <Image
                            src={banner.image}
                            alt={banner.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            priority={index === 0}
                          />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
                        <div className="flex items-center gap-2 text-white text-xs font-bold bg-[#1D4ED8] px-4 py-2 rounded-full shadow-md">
                          <Eye className="w-4 h-4" />
                          <span>Clique para Ampliar</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                          <Tag className="w-3 h-3" />
                          {banner.brand}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-semibold flex items-center gap-1 border border-amber-200">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          Destaque Oficial
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight leading-snug mb-3">
                        {banner.slogan}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-6">
                        {banner.tagline}
                      </p>

                      <div className="space-y-2 mb-8">
                        {banner.highlights.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100">
                      <MagneticButton
                        href={banner.productFilterUrl}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Ver Produtos da Campanha
                      </MagneticButton>

                      <MagneticButton
                        href="/localizacao"
                        variant="outline"
                        size="md"
                        icon={<MapPin className="w-3.5 h-3.5" />}
                      >
                        Disponível no Armazém
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-slate-50 text-center max-w-4xl mx-auto shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8] mx-auto mb-4">
            <Store className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
            Visite o Armazém Presencial DUM Sociedade Lda
          </h3>
          <p className="text-sm text-slate-600 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            Todas estas marcas e produtos encontram-se em stock físico contínuo nas nossas instalações. Venha conhecer a nossa variedade, atendimento de excelência e estrutura organizada.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <MagneticButton href="/produtos" variant="primary" size="md">
              Explorar Catálogo (140+ Produtos)
            </MagneticButton>
            <MagneticButton href="/localizacao" variant="outline" size="md">
              Ver Como Chegar
            </MagneticButton>
          </div>
        </div>
      </div>

      {selectedBanner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedBanner(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBanner(null)}
              className="absolute -top-10 right-0 p-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors"
              title="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[72vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40">
              <Image
                src={selectedBanner.image}
                alt={selectedBanner.title}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-4 w-full px-2 text-white">
              <div>
                <h4 className="text-sm font-bold">{selectedBanner.slogan}</h4>
                <p className="text-xs text-slate-300">{selectedBanner.brand} &bull; Campanha Oficial DUM Sociedade Lda</p>
              </div>

              <Link
                href={selectedBanner.productFilterUrl}
                onClick={() => setSelectedBanner(null)}
                className="px-4 py-2 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-md"
              >
                <span>Ver Produtos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
