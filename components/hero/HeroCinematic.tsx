'use client';

import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles, Store, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { StoreStatus } from '@/components/ui/StoreStatus';
import { HeroScene3D } from './HeroScene3D';

export const HeroCinematic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax layers transform
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[92vh] lg:min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#061A30] via-[#0B2545] to-[#102F54] text-white"
    >
      {/* Layer 1: Executive Dark Navy Atmospheric Background */}
      <m.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 origin-center pointer-events-none"
      >
        {/* Subtle Sapphire radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-[#1D4ED8]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#0284C7]/15 rounded-full blur-[130px]" />

        {/* Elegant geometric architectural grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]" />

        {/* Bottom clean transition */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0B2545] to-transparent" />
      </m.div>

      {/* Layer 2: Subtle CSS Floating Particles */}
      <HeroScene3D />

      {/* Layer 3: Main Typography & Interactive Content */}
      <m.div
        style={{ y: textY, opacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-24 sm:pt-28 pb-16"
      >
        {/* Badge & Store Status */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-950/60 text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md flex items-center gap-2 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            DUM Sociedade Lda &bull; Sede & Armazém Central
          </span>
          <StoreStatus />
        </m.div>

        {/* Master Headline */}
        <m.h1
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-lg"
        >
          Tudo o que precisa.{' '}
          <span className="block text-gold-gradient italic font-serif font-normal mt-1">
            Num só lugar.
          </span>
        </m.h1>

        {/* Subheadline */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl text-slate-300 font-light max-w-3xl mb-10 leading-relaxed drop-shadow-sm"
        >
          Variedade de confiança, marcas de prestígio e uma experiência de compra presencial organizada para famílias e empresas.
        </m.p>

        {/* Action Buttons */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <MagneticButton
            href="/produtos"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explorar Catálogo
          </MagneticButton>

          <MagneticButton
            href="/localizacao"
            variant="outline"
            size="lg"
            icon={<MapPin className="w-4 h-4" />}
            className="!text-white !border-white/30 hover:!border-white hover:!bg-white/10"
          >
            Como Chegar à Loja
          </MagneticButton>
        </m.div>

        {/* Quick Highlights Bar */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full max-w-4xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-blue-300 shrink-0">
              <Store className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Loja Ampla</span>
              <span className="text-[11px] text-slate-300">Atendimento Presencial</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">100% Autêntico</span>
              <span className="text-[11px] text-slate-300">Origem Certificada</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-emerald-300 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">140+ Produtos</span>
              <span className="text-[11px] text-slate-300">Stock em Loja</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-sky-300 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Luanda / Angola</span>
              <span className="text-[11px] text-slate-300">Fácil Acesso & Parque</span>
            </div>
          </div>
        </m.div>
      </m.div>
    </div>
  );
};
