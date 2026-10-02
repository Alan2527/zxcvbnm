import React, { useState } from 'react';
import { Phone, Mail, ShieldCheck, MessageCircle, X, FileText } from 'lucide-react';

const inquilinosData = [
  { id: 1, nombre: 'Laura Giménez', tel: '+54 11 4455-6677', email: 'laura.g@email.com', propiedad: 'Gorriti 4500, Palermo', garantia: 'Caución Finaer', estado: 'Al día', historialPagos: ['Octubre 2026 - Pagado', 'Septiembre 2026 - Pagado', 'Agosto 2026 - Pagado'] },
  { id: 2, nombre: 'Esteban Quito', tel: '+54 11 9988-7766', email: 'equito@email.com', propiedad: 'Rivadavia 4820, Caballito', garantia: 'Propietaria CABA', estado: 'Con deuda', historialPagos: ['Octubre 2026 - Pendiente', 'Septiembre 2026 - Pagado'] },
  { id: 3, nombre: 'Sofía Valdés', tel: '+54 11 2233-4455', email: 'sofia.v@email.com', propiedad: 'Libertador 3400, Olivos', garantia: 'Caución Albacresa', estado: 'Al día', historialPagos: ['Octubre 2026 - Pagado'] }
];

export default function Inquilinos() {
  const [selectedInquilino, setSelectedInquilino] = useState(null);

  return (
    <div className="p-8 h-full overflow-auto bg-gray-50 flex">
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Directorio de Inquilinos</h2>
          <p className="text-xs text-gray-500 mt-0.5">Hacé clic en cualquier inquilino para ver su ficha completa e historial.</p>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase">
              <th className="py-3.5 px-6">Inquilino</th>
              <th className="py-3.5 px-6">Contacto</th>
              <th className="py-3.5 px-6">Propiedad</th>
              <th className="py-3.5 px-6">Garantía</th>
              <th className="py-3.5 px-6">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {inquilinosData.map((item) => (
              <tr key={item.id} onClick={() => setSelectedInquilino(item)} className="hover:bg-blue-50/50 cursor-pointer transition-colors">
                <td className="py-4 px-6 font-bold text-blue-900 underline">{item.nombre}</td>
                <td className="py-4 px-6 text-xs text-gray-600">{item.tel}</td>
                <td className="py-4 px-6 text-gray-700">{item.propiedad}</td>
                <td className="py-4 px-6"><span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-semibold">{item.garantia}</span></td>
                <td className="py-4 px-6"><span className={`px-2.5 py-0.5 rounded text-xs font-bold ${item.estado === 'Al día' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>{item.estado}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Drawer / Ficha Lateral Interactiva */}
      {selectedInquilino && (
        <div className="w-96 bg-white border-l border-gray-200 shadow-2xl p-6 flex flex-col justify-between ml-6 rounded-xl relative animate-in slide-in-from-right duration-200">
          <div>
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-base font-bold text-gray-900">Ficha de Inquilino</h3>
              <button onClick={() => setSelectedInquilino(null)} className="text-gray-400 hover:text-gray-700"><X size={18} /></button>
            </div>
            <h4 className="text-xl font-extrabold text-blue-900 mb-1">{selectedInquilino.nombre}</h4>
            <p className="text-xs text-gray-500 mb-4">{selectedInquilino.propiedad}</p>
            
            <div className="space-y-3 mb-6 bg-gray-50 p-3.5 rounded-lg border">
              <div className="text-xs text-gray-700"><strong>Teléfono:</strong> {selectedInquilino.tel}</div>
              <div className="text-xs text-gray-700"><strong>Email:</strong> {selectedInquilino.email}</div>
              <div className="text-xs text-gray-700"><strong>Garantía:</strong> {selectedInquilino.garantia}</div>
            </div>

            <h5 className="text-xs font-bold uppercase text-gray-400 mb-2">Historial de Pagos Recientes</h5>
            <div className="space-y-2">
              {selectedInquilino.historialPagos.map((pago, i) => (
                <div key={i} className="flex items-center gap-2 text-xs bg-emerald-50 text-emerald-800 p-2 rounded border border-emerald-100">
                  <FileText size={14} /> {pago}
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => alert(`Enviando WhatsApp a ${selectedInquilino.nombre}`)} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 shadow-sm">
            <MessageCircle size={16} /> Contactar por WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}