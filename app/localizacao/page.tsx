import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { StoreStatus } from '@/components/ui/StoreStatus';
import {
  MapPin,
  Clock,
  Car,
  Navigation,
  CheckCircle2,
  Phone,
  Store,
} from 'lucide-react';

export default function LocalizacaoPage() {
  const storeFeatures = [
    'Estacionamento amplo e gratuito',
    'Acesso facilitado para carrinhos e viaturas',
    'Segurança privada e monitoramento permanente',
    'Climatização centralizada em todas as secções',
    'Balcões de atendimento e faturação rápidos',
    'Zona de carga rápida para compras volumosas',
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Loja Física"
          title="Onde Estamos"
          subtitle="Visite as instalações do armazém DUM Sociedade Lda. Um espaço pensado ao detalhe para acolher famílias e profissionais com todo o conforto e comodidade."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Informações de Contacto & Horário */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8]">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A]">Armazém Principal</h3>
                    <span className="text-xs text-slate-500">DUM Sociedade Lda</span>
                  </div>
                </div>
                <StoreStatus />
              </div>

              <div className="space-y-5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block mb-0.5 text-xs">Endereço</strong>
                    <span>Luanda, Angola &bull; Acesso direto pelas vias principais da cidade.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block mb-0.5 text-xs">Horário de Funcionamento</strong>
                    <span>Segunda a Sábado: 08:00 &ndash; 20:00</span>
                    <span className="block text-slate-500">Domingos e Feriados: 08:00 &ndash; 18:00</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block mb-0.5 text-xs">Atendimento Telefónico</strong>
                    <span>+244 923 000 000 / +244 931 000 000</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap gap-3">
                <MagneticButton
                  href="https://maps.google.com"
                  variant="primary"
                  size="sm"
                  icon={<Navigation className="w-3.5 h-3.5" />}
                >
                  Abrir GPS no Google Maps
                </MagneticButton>
              </div>
            </div>

            {/* Facilidades do Espaço */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Car className="w-4 h-4 text-[#1D4ED8]" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                  Comodidades para os Clientes
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {storeFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mapa Visual */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[450px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xs">
              <iframe
                title="Localização do Armazém DUM"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126154.55018698547!2d13.200000!3d-8.838333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c56d7870a!2sLuanda%2C%20Angola!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />

              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-md text-xs font-semibold text-[#0F172A] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Ponto Físico de Venda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé da Página: Dica */}
        <div className="p-8 rounded-2xl bg-blue-50/70 border border-blue-200 text-center max-w-2xl mx-auto shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-4">
            Precisa de apoio para encomendas institucionais ou deseja confirmar a disponibilidade de grandes volumes antes de se deslocar?
          </p>
          <MagneticButton href="/contacto" variant="primary" size="sm">
            Contactar a Equipa Comercial
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
