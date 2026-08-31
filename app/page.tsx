import React from 'react';
import {
  Layers,
  Award,
  Sparkles,
  Users,
  ArrowRight,
  MapPin,
  Store,
  ShieldCheck,
} from 'lucide-react';
import { HeroCinematic } from '@/components/hero/HeroCinematic';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { CategoryCard } from '@/components/cards/CategoryCard';
import { ProductCard } from '@/components/cards/ProductCard';
import { BrandCarousel } from '@/components/brands/BrandCarousel';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* 1. HERO CINEMATIC (Executive Dark Navy) */}
      <HeroCinematic />

      {/* 2. DIFERENCIAIS EXCLUSIVOS (Crisp White Block) */}
      <section className="relative py-20 md:py-28 bg-white px-6 sm:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Diferenciais Exclusivos"
            title="A Excelência no Atendimento Presencial"
            subtitle="Mais do que um armazém: criámos um espaço onde a organização, a variedade e o acolhimento transformam cada visita numa experiência agradável."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              index={0}
              icon={<Layers className="w-6 h-6" />}
              tag="Diversidade Sem Igual"
              title="Grande Variedade"
              description="Do essencial para a despensa familiar às marcas mais conceituadas de mercearia, higiene e laticínios."
            />
            <FeatureCard
              index={1}
              icon={<Award className="w-6 h-6" />}
              tag="Padrão Rigoroso"
              title="Produtos de Qualidade"
              description="Seleção criteriosa de fornecedores e controlo contínuo de frescura, integridade e validade."
            />
            <FeatureCard
              index={2}
              icon={<Sparkles className="w-6 h-6" />}
              tag="Espaço Moderno"
              title="Ambiente Organizado"
              description="Corredores amplos, climatização agradável e sinalética intuitiva para compras confortáveis e sem pressa."
            />
            <FeatureCard
              index={3}
              icon={<Users className="w-6 h-6" />}
              tag="Equipa Dedicada"
              title="Atendimento Profissional"
              description="Colaboradores disponíveis para ajudar famílias e empresas a encontrar as melhores soluções."
            />
          </div>
        </div>
      </section>

      {/* 3. CATEGORIAS DE PRODUTOS (Soft Slate Block) */}
      <section className="relative py-20 md:py-28 bg-slate-50/70 px-6 sm:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#1D4ED8] text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-pulse" />
                Catálogo Físico
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A]">
                Explore as Nossas Categorias
              </h2>
            </div>

            <MagneticButton
              href="/categorias"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Ver Todas as Categorias
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUTOS EM DESTAQUE (Crisp White Block) */}
      <section className="relative py-20 md:py-28 bg-white px-6 sm:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Seleção Especial"
            title="Destaques Disponíveis no Armazém"
            subtitle="Conheça uma amostra dos produtos de excelência que encontra diariamente nas nossas gôndolas e balcões climatizados."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <MagneticButton
              href="/produtos"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explorar Catálogo Completo (140+ Itens)
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 5. MARCAS PARCEIRAS (Clean Slate Strip) */}
      <section className="relative py-14 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Marcas Oficiais Comercializadas no Armazém
          </span>
        </div>
        <BrandCarousel />
      </section>

      {/* 6. CALL TO ACTION PRESENCIAL (Executive Solid Navy Block) */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0B2545] to-[#061A30] text-white px-6 sm:px-8 text-center overflow-hidden">
        {/* Subtle Sapphire glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-400/30 bg-blue-950/60 text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            <Store className="w-4 h-4 text-blue-400" />
            Visita Presencial
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            O seu armazém de confiança{' '}
            <span className="text-gold-gradient font-serif italic block mt-1">
              espera pela sua visita.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto mb-9 leading-relaxed">
            Venha conhecer pessoalmente a nossa infraestrutura, a frescura dos nossos produtos e o atendimento acolhedor que preparamos para si e para a sua família.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="/localizacao"
              variant="primary"
              size="lg"
              icon={<MapPin className="w-4 h-4" />}
            >
              Como Chegar
            </MagneticButton>

            <MagneticButton
              href="/contacto"
              variant="outline"
              size="lg"
              className="!text-white !border-white/30 hover:!border-white hover:!bg-white/10"
            >
              Falar Connosco
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
