import React, { useState, useMemo } from 'react';
import { 
  MENU_CATEGORIES, 
  MENU_ITEMS, 
  createWhatsAppUrl 
} from '../data/menuData';
import { getImageForCategory } from '../data/assets';
import { Search, Flame, MessageCircle, Star, Sparkles, Plus, Check } from 'lucide-react';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Conteo de productos por categoría
  const categoryCounts = useMemo(() => {
    const counts = { todos: MENU_ITEMS.length };
    MENU_CATEGORIES.forEach(cat => {
      counts[cat.id] = MENU_ITEMS.filter(item => item.category === cat.id).length;
    });
    return counts;
  }, []);

  // Filtrado reactivo en tiempo real (por nombre, ingredientes o descripción)
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCat = selectedCategory === 'todos' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCat;

      const matchesName = item.name.toLowerCase().includes(query);
      const matchesDesc = item.description?.toLowerCase().includes(query);
      const matchesIngredients = item.ingredients?.some(ing => ing.toLowerCase().includes(query));
      const matchesFlavors = item.flavors?.some(f => f.toLowerCase().includes(query));
      const matchesOptions = item.options?.some(opt => opt.toLowerCase().includes(query));

      return matchesCat && (matchesName || matchesDesc || matchesIngredients || matchesFlavors || matchesOptions);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#0B0D12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6B34A]/10 border border-[#E6B34A]/30 text-[#E6B34A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Catálogo Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Nuestras Crepas y Especialidades
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Elige entre nuestras especialidades clásicas, las combinaciones más pedidas o nuestros combos salados y snacks.
          </p>
        </div>

        {/* Buscador inteligente */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por antojo o ingrediente (ej. pistache, Oreo, Philadelphia, salada)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#141720] border border-[#262C3D] text-white placeholder-zinc-500 focus:outline-none focus:border-[#E6B34A] focus:ring-1 focus:ring-[#E6B34A] text-sm shadow-inner transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Tabs de Categorías deslizables horizontalmente */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start md:justify-center">
          <button
            onClick={() => setSelectedCategory('todos')}
            className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              selectedCategory === 'todos'
                ? 'bg-[#E6B34A] text-black shadow-lg shadow-[#E6B34A]/20 scale-105'
                : 'bg-[#141720] text-zinc-400 hover:text-white hover:bg-[#1A1E29] border border-[#262C3D]'
            }`}
          >
            <span>Todos los productos</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              selectedCategory === 'todos' ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-300'
            }`}>
              {categoryCounts.todos}
            </span>
          </button>

          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-[#E6B34A] text-black shadow-lg shadow-[#E6B34A]/20 scale-105'
                  : 'bg-[#141720] text-zinc-400 hover:text-white hover:bg-[#1A1E29] border border-[#262C3D]'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.id ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-300'
              }`}>
                {categoryCounts[cat.id] || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#141720] rounded-2xl border border-[#262C3D] max-w-md mx-auto">
            <Sparkles className="w-10 h-10 text-zinc-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No encontramos ningún producto</h3>
            <p className="text-zinc-400 text-xs mt-1">Intenta con otro término o ingrediente en el buscador.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const imageSrc = getImageForCategory(item.imageCategory);
              const itemWhatsAppMessage = `¡Hola! Me gustaría pedir "${item.name}" ($${item.price} MXN).`;
              const orderUrl = createWhatsAppUrl(itemWhatsAppMessage);

              return (
                <div
                  key={item.id}
                  className="group bg-[#141720] rounded-2xl border border-[#262C3D] overflow-hidden flex flex-col hover:border-[#E6B34A]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1"
                >
                  {/* Imagen y Badges */}
                  <div className="relative h-48 w-full overflow-hidden bg-black/40">
                    <img
                      src={imageSrc}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141720] via-transparent to-black/30" />
                    
                    {/* Badge de Top / Favorita o Personalizado */}
                    {(item.badge || item.popular) && (
                      <div className="absolute top-3 left-3 flex gap-1">
                        <span className="px-2.5 py-1 text-[11px] font-extrabold uppercase rounded-lg bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white shadow-md flex items-center gap-1">
                          <Star className="w-3 h-3 fill-white" />
                          {item.badge || 'Favorita'}
                        </span>
                      </div>
                    )}

                    {/* Precio en tarjeta */}
                    <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-xl border border-[#E6B34A]/40 text-[#E6B34A] font-extrabold text-base shadow-lg">
                      ${item.price} <span className="text-xs font-medium text-zinc-400">MXN</span>
                    </div>
                  </div>

                  {/* Información del Producto */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#E6B34A] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      
                      {item.description && (
                        <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      )}

                      {/* Ingredientes / Sabores */}
                      {item.ingredients && item.ingredients.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.ingredients.map((ing, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-[#1A1E29] border border-[#262C3D] text-zinc-300"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Presentaciones en tamaños (para bebidas) */}
                      {item.sizes && (
                        <div className="mt-3 pt-2 border-t border-[#262C3D]/60 flex justify-between items-center text-xs text-zinc-400">
                          {item.sizes.map((s, idx) => (
                            <div key={idx} className="text-center">
                              <span className="block text-[10px] text-zinc-500 uppercase">{s.size}</span>
                              <span className="font-bold text-zinc-200">${s.price}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Sabores de Frappé o Malteada */}
                      {item.flavors && (
                        <div className="mt-2 text-[11px] text-zinc-400">
                          <span className="text-[#E6B34A] font-semibold">11 Sabores:</span> {item.flavors.slice(0, 5).join(', ')}...
                        </div>
                      )}
                    </div>

                    {/* Botón WhatsApp de la tarjeta */}
                    <div className="mt-5 pt-3 border-t border-[#262C3D]">
                      <a
                        href={orderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#1A1E29] hover:bg-[#25D366] text-white hover:text-black border border-[#262C3D] hover:border-[#25D366] transition-all group-hover:shadow-md"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Pedir ${item.price} MXN</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
