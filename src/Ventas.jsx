import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const ventasData = [
  { id: 1, propiedad: 'Honduras 5100 (Palermo Soho)', propietario: 'Martín Palermo', comprador: 'Valeria Maza', oferta: 'USD 145,000', estado: 'En reserva', escribania: 'Escribanía Basualdo', legalOK: false },
  { id: 2, propiedad: 'Cabildo 2300 (Belgrano)', propietario: 'Estudio Jurídico Central', comprador: 'Ignacio Rossi', oferta: 'USD 220,000', estado: 'Boleto firmado', escribania: 'Escribanía Rossi', legalOK: true },
  { id: 3, propiedad: 'Ruta 2 Km 45 (El Pato)', propietario: 'Desarrollos Sur S.A.', comprador: 'Camila Rios', oferta: 'USD 45,000', estado: 'Escritura pendiente', escribania: 'Escribanía Haedo', legalOK: true }
];

export default function Ventas() {
  const [ventas, setVentas] = useState(ventasData);

  const toggleLegal = (id) => {
    setVentas(ventas.map(v => v.id === id ? { ...v, legalOK: !v.legalOK } : v));
  };

  return (
    <div className="p-8 h-full overflow-auto bg-gray-50">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Operaciones de Venta y Control Documental</h2>
          <p className="text-xs text-gray-500 mt-0.5">Auditoría obligatoria de títulos e inhibiciones previos a la escritura.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase">
                <th className="py-3.5 px-6">Propiedad</th>
                <th className="py-3.5 px-6">Partes (Vendedor / Comprador)</th>
                <th className="py-3.5 px-6">Oferta / Cierre</th>
                <th className="py-3.5 px-6">Estado Operación</th>
                <th className="py-3.5 px-6">Escribanía</th>
                <th className="py-3.5 px-6 text-center">Estado Legal (Títulos)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {ventas.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium text-gray-900">{item.propiedad}</td>
                  <td className="py-4 px-6 text-xs text-gray-600">
                    <div><strong>V:</strong> {item.propietario}</div>
                    <div><strong>C:</strong> {item.comprador}</div>
                  </td>
                  <td className="py-4 px-6 font-bold text-gray-800">{item.oferta}</td>
                  <td className="py-4 px-6">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">{item.estado}</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs font-semibold">{item.escribania}</td>
                  <td className="py-4 px-6 text-center">
                    <button 
                      onClick={() => toggleLegal(item.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${item.legalOK ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}
                    >
                      {item.legalOK ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
                      {item.legalOK ? 'Documentación OK' : 'Pendiente Verificación'}
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