'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { brandImages } from '@/data/brandImages';

export const BrandCarousel = () => {
  // Cópia dupla: -50% do trilho cai exatamente no início da segunda cópia (loop sem costura)
  const doubled = useMemo(() => [...brandImages, ...brandImages], []);

  return (
    <section className="relative w-full py-10 overflow-hidden bg-[#FFFFFF]">
      {/* Fades nas extremidades para as marcas surgirem/desaparecerem sem linhas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48 z-10 bg-gradient-to-r from-[#FFFFFF] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-48 z-10 bg-gradient-to-l from-[#FFFFFF] to-transparent" />

      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center w-max will-change-transform"
          style={{ x: '0%' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 110,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {doubled.map((brand, idx) => (
            <div
              key={`${idx}-${brand.id}`}
              aria-hidden={idx >= brandImages.length}
              className="flex items-center justify-center w-64 h-44 mx-6 shrink-0 py-2"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={240}
                height={150}
                quality={90}
                loading="lazy"
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};