import React from 'react';
import { User, Mail, Phone, CheckCircle2, Database, Sparkles, Link as LinkIcon, BarChart3, Image as ImageIcon } from 'lucide-react';

export default function Perfil() {
  return (
    <div className="p-8 h-full overflow-auto bg-zinc-50 space-y-10 pb-28">
      
      {/* 1. DATOS PERSONALES */}
      <section className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm max-w-4xl">
        <h2 className="text-sm font-bold text-zinc-900 mb-4 border-b border-zinc-100 pb-2">Datos Personales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">Nombre Completo</label>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 bg-zinc-50 p-2.5 rounded-lg border border-zinc-200">
              <User size={16} className="text-zinc-400" /> Alan Brian Herrera
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">Correo Electrónico</label>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 bg-zinc-50 p-2.5 rounded-lg border border-zinc-200">
              <Mail size={16} className="text-zinc-400" /> alan@proptech.com
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">Teléfono</label>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 bg-zinc-50 p-2.5 rounded-lg border border-zinc-200">
              <Phone size={16} className="text-zinc-400" /> +54 11 4455-6677
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLANES DISPONIBLES */}
      <section className="max-w-4xl">
        <h2 className="text-sm font-bold text-zinc-900 mb-4">Planes del Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Plan Básico */}
          <div className="bg-white p-6 rounded-xl border border-zinc-200 opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-lg font-bold text-zinc-900">Básico</h3>
            <p className="text-2xl font-black text-zinc-900 my-2">Gratis</p>
            <ul className="space-y-2 mt-4 text-xs text-zinc-600">
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-zinc-400" /> Hasta 20 propiedades</li>
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-zinc-400" /> 10 Usos de IA / mes</li>
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-zinc-400" /> Soporte estándar</li>
            </ul>
          </div>

          {/* Plan Plus (Activo) */}
          <div className="bg-white p-6 rounded-xl border-2 border-zinc-900 shadow-md relative transform scale-105">
            <div className="absolute top-0 right-0 bg-zinc-900 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">Plan Actual</div>
            <h3 className="text-lg font-bold text-zinc-900">Plus</h3>
            <p className="text-2xl font-black text-zinc-900 my-2">USD 15<span className="text-xs font-normal text-zinc-500">/mes</span></p>
            <ul className="space-y-2 mt-4 text-xs text-zinc-800 font-medium">
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-zinc-900" /> Hasta 100 propiedades</li>
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-zinc-900" /> 500 Usos de IA / mes</li>
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-zinc-900" /> Generador de Videos</li>
            </ul>
          </div>

          {/* Plan Premium */}
          <div className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors">
            <h3 className="text-lg font-bold text-zinc-900">Premium AI</h3>
            <p className="text-2xl font-black text-zinc-900 my-2">USD 35<span className="text-xs font-normal text-zinc-500">/mes</span></p>
            <ul className="space-y-2 mt-4 text-xs text-zinc-600">
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-zinc-400" /> Propiedades Ilimitadas</li>
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-zinc-400" /> Usos de IA Ilimitados</li>
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-zinc-400" /> Soporte Prioritario 24/7</li>
            </ul>
            <button className="w-full mt-6 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-bold py-2 rounded-lg transition-colors">Actualizar a Premium</button>
          </div>

        </div>
      </section>

      {/* 3. LÍMITES DE USO (Estilo oscuro inspirado en el diseño de IA) */}
      <section className="max-w-4xl bg-[#131314] rounded-2xl p-6 text-zinc-300 border border-zinc-800 shadow-2xl font-sans">
        
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-normal text-white">Límites de uso</h2>
          <span className="bg-[#282a2c] text-white text-[10px] font-bold px-2 py-0.5 rounded border border-zinc-700">PLUS</span>
        </div>
        
        <p className="text-sm text-zinc-400 mb-6">
          Los límites de tu plan determinan cuánto espacio de base de datos y herramientas de Inteligencia Artificial puedes usar a lo largo del mes. <span className="text-blue-400 cursor-pointer hover:underline">Más información</span>
        </p>

        <div className="space-y-4">
          
          {/* Uso de Base de Datos */}
          <div className="bg-[#1e1f20] p-4 rounded-xl border border-zinc-800">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-white flex items-center gap-2"><Database size={16} /> Propiedades Administradas (DB)</span>
              <span className="text-sm font-bold text-white">45% usado</span>
            </div>
            <div className="w-full bg-black h-2.5 rounded-full overflow-hidden">
              <div className="bg-zinc-400 h-full rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-[10px] text-zinc-500 mt-2">45 de 100 propiedades límite.</p>
          </div>

          {/* Usos de IA Generales */}
          <div className="bg-[#1e1f20] p-4 rounded-xl border border-zinc-800">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-white flex items-center gap-2"><Sparkles size={16} className="text-blue-400" /> Consumo General de IA</span>
              <span className="text-sm font-bold text-white">32% usado</span>
            </div>
            <div className="w-full bg-black h-2.5 rounded-full overflow-hidden mb-4">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: '32%' }}></div>
            </div>
            
            {/* Desglose de IA */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-zinc-800">
              <div>
                <p className="text-[10px] text-zinc-400 flex items-center gap-1 mb-1"><Sparkles size={12}/> Descripciones IA</p>
                <p className="text-sm font-bold text-white">120 <span className="text-zinc-500 font-normal text-xs">/ 500</span></p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-400 flex items-center gap-1 mb-1"><LinkIcon size={12}/> Importadas por URL</p>
                <p className="text-sm font-bold text-white">15 <span className="text-zinc-500 font-normal text-xs">/ 50</span></p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-400 flex items-center gap-1 mb-1"><BarChart3 size={12}/> Tasaciones IA</p>
                <p className="text-sm font-bold text-white">8 <span className="text-zinc-500 font-normal text-xs">/ 20</span></p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-400 flex items-center gap-1 mb-1"><ImageIcon size={12}/> Flyers/Videos IA</p>
                <p className="text-sm font-bold text-white">25 <span className="text-zinc-500 font-normal text-xs">/ 100</span></p>
              </div>
            </div>
            <p className="text-[10px] text-zinc-500 mt-4">Se restablece el 1 de Noviembre a las 00:00 hs.</p>
          </div>

          {/* Banner Upgrade */}
          <div className="bg-[#1e1f20] p-4 rounded-xl border border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 mt-2">
            <div>
              <p className="text-sm font-bold text-white">Obtén uso ilimitado de IA con Premium AI</p>
              <p className="text-xs text-zinc-400 mt-0.5"><span className="line-through text-zinc-600 mr-2">USD 50.00</span> <span className="text-emerald-400">USD 35.00/mes</span></p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-6 rounded-full transition-colors w-full sm:w-auto">
              Actualizar
            </button>
          </div>

        </div>
      </section>
      
    </div>
  );
}