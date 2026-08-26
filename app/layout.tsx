import type { Metadata } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'DUM Sociedade Lda | Armazém Moderno & Experiência de Compra',
  description:
    'Apresentação institucional e catálogo do armazém DUM Sociedade Lda. Produtos alimentares, bebidas, laticínios, congelados, higiene e limpeza com qualidade e atendimento de confiança.',
  keywords: [
    'DUM Sociedade Lda',
    'Armazém DUM',
    'Supermercado Luanda',
    'Produtos Alimentares',
    'Bebidas Angola',
    'Mercearia & Essenciais',
    'Laticínios e Frescos',
    'Congelados',
  ],
  openGraph: {
    title: 'DUM Sociedade Lda | Tudo o que precisa. Num só lugar.',
    description:
      'Uma experiência de compra moderna, acolhedora e com variedade premium para famílias e empresas.',
    type: 'website',
    locale: 'pt_AO',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className="bg-white text-dum-text-primary antialiased selection:bg-dum-primary selection:text-white min-h-screen flex flex-col justify-between">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-0">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
