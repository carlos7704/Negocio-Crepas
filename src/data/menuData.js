// Catálogo completo y reglas de negocio para Pinche Club | Las Pinches Crepas

export const BUSINESS_INFO = {
  name: "Pinche Club | Las Pinches Crepas",
  tagline: "El menú más chingón. Elige tu próximo antojo. Nosotros ponemos la crepa.",
  subtagline: "Hecho para los de buen antojo.",
  whatsappNumber: "525642232061",
  whatsappFormatted: "(56) 4223 2061",
  instagram: "@crepasest",
  instagramUrl: "https://instagram.com/crepasest",
  scheduleNotice: "Servicio a domicilio los sábados de 7:00 p.m. a 10:30 p.m.",
  deliveryZone: "Servicio a domicilio y barra dulce para eventos en toda la zona metropolitana.",
  academic: {
    student: "Carlos David Macias Santillan",
    subject: "Desarrollo De Aplicaciones Web en la Nube y Móviles",
    institution: "CUCEI – Universidad de Guadalajara",
    teacher: "Zeus Emanuel Gutierrez Cobian",
    term: "2026A",
    date: "Noviembre 2026"
  }
};

// Generador de enlace directo a WhatsApp
export const createWhatsAppUrl = (message) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
};

// 1. Arma tu Crepa Dulce
export const CUSTOM_CREPE_PRICING = {
  basePrices: [
    { ingredients: 1, price: 55 },
    { ingredients: 2, price: 60 },
    { ingredients: 3, price: 70 },
    { ingredients: 4, price: 80 },
  ],
  extraIngredientPrice: 10,
  kinderBuenoSupplement: 15,
};

export const UNTABLES = [
  "Nutella",
  "Philadelphia",
  "Cajeta",
  "Lechera",
  "Pistache",
  "Vainilla",
  "Mermelada de fresa",
  "Mermelada de durazno",
  "Mermelada de frutos rojos",
  "Mermelada de zarzamora"
];

export const TOPPINGS = [
  "Fresa",
  "Plátano",
  "Durazno",
  "Mazapán",
  "Nuez",
  "Chocolate blanco",
  "Chocolate Hershey's",
  "Kinder Bueno (+$15)",
  "Galleta Oreo",
  "Barquillo chocolate"
];

// Menú general categorizado
export const MENU_CATEGORIES = [
  { id: "especialidades-60", name: "Especialidades $60", badge: "$60 MXN" },
  { id: "especialidades-70", name: "Especialidades $70", badge: "$70 MXN" },
  { id: "mas-pedidas", name: "Las Más Pedidas", badge: "Favoritas ⭐" },
  { id: "especiales-casa", name: "Especiales de la Casa", badge: "Signature" },
  { id: "crepas-saladas", name: "Crepas Saladas", badge: "Saladas 🧀" },
  { id: "bebidas", name: "Bebidas & Frappés", badge: "Refrescantes 🥤" },
  { id: "antojos-snacks", name: "Antojos & Snacks", badge: "Snacks 🍟" },
];

