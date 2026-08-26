import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { ProductCard } from '@/components/cards/ProductCard';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface CategoryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.categorySlug === category.slug);

  return (
    <div className="min-h-screen bg-[#FFFFFF] pb-24">
      {/* Immersive Category Hero Banner */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] min-h-[380px] overflow-hidden flex items-end bg-[#FFFFFF]">
        {category.bannerImage || category.image ? (
          <Image
            src={(category.bannerImage || category.image)!}
            alt={category.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.35] contrast-[1.1]"
          />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,102,255,0.6),rgba(255,255,255,1))]" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0052CC]/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0052CC08_1px,transparent_1px),linear-gradient(to_bottom,#0052CC08_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-[#0066FF]/40 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-16 relative z-10 w-full">
          <Link
            href="/categorias"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0066FF] hover:underline mb-6 bg-[#EAF1FF] px-3 py-1.5 rounded-full border border-[#0052CC]/30 backdrop-blur-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Todas as Categorias</span>
          </Link>

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0066FF] block mb-2">
            Secção DUM &bull; {category.itemCount}
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0B1B3A] tracking-tight mb-4">
            {category.name}
          </h1>

          <p className="text-base sm:text-lg text-[#334155] font-light max-w-2xl leading-relaxed">
            {category.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            {category.highlights.map((h, i) => (
              <span
                key={i}
                className="text-xs font-medium text-white bg-[#0066FF]/80 border border-[#0052CC]/30 px-3.5 py-1 rounded-full backdrop-blur-sm"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Products in this category */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-[#0B1B3A]/10 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-1">
              Catálogo Presencial
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A]">
              Produtos em Exibição nesta Secção
            </h2>
          </div>

          <MagneticButton href="/localizacao" variant="secondary" size="sm">
            Visitar esta Secção na Loja
          </MagneticButton>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categoryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-2xl border border-[#0B1B3A]/10 max-w-md mx-auto p-8 mb-16">
            <Sparkles className="w-8 h-8 text-[#0066FF] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0B1B3A] mb-1">Novas Remessas Chegando</h3>
            <p className="text-xs text-[#64748B] mb-4">
              Visite o armazém para conferir a variedade completa disponível diariamente.
            </p>
            <Link
              href="/produtos"
              className="text-xs font-semibold text-[#0066FF] uppercase tracking-wider underline"
            >
              Ver Outros Produtos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
