import React, { useState } from 'react';
import { 
  Home, Building, Users, Calendar, Grid,
  Plus, Search, MapPin, Phone, MessageCircle, Sparkles, Send,
  BarChart2, Key, DollarSign, Wrench, Share2, 
  Settings, UserCircle, Bell, X, ArrowUpRight, CheckCircle2,
  AlertCircle, Building2, Zap, MessageSquareText, FileText, ChevronRight
} from 'lucide-react';

export default function AppAgente() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [showNotificaciones, setShowNotificaciones] = useState(false);

  const menuItems = [
    { id: 'inmuebles', icon: Building, label: 'Inmuebles' },
    { id: 'clientes', icon: Users, label: 'Interesados' },
    { id: 'agenda', icon: Calendar, label: 'Agenda' },
    { id: 'metricas', icon: BarChart2, label: 'Métricas' },
    { id: 'alquileres', icon: Key, label: 'Alquileres' },
    { id: 'ventas', icon: DollarSign, label: 'Ventas' },
    { id: 'inquilinos', icon: Users, label: 'Inquilinos' },
    { id: 'propietarios', icon: UserCircle, label: 'Propietarios' },
    { id: 'incidencias', icon: Wrench, label: 'Incidencias' },
    { id: 'redes', icon: Share2, label: 'Redes' },
    { id: 'ajustes', icon: Settings, label: 'Ajustes' },
  ];

  return (
    <div className="flex flex-col h-screen bg-zinc-50 font-sans text-zinc-900 max-w-md mx-auto shadow-2xl relative overflow-hidden">
      
      {/* HEADER FIJO */}
      <header className="bg-white px-6 pt-12 pb-4 border-b border-zinc-200 shrink-0 flex justify-between items-center relative z-50">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hola, Alan</h1>
          <p className="text-xs text-zinc-500 font-medium mt-0.5">Agencia PropTech</p>
        </div>
        
        <div className="flex items-center gap-3 relative">
          <button 
            onClick={() => setShowNotificaciones(!showNotificaciones)}
            className="h-10 w-10 bg-zinc-100 hover:bg-zinc-200 transition-colors rounded-full flex items-center justify-center border border-zinc-200 relative"
          >
            <Bell size={18} className="text-zinc-700" />
            <span className="absolute top-2 right-2.5 h-2 w-2 bg-red-500 rounded-full border-2 border-zinc-100"></span>
          </button>
          <div className="h-10 w-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-sm tracking-wider shadow-sm">
            AH
          </div>

          {showNotificaciones && (
            <div className="absolute top-12 right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden z-50">
              <div className="p-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50">
                <h3 className="text-sm font-bold text-zinc-900">Notificaciones</h3>
                <button onClick={() => setShowNotificaciones(false)} className="text-zinc-400 hover:text-zinc-900"><X size={16} /></button>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="p-4 border-b border-zinc-50 hover:bg-zinc-50 cursor-pointer transition-colors">
                  <p className="text-xs font-bold text-zinc-900">Actividad del equipo</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Carla M. registró un nuevo lead: Roberto Gómez.</p>
                </div>
                <div className="p-4 border-b border-zinc-50 hover:bg-zinc-50 cursor-pointer transition-colors">
                  <p className="text-xs font-bold text-zinc-900">Vencimiento de reserva</p>
                  <p className="text-[11px] text-zinc-500 mt-1">La reserva de Córdoba 1200 vence en 24hs.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-y-auto pb-24 relative z-0">
        
        {/* ================= INICIO ================= */}
        {activeTab === 'inicio' && (
          <div className="p-6 space-y-6">
            
            {/* Próxima Actividad (De tu Dashboard) */}
            <section>
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-3">Próxima Actividad</h3>
              <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm">Visita: Gorriti 4500</h4>
                    <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
                      <MapPin size={12} /> Palermo
                    </p>
                  </div>
                  <span className="bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded">10:00 hs</span>
                </div>
                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 font-bold text-[10px]">AH</div>
                    <p className="text-xs font-bold text-zinc-900">Alan H. (Tú)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Alertas Críticas (De tu Dashboard) */}
            <section>
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                <AlertCircle size={16} className="text-red-500" /> Alertas Críticas
              </h3>
              <div className="space-y-3">
                <div className="p-3.5 bg-white rounded-xl border border-zinc-200 shadow-sm flex items-start gap-3">
                  <Zap size={16} className='text-zinc-700 shrink-0 mt-0.5'/>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">Reserva próxima a vencer</p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">Córdoba 1200 - Vence en 24hs.</p>
                  </div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-zinc-200 shadow-sm flex items-start gap-3">
                  <Building2 size={16} className='text-zinc-700 shrink-0 mt-0.5'/>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">Documentación faltante</p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">Rivadavia 4820 - Falta titularidad.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= COPILOTO ================= */}
        {activeTab === 'copiloto' && (
          <div className="h-full flex flex-col">
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-zinc-50">
              <div className="bg-white p-4 border border-zinc-200 rounded-2xl rounded-tl-none w-11/12 shadow-sm">
                <p className="text-sm font-medium text-zinc-900 leading-relaxed">
                  ¡Hola Alan! Recordá que hoy a las 10:00 tenés la visita en Gorriti 4500. Además, Carla M. acaba de cargar un nuevo lead (Roberto Gómez). ¿Querés que le envíe un WhatsApp automático a Roberto presentándote?
                </p>
                <span className="text-[10px] text-zinc-400 font-medium mt-2 block">09:15 AM</span>
              </div>
            </div>
            <div className="p-4 bg-white border-t border-zinc-200 shrink-0">
              <div className="relative">
                <input type="text" placeholder="Pedile algo a tu asistente..." className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3.5 pl-4 pr-12 text-sm outline-none font-medium text-zinc-900 focus:border-zinc-400" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800"><Send size={16} /></button>
              </div>
            </div>
          </div>
        )}

        {/* ================= MENÚ ================= */}
        {activeTab === 'menu' && (
          <div className="p-6 space-y-6">
            <h2 className="text-lg font-bold">Gestión de Agencia</h2>
            <div className="grid grid-cols-3 gap-4">
              {menuItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className="flex flex-col items-center justify-center gap-2 p-4 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:bg-zinc-50 transition-colors active:scale-95"
                >
                  <item.icon size={24} className="text-zinc-700" />
                  <span className="text-[10px] font-bold text-zinc-900">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= INMUEBLES ================= */}
        {activeTab === 'inmuebles' && (
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Inmuebles</h2>
              <button className="text-xs font-bold bg-zinc-900 text-white px-3 py-1.5 rounded-lg flex items-center gap-1"><Plus size={14}/> Nuevo</button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input type="text" placeholder="Buscar dirección..." className="w-full bg-white border border-zinc-200 rounded-xl py-3 pl-10 pr-4 text-sm font-medium outline-none shadow-sm"/>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                <div className="h-32 bg-zinc-200 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Casa" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">Venta</span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-sm">Gorriti 4500</h4>
                  <p className="text-[11px] text-zinc-500 mt-1">Palermo, CABA</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="font-bold text-sm text-zinc-900">USD 120.000</p>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Activo</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                <div className="h-32 bg-zinc-200 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80" alt="Depto" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-white text-zinc-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Alquiler</span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-sm">Libertador 3400</h4>
                  <p className="text-[11px] text-zinc-500 mt-1">Olivos, GBA Norte</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="font-bold text-sm text-zinc-900">$550.000 /mes</p>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Activo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= CLIENTES (Leads) ================= */}
        {activeTab === 'clientes' && (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Interesados Recientes</h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-xs">RG</div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">Roberto Gómez</p>
                    <p className="text-[10px] text-zinc-500">Nuevo lead (Carla M.)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="h-8 w-8 bg-zinc-100 text-zinc-700 rounded-full flex items-center justify-center"><Phone size={14} /></button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-xs">CI</div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">Cliente Inversor</p>
                    <p className="text-[10px] text-zinc-500">Seguimiento (Diego R.)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="h-8 w-8 bg-zinc-100 text-zinc-700 rounded-full flex items-center justify-center"><MessageCircle size={14} /></button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= AGENDA ================= */}
        {activeTab === 'agenda' && (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Agenda de Hoy</h2>
            <div className="space-y-4">
              
              <div className="flex gap-4 relative">
                <div className="flex flex-col items-center"><span className="text-xs font-bold text-zinc-900">10:00</span><div className="w-px h-full bg-zinc-200 mt-2"></div></div>
                <div className="flex-1 bg-white p-3 rounded-xl border border-zinc-200 shadow-sm border-l-4 border-l-zinc-900">
                  <p className="text-xs font-bold text-zinc-900">Visita: Gorriti 4500</p>
                  <p className="text-[10px] text-zinc-500">Asignado a: Alan H.</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="flex flex-col items-center"><span className="text-xs font-bold text-zinc-900">14:30</span><div className="w-px h-full bg-zinc-200 mt-2"></div></div>
                <div className="flex-1 bg-white p-3 rounded-xl border border-zinc-200 shadow-sm">
                  <p className="text-xs font-bold text-zinc-900">Reunión: Cierre Rivadavia</p>
                  <p className="text-[10px] text-zinc-500">Asignado a: Carla M.</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="flex flex-col items-center"><span className="text-xs font-bold text-zinc-900">16:00</span><div className="w-px h-full bg-zinc-200 mt-2"></div></div>
                <div className="flex-1 bg-white p-3 rounded-xl border border-zinc-200 shadow-sm border-l-4 border-l-zinc-900">
                  <p className="text-xs font-bold text-zinc-900">Visita: Libertador 3400</p>
                  <p className="text-[10px] text-zinc-500">Asignado a: Alan H.</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="flex flex-col items-center"><span className="text-xs font-bold text-zinc-900">18:00</span></div>
                <div className="flex-1 bg-white p-3 rounded-xl border border-zinc-200 shadow-sm">
                  <p className="text-xs font-bold text-zinc-900">Llamada: Seguimiento Inversor</p>
                  <p className="text-[10px] text-zinc-500">Asignado a: Diego R.</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= ALQUILERES & VENTAS ================= */}
        {(activeTab === 'alquileres' || activeTab === 'ventas') && (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold capitalize">{activeTab} en Curso</h2>
            <div className="space-y-3">
              {activeTab === 'alquileres' && (
                <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">Libertador 3400, Olivos</p>
                    <p className="text-[10px] text-zinc-500">Contrato Activo - Vence 2028</p>
                  </div>
                  <ChevronRight size={16} className="text-zinc-400" />
                </div>
              )}
              {activeTab === 'ventas' && (
                <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-between border-l-4 border-l-amber-400">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">Córdoba 1200</p>
                    <p className="text-[10px] text-zinc-500">Reserva Activa (Vence 24hs)</p>
                  </div>
                  <ChevronRight size={16} className="text-zinc-400" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= REDES (Publicaciones) ================= */}
        {activeTab === 'redes' && (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Estado de Publicaciones</h2>
            <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-bold">Pampa 2300</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-50 bg-zinc-900 px-2 py-1 rounded">ZonaProp</span>
              </div>
              <p className="text-[11px] text-zinc-500 border-t border-zinc-100 pt-3">Publicado por Alan H. hace 3 horas.</p>
            </div>
          </div>
        )}

        {/* ================= INQUILINOS Y PROPIETARIOS ================= */}
        {(activeTab === 'inquilinos' || activeTab === 'propietarios') && (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold capitalize">Directorio de {activeTab}</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input type="text" placeholder="Buscar..." className="w-full bg-white border border-zinc-200 rounded-xl py-3 pl-10 pr-4 text-sm outline-none shadow-sm"/>
            </div>

            <div className="space-y-3">
              {activeTab === 'propietarios' && (
                <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-xs">RG</div>
                    <div><p className="text-sm font-bold text-zinc-900">Roberto Gómez</p><p className="text-[10px] text-zinc-500">Propietario</p></div>
                  </div>
                  <button className="w-full bg-zinc-100 text-zinc-900 py-2 rounded-lg text-xs font-bold">Ver Propiedades</button>
                </div>
              )}
              {activeTab === 'inquilinos' && (
                <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-xs">LG</div>
                    <div><p className="text-sm font-bold text-zinc-900">Laura García</p><p className="text-[10px] text-zinc-500">Inquilina (Libertador 3400)</p></div>
                  </div>
                  <button className="w-full bg-zinc-100 text-zinc-900 py-2 rounded-lg text-xs font-bold">Ver Contrato</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= MÉTRICAS ================= */}
        {activeTab === 'metricas' && (
          <div className="p-6 space-y-6">
            <h2 className="text-xl font-bold">Métricas</h2>
            <div className="bg-zinc-900 text-white p-5 rounded-2xl shadow-md">
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wide">Ingresos Totales</p>
              <h3 className="text-3xl font-bold mt-1">$4.250.000</h3>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-zinc-900 mb-3">Embudo</h3>
              <div className="space-y-3">
                <div><div className="flex justify-between text-xs mb-1 font-medium"><span className="text-zinc-500">Leads</span><span>145</span></div><div className="w-full bg-zinc-100 rounded-full h-1.5"><div className="bg-zinc-900 h-1.5 rounded-full" style={{width: '100%'}}></div></div></div>
                <div><div className="flex justify-between text-xs mb-1 font-medium"><span className="text-zinc-500">Visitas</span><span>42</span></div><div className="w-full bg-zinc-100 rounded-full h-1.5"><div className="bg-zinc-700 h-1.5 rounded-full" style={{width: '45%'}}></div></div></div>
              </div>
            </div>
          </div>
        )}

        {/* ================= INCIDENCIAS ================= */}
        {activeTab === 'incidencias' && (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Incidencias</h2>
            <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm border-l-4 border-l-amber-400">
              <p className="text-sm font-bold text-zinc-900">Termotanque no enciende</p>
              <p className="text-[11px] text-zinc-500 mt-1">Reportado en Libertador 3400</p>
              <button className="mt-3 w-full bg-zinc-900 text-white py-2 rounded-lg text-xs font-bold">Asignar proveedor</button>
            </div>
          </div>
        )}

        {/* ================= AJUSTES ================= */}
        {activeTab === 'ajustes' && (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Configuración</h2>
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-zinc-100 flex justify-between items-center hover:bg-zinc-50">
                <span className="text-sm font-bold text-zinc-900">Mi Perfil</span><ChevronRight size={16} className="text-zinc-400" />
              </div>
              <div className="p-4 border-b border-zinc-100 flex justify-between items-center hover:bg-zinc-50">
                <span className="text-sm font-bold text-zinc-900">Notificaciones</span><ChevronRight size={16} className="text-zinc-400" />
              </div>
              <div className="p-4 flex justify-between items-center hover:bg-zinc-50">
                <span className="text-sm font-bold text-red-600">Cerrar Sesión</span>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* NAVEGACIÓN INFERIOR */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-zinc-200 flex justify-around items-center h-20 pb-4 pt-2 z-50 px-4 rounded-t-2xl shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
        <button onClick={() => setActiveTab('inicio')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${activeTab === 'inicio' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'}`}>
          <Home size={24} className={activeTab === 'inicio' ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Inicio</span>
        </button>
        
        <button onClick={() => setActiveTab('copiloto')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${activeTab === 'copiloto' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'}`}>
          <Sparkles size={24} className={activeTab === 'copiloto' ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Copiloto</span>
        </button>
        
        <button onClick={() => setActiveTab('menu')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${!['inicio', 'copiloto'].includes(activeTab) ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'}`}>
          <Grid size={24} className={!['inicio', 'copiloto'].includes(activeTab) ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Menú</span>
        </button>
      </nav>
    </div>
  );
}