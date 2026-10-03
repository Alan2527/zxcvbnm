import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Home, Building, Users, Settings, Bell, 
  BarChart2, AlertCircle, Sparkles, DollarSign, Globe, Moon, Menu, X, Share2,
  User, LogOut
} from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Estados para los desplegables del header
  const [showLang, setShowLang] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/': return 'Tablero Principal';
      case '/metricas': return 'Métricas y Analíticas';
      case '/propiedades': return 'Gestión de Publicaciones';
      case '/alquileres': return 'Gestión de Alquileres';
      case '/ventas': return 'Gestión de Ventas';
      case '/inquilinos': return 'Directorio de Inquilinos';
      case '/propietarios': return 'Directorio de Propietarios';
      case '/interesados': return 'CRM de Interesados';
      case '/incidencias': return 'Centro de Incidencias';
      case '/redes': return 'Redes Sociales y Videos';
      case '/configuracion': return 'Configuración del Sistema';
      case '/perfil': return 'Mi Perfil y Facturación';
      default: return 'Agencia PropTech';
    }
  };

  const navLinks = [
    { to: '/', label: 'Tablero Principal', icon: Home },
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
      
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/40 z-40 lg:hidden" />
      )}

      {/* Menú Lateral */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r border-zinc-200 flex flex-col justify-between
        transform transition-transform duration-300 ease-in-out shrink-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div>
          <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-100">
            <span className="text-sm font-semibold tracking-wider text-zinc-900 uppercase">Agencia PropTech</span>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-zinc-400 hover:text-zinc-700 p-1">
              <X size={18} />
            </button>
          </div>
          <nav className="p-3 space-y-0.5 overflow-y-auto max-h-[calc(100vh-220px)]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              return (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${isActive ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'}`}
                >
                  <Icon size={16} /> {link.label}
                  {link.badge && (
                    <span className="ml-auto bg-zinc-200 text-zinc-800 py-0.5 px-1.5 rounded text-[10px] font-bold">{link.badge}</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sección Inferior del Menú Lateral: Perfil y Logout */}
        <div className="p-3 border-t border-zinc-100 bg-white">
          <Link 
            to="/perfil" 
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${location.pathname === '/perfil' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
          >
            <User size={16} /> Mi Perfil
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium text-red-600 hover:bg-red-50 transition-colors mt-0.5">
            <LogOut size={16} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-zinc-50/50 relative">
        <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-md shrink-0">
              <Menu size={20} />
            </button>
            <h1 className="text-sm lg:text-base font-semibold text-zinc-900 tracking-tight truncate">{getHeaderTitle()}</h1>
          </div>
          
          <div className="flex items-center gap-1.5 lg:gap-3 shrink-0">
            {/* Desplegable de Idioma */}
            <div className="relative">
              <button onClick={() => setShowLang(!showLang)} className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-md hidden sm:block" title="Idioma">
                <Globe size={16} />
              </button>
              {showLang && (
                <div className="absolute right-0 mt-1 w-32 bg-white border border-zinc-200 rounded-md shadow-lg z-50 py-1">
                  <button className="w-full text-left px-4 py-2 text-xs hover:bg-zinc-50 text-zinc-900 font-medium">🇪🇸 Español</button>
                  <button className="w-full text-left px-4 py-2 text-xs hover:bg-zinc-50 text-zinc-600">🇬🇧 Inglés</button>
                  <button className="w-full text-left px-4 py-2 text-xs hover:bg-zinc-50 text-zinc-600">🇧🇷 Portugués</button>
                </div>
              )}
            </div>

            <button className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-md hidden sm:block" title="Modo Oscuro"><Moon size={16} /></button>
            
            {/* Desplegable de Notificaciones */}
            <div className="relative">
              <button onClick={() => setShowNotif(!showNotif)} className="relative p-2 text-zinc-500 hover:bg-zinc-100 rounded-md">
                <Bell size={16} />
                <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 bg-red-500 rounded-full"></span>
              </button>
              {showNotif && (
                <div className="absolute right-0 mt-1 w-64 bg-white border border-zinc-200 rounded-md shadow-lg z-50">
                  <div className="p-3 border-b border-zinc-100 font-bold text-xs">Notificaciones (3)</div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="p-3 border-b border-zinc-50 hover:bg-zinc-50 text-xs">
                      <p className="font-bold text-zinc-900">Reserva por vencer</p>
                      <p className="text-zinc-500 text-[10px]">Corrientes 1200 vence en 24hs</p>
                    </div>
                    <div className="p-3 border-b border-zinc-50 hover:bg-zinc-50 text-xs">
                      <p className="font-bold text-zinc-900">Documentación</p>
                      <p className="text-zinc-500 text-[10px]">Falta título en Rivadavia 4820</p>
                    </div>
                    <div className="p-3 hover:bg-zinc-50 text-xs">
                      <p className="font-bold text-zinc-900">Nuevo Lead</p>
                      <p className="text-zinc-500 text-[10px]">Roberto consultó por alquiler</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="h-7 w-7 bg-zinc-900 text-white rounded-md flex items-center justify-center font-bold text-xs tracking-wider ml-1">AH</div>
          </div>
        </header>

        {/* Overlay invisible para cerrar dropdowns al hacer clic afuera */}
        {(showLang || showNotif) && (
          <div className="absolute inset-0 z-40" onClick={() => { setShowLang(false); setShowNotif(false); }}></div>
        )}

        <div className="flex-1 overflow-auto min-w-0 z-10 relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}