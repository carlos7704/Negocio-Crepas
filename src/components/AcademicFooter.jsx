import React from 'react';
import { ASSETS } from '../data/assets';
import { BUSINESS_INFO } from '../data/menuData';
import { GraduationCap, BookOpen, Calendar, UserCheck } from 'lucide-react';

export default function AcademicFooter() {
  const { academic } = BUSINESS_INFO;

  return (
    <footer className="bg-[#07090E] border-t border-[#262C3D]/80 text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Diseño Horizontal de Tres Bloques */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-[#1A1E29]">
          
          {/* Bloque 1: Logo Oficial de CUCEI (Izquierda) */}
          <div className="md:col-span-4 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-20 h-20 p-2 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-lg">
              <img
                src={ASSETS.cuceiLogo}
                alt="Logo Oficial CUCEI Universidad de Guadalajara"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-white block">
                Proyecto Académico
              </span>
              <p className="text-xs text-zinc-400 mt-0.5 font-medium">
                {academic.institution}
              </p>
              <span className="text-[10px] text-zinc-500 block">
                Centro Universitario de Ciencias Exactas e Ingenierías
              </span>
            </div>
          </div>

          {/* Bloque 2: Información del Creador y Materia (Centro) */}
          <div className="md:col-span-4 text-center md:text-left border-y md:border-y-0 md:border-x border-[#1A1E29] py-4 md:py-0 md:px-6">
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <GraduationCap className="w-4 h-4 text-[#E6B34A] flex-shrink-0" />
                <span>
                  <strong className="text-zinc-200">Creador:</strong> {academic.student}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <BookOpen className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>
                  <strong className="text-zinc-200">Materia:</strong> {academic.subject}
                </span>
              </div>
            </div>
          </div>

          {/* Bloque 3: Profesor y Calendario (Derecha) */}
          <div className="md:col-span-4 text-center md:text-right">
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong className="text-zinc-200">Profesor:</strong> {academic.teacher}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Calendar className="w-4 h-4 text-[#E6B34A] flex-shrink-0" />
                <span>
                  <strong className="text-zinc-200">Calendario:</strong> {academic.term} | {academic.date}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Créditos de Cierre */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 text-center sm:text-left gap-2">
          <p>© 2026 {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desarrollado con</span>
            <span className="text-rose-500">❤️</span>
            <span>en React + Vite & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
