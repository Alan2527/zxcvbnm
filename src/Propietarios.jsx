import React from 'react';
import { DollarSign, FileSpreadsheet, Building } from 'lucide-react';

const propietariosData = [
  { id: 1, nombre: 'Carlos Gómez', propiedades: 3, alias: 'carlos.gomez.mp', banco: 'Mercado Pago', telefono: '+54 11 1122-3344' },
  { id: 2, nombre: 'María Pérez', propiedades: 1, alias: 'maria.perez.galicia', banco: 'Galicia', telefono: '+54 11 5566-7788' },
  { id: 3, nombre: 'Roberto Sánchez', propiedades: 2, alias: 'rober.sanchez.bbva', banco: 'BBVA', telefono: '+54 11 3344-5566' },
  { id: 4, nombre: 'Martín Palermo', propiedades: 1, alias: 'palermo.prop.santander', banco: 'Santander', telefono: '+54 11 7788-9900' }
];

export default function Propietarios() {
  return (
    <div className="p-8 h-full overflow-auto bg-gray-50">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Directorio de Propietarios y CBU</h2>
            <p className="text-xs text-gray-500 mt-0.5">Gestión de cuentas bancarias para la liquidación mensual de alquileres.</p>
          </div>
          <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-lg">Total: 4 propietarios</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th className="py-3.5 px-6">Propietario</th>
                <th className="py-3.5 px-6">Inmuebles en Cartera</th>
                <th className="py-3.5 px-6">Entidad Bancaria</th>
                <th className="py-3.5 px-6">Alias / CBU de Liquidación</th>
                <th className="py-3.5 px-6 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {propietariosData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-gray-900">{item.nombre}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
                      <Building size={13} /> {item.propiedades} propiedades
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-700 font-medium">{item.banco}</td>
                  <td className="py-4 px-6 font-mono text-xs bg-gray-50/80 rounded px-2 text-gray-800">{item.alias}</td>
                  <td className="py-4 px-6 text-center">
                    <button onClick={() => alert(`Generando liquidación mensual para ${item.nombre}`)} className="p-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center gap-1 text-xs font-bold shadow-sm">
                      <DollarSign size={14} /> Liquidar Mes
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