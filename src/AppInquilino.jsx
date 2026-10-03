import React, { useState } from 'react';
import { 
  Home, CreditCard, Wrench, User, 
  CheckCircle2, FileText, Download, Upload, AlertCircle, 
  ChevronLeft, ChevronRight, Edit2, Bell, MessageCircle, X
} from 'lucide-react';

export default function AppInquilino() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [mesSeleccionado, setMesSeleccionado] = useState('Octubre 2026');
  const [showNotificaciones, setShowNotificaciones] = useState(false);

  const mesesContrato = [
    'Agosto 2026', 'Septiembre 2026', 'Octubre 2026', 'Noviembre 2026', 'Diciembre 2026'
  ];

  return (
    <div className="flex flex-col h-screen bg-zinc-50 font-sans text-zinc-900 max-w-md mx-auto shadow-2xl relative overflow-hidden">
      
      {/* HEADER */}
      <header className="bg-white px-6 pt-12 pb-4 border-b border-zinc-200 shrink-0 flex justify-between items-center relative z-50">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hola, Laura</h1>
          <p className="text-xs text-zinc-500 font-medium mt-0.5">Av. Libertador 2300, 4B</p>
        </div>
        
        {/* Campanita de Notificaciones */}
        <div className="relative">
          <button 
            onClick={() => setShowNotificaciones(!showNotificaciones)}
            className="h-10 w-10 bg-zinc-100 hover:bg-zinc-200 transition-colors rounded-full flex items-center justify-center border border-zinc-200 relative"
          >
            <Bell size={20} className="text-zinc-700" />
            <span className="absolute top-2 right-2.5 h-2 w-2 bg-red-500 rounded-full border-2 border-zinc-100"></span>
          </button>

          {/* Panel Desplegable de Notificaciones */}
          {showNotificaciones && (
            <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden z-50">
              <div className="p-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50">
                <h3 className="text-sm font-bold text-zinc-900">Notificaciones</h3>
                <button onClick={() => setShowNotificaciones(false)} className="text-zinc-400 hover:text-zinc-900">
                  <X size={16} />
                </button>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="p-4 border-b border-zinc-50 hover:bg-zinc-50 cursor-pointer transition-colors">
                  <p className="text-xs font-bold text-zinc-900">Vencimiento próximo</p>
                  <p className="text-[11px] text-zinc-500 mt-1">El alquiler vence en 7 días.</p>
                </div>
                <div className="p-4 border-b border-zinc-50 hover:bg-zinc-50 cursor-pointer transition-colors">
                  <p className="text-xs font-bold text-zinc-900">Actualización de incidencia</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Tu reclamo "Filtra agua..." fue marcado como resuelto.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-y-auto pb-28 relative z-0">
        
        {/* ========================================= */}
        {/* PESTAÑA INICIO                            */}
        {/* ========================================= */}
        {activeTab === 'inicio' && (
          <div className="p-6 space-y-6">
            
            {/* Alquiler */}
            <div className="bg-zinc-900 text-white p-5 rounded-2xl shadow-md relative overflow-hidden">
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-1">Alquiler</p>
              <h2 className="text-3xl font-bold mb-1">$450.000</h2>
              <p className="text-sm text-zinc-300">Vence el 10 de Noviembre</p>
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-zinc-800 rounded-full opacity-50 blur-2xl"></div>
            </div>

            {/* Expensas */}
            <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm">
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Expensas</p>
              <h2 className="text-2xl font-bold text-zinc-900 mb-1">$85.000</h2>
              <p className="text-sm text-zinc-500">Vence el 15 de Noviembre</p>
            </div>

            {/* Servicios */}
            <section>
              <h3 className="text-sm font-bold text-zinc-900 mb-3 uppercase tracking-wide">Estado de Servicios</h3>
              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                
                <div className="p-4 border-b border-zinc-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                    <span className="text-sm font-bold">Edenor</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-50 bg-zinc-900 px-2 py-1 rounded uppercase tracking-wide">Cargado</span>
                </div>

                <div className="p-4 border-b border-zinc-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-zinc-800"></div>
                    <span className="text-sm font-bold">AySA</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-50 bg-zinc-900 px-2 py-1 rounded uppercase tracking-wide">Cargado</span>
                </div>

                <div className="p-4 flex justify-between items-center bg-zinc-50">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span className="text-sm font-bold">Naturgy</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500 bg-white border border-zinc-200 px-2 py-1 rounded uppercase tracking-wide">Pendiente</span>
                </div>

              </div>
            </section>
          </div>
        )}

        {/* ========================================= */}
        {/* PESTAÑA PAGOS                             */}
        {/* ========================================= */}
        {activeTab === 'pagos' && (
          <div className="p-6 space-y-5">
            
            {/* Navegador de Meses */}
            <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-zinc-200 shadow-sm">
              <button className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 hover:text-zinc-900 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <select 
                value={mesSeleccionado}
                onChange={(e) => setMesSeleccionado(e.target.value)}
                className="font-bold text-zinc-900 bg-transparent text-center appearance-none cursor-pointer outline-none"
              >
                {mesesContrato.map(mes => (
                  <option key={mes} value={mes}>{mes}</option>
                ))}
              </select>
              <button className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 hover:text-zinc-900 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Alerta de Impago (Visible solo si falta algo) */}
            {mesSeleccionado === 'Octubre 2026' && (
              <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl flex items-center gap-3 text-sm font-medium">
                <AlertCircle size={18} />
                Faltan comprobantes de servicios este mes.
              </div>
            )}

            {/* Listado de Comprobantes del Mes */}
            <div className="space-y-3">
              
              {/* Alquiler - Cargado */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">Alquiler</p>
                    <span className="text-[10px] font-bold text-zinc-50 bg-zinc-900 px-2 py-0.5 rounded uppercase mt-1 inline-block">Cargado</span>
                  </div>
                  <p className="text-sm font-bold">$450.000</p>
                </div>
                <div className="flex gap-2 pt-3 border-t border-zinc-100">
                  <button className="flex-1 flex items-center justify-center gap-2 text-xs font-bold bg-zinc-100 text-zinc-700 py-2 rounded-lg hover:bg-zinc-200">
                    <Download size={14} /> Descargar
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 text-xs font-bold border border-zinc-200 text-zinc-700 py-2 rounded-lg hover:bg-zinc-50">
                    <Upload size={14} /> Reemplazar
                  </button>
                </div>
              </div>

              {/* Expensas - Cargado */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">Expensas</p>
                    <span className="text-[10px] font-bold text-zinc-50 bg-zinc-900 px-2 py-0.5 rounded uppercase mt-1 inline-block">Cargado</span>
                  </div>
                  <p className="text-sm font-bold">$85.000</p>
                </div>
                <div className="flex gap-2 pt-3 border-t border-zinc-100">
                  <button className="flex-1 flex items-center justify-center gap-2 text-xs font-bold bg-zinc-100 text-zinc-700 py-2 rounded-lg hover:bg-zinc-200">
                    <Download size={14} /> Descargar
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 text-xs font-bold border border-zinc-200 text-zinc-700 py-2 rounded-lg hover:bg-zinc-50">
                    <Upload size={14} /> Reemplazar
                  </button>
                </div>
              </div>

              {/* Edenor - Cargado */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">Edenor (Luz)</p>
                    <span className="text-[10px] font-bold text-zinc-50 bg-zinc-900 px-2 py-0.5 rounded uppercase mt-1 inline-block">Cargado</span>
                  </div>
                  <button className="flex items-center justify-center gap-2 text-xs font-bold bg-zinc-100 text-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-200">
                    Ver
                  </button>
                </div>
              </div>

              {/* AySA - Cargado */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">AySA (Agua)</p>
                    <span className="text-[10px] font-bold text-zinc-50 bg-zinc-900 px-2 py-0.5 rounded uppercase mt-1 inline-block">Cargado</span>
                  </div>
                  <button className="flex items-center justify-center gap-2 text-xs font-bold bg-zinc-100 text-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-200">
                    Ver
                  </button>
                </div>
              </div>

              {/* Naturgy - Faltante */}
              <div className="bg-white p-4 rounded-xl border border-red-200 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">Naturgy (Gas)</p>
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded uppercase mt-1 inline-block">Pendiente</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-zinc-100">
                  <button className="w-full flex items-center justify-center gap-2 text-xs font-bold bg-zinc-900 text-white py-2.5 rounded-lg hover:bg-zinc-800">
                    <Upload size={14} /> Cargar comprobante
                  </button>
                </div>
              </div>

              {/* ABL - Faltante */}
              <div className="bg-white p-4 rounded-xl border border-red-200 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">AGIP / ABL</p>
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded uppercase mt-1 inline-block">Pendiente</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-zinc-100">
                  <button className="w-full flex items-center justify-center gap-2 text-xs font-bold bg-zinc-900 text-white py-2.5 rounded-lg hover:bg-zinc-800">
                    <Upload size={14} /> Cargar comprobante
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* PESTAÑA INCIDENCIAS                       */}
        {/* ========================================= */}
        {activeTab === 'incidencias' && (
          <div className="p-6 space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Incidencias</h2>
              <button className="text-xs font-bold bg-zinc-900 text-white px-4 py-2 rounded-lg">
                + Nueva
              </button>
            </div>

            <div className="space-y-3">
              {/* Incidencia Activa */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-bold text-zinc-900">Termotanque no enciende</p>
                  <span className="text-[10px] font-bold text-zinc-700 bg-zinc-100 px-2 py-1 rounded uppercase">En revisión</span>
                </div>
                <p className="text-xs text-zinc-500">Reportado el 28 de Octubre</p>
              </div>

              {/* Incidencia Resuelta */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm opacity-60">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-bold text-zinc-900">Filtra agua en el baño</p>
                  <span className="text-[10px] font-bold text-zinc-50 bg-zinc-400 px-2 py-1 rounded uppercase">Resuelto</span>
                </div>
                <p className="text-xs text-zinc-500">Reportado el 15 de Agosto</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* PESTAÑA PERFIL                            */}
        {/* ========================================= */}
        {activeTab === 'perfil' && (
          <div className="p-6 space-y-6">
            
            {/* Datos Personales */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Datos Personales</h2>
                <button className="text-zinc-500 hover:text-zinc-900"><Edit2 size={16} /></button>
              </div>
              <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Nombre completo</label>
                  <input type="text" defaultValue="Laura Inés García" className="w-full text-sm font-medium text-zinc-900 outline-none bg-transparent mt-1" readOnly />
                </div>
                <div className="pt-3 border-t border-zinc-100">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">DNI</label>
                  <input type="text" defaultValue="34.567.890" className="w-full text-sm font-medium text-zinc-900 outline-none bg-transparent mt-1" readOnly />
                </div>
                <div className="pt-3 border-t border-zinc-100">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Teléfono</label>
                  <input type="tel" defaultValue="+54 9 11 4567-8901" className="w-full text-sm font-medium text-zinc-900 outline-none bg-transparent mt-1" readOnly />
                </div>
                <div className="pt-3 border-t border-zinc-100">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Email</label>
                  <input type="email" defaultValue="laura.garcia@email.com" className="w-full text-sm font-medium text-zinc-900 outline-none bg-transparent mt-1" readOnly />
                </div>
              </div>
            </section>

            {/* Datos del Contrato */}
            <section>
              <h2 className="text-lg font-bold mb-4">Mi Contrato</h2>
              <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide mb-1">Vigencia</p>
                  <p className="text-sm font-medium text-zinc-900">01/01/2026 - 31/12/2028</p>
                </div>
                <div className="pt-3 border-t border-zinc-100">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide mb-1">Garante principal</p>
                  <p className="text-sm font-medium text-zinc-900">Roberto Gómez</p>
                </div>
                <div className="pt-3 border-t border-zinc-100 flex justify-between items-center cursor-pointer hover:bg-zinc-50 -mx-5 px-5 py-2 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-zinc-400" />
                    <p className="text-sm font-medium text-zinc-900">Contrato_Firmado.pdf</p>
                  </div>
                  <Download size={16} className="text-zinc-900" />
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
        
        <button onClick={() => setActiveTab('pagos')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${activeTab === 'pagos' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <CreditCard size={22} className={activeTab === 'pagos' ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Pagos</span>
        </button>
        
        <button onClick={() => setActiveTab('incidencias')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${activeTab === 'incidencias' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <Wrench size={22} className={activeTab === 'incidencias' ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Incidencias</span>
        </button>

        <button onClick={() => setActiveTab('perfil')} className={`flex flex-col items-center justify-center w-full h-full space-y-1.5 ${activeTab === 'perfil' ? 'text-zinc-900' : 'text-zinc-400'}`}>
          <User size={22} className={activeTab === 'perfil' ? 'fill-zinc-900' : ''} />
          <span className="text-[10px] font-bold tracking-wide">Perfil</span>
        </button>
      </nav>
      
    </div>
  );
}