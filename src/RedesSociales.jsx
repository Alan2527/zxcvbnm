import React, { useState } from 'react';
import { Share2, Video, Image as ImageIcon, Mic, Music, Play, Square, Sparkles, Send, CheckCircle2, Trash2, Layers, ExternalLink } from 'lucide-react';

export default function RedesSociales() {
  const [activeSubTab, setActiveSubTab] = useState('generador'); // 'generador' o 'historial'

  // Estados del generador
  const [selectedProp, setSelectedProp] = useState('Gorriti 4500, Palermo (USD 120,000)');
  const [contentType, setContentType] = useState('video'); // 'imagen' o 'video'
  
  const [showAgentName, setShowAgentName] = useState(true);
  const [showPhone, setShowPhone] = useState(true);
  const [showWatermark, setShowWatermark] = useState(true);
  const [badgeText, setBadgeText] = useState('¡Exclusivo!');

  const [isRecording, setIsRecording] = useState(false);
  const [hasAudioRecorded, setHasAudioRecorded] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState('Corporativo Moderno');

  const [networks, setNetworks] = useState([
    { name: 'Instagram', active: true },
    { name: 'Facebook', active: true },
    { name: 'TikTok', active: false },
    { name: 'LinkedIn', active: false }
  ]);

  // Historial de publicaciones ya hechas
  const [historialPublicaciones, setHistorialPublicaciones] = useState([
    {
      id: 1,
      titulo: 'Gorriti 4500, Palermo (USD 120,000)',
      tipo: 'Video / Reel',
      fecha: '02 Oct 2026 - 14:30 hs',
      redes: ['Instagram', 'Facebook'],
      imagen: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      estado: 'Publicado con éxito'
    },
    {
      id: 2,
      titulo: 'Rivadavia 4820, Caballito ($ 450,000 ARS)',
      tipo: 'Flyer / Feed',
      fecha: '29 Sep 2026 - 10:15 hs',
      redes: ['Instagram'],
      imagen: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      estado: 'Publicado con éxito'
    }
  ]);

  const toggleNetwork = (index) => {
    const updated = [...networks];
    updated[index].active = !updated[index].active;
    setNetworks(updated);
  };

  const handleRecordToggle = () => {
    if (!isRecording) {
      setIsRecording(true);
      setHasAudioRecorded(false);
    } else {
      setIsRecording(false);
      setHasAudioRecorded(true);
    }
  };

  const handlePublish = () => {
    const nuevaPub = {
      id: Date.now(),
      titulo: selectedProp,
      tipo: contentType === 'video' ? 'Video / Reel' : 'Flyer / Feed',
      fecha: 'Hoy, 15:09 hs',
      redes: networks.filter(n => n.active).map(n => n.name),
      imagen: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      estado: 'Publicado con éxito'
    };

    setHistorialPublicaciones([nuevaPub, ...historialPublicaciones]);
    alert('¡Contenido generado y publicado exitosamente en las redes seleccionadas!');
    setActiveSubTab('historial');
  };

  const handleDeletePub = (id) => {
    if (confirm('¿Eliminar registro de esta publicación?')) {
      setHistorialPublicaciones(historialPublicaciones.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-8 h-full overflow-auto bg-gray-50 pb-24">
      
      {/* Solapas internas (Generador vs Historial de Publicaciones) */}
      <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm w-fit mb-8">
        <button 
          onClick={() => setActiveSubTab('generador')} 
          className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeSubTab === 'generador' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <Sparkles size={16} /> Generador de Contenido
        </button>
        <button 
          onClick={() => setActiveSubTab('historial')} 
          className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeSubTab === 'historial' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <Layers size={16} /> Publicaciones Realizadas ({historialPublicaciones.length})
        </button>
      </div>

      {activeSubTab === 'generador' ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMNA IZQUIERDA: Controles */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-3">1. Seleccionar Propiedad o Inmueble Base</h2>
              <select value={selectedProp} onChange={e => setSelectedProp(e.target.value)} className="w-full p-2.5 border rounded-lg text-sm bg-white">
                <option value="Gorriti 4500, Palermo (USD 120,000)">Gorriti 4500, Palermo (USD 120,000)</option>
                <option value="Rivadavia 4820, Caballito ($ 450,000 ARS)">Rivadavia 4820, Caballito ($ 450,000 ARS)</option>
                <option value="Libertador 3400, Olivos (USD 210,000)">Libertador 3400, Olivos (USD 210,000)</option>
                <option value="Corrientes 1200, Centro ($ 800,000 ARS)">Corrientes 1200, Centro ($ 800,000 ARS)</option>
              </select>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-3">2. Elegir Formato de Contenido</h2>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setContentType('imagen')} className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${contentType === 'imagen' ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-bold' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                  <ImageIcon size={24} /> Imagen / Flyer para Feed
                </button>
                <button onClick={() => setContentType('video')} className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${contentType === 'video' ? 'border-purple-600 bg-purple-50/50 text-purple-700 font-bold' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                  <Video size={24} /> Video / Reel Dinámico
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-3">3. Personalizar Elementos Visuales</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <label className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border cursor-pointer">
                  <span className="text-xs font-medium text-gray-700">Mostrar Nombre del Agente</span>
                  <input type="checkbox" checked={showAgentName} onChange={() => setShowAgentName(!showAgentName)} className="rounded text-blue-600 h-4 w-4" />
                </label>
                <label className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border cursor-pointer">
                  <span className="text-xs font-medium text-gray-700">Mostrar Teléfono / WhatsApp</span>
                  <input type="checkbox" checked={showPhone} onChange={() => setShowPhone(!showPhone)} className="rounded text-blue-600 h-4 w-4" />
                </label>
                <label className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border cursor-pointer">
                  <span className="text-xs font-medium text-gray-700">Marca de Agua de la Agencia</span>
                  <input type="checkbox" checked={showWatermark} onChange={() => setShowWatermark(!showWatermark)} className="rounded text-blue-600 h-4 w-4" />
                </label>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Texto de Etiqueta / Tag Destacado</label>
                <input type="text" value={badgeText} onChange={e => setBadgeText(e.target.value)} className="w-full p-2 border rounded-lg text-sm" placeholder="Ej: ¡Oportunidad!, Nuevo ingreso" />
              </div>
            </div>

            {contentType === 'video' && (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                <h2 className="text-base font-bold text-gray-900">4. Audio, Voz del Agente y Música</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border flex flex-col items-center justify-center text-center">
                    <p className="text-xs font-bold text-gray-700 mb-2">Locución del Agente</p>
                    <button onClick={handleRecordToggle} className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all ${isRecording ? 'bg-red-600 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'}`}>
                      {isRecording ? <Square size={20} /> : <Mic size={20} />}
                    </button>
                    <span className="text-[11px] text-gray-500 mt-2">
                      {isRecording ? 'Grabando voz... (Clic para detener)' : hasAudioRecorded ? '✓ Audio grabado con éxito' : 'Clic para grabar audio'}
                    </span>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl border flex flex-col justify-center">
                    <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1"><Music size={14} /> Música de Fondo</label>
                    <select value={selectedMusic} onChange={e => setSelectedMusic(e.target.value)} className="w-full p-2 border rounded-lg text-sm bg-white">
                      <option value="Corporativo Moderno">Corporativo Moderno (Upbeat)</option>
                      <option value="Lounge Elegante">Lounge Elegante (Inmobiliario)</option>
                      <option value="Acústico Suave">Acústico Suave</option>
                      <option value="Sin Música">Sin música de fondo</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-3">5. Redes de Destino Automáticas</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {networks.map((net, idx) => (
                  <div key={net.name} onClick={() => toggleNetwork(idx)} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border cursor-pointer hover:border-blue-300">
                    <span className="text-xs font-bold text-gray-700">{net.name}</span>
                    <div className={`w-7 h-3.5 rounded-full flex items-center px-0.5 transition-colors ${net.active ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                      <div className={`w-2.5 h-2.5 bg-white rounded-full shadow-sm transform transition-transform ${net.active ? 'translate-x-3.5' : 'translate-x-0'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: Vista Previa */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-6">
              <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-purple-600" /> Vista Previa del Posteo
              </h2>

              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] flex flex-col justify-between p-4 text-white">
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

                <div className="relative z-10 flex justify-between items-center">
                  {showWatermark && <span className="bg-white/90 text-blue-900 font-extrabold text-[10px] px-2.5 py-1 rounded-md shadow">AGENCIA PROPTECH</span>}
                  {badgeText && <span className="bg-red-600 text-white font-bold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shadow">{badgeText}</span>}
                </div>

                {contentType === 'video' && (
                  <div className="relative z-10 my-auto text-center">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <Play size={24} className="text-white fill-white ml-1" />
                    </div>
                    <span className="text-[10px] bg-black/50 px-2 py-0.5 rounded font-mono">
                      {hasAudioRecorded ? '🎵 Con voz y música' : '🎵 Solo música institucional'}
                    </span>
                  </div>
                )}

                <div className="relative z-10 bg-black/60 backdrop-blur-sm p-3 rounded-xl border border-white/10 space-y-1">
                  <p className="text-xs font-extrabold truncate">{selectedProp}</p>
                  {showAgentName && <p className="text-[11px] text-gray-300">Asesor: <strong>Alan Herrera</strong></p>}
                  {showPhone && <p className="text-[11px] text-emerald-400 font-semibold">📞 WhatsApp: +54 11 4455-6677</p>}
                </div>
              </div>

              <button onClick={handlePublish} className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition-all transform hover:scale-[1.02]">
                <Send size={16} /> Generar y Postear Automáticamente
              </button>
            </div>
          </div>

        </div>
      ) : (
        /* SOLAPA: HISTORIAL DE PUBLICACIONES REALIZADAS */
        <div className="max-w-5xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Historial de Publicaciones en Redes</h2>
              <p className="text-xs text-gray-500 mt-0.5">Control de contenido multimedia generado y distribuido automáticamente.</p>
            </div>
            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg">
              Total: {historialPublicaciones.length} posteos
            </span>
          </div>

          <div className="divide-y divide-gray-200">
            {historialPublicaciones.map((pub) => (
              <div key={pub.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <img src={pub.imagen} alt="Miniatura" className="w-16 h-16 rounded-lg object-cover border shadow-sm shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{pub.titulo}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-semibold">{pub.tipo}</span>
                      <span className="text-xs text-gray-400">• {pub.fecha}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      {pub.redes.map(r => (
                        <span key={r} className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-100">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                    <CheckCircle2 size={14} /> {pub.estado}
                  </span>
                  <button onClick={() => handleDeletePub(pub.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar registro">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            {historialPublicaciones.length === 0 && (
              <div className="p-12 text-center text-gray-400 text-sm">
                No hay publicaciones realizadas todavía. Generá tu primer contenido desde la solapa de creación.
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}