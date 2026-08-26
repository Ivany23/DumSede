import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MasonryGallery } from '@/components/gallery/MasonryGallery';
import { galleryItems } from '@/data/gallery';

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Imersão Visual"
          title="Galeria do Armazém"
          subtitle="Explore as fotografias das nossas instalações, corredores temáticos, gôndolas e ilhas de frescos antes da sua visita presencial."
        />

        <MasonryGallery items={galleryItems} showFilters={true} />
      </div>
    </div>
  );
}
