import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  CheckCircle2,
  Package,
  Globe,
  ArrowLeft,
  Store,
} from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/cards/ProductCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { StoreStatus } from '@/components/ui/StoreStatus';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white pt-28 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center gap-2.5 text-xs text-slate-500">
          <Link href="/produtos" className="hover:text-[#1D4ED8] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Todos os Produtos</span>
          </Link>
          <span>/</span>
          <Link href={`/categorias/${product.categorySlug}`} className="hover:text-[#1D4ED8]">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#1D4ED8] font-semibold truncate max-w-[220px]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-50/60 p-8 flex items-center justify-center shadow-xs">
              {product.image ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4 mix-blend-multiply"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6">
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8] mb-3 shadow-sm">
                    <Package className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase block mb-1">
                    {product.brand} &bull; DUM Seleção
                  </span>
                  <span className="text-xs text-slate-500 font-light">
                    Artigo Autêntico com Garantia de Procedência
                  </span>
                </div>
              )}

              <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                <span className="px-3 py-1 rounded-full bg-[#1D4ED8] text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
                  {product.brand}
                </span>
                {product.origin && (
                  <span className="px-3 py-1 rounded-full bg-white/95 border border-slate-200 text-slate-700 text-[11px] font-medium flex items-center gap-1.5 shadow-2xs">
                    <Globe className="w-3 h-3 text-[#1D4ED8]" />
                    Origem: {product.origin}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {product.category}
                </span>
                <StoreStatus />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4 leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                {product.longDescription || product.description}
              </p>

              {product.categorySlug !== 'mercearia' && (
                <div className="mb-6 p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-3">
                    Especificações & Características
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {product.packaging && (
                      <div className="flex items-start gap-2 text-xs text-slate-700">
                        <Package className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                        <span>Embalagem: {product.packaging}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2">
                <Store className="w-5 h-5 text-[#1D4ED8]" />
                <span className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                  Disponível para Compra Presencial
                </span>
              </div>

              <p className="text-xs text-slate-500 font-light mb-5 leading-relaxed">
                Este artigo encontra-se em exibição e disponível nas gôndolas do armazém DUM Sociedade Lda. Visite-nos para conferir a frescura, proveniência e lote deste produto.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <MagneticButton
                  href="/localizacao"
                  variant="primary"
                  size="md"
                  icon={<MapPin className="w-4 h-4" />}
                >
                  Encontrar na Loja
                </MagneticButton>

                <MagneticButton
                  href="/contacto"
                  variant="outline"
                  size="md"
                >
                  Informações de Lote
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-slate-200 pt-14">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] block mb-1">
                  Mais Escolhas em {product.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Produtos Relacionados
                </h2>
              </div>

              <Link
                href={`/categorias/${product.categorySlug}`}
                className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] hover:underline"
              >
                Ver Categoria Completa &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
