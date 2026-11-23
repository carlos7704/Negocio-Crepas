import React, { useState, useEffect } from 'react';
import { ASSETS } from '../data/assets';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/menuData';
import { Menu, X, MessageCircle, Sparkles, UtensilsCrossed, Calendar, Award } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Menú', href: '#menu' },
    { name: 'Arma tu Crepa', href: '#arma-tu-crepa' },
    { name: 'Pinche Club', href: '#pinche-club', badge: 'Pruebas' },
    { name: 'Eventos & Contacto', href: '#eventos' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const whatsappDirect = createWhatsAppUrl('¡Hola! Me gustaría hacer un pedido de crepas.');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0B0D12]/95 backdrop-blur-md border-b border-[#262C3D] shadow-2xl py-2.5' 
        : 'bg-gradient-to-b from-[#0B0D12]/90 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo y Nombre */}
          <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#E6B34A] shadow-lg shadow-[#E6B34A]/20 transition-transform group-hover:scale-105">
              <img 
                src={ASSETS.logo} 
                alt="Logo Pinche Club Las Pinches Crepas" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#E6B34A] transition-colors">
                PINCHE CLUB
              </span>
              <span className="text-[11px] font-medium tracking-widest text-zinc-400 -mt-1 uppercase">
                Las Pinches Crepas
              </span>
            </div>
          </a>

          {/* Enlaces de Navegación (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1.5"
              >
                {link.name}
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-[#E11D48]/20 text-[#E11D48] border border-[#E11D48]/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Botón WhatsApp Pedido Directo */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs md:text-sm bg-[#25D366] text-black hover:bg-[#20ba5a] shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>

          {/* Botón Menú Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B34A]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-[#141720] border-b border-[#262C3D] px-4 pt-3 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-zinc-200 hover:bg-white/5 hover:text-[#E6B34A] transition-colors"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#E11D48]/20 text-[#E11D48] border border-[#E11D48]/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-3 border-t border-[#262C3D]">
              <a
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm bg-[#25D366] text-black hover:bg-[#20ba5a] shadow-lg shadow-[#25D366]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Pedir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
