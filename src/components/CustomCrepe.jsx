import React, { useState, useMemo } from 'react';
import { 
  CUSTOM_CREPE_PRICING, 
  UNTABLES, 
  TOPPINGS, 
  createWhatsAppUrl 
} from '../data/menuData';
import { ASSETS } from '../data/assets';
import { ChefHat, Plus, Check, MessageCircle, RotateCcw, Sparkles } from 'lucide-react';

export default function CustomCrepe() {
  const [selectedUntables, setSelectedUntables] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);

  // Alternar selección de untable
  const toggleUntable = (item) => {
    if (selectedUntables.includes(item)) {
      setSelectedUntables(selectedUntables.filter(i => i !== item));
    } else {
      setSelectedUntables([...selectedUntables, item]);
    }
  };

  // Alternar selección de topping
  const toggleTopping = (item) => {
    if (selectedToppings.includes(item)) {
      setSelectedToppings(selectedToppings.filter(i => i !== item));
    } else {
      setSelectedToppings([...selectedToppings, item]);
    }
  };

  // Cantidad total de ingredientes elegidos
  const totalIngredientsCount = selectedUntables.length + selectedToppings.length;

  // Cálculo automático del total en MXN
  const calculatedTotal = useMemo(() => {
    if (totalIngredientsCount === 0) return 0;

    let base = 55;
    if (totalIngredientsCount === 1) base = 55;
    else if (totalIngredientsCount === 2) base = 60;
    else if (totalIngredientsCount === 3) base = 70;
    else if (totalIngredientsCount === 4) base = 80;
    else {
      // 4 ingredientes base ($80) + $10 por cada ingrediente extra
      const extras = totalIngredientsCount - 4;
      base = 80 + (extras * CUSTOM_CREPE_PRICING.extraIngredientPrice);
    }

    // Suplemento si lleva Kinder Bueno
    const hasKinder = selectedToppings.some(t => t.toLowerCase().includes('kinder'));
    if (hasKinder) {
      base += CUSTOM_CREPE_PRICING.kinderBuenoSupplement;
    }

    return base;
  }, [totalIngredientsCount, selectedToppings]);

  // Limpiar selecciones
  const handleReset = () => {
    setSelectedUntables([]);
    setSelectedToppings([]);
  };

  // Generar mensaje prellenado de WhatsApp
  const allSelectedList = [...selectedUntables, ...selectedToppings];
  const customMessage = `¡Hola! Quiero ordenar una Crepa Personalizada con ${totalIngredientsCount} ingrediente(s): ${allSelectedList.join(', ')}. Total calculado: $${calculatedTotal} MXN.`;
  const whatsappCustomUrl = createWhatsAppUrl(customMessage);

  return (
    <section id="arma-tu-crepa" className="py-20 bg-[#141720] border-y border-[#262C3D] relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E6B34A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#E11D48]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6B34A]/10 border border-[#E6B34A]/30 text-[#E6B34A] text-xs font-semibold uppercase tracking-wider mb-3">
            <ChefHat className="w-4 h-4" />
            <span>Configurador Interactivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Arma tu Crepa Dulce a tu Gusto
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Elige los untables y toppings que más se te antojen. El precio se actualiza al instante según la combinación exacta.
          </p>

          {/* Tabla de Precios Base */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {CUSTOM_CREPE_PRICING.basePrices.map((tier) => (
              <div 
                key={tier.ingredients}
                className="bg-[#1A1E29] border border-[#262C3D] rounded-xl p-3 text-center"
              >
                <div className="text-xs text-zinc-400">{tier.ingredients} Ingrediente{tier.ingredients > 1 ? 's' : ''}</div>
                <div className="text-xl font-extrabold text-[#E6B34A] mt-1">${tier.price} <span className="text-xs font-normal text-zinc-400">MXN</span></div>
              </div>
            ))}
          </div>
          <div className="mt-2 text-xs text-zinc-500">
            * Ingrediente extra adicional: +$10 MXN | Kinder Bueno: +$15 MXN de suplemento
          </div>
        </div>

        {/* Layout en dos columnas: Selector y Resumen en vivo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Opciones de Untables y Toppings */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Paso 1: Untables */}
            <div className="bg-[#1A1E29] p-6 rounded-2xl border border-[#262C3D]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#E6B34A] text-black font-extrabold text-xs flex items-center justify-center">1</span>
                  Elige tus Untables
                </h3>
                <span className="text-xs text-zinc-400">
                  {selectedUntables.length} seleccionado(s)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {UNTABLES.map((untable) => {
                  const isSelected = selectedUntables.includes(untable);
                  return (
                    <button
                      key={untable}
                      onClick={() => toggleUntable(untable)}
                      type="button"
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-[#E6B34A] text-black border-[#E6B34A] shadow-md shadow-[#E6B34A]/20 font-bold'
                          : 'bg-[#141720] text-zinc-300 border-[#262C3D] hover:border-zinc-500 hover:bg-[#202533]'
                      }`}
                    >
                      <span className="truncate">{untable}</span>
                      {isSelected ? <Check className="w-4 h-4 ml-1 flex-shrink-0" /> : <Plus className="w-4 h-4 ml-1 opacity-30 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2: Toppings */}
            <div className="bg-[#1A1E29] p-6 rounded-2xl border border-[#262C3D]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#E11D48] text-white font-extrabold text-xs flex items-center justify-center">2</span>
                  Elige tus Toppings y Frutas
                </h3>
                <span className="text-xs text-zinc-400">
                  {selectedToppings.length} seleccionado(s)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {TOPPINGS.map((topping) => {
                  const isSelected = selectedToppings.includes(topping);
                  return (
                    <button
                      key={topping}
                      onClick={() => toggleTopping(topping)}
                      type="button"
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-[#E11D48] text-white border-[#E11D48] shadow-md shadow-[#E11D48]/20 font-bold'
                          : 'bg-[#141720] text-zinc-300 border-[#262C3D] hover:border-zinc-500 hover:bg-[#202533]'
                      }`}
                    >
                      <span className="truncate">{topping}</span>
                      {isSelected ? <Check className="w-4 h-4 ml-1 flex-shrink-0" /> : <Plus className="w-4 h-4 ml-1 opacity-30 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Resumen de Crepa y Botón Pedido */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-[#1A1E29] rounded-2xl border border-[#E6B34A]/40 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6B34A]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[#262C3D] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#E6B34A]" />
                  <h4 className="font-extrabold text-white text-base">Tu Crepa Creada</h4>
                </div>
                {totalIngredientsCount > 0 && (
                  <button
                    onClick={handleReset}
                    className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reiniciar</span>
                  </button>
                )}
              </div>

              {/* Imagen miniatura */}
              <div className="h-32 w-full rounded-xl overflow-hidden mb-4 border border-[#262C3D] relative bg-black/40">
                <img
                  src={selectedToppings.some(t => t.toLowerCase().includes('fresa')) ? ASSETS.fresa : ASSETS.dulce}
                  alt="Tu crepa personalizada"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">
                    {totalIngredientsCount === 0 ? 'Selecciona al menos 1 ingrediente' : `${totalIngredientsCount} Ingredientes seleccionados`}
                  </span>
                </div>
              </div>

              {/* Lista de ingredientes elegidos */}
              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    Untables ({selectedUntables.length}):
                  </div>
                  {selectedUntables.length === 0 ? (
                    <span className="text-xs text-zinc-500 italic">Ningún untable seleccionado</span>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {selectedUntables.map(u => (
                        <span key={u} className="text-xs bg-[#E6B34A]/20 text-[#E6B34A] border border-[#E6B34A]/30 px-2 py-0.5 rounded-md font-medium">
                          {u}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    Toppings ({selectedToppings.length}):
                  </div>
                  {selectedToppings.length === 0 ? (
                    <span className="text-xs text-zinc-500 italic">Ningún topping seleccionado</span>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {selectedToppings.map(t => (
                        <span key={t} className="text-xs bg-[#E11D48]/20 text-rose-300 border border-[#E11D48]/30 px-2 py-0.5 rounded-md font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Total y botón de orden */}
              <div className="border-t border-[#262C3D] pt-4">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-sm font-semibold text-zinc-300">Total estimado:</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-[#E6B34A]">
                      ${calculatedTotal}
                    </span>
                    <span className="text-xs text-zinc-400 ml-1">MXN</span>
                  </div>
                </div>

                {totalIngredientsCount === 0 ? (
                  <div className="text-center py-3 px-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-400">
                    Haz clic en los ingredientes de la izquierda para comenzar a armar tu crepa
                  </div>
                ) : (
                  <a
                    href={whatsappCustomUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-[#25D366] text-black hover:bg-[#20ba5a] shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 fill-black" />
                    <span>Pedir Crepa Armada (${calculatedTotal} MXN)</span>
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
