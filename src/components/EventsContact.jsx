import React, { useState } from 'react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/menuData';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Copy, 
  Check, 
  Send, 
  Cake, 
  Users, 
  PartyPopper 
} from 'lucide-react';

export default function EventsContact() {
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Formulario de cotización de eventos
  const [eventType, setEventType] = useState('Cumpleaños');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('50');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Copiar número al portapapeles
  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.whatsappNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // Enviar cotización por WhatsApp
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const message = `¡Hola! Me gustaría cotizar una Barra Dulce / Crepas para un evento:\n- Tipo de evento: ${eventType}\n- Fecha estimada: ${eventDate || 'Por definir'}\n- Número de personas: ${guestCount}\n- Notas adicionales: ${additionalNotes || 'Ninguna'}`;
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const directWhatsAppUrl = createWhatsAppUrl('¡Hola! Me gustaría información sobre pedidos y horarios.');

  return (
    <section id="eventos" className="py-20 bg-[#141720] border-t border-[#262C3D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6B34A]/10 border border-[#E6B34A]/30 text-[#E6B34A] text-xs font-semibold uppercase tracking-wider mb-3">
            <PartyPopper className="w-3.5 h-3.5" />
            <span>Eventos & Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Eventos Especiales y Ubicación
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Llevamos nuestra plancha y el sabor más chingón a tus fiestas privadas, bodas, graduaciones y reuniones.
          </p>
        </div>

        {/* Dos Columnas Equilibradas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Columna 1: Cotizador para Eventos (Barra Dulce) */}
          <div className="bg-[#1A1E29] rounded-3xl border border-[#262C3D] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold mb-4">
                <Cake className="w-4 h-4 text-rose-400" />
                <span>Barra Dulce para Eventos</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                "Nosotros nos encargaremos de la cereza del pastel de tu evento"
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Montamos barra de crepas dulces y saladas en vivo para que tus invitados elijan sus combinaciones favoritas al momento.
              </p>

              {/* Formulario rápido */}
              <form onSubmit={handleQuoteSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Tipo de Evento</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-[#262C3D] text-white text-xs focus:outline-none focus:border-[#E6B34A]"
                  >
                    <option value="Cumpleaños">Cumpleaños</option>
                    <option value="Graduación">Graduación escolar / Universitaria</option>
                    <option value="Boda o Aniversario">Boda o Aniversario</option>
                    <option value="Evento Corporativo">Evento Corporativo / Empresa</option>
                    <option value="Reunión Privada">Reunión con amigos</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Fecha Estimada</label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-[#262C3D] text-white text-xs focus:outline-none focus:border-[#E6B34A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Número de Invitados</label>
                    <input
                      type="number"
                      min="15"
                      step="5"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      placeholder="Ej. 50"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-[#262C3D] text-white text-xs focus:outline-none focus:border-[#E6B34A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Detalles o lugar del evento</label>
                  <textarea
                    rows={2}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Zona o colonia, horario deseado, etc."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#141720] border border-[#262C3D] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#E6B34A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#E6B34A] to-[#F59E0B] text-black hover:opacity-95 shadow-lg shadow-[#E6B34A]/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Cotizar Barra Dulce por WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Columna 2: Ubicación, Horarios y Contacto Directo */}
          <div className="bg-[#1A1E29] rounded-3xl border border-[#262C3D] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl font-black text-white mb-2">
                Ubicación, Horarios y Contacto
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Contáctanos directamente para pedidos inmediatos a domicilio o para resolver cualquier duda.
              </p>

              {/* Tarjetas de contacto */}
              <div className="space-y-4 mb-6">
                
                {/* Teléfono y WhatsApp */}
                <div className="p-4 rounded-2xl bg-[#141720] border border-[#262C3D] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-400 block">Pedidos WhatsApp / Llamadas</span>
                      <a 
                        href={directWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-[#25D366] transition-colors text-sm"
                      >
                        {BUSINESS_INFO.whatsappFormatted}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    aria-label="Copiar teléfono"
                    className="p-2 rounded-lg bg-[#1A1E29] hover:bg-white/10 text-zinc-300 transition-colors"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Instagram */}
                <div className="p-4 rounded-2xl bg-[#141720] border border-[#262C3D] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-400 block">Síguenos en Instagram</span>
                      <a
                        href={BUSINESS_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-rose-400 transition-colors text-sm"
                      >
                        {BUSINESS_INFO.instagram}
                      </a>
                    </div>
                  </div>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#1A1E29] text-zinc-300 hover:text-white border border-[#262C3D]"
                  >
                    Ver Perfil
                  </a>
                </div>

                {/* Horario */}
                <div className="p-4 rounded-2xl bg-[#141720] border border-[#262C3D] flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E6B34A]/20 border border-[#E6B34A]/30 flex items-center justify-center text-[#E6B34A] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 block">Horario de servicio a domicilio</span>
                    <span className="font-bold text-white text-sm">
                      Sábados de 7:00 p.m. a 10:30 p.m.
                    </span>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      (Para eventos privados el horario es libre y acordado con anticipación).
                    </p>
                  </div>
                </div>

              </div>

              {/* Mapa de Zona de Entrega / Referencia Visual */}
              <div className="p-4 rounded-2xl bg-[#141720] border border-[#262C3D]">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-white">
                  <MapPin className="w-4 h-4 text-[#E6B34A]" />
                  <span>Zona de Cobertura y Entrega</span>
                </div>
                <div className="h-28 w-full rounded-xl bg-[#0B0D12] border border-[#262C3D] flex flex-col items-center justify-center text-center p-3 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E6B34A_1px,transparent_1px)] [background-size:12px_12px]" />
                  <MapPin className="w-6 h-6 text-[#E6B34A] mb-1 animate-bounce" />
                  <span className="text-xs font-semibold text-zinc-200">
                    Zona Metropolitana de Guadalajara & Alrededores
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-0.5">
                    Coordinación exacta y punto de entrega vía WhatsApp
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
