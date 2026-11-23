import React from 'react';
import { ASSETS } from '../data/assets';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/menuData';
import { Utensils, MessageCircle, Clock, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = createWhatsAppUrl(
    '¡Hola! Vi el menú en su página y me gustaría pedir crepas a domicilio.'
  );

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Fondo con imagen de street gourmet y overlays degradados */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Crepas crujientes y deliciosas Pinche Club"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
        />
        {/* Degradado oscuro para máxima legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/80 to-[#0B0D12]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0D12]/70 to-[#0B0D12]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge destacado de servicio */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141720]/90 border border-[#E6B34A]/40 text-[#E6B34A] text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-md mb-6 hover:border-[#E6B34A] transition-colors">
          <Clock className="w-4 h-4 text-[#E6B34A]" />
          <span>{BUSINESS_INFO.scheduleNotice}</span>
        </div>

        {/* Título Principal H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
          El menú más chingón.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E6B34A] via-[#F5D078] to-[#E11D48]">
            Elige tu próximo antojo.
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-300 block mt-2">
            Nosotros ponemos la crepa.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-2xl font-medium mb-8">
          "{BUSINESS_INFO.subtagline}"
        </p>

        {/* CTAs Principales */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-[#E6B34A] to-[#F59E0B] text-black hover:from-[#F5D078] hover:to-[#E6B34A] shadow-xl shadow-[#E6B34A]/25 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Utensils className="w-5 h-5" />
            <span>Explorar Menú</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-[#25D366] text-black hover:bg-[#20ba5a] shadow-xl shadow-[#25D366]/25 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>Pedir por WhatsApp</span>
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="mt-14 hidden md:flex flex-col items-center text-zinc-400 text-xs">
          <span className="mb-1 text-zinc-500 font-medium tracking-wider uppercase text-[10px]">
            Desliza para ver especialidades
          </span>
          <a href="#menu" aria-label="Ir al menú" className="animate-bounce p-2 hover:text-[#E6B34A] transition-colors">
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
