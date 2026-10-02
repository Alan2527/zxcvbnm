import React, { useState } from 'react';
import { CalendarClock, Building2, UserPlus, BellRing, ClipboardList, Zap, MessageSquareText, Search, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const [agenda, setAgenda] = useState([
    { id: 1, tipo: 'Visita', propiedad: 'Gorriti 4500, Palermo', hora: '10:00', agente: 'Alan H.', icono: Building2 },
    { id: 2, tipo: 'Reunión', asunto: 'Cierre de alquiler Rivadavia', hora: '14:30', agente: 'Carla M.', icono: Zap },
    { id: 3, tipo: 'Visita', propiedad: 'Libertador 3400, Olivos', hora: '16:00', agente: 'Alan H.', icono: Building2 },
    { id: 4, tipo: 'Llamada', propiedad: 'Seguimiento cliente inversor', hora: '18:00', agente: 'Diego R.', icono: MessageSquareText },
  ]);

  const [actividad, setActividad] = useState([
    { id: 1, agente: 'Alan H.', accion: 'modificó precio', entidad: 'Gorriti 4500', hora: 'hace 15 min' },
    { id: 2, agente: 'Carla M.', accion: 'registró nuevo lead', entidad: 'Roberto Gómez', hora: 'hace 32 min' },
    { id: 3, agente: 'Diego R.', accion: 'agendó visita en', entidad: 'Libertador 3400', hora: 'hace 1 hora' },
    { id: 4, agente: 'Sistema', accion: 'vencimiento de reserva', entidad: 'Córdoba 1200', hora: 'hace 2 horas' },
    { id: 5, agente: 'Alan H.', accion: 'publicó en ZonaProp', entidad: 'Pampa 2300', hora: 'hace 3 horas' },
  ]);

  return (
    <div className="p-8 h-full overflow-auto bg-zinc-50 space-y-8 pb-28 text-zinc-900">
      
      {/* Saludo y Buscador General */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 tracking-tight">Tablero Operativo</h2>
          <p className="text-xs text-zinc-500 mt-0.5">Resumen de actividad diaria y accesos directos.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          <input type="search" placeholder="Buscar propiedades, clientes..." className="w-full pl-9 pr-4 py-2 border border-zinc-200 rounded-lg bg-white text-xs focus:outline-none focus:border-zinc-400 text-zinc-800 placeholder-zinc-400 shadow-sm" />
        </div>
      </div>

      {/* ACCIONES RÁPIDAS (Estilo minimalista, sobrio y plano) */}
      <section>
        <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Nueva Propiedad', desc: 'Registrar inmueble', icon: Building2 },
            { label: 'Cargar Nuevo Lead', desc: 'Registrar interesado', icon: UserPlus },
            { label: 'Registrar Visita', desc: 'Agendar recorrido', icon: CalendarClock },
            { label: 'Ver Incidencias', desc: 'Revisar reportes', icon: BellRing },
          ].map(accion => (
            <button key={accion.label} className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-200 hover:border-zinc-400 hover:shadow-sm transition-all text-left group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-zinc-100 text-zinc-700 rounded-lg group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <accion.icon size={18} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-zinc-900">{accion.label}</span>
                  <span className="block text-[11px] text-zinc-500">{accion.desc}</span>
                </div>
              </div>
              <ArrowRight size={14} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {/* SECCIÓN DOBLE: Agenda vs Actividad */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* 1. AGENDA DEL DÍA */}
        <section className="xl:col-span-2 bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-zinc-100 pb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-2">
              <CalendarClock className="text-zinc-500" size={16} /> Agenda del Día
            </h2>
            <button className="text-xs font-medium text-zinc-600 hover:underline">Ver calendario completo</button>
          </div>

          <div className="divide-y divide-zinc-100">
            {agenda.map(evento => (
              <div key={evento.id} className="flex items-center justify-between py-3 hover:bg-zinc-50/50 px-2 rounded transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-zinc-100 text-zinc-700">
                    <evento.icono size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">{evento.tipo} <span className='font-normal text-zinc-500'>en</span> {evento.propiedad}</p>
                    <p className="text-[11px] text-zinc-500">Asignado a: {evento.agente}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-zinc-900">{evento.hora}</span>
                  <span className="block text-[10px] text-zinc-400">hs</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. ACTIVIDAD RECIENTE (Feed) */}
        <section className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-2 mb-4 border-b border-zinc-100 pb-3">
            <ClipboardList className="text-zinc-500" size={16} /> Actividad del Equipo
          </h2>
          <div className="flow-root">
            <ul className="-mb-6">
              {actividad.map((item, itemIdx) => (
                <li key={item.id}>
                  <div className="relative pb-6">
                    {itemIdx !== actividad.length - 1 ? (
                      <span className="absolute left-3 top-3 -ml-px h-full w-px bg-zinc-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-6 w-6 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center font-bold text-[10px] ring-2 ring-white">
                          {item.agente === 'Sistema' ? '⚙️️' : item.agente.substring(0,2)}
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-2">
                        <div>
                          <p className="text-xs text-zinc-700">
                            <span className="font-bold text-zinc-900">{item.agente}</span> {item.accion} <span className="font-medium text-zinc-900 underline">{item.entidad}</span>
                          </p>
                        </div>
                        <div className="text-right text-[10px] text-zinc-400 pt-0.5 shrink-0">
                          {item.hora}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* SECCIÓN INFERIOR: Alertas y Notificaciones */}
      <section className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-2 mb-4 border-b border-zinc-100 pb-3">
          <BellRing size={16} className="text-zinc-500" /> Alertas Críticas y Vencimientos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200 flex items-start gap-3">
                <Zap size={16} className='text-zinc-700 shrink-0 mt-0.5'/>
                <div>
                    <p className="text-xs font-bold text-zinc-900">Reserva próxima a vencer</p>
                    <p className="text-[11px] text-zinc-500">Corrientes 1200 - Vence en 24hs.</p>
                </div>
            </div>
             <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200 flex items-start gap-3">
                <Building2 size={16} className='text-zinc-700 shrink-0 mt-0.5'/>
                <div>
                    <p className="text-xs font-bold text-zinc-900">Documentación faltante</p>
                    <p className="text-[11px] text-zinc-500">Rivadavia 4820 - Falta titularidad.</p>
                </div>
            </div>
             <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200 flex items-start gap-3">
                <MessageSquareText size={16} className='text-zinc-700 shrink-0 mt-0.5'/>
                <div>
                    <p className="text-xs font-bold text-zinc-900">Lead sin asignar</p>
                    <p className="text-[11px] text-zinc-500">Interesado alquileres - Hace 4hs.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}