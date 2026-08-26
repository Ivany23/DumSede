'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard3D } from '@/components/cards/GlassCard3D';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Send,
} from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: 'informacao',
    mensagem: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) return;

    // Static simulation feedback without backend
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Canais Institucionais"
          title="Fale Connosco"
          subtitle="Estamos ao seu dispor para esclarecer dúvidas sobre a disponibilidade de artigos, parcerias com fornecedores ou visitas empresariais ao armazém."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard3D intensity={8}>
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-4">
                  Atendimento Geral & Fornecedores
                </span>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF] border border-[#0052CC]/30 flex items-center justify-center text-[#FFFFFF] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#64748B] block">Telefone Central</span>
                      <a href="tel:+244923000000" className="text-sm font-semibold text-[#0B1B3A] hover:text-[#0066FF]">
                        +244 923 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF] border border-[#0052CC]/30 flex items-center justify-center text-[#FFFFFF] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#64748B] block">Correio Eletrónico</span>
                      <a href="mailto:geral@dumsociedade.com" className="text-sm font-semibold text-[#0B1B3A] hover:text-[#0066FF]">
                        geral@dumsociedade.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF] border border-[#0052CC]/30 flex items-center justify-center text-[#FFFFFF] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#64748B] block">Sede & Armazém</span>
                      <p className="text-sm text-[#334155] font-light">
                        Complexo Comercial & Armazenista, Luanda - Angola
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="mt-8 pt-6 border-t border-[#0B1B3A]/10">
                  <a
                    href="https://wa.me/244900000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#15803D] text-sm font-bold hover:bg-[#25D366]/30 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Canal de WhatsApp Oficial</span>
                  </a>
                </div>
              </div>
            </GlassCard3D>

            <div className="p-6 rounded-2xl glass-panel border border-[#0052CC]/20 bg-[#F0F7FF]/50 text-xs text-[#64748B] font-light leading-relaxed">
              <p>
                <strong>Nota:</strong> As mensagens enviadas por este canal institucional destinam-se a esclarecimentos, cotações institucionais de lotes físicos e apoio aos visitantes do armazém.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Static Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#0052CC]/30 bg-[#F0F7FF]/90">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#0066FF] border border-[#0052CC]/40 flex items-center justify-center text-[#FFFFFF] mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1B3A] mb-2">
                    Mensagem Recebida com Sucesso
                  </h3>
                  <p className="text-sm text-[#64748B] font-light max-w-md mx-auto mb-8">
                    Agradecemos o seu contacto com a DUM Sociedade Lda. A nossa equipa responderá com a maior brevidade.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ nome: '', telefone: '', email: '', assunto: 'informacao', mensagem: '' });
                    }}
                    className="px-6 py-3 rounded-full bg-[#0066FF] text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider border border-[#0052CC]/30 hover:bg-[#0052CC] transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#0B1B3A] mb-4">
                    Envie-nos uma Mensagem
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0066FF] mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: João da Silva"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#0052CC]/20 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] transition-colors placeholder-[#64748B]"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0066FF] mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+244 9..."
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#0052CC]/20 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] transition-colors placeholder-[#64748B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0066FF] mb-2">
                        Correio Eletrónico (Email) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#0052CC]/20 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] transition-colors placeholder-[#64748B]"
                      />
                    </div>

                    {/* Assunto */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0066FF] mb-2">
                        Assunto
                      </label>
                      <select
                        value={formData.assunto}
                        onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#0052CC]/20 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                      >
                        <option value="informacao">Informação sobre Produtos</option>
                        <option value="empresas">Abastecimento Empresarial</option>
                        <option value="fornecedor">Apresentação de Fornecedor</option>
                        <option value="outro">Outro Assunto</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0066FF] mb-2">
                      A sua Mensagem *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Descreva detalhadamente como o podemos ajudar..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#0052CC]/20 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] transition-colors placeholder-[#64748B] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#0052CC] to-[#1E40AF] text-[#FFFFFF] font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_30px_rgba(0,102,255,0.55)] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
