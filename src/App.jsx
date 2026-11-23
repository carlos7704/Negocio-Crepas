import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CustomCrepe from './components/CustomCrepe';
import PincheClub from './components/PincheClub';
import EventsContact from './components/EventsContact';
import AcademicFooter from './components/AcademicFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D12] text-zinc-100 flex flex-col selection:bg-[#E6B34A] selection:text-black">
      {/* Barra de Navegación Fija */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Menú Completo con buscador y tabs */}
        <MenuSection />

        {/* Arma tu Crepa Dulce + Configurador Interactivo */}
        <CustomCrepe />

        {/* Sección Pinche Club (Lealtad, PWA & QR) */}
        <PincheClub />

        {/* Eventos, Ubicación y Contacto */}
        <EventsContact />
      </main>

      {/* Footer Académico Institucional (CUCEI) */}
      <AcademicFooter />
    </div>
  );
}
