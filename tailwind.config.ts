import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        dum: {
          // Paleta Executiva: Azul Marinho Nobre + Safira + Branco Cristalino
          primary: '#1D4ED8',        // Azul Safira Nobre (ação primária, botões, links ativos)
          primaryHover: '#1E40AF',   // Azul Safira Escuro (hover)
          primaryDark: '#0B2545',    // Azul Marinho Corporativo Profundo
          primaryLight: '#3B82F6',   // Azul Real vibrante
          
          // Backgrounds e Superfícies Estruturadas
          navy: {
            DEFAULT: '#0B2545',      // Navy Executivo base
            deep: '#061A30',         // Midnight Navy (Hero / Footer)
            surface: '#102F54',      // Navy elevado para cartões escuros
            border: '#1E3E66',       // Borda nítida sobre navy
          },
          bg: {
            DEFAULT: '#FFFFFF',      // Branco Puro
            secondary: '#F8FAFC',    // Slate Ultra-claro (secções alternadas)
            tertiary: '#F1F5F9',     // Slate Suave
            tint: '#EFF6FF',         // Azul Ice sutil
          },
          
          // Texto de Alto Contraste
          text: {
            primary: '#0F172A',      // Slate 900 (legibilidade máxima)
            secondary: '#475569',    // Slate 600
            light: '#64748B',        // Slate 500
            muted: '#94A3B8',        // Slate 400
          },
          
          // Acentos de Estado e Destaques
          accent: {
            success: '#059669',      // Verde Esmeralda
            warning: '#D97706',      // Âmbar Ouro
            error: '#DC2626',        // Vermelho Carmim
            info: '#0284C7',         // Azul Céu Oceano
          },
          
          // Cores refinadas por categoria de produto
          category: {
            mercearia: '#059669',    // Verde Esmeralda (Alimentos & Essenciais)
            bebidas: '#2563EB',      // Azul Safira (Bebidas & Garrafeira)
            laticinios: '#D97706',   // Âmbar Ouro (Laticínios & Queijos)
            congelados: '#0284C7',   // Azul Glacial (Carnes & Pescados Congelados)
            higiene: '#4F46E5',      // Índigo Nobre (Cuidado Pessoal)
            limpeza: '#0D9488',      // Teal Fresco (Limpeza & Lar)
            snacks: '#E11D48',       // Rubi / Framboesa (Snacks & Chocolates)
            infantil: '#7C3AED',     // Púrpura Suave (Linha Infantil & Bebé)
          },
          
          // Superfícies e Bordas Nítidas
          card: '#FFFFFF',
          border: '#E2E8F0',
          borderHover: '#93C5FD',
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'navy-hero': 'linear-gradient(135deg, #061A30 0%, #0B2545 60%, #102F54 100%)',
        'blue-gradient': 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
        'sapphire-gradient': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 50%, #1E3A8A 100%)',
        'white-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
      },
      boxShadow: {
        'executive': '0 4px 20px -2px rgba(11, 37, 69, 0.08), 0 2px 6px -1px rgba(11, 37, 69, 0.04)',
        'executive-hover': '0 12px 30px -4px rgba(11, 37, 69, 0.14), 0 4px 10px -2px rgba(11, 37, 69, 0.06)',
        'glow-sapphire': '0 0 25px rgba(29, 78, 216, 0.25)',
        'glow-gold': '0 0 25px rgba(217, 119, 6, 0.2)',
        'card-clean': '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