export const MENU_ITEMS = [
  // Especialidades de $60
  {
    id: "esp-60-1",
    name: "La Consentida",
    category: "especialidades-60",
    price: 60,
    ingredients: ["Nutella", "Durazno"],
    description: "La combinación suave y clásica de avellana con durazno en almíbar.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "esp-60-2",
    name: "La Inolvidable",
    category: "especialidades-60",
    price: 60,
    ingredients: ["Philadelphia", "Zarzamora"],
    description: "Cremoso queso Philadelphia con toque acidito de mermelada de zarzamora artesanal.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "esp-60-3",
    name: "La Pelona",
    category: "especialidades-60",
    price: 60,
    ingredients: ["Philadelphia", "Mermelada de frutos rojos"],
    description: "Cremosa base de queso blanco con explosión frutal de frutos rojos.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "esp-60-4",
    name: "La Mamalona",
    category: "especialidades-60",
    price: 60,
    ingredients: ["Crema de pistache", "Fresa"],
    description: "Pistache auténtico y trozos frescos de fresa seleccionada.",
    popular: true,
    imageCategory: "fresa"
  },
  {
    id: "esp-60-5",
    name: "La Pinche Godín",
    category: "especialidades-60",
    price: 60,
    ingredients: ["Cajeta", "Mazapán"],
    description: "El consuelo de la quincena: cajeta dulce y mazapán desmoronado generoso.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "esp-60-6",
    name: "La Perrona",
    category: "especialidades-60",
    price: 60,
    ingredients: ["Vainilla", "Plátano"],
    description: "Untable suave de vainilla con plátano maduro rebanado al momento.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "esp-60-7",
    name: "La Untadita",
    category: "especialidades-60",
    price: 60,
    ingredients: ["Nutella", "Philadelphia"],
    description: "El match perfecto: lo dulce de la avellana y el toque saladito del queso.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "esp-60-8",
    name: "La Chorreada",
    category: "especialidades-60",
    price: 60,
    ingredients: ["Lechera", "Cajeta"],
    description: "Para los amantes del dulce sin censura, doble hilo cremoso.",
    popular: false,
    imageCategory: "dulce"
  },

  // Especialidades de $70
  {
    id: "esp-70-1",
    name: "La Bien Encaprichada",
    category: "especialidades-70",
    price: 70,
    ingredients: ["Nutella", "Fresa", "Philadelphia"],
    description: "Trio celestial: fresa fresca, nutella y el balance del Philadelphia.",
    popular: true,
    imageCategory: "fresa"
  },
  {
    id: "esp-70-2",
    name: "La Pecadora",
    category: "especialidades-70",
    price: 70,
    ingredients: ["Nutella", "Plátano", "Lechera"],
    description: "Pecado garantizado con doble hilo de lechera y plátano dulce.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "esp-70-3",
    name: "La Nigga",
    category: "especialidades-70",
    price: 70,
    ingredients: ["Nutella", "Oreo", "Chocolate Hershey's"],
    description: "Sobredosis de chocolate oscuro: Nutella, galleta Oreo troceada y jarabe Hershey's.",
    popular: true,
    imageCategory: "galleta"
  },
  {
    id: "esp-70-4",
    name: "La Mustia",
    category: "especialidades-70",
    price: 70,
    ingredients: ["Cajeta", "Nuez", "Lechera"],
    description: "Parece inocente pero es adictiva: cajeta tibia, nuez picada y lechera.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "esp-70-5",
    name: "La del Triple Pecado",
    category: "especialidades-70",
    price: 70,
    ingredients: ["Nutella", "Pistache", "Fresa"],
    description: "Nutella espesa, pistache gourmet y la acidez perfecta de la fresa.",
    popular: false,
    imageCategory: "fresa"
  },
  {
    id: "esp-70-6",
    name: "El Cusco",
    category: "especialidades-70",
    price: 70,
    ingredients: ["Nutella", "Oreo", "Plátano"],
    description: "La textura crocante de la Oreo con la cremosidad de Nutella y fruta fresca.",
    popular: false,
    imageCategory: "galleta"
  },
  {
    id: "esp-70-7",
    name: "La Dulce Venganza",
    category: "especialidades-70",
    price: 70,
    ingredients: ["Chocolate blanco", "Fresa", "Oreo"],
    description: "Chocolate blanco derretido con fresas naturales y crunch de Oreo.",
    popular: false,
    imageCategory: "galleta"
  },
  {
    id: "esp-70-8",
    name: "La Millonaria ($70)",
    category: "especialidades-70",
    price: 70,
    ingredients: ["Pistache", "Nutella", "Nuez"],
    description: "Elegancia pura en cada mordisco con crema de pistache y nuez crocante.",
    popular: false,
    imageCategory: "dulce"
  },

  // Las Más Pedidas (Top / Favoritas)
  {
    id: "top-1",
    name: "La Pinche Tentación",
    category: "mas-pedidas",
    price: 70,
    ingredients: ["Nutella", "Oreo", "Fresa"],
    description: "La consentida de la casa. El balance perfecto entre chocolate, galleta y fresas frescas.",
    badge: "Top #1",
    popular: true,
    imageCategory: "fresa"
  },
  {
    id: "top-2",
    name: "La Ya Valió Dieta",
    category: "mas-pedidas",
    price: 80,
    ingredients: ["Nutella", "Plátano", "Lechera", "Nuez"],
    description: "Sin culpas. Cuatro ingredientes generosos que satisfacen hasta el antojo más feroz.",
    badge: "Bestseller",
    popular: true,
    imageCategory: "dulce"
  },
  {
    id: "top-3",
    name: "La Ex Tóxica",
    category: "mas-pedidas",
    price: 70,
    ingredients: ["Philadelphia", "Frutos rojos", "Chocolate blanco"],
    description: "Adictiva y contrastante: queso Philadelphia, frutos rojos silvestres y chocolate blanco.",
    badge: "Favorita",
    popular: true,
    imageCategory: "fresa"
  },
  {
    id: "top-4",
    name: "La Memela",
    category: "mas-pedidas",
    price: 100,
    ingredients: ["Cheesecake", "Philadelphia", "Fruta al gusto"],
    description: "Una auténtica rebanada de cheesecake artesanal dentro de la crepa con Philadelphia y tu fruta favorita.",
    badge: "Gourmet VIP",
    popular: true,
    imageCategory: "dulce"
  },
  {
    id: "top-5",
    name: "La Exagerada",
    category: "mas-pedidas",
    price: 75,
    ingredients: ["Nutella", "Fresa", "Kinder Bueno"],
    description: "Barra completa de Kinder Bueno coronando una base generosa de Nutella y fresas.",
    badge: "Top Premium",
    popular: true,
    imageCategory: "galleta"
  },

  // Especialidades de la Casa y Más Especiales
  {
    id: "casa-1",
    name: "La Pinche Suprema",
    category: "especiales-casa",
    price: 80,
    ingredients: ["Nutella", "Pistache", "Fresa", "Nuez"],
    description: "Cuatro ingredientes premium en una armonía de sabor inigualable.",
    popular: true,
    imageCategory: "fresa"
  },
  {
    id: "casa-2",
    name: "La Millonaria ($80)",
    category: "especiales-casa",
    price: 80,
    ingredients: ["Pistache", "Chocolate blanco", "Oreo", "Fresa"],
    description: "Versión recargada con crema de pistache, chocolate blanco suave, Oreo y fresa.",
    popular: false,
    imageCategory: "galleta"
  },
  {
    id: "casa-3",
    name: "La Obesidad Feliz",
    category: "especiales-casa",
    price: 80,
    ingredients: ["Nutella", "Lechera", "Oreo", "Plátano"],
    description: "Pura felicidad en forma de crepa doradita y ultra rellena.",
    popular: false,
    imageCategory: "galleta"
  },
  {
    id: "casa-4",
    name: "La Quincena",
    category: "especiales-casa",
    price: 80,
    ingredients: ["Pistache", "Nutella", "Fresa", "Nuez"],
    description: "Digna del día de pago: los ingredientes más pedidos reunidos.",
    popular: false,
    imageCategory: "fresa"
  },
  {
    id: "casa-5",
    name: "La Tapa Arterias",
    category: "especiales-casa",
    price: 70,
    ingredients: ["Cajeta", "Mazapán", "Lechera"],
    description: "Dulce de leche mexicano potenciado con mazapán de la rosa y lechera fría.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "casa-6",
    name: "La Chingona",
    category: "especiales-casa",
    price: 80,
    ingredients: ["Pistache", "Nutella", "Fresa", "Nuez"],
    description: "El orgullo de la plancha: masa crujiente por fuera y desbordante por dentro.",
    popular: true,
    imageCategory: "fresa"
  },
  {
    id: "casa-7",
    name: "La Infiel",
    category: "especiales-casa",
    price: 70,
    ingredients: ["Nutella", "Cajeta", "Plátano"],
    description: "¿Por qué elegir entre cajeta o nutella si puedes tener las dos?",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "casa-8",
    name: "La del Patrón",
    category: "especiales-casa",
    price: 80,
    ingredients: ["Pistache", "Nutella", "Nuez", "Oreo"],
    description: "La combinación que manda: textura crocante, pistache selecto y chocolate.",
    popular: false,
    imageCategory: "galleta"
  },
  {
    id: "casa-9",
    name: "La Buchona",
    category: "especiales-casa",
    price: 80,
    ingredients: ["Nutella", "Fresa", "Plátano", "Lechera"],
    description: "Abundante en fruta, cubierta de nutella y baño de lechera.",
    popular: false,
    imageCategory: "fresa"
  },
  {
    id: "casa-10",
    name: "La Pinche Marranada",
    category: "especiales-casa",
    price: 250,
    ingredients: ["Especialidad para compartir", "Múltiples untables y toppings"],
    description: "La bestia de la casa para compartir entre amigos o familia. Relleno monumental y presentación brutal (consultar preparación).",
    badge: "Mega Especial ⭐",
    popular: true,
    imageCategory: "dulce"
  },

  // Crepas Saladas
  {
    id: "sal-1",
    name: "Clásica de Jamón con Queso",
    category: "crepas-saladas",
    price: 70,
    ingredients: ["Jamón de pavo", "Queso gratinado"],
    description: "La tradicional combinación doradita a la plancha con queso fundido irresistible.",
    popular: false,
    imageCategory: "salado"
  },
  {
    id: "sal-2",
    name: "Dos Quesos",
    category: "crepas-saladas",
    price: 70,
    ingredients: ["Mezcla de quesos fundidos"],
    description: "Doble porción de quesos seleccionados derretidos con costra crujiente.",
    popular: false,
    imageCategory: "salado"
  },
  {
    id: "sal-3",
    name: "Pepperoni",
    category: "crepas-saladas",
    price: 80,
    ingredients: ["Pepperoni", "Queso mozzarella/gouda", "Toque de especias"],
    description: "Sabor pizza llevado a la textura ligera de nuestra masa de crepa.",
    popular: true,
    imageCategory: "salado"
  },
  {
    id: "sal-4",
    name: "Hawaiana",
    category: "crepas-saladas",
    price: 80,
    ingredients: ["Jamón", "Piña dulce", "Queso fundido"],
    description: "El balance agridulce que divide al mundo pero que aquí sabe a gloria.",
    popular: false,
    imageCategory: "salado"
  },
  {
    id: "sal-5",
    name: "Omelette",
    category: "crepas-saladas",
    price: 90,
    ingredients: ["Huevo preparado estilo omelette", "Queso", "Complementos"],
    description: "Rellena de un delicioso omelette esponjoso con queso derretido en su interior.",
    badge: "Especial Salada",
    popular: true,
    imageCategory: "salado"
  },

  // Menú de Bebidas
  {
    id: "beb-1",
    name: "Frappés Artesanales",
    category: "bebidas",
    price: 45,
    sizes: [
      { size: "Chico", price: 45 },
      { size: "Mediano", price: 55 },
      { size: "Grande", price: 65 }
    ],
    ingredients: ["Hielo frappeado", "Crema batida", "Sabor a elegir"],
    flavors: [
      "Chocolate", "Fresa", "Vainilla", "Plátano", "Frutos rojos", 
      "Café", "Caramelo", "Mazapán", "Frappé de temporada de fruta", "Taro", "Chai Latte"
    ],
    description: "Cremosos, refrescantes y coronados con crema batida. 11 sabores disponibles.",
    popular: true,
    imageCategory: "dulce"
  },
  {
    id: "beb-2",
    name: "Malteadas Clásicas",
    category: "bebidas",
    price: 50,
    sizes: [
      { size: "Chico", price: 50 },
      { size: "Mediano", price: 60 },
      { size: "Grande", price: 70 }
    ],
    ingredients: ["Helado premium", "Leche entera", "Topping a elegir"],
    flavors: [
      "Chocolate", "Fresa", "Vainilla", "Plátano", "Frutos rojos", 
      "Café", "Caramelo", "Mazapán", "Frappé de temporada", "Taro", "Chai Latte"
    ],
    description: "Espesas, ultra cremosas y preparadas al momento con helado.",
    popular: true,
    imageCategory: "dulce"
  },
  {
    id: "beb-3",
    name: "Bebida Rosada (Refrescante)",
    category: "bebidas",
    price: 50,
    sizes: [
      { size: "Chico", price: 50 },
      { size: "Mediano", price: 60 },
      { size: "Grande", price: 70 }
    ],
    options: [
      "Concentrado de frambuesa, limón y agua mineral",
      "Soda italiana con perlas explosivas de blueberry"
    ],
    description: "La bebida insignia para acompañar tu crepa: chispeante, cítrica y refrescante.",
    badge: "Insignia 🥤",
    popular: true,
    imageCategory: "fresa"
  },
  {
    id: "beb-4",
    name: "Café Americano",
    category: "bebidas",
    price: 20,
    ingredients: ["Café en grano recién infusionado"],
    description: "Café caliente aromático, el compañero sobrio de una crepa dulce.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "beb-5",
    name: "Latte Caliente",
    category: "bebidas",
    price: 30,
    ingredients: ["Espresso", "Leche vaporizada espumosa"],
    description: "Suave emulsión de leche caliente con carga de espresso.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "beb-6",
    name: "Chocolate Caliente",
    category: "bebidas",
    price: 30,
    ingredients: ["Cacao artesanal", "Leche caliente"],
    description: "El reconfortante chocolate tradicional caliente.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "beb-7",
    name: "Capuchino",
    category: "bebidas",
    price: 30,
    ingredients: ["Espresso", "Espuma densa de leche", "Toque de canela"],
    description: "Clásico capuchino italiano con densa capa de terciopelo de leche.",
    popular: false,
    imageCategory: "dulce"
  },
  {
    id: "beb-8",
    name: "Moca Blanco o Negro",
    category: "bebidas",
    price: 50,
    ingredients: ["Espresso", "Chocolate blanco o chocolate oscuro", "Leche"],
    description: "Fusión irresistible de café espresso con tu elección de chocolate blanco o negro.",
    popular: true,
    imageCategory: "dulce"
  },

  // Antojos y Snacks
  {
    id: "snk-1",
    name: "Plátanos Fritos",
    category: "antojos-snacks",
    price: 40,
    ingredients: ["Lechera", "Mermelada a elección", "Crema", "Granillo o Hershey's"],
    description: "Plátanos machos doraditos con su toque de crema, lechera y toppings dulces.",
    popular: true,
    imageCategory: "dulce"
  },
  {
    id: "snk-2",
    name: "Papas Gajo Sazonadas",
    category: "antojos-snacks",
    price: 50,
    ingredients: ["Papas corte gajo", "Especias de la casa", "Aderezos"],
    description: "Crocantes por fuera y suaves por dentro, sazonadas a la perfección.",
    popular: true,
    imageCategory: "salado"
  },
  {
    id: "snk-3",
    name: "Orden de Boneless",
    category: "antojos-snacks",
    price: 70,
    ingredients: ["Pechuga de pollo empanizada", "Salsa BBQ o Búfalo a elegir"],
    description: "Trozos jugosos de pechuga con salsa BBQ caramelizada o salsa búfalo picante.",
    popular: false,
    imageCategory: "salado"
  },
  {
    id: "snk-4",
    name: "Orden de Alitas",
    category: "antojos-snacks",
    price: 90,
    ingredients: ["Alitas doraditas", "Salsa BBQ o Búfalo a elegir"],
    description: "Alitas de pollo crujientes bañadas en tu salsa favorita.",
    popular: false,
    imageCategory: "salado"
  },
  {
    id: "snk-5",
    name: "Boneless con Papas Gajo",
    category: "antojos-snacks",
    price: 110,
    ingredients: ["Boneless", "Papas gajo", "Salsa BBQ o Búfalo"],
    description: "El combo perfecto: boneless crujientes acompañados de papas gajo sazonadas.",
    badge: "Combo Estrella",
    popular: true,
    imageCategory: "salado"
  },
  {
    id: "snk-6",
    name: "Alitas con Papas Gajo",
    category: "antojos-snacks",
    price: 130,
    ingredients: ["Alitas", "Papas gajo", "Salsa BBQ o Búfalo"],
    description: "La combinación ganadora para botanear en serio con amigos.",
    badge: "Combo Gigante",
    popular: true,
    imageCategory: "salado"
  }
];

// Premios del Pinche Club
export const CLUB_REWARDS = [
  { id: "rew-1", name: "Ingrediente extra gratis", points: 80, icon: "Sparkles" },
  { id: "rew-2", name: "Bebida caliente o café americano", points: 120, icon: "Coffee" },
  { id: "rew-3", name: "Frappé o Bebida Rosada chica", points: 200, icon: "CupSoda" },
  { id: "rew-4", name: "Crepa Dulce de 2 ingredientes", points: 300, icon: "Gift" },
  { id: "rew-5", name: "La Pinche Tentación ($70) gratis", points: 400, icon: "Crown" },
];
