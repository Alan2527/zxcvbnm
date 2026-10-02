import React from 'react';
import { Sparkles, Phone, CheckCircle } from 'lucide-react';

const interesadosData = [
  { id: 1, nombre: 'Valeria Maza', presupuesto: 'USD 150,000', interes: '3 Ambientes - Palermo', canal: 'ZonaProp', estado: 'Visita coordinada', match: '95%' },
  { id: 2, nombre: 'Ignacio Rossi', presupuesto: 'USD 220,000', interes: 'Local comercial - Belgrano', canal: 'Web propia', estado: 'Oferta en curso', match: '92%' },
  { id: 3, nombre: 'Camila Rios', presupuesto: 'USD 50,000', interes: 'Lote - Escobar', canal: 'MercadoLibre', estado: 'Contactado', match: '88%' },
  { id: 4, nombre: 'Marcos Acuña', presupuesto: '$ 500,000 ARS/mes', interes: '2 Ambientes - Caballito', canal: 'Cartelería QR', estado: 'Nuevo lead', match: '81%' }
];

export default function Interesados() {
  return (
    <div className="p-8 h-full overflow-auto bg-gray-50">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-gray-800">CRM de Interesados y Leads</h2>
            <p className="text-xs text-gray-500 mt-0.5">Seguimiento de presupuestos y porcentaje de Matchmaking automatizado.</p>
          </div>
          <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg">Total: 4 Leads Activos</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th className="py-3.5 px-6">Interesado</th>
                <th className="py-3.5 px-6">Presupuesto</th>
                <th className="py-3.5 px-6">Búsqueda / Interés</th>
                <th className="py-3.5 px-6">Canal de Origen</th>
                <th className="py-3.5 px-6">Match IA</th>
                <th className="py-3.5 px-6">Estado CRM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {interesadosData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-gray-900">{item.nombre}</td>
                  <td className="py-4 px-6 font-bold text-emerald-600">{item.presupuesto}</td>
                  <td className="py-4 px-6 text-gray-700 font-medium">{item.interes}</td>
                  <td className="py-4 px-6 text-gray-500 text-xs font-semibold">{item.canal}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 text-xs font-black bg-green-100 text-green-800 px-2.5 py-1 rounded-full">
                      <Sparkles size={12} /> {item.match}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-blue-50 text-blue-700">
                      {item.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}