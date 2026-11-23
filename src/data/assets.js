// Mapeo centralizado de imágenes locales para Vite
// Permite usar tanto imports en empaquetado como rutas públicas de respaldo

import logoImg from '../assets/logo_pinchesCreapas.jpeg';
import heroImg from '../assets/galleta.jpeg';
import fresaImg from '../assets/fresa.jpeg';
import dulceImg from '../assets/antojo_dulce.jpeg';
import saladoImg from '../assets/antojo_salado.jpeg';
import cuceiLogoImg from '../assets/cucei_logo.svg';

export const ASSETS = {
  logo: logoImg || '/imagenes/logo_pinchesCreapas.jpeg',
  hero: heroImg || '/imagenes/galleta.jpeg',
  fresa: fresaImg || '/imagenes/fresa.jpeg',
  dulce: dulceImg || '/imagenes/antojo_dulce.jpeg',
  salado: saladoImg || '/imagenes/antojo_salado.jpeg',
  galleta: heroImg || '/imagenes/galleta.jpeg',
  cuceiLogo: cuceiLogoImg || '/imagenes/cucei_logo.svg'
};

// Selector de imagen según categoría de producto
export const getImageForCategory = (categoryKey) => {
  switch (categoryKey) {
    case 'fresa':
      return ASSETS.fresa;
    case 'salado':
      return ASSETS.salado;
    case 'galleta':
      return ASSETS.galleta;
    case 'dulce':
    default:
      return ASSETS.dulce;
  }
};
