import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Home, Building, Users, Settings, Bell, 
  BarChart2, AlertCircle, Share2, User, LogOut,
  Globe, Moon, Menu, X, DollarSign, Grip, Sparkles, Send
} from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const [showLang, setShowLang] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Estado para el Copiloto IA Flotante
  const [aiChatOpen, setAiChatOpen] = useState(false);

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/': return 'Tablero Principal';
      case '/propiedades': return 'Publicaciones';
      case '/interesados': return 'Interesados';
      case '/perfil': return 'Mi Perfil';
      case '/metricas': return 'Métricas';
      case '/alquileres': return 'Alquileres';
      case '/ventas': return 'Ventas';
      case '/inquilinos': return 'Inquilinos';
      case '/propietarios': return 'Propietarios';
      case '/incidencias': return 'Incidencias';
      case '/redes': return 'Redes Sociales';
      case '/configuracion': return 'Configuración';
      default: return 'PropTech';
    }
  };

  const navLinks = [
    { to: '/', label: 'Tablero', icon: Home },
    { to: '/metricas', label: 'Métricas', icon: BarChart2 },
    { to: '/propiedades', label: 'Publicaciones', icon: Building },
    { to: '/alquileres', label: 'Alquileres', icon: DollarSign },
    { to: '/ventas', label: 'Ventas', icon: DollarSign },
    { to: '/inquilinos', label: 'Inquilinos', icon: Users },
    { to: '/propietarios', label: 'Propietarios', icon: Users },
    { to: '/interesados', label: 'Interesados', icon: Users },
    { to: '/incidencias', label: 'Incidencias', icon: AlertCircle, badge: '3' },
    { to: '/redes', label: 'Redes Sociales', icon: Share2 },
    { to: '/configuracion', label: 'Configuración', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-zinc-50 font-sans text-zinc-900 overflow-hidden">
      
      {/* VISTA ESCRITORIO: MENÚ LATERAL */}
      <aside className="hidden md:flex w-64 bg-white border-r border-zinc-200 flex-col justify-between shrink-0">
        <div>
          <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-100">
            <span className="text-sm font-semibold tracking-wider text-zinc-900 uppercase">Agencia PropTech</span>
          </div>
          <nav className="p-3 space-y-0.5 overflow-y-auto max-h-[calc(100vh-220px)]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              return (
                <Link key={link.to} to={link.to} className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${isActive ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'}`}>
                  <Icon size={16} /> {link.label}
                  {link.badge && <span className="ml-auto bg-zinc-200 text-zinc-800 py-0.5 px-1.5 rounded text-[10px] font-bold">{link.badge}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="p-3 border-t border-zinc-100 bg-white">
          <Link to="/perfil" className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${location.pathname === '/perfil' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}>
            <User size={16} /> Mi Perfil
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium text-red-600 hover:bg-red-50 transition-colors mt-0.5">
            <LogOut size={16} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-zinc-50/50 relative pb-16 md:pb-0">
        
        <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <h1 className="text-lg md:text-sm font-bold md:font-semibold text-zinc-900 tracking-tight truncate">{getHeaderTitle()}</h1>
          </div>
          
          <div className="flex items-center gap-1.5 lg:gap-3 shrink-0">
            <div className="relative hidden sm:block">
              <button onClick={() => setShowLang(!showLang)} className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-md"><Globe size={16} /></button>
            </div>
            <button className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-md hidden sm:block"><Moon size={16} /></button>
            
            <div className="relative">
              <button onClick={() => setShowNotif(!showNotif)} className="relative p-2 text-zinc-500 hover:bg-zinc-100 rounded-md">
                <Bell size={18} md:size={16} />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 md:h-1.5 md:w-1.5 bg-red-500 rounded-full"></span>
              </button>
              {showNotif && (
                <div className="absolute right-0 mt-1 w-64 bg-white border border-zinc-200 rounded-lg md:rounded-md shadow-xl z-50">
                  <div className="p-3 border-b border-zinc-100 font-bold text-xs">Notificaciones (3)</div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="p-3 border-b border-zinc-50 text-xs"><p className="font-bold">Reserva por vencer</p></div>
                  </div>
                </div>
              )}
            </div>
            <div className="h-8 w-8 md:h-7 md:w-7 bg-zinc-900 text-white rounded-full md:rounded-md flex items-center justify-center font-bold text-xs tracking-wider ml-1">AH</div>
          </div>
        </header>

        {(showLang || showNotif) && <div className="absolute inset-0 z-40" onClick={() => { setShowLang(false); setShowNotif(false); }}></div>}

        <div className="flex-1 overflow-auto min-w-0 z-10 relative">
          <Outlet />
        </div>
      </main>

      {/* ========================================================= */}
      {/* ASISTENTE IA FLOTANTE (COPILOTO)                          */}
      {/* ========================================================= */}
      
      {/* Ventana de Chat */}
      {aiChatOpen && (
        <div className="fixed bottom-24 md:bottom-20 left-4 md:left-[272px] z-50 w-[calc(100vw-32px)] md:w-96 bg-white rounded-2xl shadow-2xl border border-zinc-200 flex flex-col overflow-hidden transition-all">
          <div className="bg-zinc-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-zinc-300" />
              <span className="font-bold text-sm tracking-wide">Copiloto de Datos</span>
            </div>
            <button onClick={() => setAiChatOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>
          
          <div className="h-80 bg-zinc-50/50 p-4 overflow-y-auto flex flex-col gap-3">
            <div className="bg-white border border-zinc-200 self-start p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-[85%] text-xs text-zinc-700 shadow-sm leading-relaxed">
              <strong>¡Hola Alan!</strong> Soy tu asistente inteligente. Podés pedirme que redacte descripciones de propiedades, consulte métricas o analice datos de interesados. ¿En qué te ayudo hoy?
            </div>
          </div>
          
          <div className="p-3 border-t border-zinc-100 bg-white flex gap-2">
            <input 
              type="text" 
              placeholder="Ej: Escribí un resumen de la propiedad..." 
              className="flex-1 bg-zinc-100 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400" 
            />
            <button className="bg-zinc-900 text-white p-2.5 rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center shrink-0">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Botón Flotante */}
      <button 
        onClick={() => setAiChatOpen(!aiChatOpen)}
        className={`fixed z-40 transition-all duration-300 flex items-center justify-center shadow-xl
          ${aiChatOpen ? 'bg-zinc-200 text-zinc-900 scale-90' : 'bg-zinc-900 text-white hover:scale-105 hover:bg-zinc-800'}
          bottom-20 md:bottom-6 left-4 md:left-[272px] h-12 w-12 md:h-14 md:w-14 rounded-full`}
        title="Copiloto de IA"
      >
        {aiChatOpen ? <X size={20} /> : <Sparkles size={24} />}
      </button>

      {/* ========================================================= */}
      {/* VISTA CELULAR: BOTTOM NAVIGATION BAR                      */}
      {/* ========================================================= */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-zinc-200 flex justify-around items-center h-16 pb-safe z-50 px-2">
        <Link to="/" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${location.pathname === '/' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <Home size={20} className={location.pathname === '/' ? 'fill-zinc-900' : ''} />
          <span className="text-[9px] font-medium">Inicio</span>
        </Link>
        
        <Link to="/propiedades" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${location.pathname === '/propiedades' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <Building size={20} className={location.pathname === '/propiedades' ? 'fill-zinc-900' : ''} />
          <span className="text-[9px] font-medium">Propiedades</span>
        </Link>
        
        <Link to="/interesados" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${location.pathname === '/interesados' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <Users size={20} className={location.pathname === '/interesados' ? 'fill-zinc-900' : ''} />
          <span className="text-[9px] font-medium">Leads</span>
        </Link>

        <button onClick={() => setMobileMenuOpen(true)} className="flex flex-col items-center justify-center w-full h-full space-y-1 text-zinc-400">
          <Grip size={20} />
          <span className="text-[9px] font-medium">Menú</span>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative bg-white w-full rounded-t-3xl p-6 flex flex-col max-h-[85vh]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-zinc-900">Todas las herramientas</h2>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-zinc-100 rounded-full text-zinc-500"><X size={20}/></button>
            </div>
            <div className="grid grid-cols-4 gap-y-6 gap-x-2 overflow-y-auto pb-6">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center gap-2">
                  <div className={`p-4 rounded-2xl ${location.pathname === link.to ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-600 border border-zinc-100'}`}>
                    <link.icon size={22} />
                  </div>
                  <span className="text-[10px] font-medium text-center text-zinc-600 leading-tight">{link.label}</span>
                </Link>
              ))}
              <Link to="/perfil" onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center gap-2">
                <div className="p-4 rounded-2xl bg-zinc-50 text-zinc-600 border border-zinc-100"><User size={22} /></div>
                <span className="text-[10px] font-medium text-center text-zinc-600">Mi Perfil</span>
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}