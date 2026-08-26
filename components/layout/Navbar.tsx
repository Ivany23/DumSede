'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MapPin, Search, X } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { MobileNav } from './MobileNav';
import { SearchBar } from '@/components/search/SearchBar';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Categorias', href: '/categorias' },
  { label: 'Marcas', href: '/marcas' },
  { label: 'Ofertas & Destaques', href: '/ofertas' },
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Localização', href: '/localizacao' },
  { label: 'Contacto', href: '/contacto' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setSearchModalOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav ${
          isScrolled ? 'py-3.5 shadow-md' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-gradient border border-dum-primary/40 flex items-center justify-center shadow-glow-blue group-hover:border-dum-primary transition-all duration-300">
              <span className="text-xl font-serif font-black text-white tracking-tighter">
                D
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-dum-text-primary group-hover:text-dum-primary transition-colors font-serif">
                DUM
              </span>
              <span className="text-[10px] tracking-[0.25em] text-dum-primary uppercase font-sans font-semibold -mt-1">
                Sociedade Lda
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-white/70 border border-[#0B1B3A]/10 backdrop-blur-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-dum-primary text-white font-bold shadow-glow-blue'
                      : 'text-dum-text-secondary hover:text-dum-text-primary hover:bg-[#F1F5F9]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2.5 rounded-full bg-white/80 border border-[#0052CC]/20 text-dum-primary hover:bg-[#F0F7FF] hover:border-[#0066FF] transition-all flex items-center gap-2 text-xs font-medium shadow-sm group"
              title="Pesquisar produtos ou marcas"
              aria-label="Abrir pesquisa"
            >
              <Search className="w-4 h-4 text-[#0066FF] group-hover:scale-110 transition-transform" />
              <span className="text-[#64748B] group-hover:text-[#0B1B3A]">Pesquisar...</span>
            </button>

            <MagneticButton
              href="/localizacao"
              variant="primary"
              size="sm"
              icon={<MapPin className="w-3.5 h-3.5" />}
            >
              Visite a DUM
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="w-10 h-10 rounded-xl bg-white/80 border border-dum-primary/20 flex items-center justify-center text-[#0066FF] hover:bg-white transition-colors"
              aria-label="Pesquisar"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/localizacao"
              className="px-3 py-2 rounded-full text-xs font-bold text-dum-primary bg-dum-primary/10 border border-dum-primary/30 flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Visitar</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-xl bg-white/80 border border-dum-primary/20 flex items-center justify-center text-dum-primary hover:bg-white transition-colors"
              aria-label="Abrir Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#0B1B3A]/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 shadow-2xl border border-[#0052CC]/20 relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF]">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1B3A]">Pesquisa no Catálogo DUM</h3>
                  <p className="text-xs text-[#64748B]">Encontre qualquer um dos 140+ produtos ou marcas</p>
                </div>
              </div>

              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <SearchBar
              autoFocus
              showDropdown={true}
              placeholder="Digite o nome do produto ou marca (ex: Compal, Dettol, Arroz, Açúcar)..."
            />
          </div>
        </div>
      )}

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
