import React from 'react';
import { TrendingUp, Users, DollarSign, BarChart2, Clock, PieChart, ArrowUpRight, Award } from 'lucide-react';

export default function Metricas() {
  return (
    <div className="p-8 h-full overflow-auto bg-gray-50 space-y-8 pb-28">
      
      {/* 1. TARJETAS DE RESUMEN EJECUTIVO (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 text-xs font-bold uppercase mb-2">
            <span>Tasa de Ocupación</span>
            <TrendingUp className="text-emerald-500" size={18} />
          </div>
          <h3 className="text-3xl font-black text-gray-900">94.2%</h3>
          <p className="text-xs text-emerald-600 mt-2 font-semibold flex items-center gap-1">
            <ArrowUpRight size={14} /> +2.1% vs mes anterior
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 text-xs font-bold uppercase mb-2">
            <span>Comisión Promedio</span>
            <DollarSign className="text-blue-500" size={18} />
          </div>
          <h3 className="text-3xl font-black text-gray-900">USD 4,250</h3>
          <p className="text-xs text-blue-600 mt-2 font-semibold flex items-center gap-1">
            <ArrowUpRight size={14} /> Basado en 12 operaciones
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 text-xs font-bold uppercase mb-2">
            <span>Rotación de Cartera</span>
            <Clock className="text-amber-500" size={18} />
          </div>
          <h3 className="text-3xl font-black text-gray-900">42 días</h3>
          <p className="text-xs text-amber-600 mt-2 font-semibold">Promedio en cartelera</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 text-xs font-bold uppercase mb-2">
            <span>Conversión Leads</span>
            <Users className="text-purple-500" size={18} />
          </div>
          <h3 className="text-3xl font-black text-gray-900">18.4%</h3>
          <p className="text-xs text-purple-600 mt-2 font-semibold">Lead calificado a cierre</p>
        </div>
      </div>

      {/* 2. GRÁFICO PRINCIPAL: EVOLUCIÓN HISTÓRICA */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <BarChart2 size={20} className="text-blue-700" /> Rendimiento Histórico de Facturación Anual (USD)
          </h2>
          <span className="text-xs bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-lg">Año 2026</span>
        </div>
        <div className="h-64 flex items-end justify-between gap-3 pt-8 px-4 bg-gray-50 rounded-lg border border-gray-100">
          {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map((mes, idx) => (
            <div key={mes} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <div className="w-full bg-blue-600 rounded-t-sm transition-all group-hover:bg-blue-700" style={{ height: `${35 + (idx * 6) % 60}%` }}></div>
              <span className="text-xs font-semibold text-gray-600">{mes}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SECCIÓN INFERIOR: EMBUDO Y RENDIMIENTO DE PORTALES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Embudo de Conversión Comercial */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Users size={18} className="text-indigo-600" /> Embudo Comercial (Funnel de Ventas)
          </h2>
          <p className="text-xs text-gray-500">Eficiencia en el tratamiento de interesados desde el primer contacto.</p>
          
          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>1. Leads Ingresados (Total)</span>
                <span>150 leads (100%)</span>
              </div>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>2. Visitas Coordinadas</span>
                <span>68 visitas (45%)</span>
              </div>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>3. Ofertas Presentadas</span>
                <span>28 ofertas (18%)</span>
              </div>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>4. Operaciones Cerradas</span>
                <span>12 cierres (8%)</span>
              </div>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Rendimiento por Portal Publicitario */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <PieChart size={18} className="text-purple-600" /> Efectividad por Portal Publicitario
          </h2>
          <p className="text-xs text-gray-500">Distribución de leads y cierres según canal de origen.</p>

          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>ZonaProp</span>
                <span>52% de los cierres</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: '52%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>ArgenProp</span>
                <span>24% de los cierres</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>Mercado Libre Inmuebles</span>
                <span>16% de los cierres</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-full rounded-full" style={{ width: '16%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                <span>Web Propia / Redes Sociales</span>
                <span>8% de los cierres</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}