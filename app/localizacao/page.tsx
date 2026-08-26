import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard3D } from '@/components/cards/GlassCard3D';
import { StoreStatus } from '@/components/ui/StoreStatus';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Car,
  ExternalLink,
} from 'lucide-react';

export default function LocalizacaoPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Como Chegar"
          title="Localização & Acessos"
          subtitle="Visite a nossa loja física. Estamos estrategicamente localizados com acessos rápidos, parque de estacionamento vigiado e segurança 24h."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Store Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Status Card */}
            <div className="p-6 rounded-2xl glass-panel border border-[#0052CC]/30 bg-[#F0F7FF]/80">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-3">
                Estado da Loja em Tempo Real
              </span>
              <StoreStatus />
            </div>

            {/* Address Card */}
            <GlassCard3D intensity={8}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF] border border-[#0052CC]/30 flex items-center justify-center text-[#FFFFFF] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B3A] mb-1">
                      Endereço do Armazém
                    </h3>
                    <p className="text-sm text-[#64748B] font-light leading-relaxed mb-3">
                      DUM Sociedade Lda, Complexo Comercial & Armazenista<br />
                      Luanda, Angola
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#0066FF] font-medium">
                      <Car className="w-3.5 h-3.5" />
                      Estacionamento privativo gratuito
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard3D>

            {/* Hours Card */}
            <GlassCard3D intensity={8}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF] border border-[#0052CC]/30 flex items-center justify-center text-[#FFFFFF] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B3A] mb-1">
                      Horário de Funcionamento
                    </h3>
                    <div className="text-sm text-[#64748B] font-light space-y-1.5">
                      <p className="flex justify-between gap-4">
                        <span>Segunda a Sábado:</span>
                        <strong className="text-[#0B1B3A]">08:00 - 20:00</strong>
                      </p>
                      <p className="flex justify-between gap-4">
                        <span>Domingos e Feriados:</span>
                        <strong className="text-[#0B1B3A]">08:00 - 18:00</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard3D>

            {/* Direct Contacts Card */}
            <GlassCard3D intensity={8}>
              <div className="p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#0066FF] mb-4">
                  Linhas de Apoio Presencial
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+244923000000"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#EAF1FF] hover:bg-[#DCEBFF] border border-[#0066FF]/20 transition-colors text-sm text-[#1E293B]"
                  >
                    <Phone className="w-4 h-4 text-[#0066FF]" />
                    <span>+244 923 000 000</span>
                  </a>
                  <a
                    href="https://wa.me/244900000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-colors text-sm text-[#15803D] font-medium"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Direto com a Loja</span>
                  </a>
                </div>
              </div>
            </GlassCard3D>
          </div>

          {/* Right Column: Interactive Map Frame */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-full min-h-[480px] rounded-3xl overflow-hidden glass-panel border border-[#0052CC]/30 flex flex-col justify-between p-6">
              {/* Styled Map Background Representation */}
              <div className="absolute inset-0 bg-[#F0F7FF]">
                <iframe
                  title="Localização DUM Sociedade Lda"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126154.56683887053!2d13.181845657805177!3d-8.838332997127116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5ce3ee6e7e!2sLuanda%2C%20Angola!5e0!3m2!1spt-PT!2s!4v1700000000000!5m2!1spt-PT!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Map floating Header Overlay */}
              <div className="relative z-10 p-4 rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-md border border-[#0052CC]/30 max-w-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066FF] block mb-1">
                  Ponto de Referência
                </span>
                <p className="text-xs text-[#334155] font-medium">
                  Acesso principal pela via expressa com sinalização vertical visível.
                </p>
              </div>

              {/* Map floating Bottom CTA */}
              <div className="relative z-10 flex flex-wrap gap-4 mt-auto">
                <MagneticButton
                  href="https://maps.google.com/?q=Luanda,Angola"
                  external={true}
                  variant="primary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Abrir no Google Maps
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
