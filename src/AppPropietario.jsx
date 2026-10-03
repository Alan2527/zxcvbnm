import React, { useState } from 'react';
import { 
  Home, DollarSign, Wrench, UserCircle, 
  Bell, X, MessageCircle, FileText, Download, 
  CheckCircle2, XCircle, ChevronLeft, ChevronRight, AlertCircle, Building2
} from 'lucide-react';

export default function AppPropietario() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [showNotificaciones, setShowNotificaciones] = useState(false);
  const [mesSeleccionado, setMesSeleccionado] = useState('Octubre 2026');
  const [presupuestoAprobado, setPresupuestoAprobado] = useState(null);

  const mesesLiquidacion = ['Agosto 2026', 'Septiembre 2026', 'Octubre 2026'];

  return (
    <div className="flex flex-col h-screen bg-zinc-50 font-sans text-zinc-900 max-w-md mx-auto shadow-2xl relative overflow-hidden">
      
      {/* HEADER FIJO */}
      <header className="bg-white px-6 pt-12 pb-4 border-b border-zinc-200 shrink-0 flex justify-between items-center relative z-50">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hola, Roberto</h1>
          <p className="text-xs text-zinc-500 font-medium mt-0.5">Mis Propiedades (2)</p>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setShowNotificaciones(!showNotificaciones)}
            className="h-10 w-10 bg-zinc-100 hover:bg-zinc-200 transition-colors rounded-full flex items-center justify-center border border-zinc-200 relative"
          >
            <Bell size={20} className="text-zinc-700" />
            <span className="absolute top-2 right-2.5 h-2 w-2 bg-red-500 rounded-full border-2 border-zinc-100"></span>
          </button>

          {showNotificaciones && (
            <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden z-50">
              <div className="p-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50">
                <h3 className="text-sm font-bold text-zinc-900">Notificaciones</h3>
                <button onClick={() => setShowNotificaciones(false)} className="text-zinc-400 hover:text-zinc-900"><X size={16} /></button>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="p-4 border-b border-zinc-50 hover:bg-zinc-50 cursor-pointer transition-colors">
                  <p className="text-xs font-bold text-zinc-900">Presupuesto pendiente</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Tenés un presupuesto de plomería para revisar en Libertador 3400.</p>
                </div>
                <div className="p-4 border-b border-zinc-50 hover:bg-zinc-50 cursor-pointer transition-colors">
                  <p className="text-xs font-bold text-zinc-900">Documentación faltante</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Falta cargar título de propiedad de Rivadavia 4820.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-y-auto pb-28 relative z-0">
        
        {/* ================= INICIO ================= */}
        {activeTab === 'inicio' && (
          <div className="p-6 space-y-6">
            
            {/* Resumen de Liquidación */}
            <div className="bg-zinc-900 text-white p-5 rounded-2xl shadow-md relative overflow-hidden">
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-1">A cobrar este mes</p>
              <h2 className="text-3xl font-bold mb-1">$427.500</h2>
              <p className="text-sm text-zinc-300">Liquidación de Octubre</p>
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-zinc-800 rounded-full opacity-50 blur-2xl"></div>
            </div>

            {/* Estado de Propiedades */}
            <section>
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-3">Mis Propiedades</h3>
              <div className="space-y-3">
                
                {/* Propiedad Alquilada */}
                <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} className="text-zinc-400" />
                      <h4 className="font-bold text-sm text-zinc-900">Libertador 3400, Olivos</h4>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide border border-emerald-200">Alquilada</span>
                  </div>
                  <div className="pt-3 border-t border-zinc-100 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-zinc-900">Inquilina: Laura García</p>
                      <p className="text-[10px] text-zinc-500 mt-0.5">Alquiler al día</p>
                    </div>
                    <p className="font-bold text-sm text-zinc-900">$450.000</p>
                  </div>
                </div>

                {/* Propiedad con Problemas (Data de tu dashboard) */}
                <div className="bg-white p-4 rounded-2xl border border-red-200 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} className="text-zinc-400" />
                      <h4 className="font-bold text-sm text-zinc-900">Rivadavia 4820</h4>
                    </div>
                    <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide border border-red-200">Falta Doc.</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-[11px] text-red-600 font-medium">Falta presentar escritura para publicarla.</p>
                  </div>
                </div>

              </div>
            </section>
          </div>
        )}

        {/* ================= LIQUIDACIONES (PAGOS) ================= */}
        {activeTab === 'liquidaciones' && (
          <div className="p-6 space-y-5">
            
            <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-zinc-200 shadow-sm">
              <button className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 transition-colors"><ChevronLeft size={20} /></button>
              <select 
                value={mesSeleccionado}
                onChange={(e) => setMesSeleccionado(e.target.value)}
                className="font-bold text-zinc-900 bg-transparent text-center appearance-none cursor-pointer outline-none"
              >
                {mesesLiquidacion.map(mes => <option key={mes} value={mes}>{mes}</option>)}
              </select>
              <button className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 transition-colors"><ChevronRight size={20} /></button>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-zinc-100 bg-zinc-50 flex justify-between items-center">
                <span className="text-sm font-bold text-zinc-900">Estado</span>
                <span className="text-[10px] font-bold text-zinc-50 bg-zinc-900 px-2 py-1 rounded uppercase tracking-wide">Liquidado</span>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-600">Alquiler (Libertador 3400)</span>
                  <span className="text-sm font-bold text-zinc-900">$450.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-600">Honorarios Adm. (5%)</span>
                  <span className="text-sm font-bold text-red-500">-$22.500</span>
                </div>
                
                {/* Ejemplo de descuento si hubiera un arreglo */}
                {mesSeleccionado === 'Septiembre 2026' && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-600">Reparación cerradura</span>
                    <span className="text-sm font-bold text-red-500">-$15.000</span>
                  </div>
                )}
                
                <div className="pt-4 border-t border-zinc-200 flex justify-between items-center">
                  <span className="text-sm font-bold text-zinc-900 uppercase">Total a transferir</span>
                  <span className="text-lg font-bold text-zinc-900">
                    {mesSeleccionado === 'Septiembre 2026' ? '$412.500' : '$427.500'}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-zinc-50 border-t border-zinc-100">
                <button className="w-full flex items-center justify-center gap-2 text-xs font-bold bg-white border border-zinc-200 text-zinc-900 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors shadow-sm">
                  <Download size={16} /> Descargar Comprobante
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= INCIDENCIAS (PRESUPUESTOS) ================= */}
        {activeTab === 'incidencias' && (
          <div className="p-6 space-y-5">
            <h2 className="text-xl font-bold">Incidencias y Presupuestos</h2>

            <div className="space-y-4">
              
              {/* Incidencia pendiente de aprobación de presupuesto */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-zinc-100">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-bold text-zinc-900">Termotanque no enciende</p>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded uppercase tracking-wide">Requiere Aprobación</span>
                  </div>
                  <p className="text-[11px] text-zinc-500">Reportado en: Libertador 3400 (Laura García)</p>
                </div>
                
                <div className="p-4 bg-zinc-50">
                  <p className="text-xs font-bold text-zinc-900 mb-2">Presupuesto del Plomero (Matriculado)</p>
                  <div className="bg-white p-3 rounded-lg border border-zinc-200 flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-zinc-400" />
                      <span className="text-xs font-medium">Presupuesto_Reparacion.pdf</span>
                    </div>
                    <span className="text-sm font-bold text-zinc-900">$45.000</span>
                  </div>

                  {presupuestoAprobado === null ? (
                    <div className="flex gap-2">
                      <button onClick={() => setPresupuestoAprobado(false)} className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-bold border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100">
                        <XCircle size={14} /> Rechazar
                      </button>
                      <button onClick={() => setPresupuestoAprobado(true)} className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm">
                        <CheckCircle2 size={14} /> Aprobar
                      </button>
                    </div>
                  ) : presupuestoAprobado === true ? (
                    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                      <CheckCircle2 size={16} /> <span className="text-xs font-bold">Presupuesto Aprobado.</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                      <XCircle size={16} /> <span className="text-xs font-bold">Presupuesto Rechazado.</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Incidencia Resuelta Histórica */}
              <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm opacity-60">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-bold text-zinc-900">Filtra agua en el baño</p>
                  <span className="text-[10px] font-bold text-zinc-500 bg-zinc-100 border border-zinc-200 px-2 py-1 rounded uppercase tracking-wide">Resuelto</span>
                </div>
                <p className="text-[11px] text-zinc-500">Costo: $15.000 (Descontado en Liq. Septiembre)</p>
              </div>

            </div>
          </div>
        )}

        {/* ================= PERFIL Y CONTRATOS ================= */}
        {activeTab === 'perfil' && (
          <div className="p-6 space-y-6">
            
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Mis Datos</h2>
              </div>
              <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Nombre completo</label>
                  <p className="text-sm font-bold text-zinc-900 mt-0.5">Roberto Gómez</p>
                </div>
                <div className="pt-3 border-t border-zinc-100">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">CBU para Liquidaciones</label>
                  <p className="text-sm font-bold text-zinc-900 mt-0.5">0140000000000000012345</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4">Documentos y Contratos</h2>
              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                
                <div className="p-4 border-b border-zinc-100 flex justify-between items-center hover:bg-zinc-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-zinc-400" />
                    <div>
                      <p className="text-sm font-bold text-zinc-900">Contrato Libertador 3400</p>
                      <p className="text-[10px] text-zinc-500">Vigencia hasta 2028</p>
                    </div>
                  </div>
                  <Download size={16} className="text-zinc-900" />
                </div>
                
                <div className="p-4 flex justify-between items-center hover:bg-zinc-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-zinc-400" />
                    <div>
                      <p className="text-sm font-bold text-zinc-900">Escritura Rivadavia 4820</p>
                      <p className="text-[10px] text-red-500 font-bold">Falta cargar</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold bg-zinc-900 text-white px-3 py-1.5 rounded-lg shadow-sm">Cargar</button>
                </div>

              </div>
            </section>
          </div>
        )}
      </main>

      {/* BOTÓN FLOTANTE DE CONTACTO (FAB) */}
      <button className="absolute bottom-24 right-6 h-14 w-14 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-105 hover:bg-zinc-800 transition-all z-40">
        <MessageCircle size={24} />
      </button>

      {/* NAVEGACIÓN INFERIOR */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-zinc-200 flex justify-around items-center h-20 pb-4 pt-2 z-50 px-2 rounded-t-2xl shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
        <button onClick={() => setActiveTab('inicio')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${activeTab === 'inicio' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <Home size={22} className={activeTab === 'inicio' ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Inicio</span>
        </button>
        
        <button onClick={() => setActiveTab('liquidaciones')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${activeTab === 'liquidaciones' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <DollarSign size={22} className={activeTab === 'liquidaciones' ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Pagos</span>
        </button>
        
        <button onClick={() => setActiveTab('incidencias')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${activeTab === 'incidencias' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <Wrench size={22} className={activeTab === 'incidencias' ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Incidencias</span>
        </button>

        <button onClick={() => setActiveTab('perfil')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${activeTab === 'perfil' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <UserCircle size={22} className={activeTab === 'perfil' ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Perfil</span>
        </button>
      </nav>
      
    </div>
  );
}