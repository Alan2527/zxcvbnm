import React from 'react';
import { AlertTriangle, Wrench, CheckCircle2 } from 'lucide-react';

const incidenciasData = [
  { id: 1, propiedad: 'Gorriti 4500, Palermo', tipo: 'Propiedad estancada', detalle: '74 días publicada sin ofertas concretas', prioridad: 'Media', estado: 'Pendiente revisión' },
  { id: 2, propiedad: 'Rivadavia 4820, Caballito', tipo: 'Alquiler vencido', detalle: 'Inquilino con 5 días de atraso en pago mensual', prioridad: 'Alta', estado: 'Intimación enviada' },
  { id: 3, propiedad: 'Libertador 3400, Olivos', tipo: 'Mantenimiento', detalle: 'Rotura de cañería en baño principal', prioridad: 'Urgente', estado: 'Plomero asignado' }
];

export default function Incidencias() {
  return (
    <div className="p-8 h-full overflow-auto bg-gray-50">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Centro de Incidencias y Reclamos</h2>
            <p className="text-xs text-gray-500 mt-0.5">Control de alertas operativas, legales y de mantenimiento.</p>
          </div>
          <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1.5 rounded-lg">3 Incidencias Activas</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th className="py-3.5 px-6">Propiedad Afectada</th>
                <th className="py-3.5 px-6">Tipo de Incidencia</th>
                <th className="py-3.5 px-6">Descripción del Caso</th>
                <th className="py-3.5 px-6">Prioridad</th>
                <th className="py-3.5 px-6">Estado Actual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {incidenciasData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-gray-900">{item.propiedad}</td>
                  <td className="py-4 px-6 font-semibold text-gray-800 flex items-center gap-1.5 pt-5">
                    <AlertTriangle size={15} className="text-amber-500" /> {item.tipo}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">{item.detalle}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-black ${item.prioridad === 'Urgente' || item.prioridad === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800'}`}>
                      {item.prioridad}
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