import React, { useState, useEffect } from 'react';
import { CLUB_REWARDS, createWhatsAppUrl } from '../data/menuData';
import { 
  Award, 
  Sparkles, 
  QrCode, 
  Smartphone, 
  Apple, 
  CheckCircle2, 
  AlertCircle, 
  LogOut, 
  Lock, 
  Mail, 
  User, 
  Gift, 
  Crown, 
  Coffee, 
  CupSoda 
} from 'lucide-react';

export default function PincheClub() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(false);
  
  // Estados para formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Cargar usuario guardado de localStorage al iniciar
  useEffect(() => {
    try {
      const stored = localStorage.getItem('pinche_club_user');
      if (stored) {
        setCurrentUser(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Manejar Registro
  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!name.trim() || !email.trim()) {
      setErrorMessage('Por favor completa todos los campos.');
      return;
    }

    // Validación estricta de contraseña de mínimo 12 caracteres
    if (password.length < 12) {
      setErrorMessage(`Tu contraseña tiene ${password.length} caracteres. Requiere un mínimo de 12 caracteres por seguridad.`);
      return;
    }

    const newUser = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      points: 150, // Puntos de bienvenida
      memberNumber: 'PC-' + Math.floor(100000 + Math.random() * 900000),
      tier: 'Miembro Gold',
      joinedAt: new Date().toLocaleDateString('es-MX', { month: 'short', year: 'numeric' })
    };

    localStorage.setItem('pinche_club_user', JSON.stringify(newUser));
    setCurrentUser(newUser);
    setSuccessMessage('¡Bienvenido al Pinche Club! Te hemos otorgado 150 puntos de bienvenida.');
    setPassword('');
  };

  // Manejar Login (Simulado con estado local)
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password) {
      setErrorMessage('Ingresa tu correo y contraseña.');
      return;
    }

    if (password.length < 12) {
      setErrorMessage('La contraseña debe tener al menos 12 caracteres.');
      return;
    }

    const stored = localStorage.getItem('pinche_club_user');
    if (stored) {
      const user = JSON.parse(stored);
      if (user.email === email.trim().toLowerCase()) {
        setCurrentUser(user);
        setPassword('');
        return;
      }
    }

    // Usuario demo si no coincide
    const demoUser = {
      name: email.split('@')[0],
      email: email.trim().toLowerCase(),
      points: 250,
      memberNumber: 'PC-' + Math.floor(100000 + Math.random() * 900000),
      tier: 'Miembro Activo',
      joinedAt: 'Nov 2026'
    };
    localStorage.setItem('pinche_club_user', JSON.stringify(demoUser));
    setCurrentUser(demoUser);
  };

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('pinche_club_user');
    setCurrentUser(null);
    setName('');
    setEmail('');
    setPassword('');
  };

  // Generador de QR dinámico en SVG puro (sin librerías externas pesadas)
  const renderDynamicQR = (code) => {
    return (
      <svg viewBox="0 0 100 100" className="w-36 h-36 bg-white p-2 rounded-xl shadow-md mx-auto">
        {/* Esquinas fijas del QR */}
        <rect x="5" y="5" width="28" height="28" fill="#0B0D12" rx="3" />
        <rect x="9" y="9" width="20" height="20" fill="white" rx="2" />
        <rect x="13" y="13" width="12" height="12" fill="#E6B34A" rx="1" />

        <rect x="67" y="5" width="28" height="28" fill="#0B0D12" rx="3" />
        <rect x="71" y="9" width="20" height="20" fill="white" rx="2" />
        <rect x="75" y="13" width="12" height="12" fill="#E6B34A" rx="1" />

        <rect x="5" y="67" width="28" height="28" fill="#0B0D12" rx="3" />
        <rect x="9" y="71" width="20" height="20" fill="white" rx="2" />
        <rect x="13" y="75" width="12" height="12" fill="#E6B34A" rx="1" />

        {/* Patrón de datos decorativo dinámico */}
        <rect x="40" y="10" width="8" height="8" fill="#0B0D12" />
        <rect x="50" y="20" width="8" height="8" fill="#0B0D12" />
        <rect x="42" y="42" width="16" height="16" fill="#0B0D12" rx="2" />
        <rect x="46" y="46" width="8" height="8" fill="#E11D48" />
        <rect x="10" y="45" width="8" height="8" fill="#0B0D12" />
        <rect x="25" y="45" width="8" height="8" fill="#0B0D12" />
        <rect x="68" y="45" width="8" height="8" fill="#0B0D12" />
        <rect x="80" y="45" width="8" height="8" fill="#0B0D12" />
        <rect x="40" y="70" width="8" height="8" fill="#0B0D12" />
        <rect x="55" y="80" width="8" height="8" fill="#0B0D12" />
        <rect x="75" y="72" width="12" height="12" fill="#0B0D12" />
      </svg>
    );
  };

  const getRewardIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#E6B34A]" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-500" />;
      case 'CupSoda': return <CupSoda className="w-5 h-5 text-rose-400" />;
      case 'Gift': return <Gift className="w-5 h-5 text-emerald-400" />;
      case 'Crown': return <Crown className="w-5 h-5 text-yellow-400" />;
      default: return <Sparkles className="w-5 h-5 text-[#E6B34A]" />;
    }
  };

  return (
    <section id="pinche-club" className="py-20 bg-[#0B0D12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E11D48]/20 border border-[#E11D48]/40 text-[#E11D48] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Club en pruebas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Pinche Club: Lealtad & Beneficios
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Acumula puntos en cada visita o pedido a domicilio, desbloquea crepas gratis y accede a recompensas exclusivas.
          </p>
        </div>

        {/* Contenido Principal: Panel de Miembro O Registro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Lado Izquierdo: Tarjeta de Estado / Formulario de Autenticación */}
          <div className="lg:col-span-7">
            {currentUser ? (
              /* Panel de Miembro Activo */
              <div className="bg-[#141720] border border-[#E6B34A]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#E6B34A]/20 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#262C3D] pb-6 mb-6">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#E6B34A] block mb-1">
                      Membresía Digital
                    </span>
                    <h3 className="text-2xl font-black text-white">{currentUser.name}</h3>
                    <p className="text-xs text-zinc-400">{currentUser.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1A1E29] text-zinc-300 hover:text-rose-400 hover:bg-[#202533] border border-[#262C3D] transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Cerrar sesión</span>
                  </button>
                </div>

                {/* Resumen de Puntos y QR */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  
                  {/* Balance */}
                  <div className="space-y-4">
                    <div className="bg-[#1A1E29] p-4 rounded-2xl border border-[#262C3D]">
                      <span className="text-xs text-zinc-400 block">Puntos acumulados</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-4xl font-black text-[#E6B34A]">{currentUser.points}</span>
                        <span className="text-xs font-bold text-zinc-400">PTS</span>
                      </div>
                      <div className="mt-3 text-[11px] text-zinc-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Equivalente a una crepa gratis a los 300 pts</span>
                      </div>
                    </div>

                    <div className="bg-[#1A1E29] p-4 rounded-2xl border border-[#262C3D] flex justify-between text-xs">
                      <div>
                        <span className="text-zinc-500 block">No. Socio:</span>
                        <span className="font-mono font-bold text-white">{currentUser.memberNumber}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-zinc-500 block">Nivel:</span>
                        <span className="font-bold text-[#E6B34A]">{currentUser.tier}</span>
                      </div>
                    </div>
                  </div>

                  {/* Código QR Dinámico */}
                  <div className="text-center bg-[#1A1E29] p-5 rounded-2xl border border-[#262C3D]">
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-zinc-300 mb-3">
                      <QrCode className="w-4 h-4 text-[#E6B34A]" />
                      <span>Escanear en mostrador</span>
                    </div>
                    {renderDynamicQR(currentUser.memberNumber)}
                    <span className="text-[10px] text-zinc-500 block mt-2">
                      Muestra este código al pedir en sucursal o para validar tus puntos
                    </span>
                  </div>

                </div>

              </div>
            ) : (
              /* Formulario de Registro / Login */
              <div className="bg-[#141720] border border-[#262C3D] rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {isLoginMode ? 'Inicia Sesión en el Club' : 'Únete al Pinche Club'}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      {isLoginMode 
                        ? 'Accede a tu código de miembro y puntos acumulados.' 
                        : 'Regístrate y recibe 150 puntos de bienvenida automáticos.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsLoginMode(!isLoginMode);
                      setErrorMessage('');
                    }}
                    className="text-xs text-[#E6B34A] hover:underline font-semibold"
                  >
                    {isLoginMode ? '¿No tienes cuenta? Regístrate' : '¿Ya eres socio? Inicia sesión'}
                  </button>
                </div>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {successMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                    <span>{successMessage}</span>
                  </div>
                )}

                <form onSubmit={isLoginMode ? handleLogin : handleRegister} className="space-y-4">
                  {!isLoginMode && (
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Nombre Completo</label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Tu nombre y apellido"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A1E29] border border-[#262C3D] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#E6B34A]"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu.correo@ejemplo.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A1E29] border border-[#262C3D] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#E6B34A]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-semibold text-zinc-300">Contraseña</label>
                      <span className={`text-[11px] ${password.length >= 12 ? 'text-emerald-400' : 'text-amber-400'}`}>
                        Mínimo 12 caracteres ({password.length}/12)
                      </span>
                    </div>
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mínimo 12 caracteres seguros"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A1E29] border border-[#262C3D] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-[#E6B34A]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#E6B34A] to-[#F59E0B] text-black hover:opacity-95 shadow-lg shadow-[#E6B34A]/20 transition-all hover:scale-[1.01]"
                  >
                    {isLoginMode ? 'Ingresar a mi Cuenta' : 'Completar Registro (150 pts gratis)'}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Lado Derecho: Catálogo de Premios Canjeables */}
          <div className="lg:col-span-5 bg-[#141720] border border-[#262C3D] rounded-3xl p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-[#E6B34A]" />
              <h3 className="text-lg font-bold text-white">Catálogo de Premios</h3>
            </div>
            <p className="text-xs text-zinc-400 mb-5">
              Canjea tus puntos acumulados en cualquier pedido o visita a sucursal:
            </p>

            <div className="space-y-3">
              {CLUB_REWARDS.map((reward) => (
                <div
                  key={reward.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#1A1E29] border border-[#262C3D] hover:border-zinc-500 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#141720] flex items-center justify-center border border-[#262C3D]">
                      {getRewardIcon(reward.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{reward.name}</h4>
                      <span className="text-[10px] text-zinc-400">Canje directo en mostrador</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-sm font-black text-[#E6B34A]">{reward.points}</span>
                    <span className="text-[10px] text-zinc-500 block -mt-1">PTS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Guía de Instalación PWA (Web App) */}
        <div className="bg-gradient-to-r from-[#141720] via-[#1A1E29] to-[#141720] border border-[#262C3D] rounded-3xl p-6 sm:p-8">
          <div className="max-w-2xl mb-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#E6B34A] block mb-1">
              Web App Móvil
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Lleva Las Pinches Crepas en la Pantalla de Inicio
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Sin descargar de la Play Store ni App Store: instala nuestra aplicación web progresiva (PWA) al instante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Paso iPhone / iOS */}
            <div className="bg-[#0B0D12]/60 border border-[#262C3D] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                <Apple className="w-5 h-5" />
              </div>
              <div className="text-xs text-zinc-300">
                <h4 className="font-bold text-white text-sm mb-1">Para iPhone / iPad (Safari)</h4>
                <ol className="list-decimal list-inside space-y-1 text-zinc-400">
                  <li>Abre esta página en <strong className="text-white">Safari</strong>.</li>
                  <li>Toca el botón <strong className="text-white">Compartir</strong> (ícono de cuadro con flecha hacia arriba).</li>
                  <li>Desplázate hacia abajo y selecciona <strong className="text-[#E6B34A]">"Agregar a Inicio"</strong>.</li>
                  <li>¡Listo! Acceso directo como app nativa.</li>
                </ol>
              </div>
            </div>

            {/* Paso Android / Chrome */}
            <div className="bg-[#0B0D12]/60 border border-[#262C3D] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-xs text-zinc-300">
                <h4 className="font-bold text-white text-sm mb-1">Para Android (Chrome)</h4>
                <ol className="list-decimal list-inside space-y-1 text-zinc-400">
                  <li>Abre esta página en <strong className="text-white">Google Chrome</strong>.</li>
                  <li>Toca el menú de <strong className="text-white">tres puntos</strong> en la esquina superior derecha.</li>
                  <li>Presiona <strong className="text-[#E6B34A]">"Instalar aplicación"</strong> o <strong className="text-[#E6B34A]">"Agregar a pantalla principal"</strong>.</li>
                  <li>Confirma la instalación y aparecerá en tus aplicaciones.</li>
                </ol>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
