import React, { useState } from 'react';
import { FileText, Search, AlertCircle, CheckCircle2 } from 'lucide-react';

const alquileresData = [
  { id: 1, propiedad: 'Gorriti 4500, 2B (Palermo)', propietario: 'Carlos Gómez', inquilino: 'Laura Giménez', valor: '$ 450,000 ARS', vencimiento: '14/10/2027', proximaActualizacion: 'En 12 días (Índice ICL)', diasRestantes: 12, estado: 'Al día' },
  { id: 2, propiedad: 'Rivadavia 4820, 4B (Caballito)', propietario: 'María Pérez', inquilino: 'Esteban Quito', valor: '$ 380,000 ARS', vencimiento: '01/12/2026', proximaActualizacion: 'Vencido / A renegociar', diasRestantes: 0, estado: 'Atrasado' },
  { id: 3, propiedad: 'Libertador 3400, 8A (Olivos)', propietario: 'Roberto Sánchez', inquilino: 'Sofía Valdés', valor: '$ 750,000 ARS', vencimiento: '10/05/2028', proximaActualizacion: 'En 45 días', diasRestantes: 45, estado: 'Al día' },
  { id: 4, propiedad: 'Medrano 1200 (Palermo)', propietario: 'Ana Torres', inquilino: 'Julián Díaz', valor: '$ 420,000 ARS', vencimiento: '20/02/2027', proximaActualizacion: 'En 5 días (Índice IPC)', diasRestantes: 5, estado: 'Al día' }
];

export default function Alquileres({ onSelectPersona }) {
  const [busqueda, setBusqueda] = useState('');

  const filtrados = alquileresData.filter(item => 
    item.propiedad.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.inquilino.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.propietario.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="p-8 h-full overflow-auto bg-gray-50">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* Cabecera y Buscador */}
        <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Contratos de Alquiler y Actualizaciones</h2>
            <p className="text-xs text-gray-500 mt-0.5">Control de indexaciones por índices oficiales y vencimientos.</p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar por dirección o inquilino..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th className="py-3.5 px-6">Propiedad</th>
                <th className="py-3.5 px-6">Propietario</th>
                <th className="py-3.5 px-6">Inquilino</th>
                <th className="py-3.5 px-6">Valor Actual</th>
                <th className="py-3.5 px-6">Próxima Indexación</th>
                <th className="py-3.5 px-6">Estado</th>
                <th className="py-3.5 px-6 text-center">Acciones IA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {filtrados.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium text-gray-900">{item.propiedad}</td>
                  <td className="py-4 px-6">
                    <button onClick={() => onSelectPersona && onSelectPersona(item.propietario, 'propietario')} className="text-blue-600 hover:underline font-medium text-left">
                      {item.propietario}
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <button onClick={() => onSelectPersona && onSelectPersona(item.inquilino, 'inquilino')} className="text-blue-600 hover:underline font-medium text-left">
                      {item.inquilino}
                    </button>
                  </td>
                  <td className="py-4 px-6 font-bold text-gray-800">{item.valor}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${item.diasRestantes <= 15 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-amber-100 text-amber-800'}`}>
                      <AlertCircle size={13} /> {item.proximaActualizacion}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${item.estado === 'Al día' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                      {item.estado}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button onClick={() => alert(`Calculando ajuste automático por índice para ${item.propiedad}`)} className="px-3 py-1.5 bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg text-xs font-bold transition-colors">
                      Calcular Ajuste IA
                    </button>
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