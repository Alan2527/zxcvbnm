import React, { useState } from 'react';
import { User, Image as ImageIcon, Music, Key, Save, Upload, Shield, Check } from 'lucide-react';

export default function Configuracion() {
  // Estado del perfil
  const [perfil, setPerfil] = useState({
    nombre: 'Alan Brian Herrera',
    inmobiliaria: 'Agencia PropTech Real Estate',
    matricula: 'CUCICBA N° 7842 / CMCPSI N° 6512',
    telefono: '+54 11 4455-6677',
    email: 'contacto@agenciaproptech.com'
  });

  // Estado de marcas de agua / marcos
  const [marcoSeleccionado, setMarcoSeleccionado] = useState('moderno-azul');

  // Estado de pistas de música
  const [pistas, setPistas] = useState([
    { id: 1, nombre: 'Corporativo Moderno (Upbeat)', duracion: '0:30', activa: true },
    { id: 2, nombre: 'Lounge Elegante (Inmobiliario)', duracion: '0:45', activa: true },
    { id: 3, nombre: 'Acústico Suave Comercial', duracion: '0:30', activa: false }
  ]);

  // Estado de credenciales portales
  const [portalsConfig, setPortalsConfig] = useState({
    zonaprop: { conectado: true, usuario: 'alan@proptech.com' },
    argenprop: { conectado: true, usuario: 'alan@proptech.com' },
    mercadolibre: { conectado: false, usuario: '' },
    instagram: { conectado: true, usuario: '@alan.proptech' }
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert('¡Configuración guardada exitosamente!');
  };

  const togglePista = (id) => {
    setPistas(pistas.map(p => p.id === id ? { ...p, activa: !p.activa } : p));
  };

  const togglePortal = (portal) => {
    setPortalsConfig(prev => ({
      ...prev,
      [portal]: { ...prev[portal], conectado: !prev[portal].conectado }
    }));
  };

  return (
    <div className="p-8 h-full overflow-auto bg-gray-50 pb-28">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Configuración del Sistema</h2>
            <p className="text-xs text-gray-500 mt-0.5">Personalizá la identidad de tu marca, credenciales y recursos multimedia.</p>
          </div>
          <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-2 text-sm transition-all">
            <Save size={16} /> Guardar Cambios
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          
          {/* SECCIÓN 1: Perfil y Datos Legales */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b pb-2">
              <User size={16} className="text-blue-600" /> Datos del Agente y Matrícula Profesional
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nombre y Apellido (Visible en posteos)</label>
                <input type="text" value={perfil.nombre} onChange={e => setPerfil({...perfil, nombre: e.target.value})} className="w-full p-2.5 border rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nombre de la Inmobiliaria</label>
                <input type="text" value={perfil.inmobiliaria} onChange={e => setPerfil({...perfil, inmobiliaria: e.target.value})} className="w-full p-2.5 border rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Matrícula Profesional</label>
                <input type="text" value={perfil.matricula} onChange={e => setPerfil({...perfil, matricula: e.target.value})} className="w-full p-2.5 border rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Teléfono / WhatsApp de Contacto</label>
                <input type="text" value={perfil.telefono} onChange={e => setPerfil({...perfil, telefono: e.target.value})} className="w-full p-2.5 border rounded-lg text-sm" />
              </div>
            </div>
          </div>

          {/* SECCIÓN 2: Marcos y Marcas de Agua para Redes */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b pb-2">
              <ImageIcon size={16} className="text-purple-600" /> Estilo de Marcos y Marca de Agua
            </h3>
            <p className="text-xs text-gray-500">Seleccioná el diseño de marco que se aplicará automáticamente al generar flyers y videos.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { id: 'moderno-azul', titulo: 'Moderno Azul Corporativo', desc: 'Banda inferior oscura y logo superior' },
                { id: 'minimalista-blanco', titulo: 'Minimalista Clean', desc: 'Esquina superior limpia y tipografía fina' },
                { id: 'urgente-rojo', titulo: 'Alto Impacto (Oportunidad)', desc: 'Bordes destacados y cintillo de oferta' }
              ].map(marco => (
                <div 
                  key={marco.id} 
                  onClick={() => setMarcoSeleccionado(marco.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${marcoSeleccionado === marco.id ? 'border-blue-600 bg-blue-50/30 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-gray-900">{marco.titulo}</span>
                      {marcoSeleccionado === marco.id && <Check size={16} className="text-blue-600" />}
                    </div>
                    <p className="text-[11px] text-gray-500">{marco.desc}</p>
                  </div>
                  <div className="mt-4 h-16 bg-gray-100 rounded border flex items-center justify-center text-[10px] text-gray-400 font-mono">
                    Vista previa marco
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN 3: Pistas de Música Institucional */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b pb-2">
              <Music size={16} className="text-emerald-600" /> Pistas Musicales para Videos y Reels
            </h3>
            <div className="space-y-2">
              {pistas.map(pista => (
                <div key={pista.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                  <div>
                    <span className="text-xs font-bold text-gray-800">{pista.nombre}</span>
                    <span className="text-[11px] text-gray-400 ml-2">({pista.duracion})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${pista.activa ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-600'}`}>
                      {pista.activa ? 'Disponible' : 'Oculta'}
                    </span>
                    <div onClick={() => togglePista(pista.id)} className={`w-8 h-4 rounded-full flex items-center px-0.5 transition-colors cursor-pointer ${pista.activa ? 'bg-emerald-600' : 'bg-gray-300'}`}>
                      <div className={`w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform ${pista.activa ? 'translate-x-4' : 'translate-x-0'}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN 4: Integración de Portales y APIs */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b pb-2">
              <Key size={16} className="text-indigo-600" /> Sincronización con Portales y Redes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(portalsConfig).map(([key, data]) => (
                <div key={key} className="p-4 bg-gray-50 rounded-xl border flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-800 block">{key}</span>
                    <span className="text-[11px] text-gray-500">{data.conectado ? `Conectado como ${data.usuario}` : 'Sin conectar'}</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => togglePortal(key)} 
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${data.conectado ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    {data.conectado ? 'Desvincular' : 'Conectar'}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}