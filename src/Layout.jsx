import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Home, Building, Users, Settings, Bell, 
  BarChart2, AlertCircle, Sparkles, DollarSign, Globe, Moon, Menu, X, Share2
} from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* Fondo oscuro en móvil cuando el menú está abierto */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden" />
      )}

      {/* Menú Lateral Responsive */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r border-gray-200 flex flex-col justify-between
        transform transition-transform duration-300 ease-in-out shrink-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div>
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
            <span className="text-xl font-bold text-blue-900">Agencia PropTech</span>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-800 p-1">
              <X size={20} />
            </button>
          </div>
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-140px)]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              return (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Icon size={18} /> {link.label}
                  {link.badge && (
                    <span className="ml-auto bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Copiloto de datos inferior */}
        <div className="p-4 border-t border-gray-200 bg-gray-50/50 hidden lg:block">
          <div className="flex items-center gap-2 mb-2 text-blue-900 font-semibold text-xs">
            <Sparkles size={14} /> Copiloto de datos
          </div>
          <input 
            type="text" 
            placeholder="Preguntá en lenguaje natural..." 
            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 shadow-sm"
          />
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg shrink-0">
              <Menu size={22} />
            </button>
            <h1 className="text-base lg:text-xl font-bold text-gray-800 truncate">{getHeaderTitle()}</h1>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 shrink-0">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full hidden sm:block" title="Idioma"><Globe size={18} /></button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full hidden sm:block" title="Modo Oscuro"><Moon size={18} /></button>
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <Bell size={18} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm">AH</div>
          </div>
        </header>

        <div className="flex-1 overflow-auto min-w-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}