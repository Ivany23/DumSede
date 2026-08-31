import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CategoryCard } from '@/components/cards/CategoryCard';
import { categories } from '@/data/categories';

export default function CategoriasPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Secções do Armazém"
          title="Todas as Categorias"
          subtitle="Conheça a disposição por corredores e secções especializadas do nosso armazém. Cada categoria é abastecida diariamente com produtos rigorosamente inspecionados."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
