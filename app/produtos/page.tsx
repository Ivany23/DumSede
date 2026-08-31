'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Sparkles, X, RotateCcw, SlidersHorizontal, ChevronDown, Package, Check, Tag } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProductCard } from '@/components/cards/ProductCard';
import { SearchBar } from '@/components/search/SearchBar';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { brands } from '@/data/brands';

const categoryEmojis: Record<string, string> = {
  mercearia: '🛒',
  bebidas: '🥤',
  laticinios: '🥛',
  congelados: '❄️',
  higiene: '🧴',
  limpeza: '🧹',
  snacks: '🍪',
  infantil: '👶',
};

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const searchAliases: Record<string, string[]> = {
  'maca':     ['maçã', 'apple', 'maca'],
  'pessego':  ['pêssego', 'peach', 'pessego'],
  'laranja':  ['laranja', 'orange'],
  'goiaba':   ['goiaba', 'guava'],
  'lichia':   ['lichia', 'lychee'],
  'pera':     ['pera', 'pear'],
  'banana':   ['banana'],
  'acucar':   ['açúcar', 'acucar', 'sugar'],
  'oleo':     ['óleo', 'oleo', 'vegetal'],
  'sabonete': ['sabonete', 'soap'],
  'detergente': ['detergente', 'washing', 'roupa'],
  'antisseptico': ['antisséptico', 'antisseptico', 'antiseptic', 'dettol'],
  'lixivia':  ['lixívia', 'lixivia', 'bleach'],
  'amaciador': ['amaciador', 'condicionador', 'softener'],
  'pasta':    ['pasta', 'pasta dentífrica', 'creme dental'],
  'nido':     ['nido', 'fortigrow', 'leite crescimento'],
  'coca cola': ['coca-cola', 'coca cola', 'coke'],
  'refresco': ['refresco', 'refrigerante', 'soda'],
  'nectar':   ['néctar', 'nectar', 'sumo', 'suco'],
  'cerevita': ['cerevita', 'cereais', 'corn'],
  'hot chocolate': ['hot chocolate', 'chocolate quente'],
  'cremora':  ['cremora', 'leite po'],
  'caldo':    ['caldo', 'caldo benny', 'tempero'],
  'farinha':  ['farinha', 'flour'],
  'arroz':    ['arroz', 'rice'],
  'massa':    ['massa', 'esparguete', 'pasta', 'spaghetti'],
  'azeite':   ['azeite', 'olive oil', 'azeite virgem'],
  'feijao':   ['feijão', 'feijao', 'beans'],
  'ervilhas': ['ervilhas', 'peas'],
  'cogumelos': ['cogumelos', 'mushrooms'],
  'azeitonas': ['azeitonas', 'olives'],
  'mel':      ['mel', 'honey'],
  'sardinha': ['sardinha', 'sardines'],
  'vinagre':  ['vinagre', 'vinegar'],
  'sal':      ['sal', 'salt'],
  'flexi':    ['flexi', 'refill', 'recarga'],
  'loica':    ['loiça', 'loica', 'louça', 'dishes'],
  'aqua':     ['aqua', 'agua', 'água'],
  'lavender': ['lavender', 'lavanda'],
  'lemon':    ['lemon', 'limao', 'limão'],
  'floral':   ['floral'],
  'rose':     ['rose', 'rosa'],
  'mint':     ['mint', 'menta', 'menthol'],
  'twist':    ['twist', 'limao', 'limão'],
  'sprite':   ['sprite', 'lima', 'limao'],
  'spar':     ['spar-letta', 'sparletta', 'spar letta'],
  'fanta':    ['fanta'],
  'compal':   ['compal', 'nectar vital', 'nectarvital'],
  'colgate':  ['colgate'],
  'aquafresh': ['aquafresh', 'aqua fresh'],
  'dettol':   ['dettol', 'dentol'],
  'bakers':   ['bakers'],
  'romany':   ['romany creams', 'romany'],
  'tennis':   ['tennis bakers', 'tennis'],
  'topper':   ['topper'],
  'nestl':    ['nestlé', 'nestle'],
  'cim':      ['cim', 'polana', 'florbela', 'top score'],
  'dona':     ['dona', 'ativa', 'vida'],
  'europa':   ['europa'],
  'namaacha': ['namaacha', 'namahacha'],
  'gourmet':  ['gourmet'],
  'maq':      ['maq'],
  'cerebos':  ['cerebos'],
  'benny':    ['benny'],
  'autopac':  ['autopac'],
  'nacional': ['nacional', 'acucar nacional'],
};

function buildSearchCorpus(product: {
  name: string;
  brand: string;
  category: string;
  description: string;
  tags?: string[];
  features?: string[];
}): string {
  const parts = [
    product.name,
    product.brand,
    product.category,
    product.description,
    ...(product.tags || []),
    ...(product.features || []),
  ];
  return normalizeText(parts.join(' '));
}

function ProdutosCatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlQuery = searchParams.get('q') || '';
  const urlBrand = searchParams.get('marca') || 'todas';
  const urlCategory = searchParams.get('categoria') || 'todas';

  const [searchTerm, setSearchTerm] = useState(urlQuery);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [selectedBrand, setSelectedBrand] = useState(urlBrand);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  useEffect(() => {
    setSearchTerm(urlQuery);
    setSelectedCategory(urlCategory);
    setSelectedBrand(urlBrand);
    setVisibleCount(24);
  }, [urlQuery, urlBrand, urlCategory]);

  const availableBrands = useMemo(() => {
    return brands.map((b) => b.name).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const corpus = buildSearchCorpus(item);
      const rawTerm = searchTerm.trim();
      const normTerm = normalizeText(rawTerm);

      let matchSearch = !rawTerm;

      if (!matchSearch && normTerm.length > 0) {
        if (corpus.includes(normTerm)) {
          matchSearch = true;
        }

        if (!matchSearch) {
          const aliasExpansions = searchAliases[normTerm] || [];
          for (const alias of aliasExpansions) {
            if (corpus.includes(normalizeText(alias))) {
              matchSearch = true;
              break;
            }
          }
        }

        if (!matchSearch) {
          for (const [key, aliases] of Object.entries(searchAliases)) {
            if (key.startsWith(normTerm) || normTerm.startsWith(key)) {
              for (const alias of aliases) {
                if (corpus.includes(normalizeText(alias))) {
                  matchSearch = true;
                  break;
                }
              }
              if (matchSearch) break;
            }
          }
        }
      }

      const matchCategory =
        selectedCategory === 'todas' || item.categorySlug === selectedCategory;

      const matchBrand =
        selectedBrand === 'todas' ||
        normalizeText(item.brand) === normalizeText(selectedBrand);

      return matchSearch && matchCategory && matchBrand;
    });
  }, [searchTerm, selectedCategory, selectedBrand]);

  const featuredCount = filteredProducts.filter((p) => p.isFeatured).length;
  const hasActiveFilters =
    searchTerm !== '' || selectedCategory !== 'todas' || selectedBrand !== 'todas';

  const updateUrlFilters = (newQ: string, newCat: string, newBrand: string) => {
    const params = new URLSearchParams();
    if (newQ.trim()) params.set('q', newQ.trim());
    if (newCat !== 'todas') params.set('categoria', newCat);
    if (newBrand !== 'todas') params.set('marca', newBrand);

    const qs = params.toString();
    router.replace(qs ? `/produtos?${qs}` : '/produtos', { scroll: false });
  };

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setVisibleCount(24);
    updateUrlFilters(val, selectedCategory, selectedBrand);
  };

  const handleCategorySelect = (catSlug: string) => {
    setSelectedCategory(catSlug);
    setVisibleCount(24);
    updateUrlFilters(searchTerm, catSlug, selectedBrand);
  };

  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName);
    setShowBrandDropdown(false);
    setVisibleCount(24);
    updateUrlFilters(searchTerm, selectedCategory, brandName);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('todas');
    setSelectedBrand('todas');
    setShowBrandDropdown(false);
    setVisibleCount(24);
    router.replace('/produtos', { scroll: false });
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Catálogo Real DUM"
          title="Catálogo & Pesquisa de Produtos"
          subtitle="Explore o catálogo completo disponível no Armazém DUM. Pesquise por nome, marca ou categoria e encontre exatamente o que procura."
        />

        <div className="mb-8 p-6 rounded-3xl border border-[#0052CC]/20 bg-gradient-to-r from-[#F0F7FF] to-[#F8FAFF] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <SearchBar
                initialValue={searchTerm}
                onSearchChange={handleSearchChange}
                placeholder="Pesquise produto, marca (ex: Compal, Dettol, Arroz, Açúcar, MaQ)..."
                showDropdown={true}
              />
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowBrandDropdown(!showBrandDropdown)}
                className="w-full flex items-center justify-between px-4 py-3.5 bg-white border border-[#0052CC]/25 rounded-2xl text-sm text-[#0B1B3A] focus:outline-none focus:border-[#0066FF] hover:border-[#0066FF] shadow-2xs transition-all"
              >
                <div className="flex items-center gap-2 truncate">
                  <Tag className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                  <span className={selectedBrand === 'todas' ? 'text-[#94A3B8]' : 'text-[#0B1B3A] font-bold'}>
                    {selectedBrand === 'todas' ? 'Filtrar por Marca' : selectedBrand}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#0066FF] transition-transform duration-200 ${showBrandDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showBrandDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#0052CC]/20 rounded-2xl shadow-2xl z-50 max-h-72 overflow-y-auto p-1.5 animate-in fade-in zoom-in-95 duration-150">
                  <button
                    type="button"
                    onClick={() => handleBrandSelect('todas')}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors ${
                      selectedBrand === 'todas'
                        ? 'text-[#0066FF] font-bold bg-[#EAF1FF]'
                        : 'text-[#0B1B3A] hover:bg-[#F0F7FF]'
                    }`}
                  >
                    <span>Todas as Marcas ({products.length} itens)</span>
                    {selectedBrand === 'todas' && <Check className="w-4 h-4 text-[#0066FF]" />}
                  </button>

                  <div className="h-px bg-gray-100 my-1" />

                  {availableBrands.map((brand) => {
                    const brandCount = products.filter(
                      (p) => p.brand.toLowerCase() === brand.toLowerCase()
                    ).length;
                    return (
                      <button
                        key={brand}
                        type="button"
                        onClick={() => handleBrandSelect(brand)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                          selectedBrand === brand
                            ? 'text-[#0066FF] font-bold bg-[#EAF1FF]'
                            : 'text-[#0B1B3A] hover:bg-[#F0F7FF]'
                        }`}
                      >
                        <span className="truncate">{brand}</span>
                        <span className="text-xs text-[#64748B] ml-2">({brandCount})</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-[#0B1B3A]/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-[#64748B] font-medium">
                  Resultados: <strong className="text-[#0B1B3A] text-sm">{filteredProducts.length}</strong> produto{filteredProducts.length !== 1 ? 's' : ''}
                </span>

                {searchTerm && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-bold border border-[#0066FF]/20 shadow-2xs">
                    Termo: &ldquo;{searchTerm}&rdquo;
                    <button
                      onClick={() => handleSearchChange('')}
                      className="p-0.5 rounded-full hover:bg-[#0066FF]/20 transition-colors"
                      title="Remover termo"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedBrand !== 'todas' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200 shadow-2xs">
                    Marca: {selectedBrand}
                    <button
                      onClick={() => handleBrandSelect('todas')}
                      className="p-0.5 rounded-full hover:bg-amber-200 transition-colors"
                      title="Remover marca"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedCategory !== 'todas' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-2xs">
                    Categoria: {categories.find((c) => c.slug === selectedCategory)?.name.split(' &')[0]}
                    <button
                      onClick={() => handleCategorySelect('todas')}
                      className="p-0.5 rounded-full hover:bg-emerald-200 transition-colors"
                      title="Remover categoria"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 text-xs text-[#0066FF] hover:text-[#0052CC] font-bold uppercase tracking-wider transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Limpar Filtros
              </button>
            </div>
          )}
        </div>

        <div className="mb-10 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => handleCategorySelect('todas')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
              selectedCategory === 'todas'
                ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-lg shadow-[#0066FF]/25 scale-105'
                : 'bg-white text-[#0B1B3A] border-[#0B1B3A]/15 hover:border-[#0066FF]/50 hover:text-[#0066FF] shadow-2xs'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Todas as Categorias
            <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${selectedCategory === 'todas' ? 'bg-white/20 text-white' : 'bg-gray-100 text-[#64748B]'}`}>
              {products.length}
            </span>
          </button>

          {categories.map((cat) => {
            const count = products.filter((p) => p.categorySlug === cat.slug).length;
            if (count === 0) return null;
            const isSelected = selectedCategory === cat.slug;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.slug)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold border transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-lg shadow-[#0066FF]/25 scale-105'
                    : 'bg-white text-[#0B1B3A] border-[#0B1B3A]/15 hover:border-[#0066FF]/50 hover:text-[#0066FF] shadow-2xs'
                }`}
              >
                <span>{categoryEmojis[cat.slug] || '📦'}</span>
                <span>{cat.name.split(' &')[0]}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-[#64748B]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {selectedCategory !== 'todas' && (
          <div className="mb-8 p-5 rounded-2xl bg-[#F0F7FF] border border-[#0052CC]/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{categoryEmojis[selectedCategory] || '📦'}</span>
              <div>
                <h2 className="text-lg font-bold text-[#0B1B3A]">
                  {categories.find((c) => c.slug === selectedCategory)?.name}
                </h2>
                <p className="text-xs text-[#64748B]">
                  {categories.find((c) => c.slug === selectedCategory)?.description}
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#0066FF] bg-white px-3 py-1.5 rounded-xl border border-[#0052CC]/15">
              {filteredProducts.length} Produtos
            </span>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <>
            {featuredCount > 0 && selectedCategory === 'todas' && !searchTerm && selectedBrand === 'todas' && (
              <div className="mb-6 flex items-center gap-2 px-1">
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span className="text-xs text-[#64748B]">
                  <strong className="text-[#0B1B3A]">{featuredCount} produtos em destaque</strong> seleccionados para si no Armazém DUM
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.slice(0, visibleCount).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length > visibleCount && (
              <div className="mt-12 text-center flex flex-col items-center gap-3">
                <p className="text-xs text-[#64748B]">
                  A exibir <strong>{visibleCount}</strong> de <strong>{filteredProducts.length}</strong> produtos
                </p>
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 24, filteredProducts.length))}
                  className="px-8 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  Carregar Mais Produtos ({filteredProducts.length - visibleCount} restantes)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 rounded-3xl border border-[#0B1B3A]/10 bg-[#F8FAFF] max-w-lg mx-auto p-8 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mx-auto mb-4 text-[#0066FF]">
              <Package className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1B3A] mb-2">Nenhum produto encontrado</h3>
            <p className="text-sm text-[#64748B] mb-6 font-light leading-relaxed">
              Não encontrámos nenhum produto que corresponda aos filtros aplicados. Experimente pesquisar por outra marca ou categoria.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              Ver Todos os {products.length} Produtos
            </button>
          </div>
        )}
      </div>

      {showBrandDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowBrandDropdown(false)}
        />
      )}
    </div>
  );
}

export default function ProdutosPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-40 text-center">
        <p className="text-[#0066FF] font-semibold text-base animate-pulse">Carregando catálogo DUM...</p>
      </div>
    }>
      <ProdutosCatalogContent />
    </Suspense>
  );
}
