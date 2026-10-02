import React, { useState } from 'react';
import { Sparkles, Share2, Link as LinkIcon, Building2, Store, Map as MapIcon, Plus, Edit3, Trash2, Globe, X, Upload, DownloadCloud } from 'lucide-react';

const initialMockData = {
  viviendas: [
    {
      id: 1, type: 'Venta', price: 'USD 120,000', address: 'Gorriti 4500, Palermo', 
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Patio', active: true }, { name: 'Cochera', active: true }, { name: 'Pileta', active: false }, { name: 'Balcón', active: true }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }, { name: 'ArgenProp', active: true, url: '#' }, { name: 'MercadoLibre', active: false }],
      description: 'Hermosa casa de 3 ambientes con patio y cochera. Excelente ubicación en zona residencial.'
    },
    {
      id: 2, type: 'Alquiler', price: '$ 450,000 ARS', address: 'Rivadavia 4820, Caballito', 
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: true, isReserved: false,
      features: [{ name: 'Patio', active: false }, { name: 'Cochera', active: false }, { name: 'Pileta', active: false }, { name: 'Balcón', active: true }],
      portals: [{ name: 'ZonaProp', active: false, url: '#' }, { name: 'ArgenProp', active: false, url: '#' }, { name: 'MercadoLibre', active: true, url: '#' }],
      description: 'Departamento luminoso en alquiler temporal totalmente equipado.'
    },
    {
      id: 3, type: 'Venta', price: 'USD 210,000', address: 'Libertador 3400, Olivos', 
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: true,
      features: [{ name: 'Patio', active: false }, { name: 'Cochera', active: true }, { name: 'Pileta', active: true }, { name: 'Balcón', active: true }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }, { name: 'ArgenProp', active: true, url: '#' }, { name: 'MercadoLibre', active: true, url: '#' }],
      description: 'Exclusivo departamento frente al río con amenities de categoría.'
    },
    {
      id: 4, type: 'Alquiler', price: '$ 600,000 ARS', address: 'Honduras 5100, Palermo', 
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Patio', active: false }, { name: 'Cochera', active: false }, { name: 'Pileta', active: false }, { name: 'Balcón', active: true }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }, { name: 'ArgenProp', active: false, url: '#' }, { name: 'MercadoLibre', active: false, url: '#' }],
      description: 'Loft moderno amoblado en pleno corazón de Palermo Soho.'
    },
    {
      id: 5, type: 'Venta', price: 'USD 95,000', address: 'Corrientes 4100, Almagro', 
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Patio', active: false }, { name: 'Cochera', active: false }, { name: 'Pileta', active: false }, { name: 'Balcón', active: false }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }, { name: 'ArgenProp', active: true, url: '#' }, { name: 'MercadoLibre', active: false, url: '#' }],
      description: '3 ambientes clásico, excelente estado general y luminosidad.'
    },
    {
      id: 6, type: 'Alquiler', price: '$ 380,000 ARS', address: 'Medrano 1200, Palermo', 
      image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Patio', active: true }, { name: 'Cochera', active: false }, { name: 'Pileta', active: false }, { name: 'Balcón', active: false }],
      portals: [{ name: 'ZonaProp', active: false, url: '#' }, { name: 'ArgenProp', active: false, url: '#' }, { name: 'MercadoLibre', active: true, url: '#' }],
      description: 'PH reciclado a nuevo sin expensas, apto profesional.'
    }
  ],
  comercios: [
    {
      id: 7, type: 'Alquiler', price: '$ 800,000 ARS', address: 'Corrientes 1200, Centro', 
      image: 'https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Vidriera', active: true }, { name: 'Depósito', active: true }, { name: 'Trifásica', active: false }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }, { name: 'ArgenProp', active: true, url: '#' }],
      description: 'Excelente local comercial sobre avenida principal de alto tránsito.'
    },
    {
      id: 8, type: 'Venta', price: 'USD 180,000', address: 'Florida 600, Microcentro', 
      image: 'https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: true, isReserved: false,
      features: [{ name: 'Vidriera', active: true }, { name: 'Depósito', active: false }, { name: 'Trifásica', active: false }],
      portals: [{ name: 'ZonaProp', active: false, url: '#' }, { name: 'ArgenProp', active: true, url: '#' }],
      description: 'Local a la calle en galería comercial tradicional.'
    },
    {
      id: 9, type: 'Alquiler', price: '$ 1,200,000 ARS', address: 'Santa Fe 2100, Recoleta', 
      image: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: true,
      features: [{ name: 'Vidriera', active: true }, { name: 'Depósito', active: true }, { name: 'Trifásica', active: true }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }, { name: 'MercadoLibre', active: true, url: '#' }],
      description: 'Local apto gastronomía en zona comercial exclusiva.'
    },
    {
      id: 10, type: 'Venta', price: 'USD 250,000', address: 'Cabildo 2300, Belgrano', 
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Vidriera', active: true }, { name: 'Depósito', active: true }, { name: 'Trifásica', active: false }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }],
      description: 'Local comercial con renta asegurada y excelente vidriera.'
    },
    {
      id: 11, type: 'Alquiler', price: '$ 500,000 ARS', address: 'Scalabrini Ortiz 900', 
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Vidriera', active: true }, { name: 'Depósito', active: false }, { name: 'Trifásica', active: false }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }],
      description: 'Oficina / Local comercial luminoso al frente.'
    },
    {
      id: 12, type: 'Venta', price: 'USD 310,000', address: 'Libertador 7000, Núñez', 
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Vidriera', active: true }, { name: 'Depósito', active: true }, { name: 'Trifásica', active: true }],
      portals: [{ name: 'ArgenProp', active: true, url: '#' }],
      description: 'Local premium corporativo con cocheras para clientes.'
    }
  ],
  lotes: [
    {
      id: 13, price: 'USD 45,000', address: 'Ruta 2 Km 45, El Pato', 
      image: 'https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Agua', active: true }, { name: 'Gas', active: false }, { name: 'Luz', active: true }, { name: 'Cerrado', active: false }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }],
      description: 'Lote de 300m2 con servicios básicos en zona de crecimiento.'
    },
    {
      id: 14, price: 'USD 65,000', address: 'San Sebastián, Escobar', 
      image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: true, isReserved: false,
      features: [{ name: 'Agua', active: true }, { name: 'Gas', active: true }, { name: 'Luz', active: true }, { name: 'Cerrado', active: true }],
      portals: [{ name: 'MercadoLibre', active: true, url: '#' }],
      description: 'Excelente terreno central en etapa avanzada de consolidación.'
    },
    {
      id: 15, price: 'USD 35,000', address: 'Pueblo Haras, Brandsen', 
      image: 'https://images.pexels.com/photos/158179/pexels-photo-158179.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: true,
      features: [{ name: 'Agua', active: false }, { name: 'Gas', active: false }, { name: 'Luz', active: true }, { name: 'Cerrado', active: false }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }],
      description: 'Lote rodeado de naturaleza y tranquilidad absoluta.'
    },
    {
      id: 16, price: 'USD 90,000', address: 'San Matías, Maschwitz', 
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Agua', active: true }, { name: 'Gas', active: true }, { name: 'Luz', active: true }, { name: 'Cerrado', active: true }],
      portals: [{ name: 'ArgenProp', active: true, url: '#' }],
      description: 'Gran lote perimetral arbolado con excelente orientación.'
    },
    {
      id: 17, price: 'USD 55,000', address: 'Puertos del Lago, Escobar', 
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Agua', active: true }, { name: 'Gas', active: true }, { name: 'Luz', active: true }, { name: 'Cerrado', active: true }],
      portals: [{ name: 'ZonaProp', active: true, url: '#' }],
      description: 'Lote interno con acceso cercano a la laguna central.'
    },
    {
      id: 18, price: 'USD 40,000', address: 'Camino de los Reseros, Pilar', 
      image: 'https://images.pexels.com/photos/1483894/pexels-photo-1483894.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false, isReserved: false,
      features: [{ name: 'Agua', active: true }, { name: 'Gas', active: false }, { name: 'Luz', active: true }, { name: 'Cerrado', active: false }],
      portals: [{ name: 'MercadoLibre', active: true, url: '#' }],
      description: 'Zona de quintas en pleno desarrollo y crecimiento.'
    }
  ]
};

const defaultFeaturesForCategory = (cat) => {
  if (cat === 'lotes') {
    return [
      { name: 'Agua', active: true },
      { name: 'Gas', active: false },
      { name: 'Luz', active: true },
      { name: 'Barrio Cerrado', active: true }
    ];
  }
  if (cat === 'comercios') {
    return [
      { name: 'Vidriera', active: true },
      { name: 'Depósito', active: true },
      { name: 'Trifásica', active: false },
      { name: 'Seguridad', active: true }
    ];
  }
  return [
    { name: 'Patio', active: true },
    { name: 'Cochera', active: true },
    { name: 'Pileta', active: false },
    { name: 'Balcón', active: true }
  ];
};

const defaultPortals = () => [
  { name: 'ZonaProp', active: true, url: '#' },
  { name: 'ArgenProp', active: true, url: '#' },
  { name: 'MercadoLibre', active: false, url: '#' }
];

export default function Propiedades() {
  const [activeTab, setActiveTab] = useState('viviendas');
  const [filter, setFilter] = useState('Todos'); 
  const [properties, setProperties] = useState(initialMockData);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importUrl, setImportUrl] = useState('');
  const [editingProp, setEditingProp] = useState(null);

  const [formData, setFormData] = useState({
    category: 'viviendas',
    type: 'Venta',
    price: '',
    address: '',
    image: '',
    description: '',
    features: defaultFeaturesForCategory('viviendas'),
    portals: defaultPortals()
  });

  const handleFormFeatureToggle = (index) => {
    const updated = [...formData.features];
    updated[index].active = !updated[index].active;
    setFormData({ ...formData, features: updated });
  };

  const handleFormPortalToggle = (index) => {
    const updated = [...formData.portals];
    updated[index].active = !updated[index].active;
    setFormData({ ...formData, portals: updated });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fakeUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: fakeUrl });
    }
  };

  const handleGenerateAI = () => {
    const text = `Excelente propiedad ubicada en ${formData.address || 'zona estratégica'}. Cuenta con terminaciones de calidad, espacios luminosos y gran confort. Oportunidad única en el mercado inmobiliario.`;
    setFormData({ ...formData, description: text });
  };

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de eliminar esta propiedad?')) {
      setProperties(prev => ({
        ...prev,
        [activeTab]: prev[activeTab].filter(p => p.id !== id)
      }));
    }
  };

  const handleOpenEdit = (prop) => {
    setEditingProp(prop);
    setFormData({
      category: activeTab,
      type: prop.type || 'Venta',
      price: prop.price,
      address: prop.address,
      image: prop.image,
      description: prop.description,
      features: prop.features ? JSON.parse(JSON.stringify(prop.features)) : defaultFeaturesForCategory(activeTab),
      portals: prop.portals ? JSON.parse(JSON.stringify(prop.portals)) : defaultPortals()
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingProp) {
      setProperties(prev => ({
        ...prev,
        [activeTab]: prev[activeTab].map(p => p.id === editingProp.id ? {
          ...p,
          price: formData.price,
          address: formData.address,
          image: formData.image || p.image,
          description: formData.description,
          features: formData.features,
          portals: formData.portals
        } : p)
      }));
      setEditingProp(null);
    } else {
      const newEntry = {
        id: Date.now(),
        type: formData.type,
        price: formData.price,
        address: formData.address,
        image: formData.image || 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
        isSoldOrRented: false,
        isReserved: false,
        features: formData.features,
        portals: formData.portals,
        description: formData.description || 'Nueva propiedad registrada en el sistema.'
      };
      setProperties(prev => ({
        ...prev,
        [formData.category]: [newEntry, ...prev[formData.category]]
      }));
      setIsAddModalOpen(false);
    }
  };

  const handleImportSubmit = (e) => {
    e.preventDefault();
    if (!importUrl) return;

    const imported = {
      id: Date.now(),
      type: 'Venta',
      price: 'USD 135,000',
      address: 'Av. Libertador 4500 (Importado)',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
      isSoldOrRented: false,
      isReserved: false,
      features: defaultFeaturesForCategory('viviendas'),
      portals: [{ name: 'ZonaProp', active: true, url: importUrl }],
      description: 'Propiedad importada automáticamente desde portal externo mediante scraping de IA.'
    };

    setProperties(prev => ({
      ...prev,
      viviendas: [imported, ...prev.viviendas]
    }));

    setIsImportModalOpen(false);
    setImportUrl('');
    setActiveTab('viviendas');
  };

  const currentData = properties[activeTab].filter(item => {
    if (activeTab === 'lotes' || filter === 'Todos') return true;
    return item.type === filter;
  });

  return (
    <div className="p-8 h-full overflow-auto bg-gray-50 relative pb-28">
      
      {/* Solapas y Filtros */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm w-fit">
          <button onClick={() => { setActiveTab('viviendas'); setFilter('Todos'); }} className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'viviendas' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}>
            <Building2 size={18} /> Viviendas
          </button>
          <button onClick={() => { setActiveTab('comercios'); setFilter('Todos'); }} className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'comercios' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}>
            <Store size={18} /> Comercios
          </button>
          <button onClick={() => { setActiveTab('lotes'); setFilter('Todos'); }} className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'lotes' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}>
            <MapIcon size={18} /> Lotes
          </button>
        </div>

        {activeTab !== 'lotes' && (
          <div className="flex bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            {['Todos', 'Venta', 'Alquiler'].map(opcion => (
              <button key={opcion} onClick={() => setFilter(opcion)} className={`px-4 py-2 text-sm font-medium ${filter === opcion ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                {opcion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* GRILLA DE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentData.map((prop) => {
          const isInactive = prop.isSoldOrRented;
          const isReserved = prop.isReserved;

          return (
            <div key={prop.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              
              <div className="relative h-56 bg-gray-200">
                <img src={prop.image} alt="Propiedad" className={`w-full h-full object-cover transition-all ${isInactive ? 'grayscale brightness-75' : ''}`} />

                {isInactive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="bg-red-600 text-white font-black text-sm px-3 py-1 uppercase tracking-wider shadow-lg transform -rotate-6">
                      {activeTab === 'lotes' ? 'Vendido' : (prop.type === 'Venta' ? 'Vendido' : 'Alquilado')}
                    </span>
                  </div>
                )}
                {isReserved && !isInactive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="bg-amber-500 text-white font-black text-sm px-3 py-1 uppercase tracking-wider shadow-lg transform -rotate-6">Reservado</span>
                  </div>
                )}

                {activeTab !== 'lotes' && !isInactive && !isReserved && (
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${prop.type === 'Venta' ? 'bg-green-600' : 'bg-blue-600'}`}>
                    {prop.type}
                  </div>
                )}

                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-extrabold text-lg shadow-md">
                  {prop.price}
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <div className="relative group">
                    <button className="bg-white/90 p-2 rounded-full shadow-md text-gray-700 hover:bg-white hover:text-blue-600 transition-colors" title="Compartir">
                      <Share2 size={15} />
                    </button>
                    <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                      <div className="p-2 text-[10px] font-semibold text-gray-400 border-b border-gray-100">Ficha Web Propia</div>
                      <div className="p-1">
                        <button onClick={() => alert('Link de ficha web copiado al portapapeles!')} className="w-full text-left flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-blue-700 hover:bg-blue-50 rounded font-semibold">
                          <Globe size={13} /> Copiar link WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => handleOpenEdit(prop)} className="bg-white/90 p-2 rounded-full shadow-md text-gray-700 hover:bg-white hover:text-blue-600 transition-colors" title="Editar">
                    <Edit3 size={15} />
                  </button>

                  <button onClick={() => handleDelete(prop.id)} className="bg-white/90 p-2 rounded-full shadow-md text-red-600 hover:bg-red-50 transition-colors" title="Borrar">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-500 mb-2">{prop.address}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {prop.portals && prop.portals.filter(p => p.active).map(portal => (
                      <span key={portal.name} className="inline-flex items-center gap-1 text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md font-bold">
                        <LinkIcon size={10} /> {portal.name}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-700 line-clamp-3 mb-4 leading-relaxed">
                    {prop.description || 'Sin descripción cargada.'}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* BOTONES FLOTANTES (Agregar y Importar por URL) */}
      <div className="fixed bottom-8 right-8 flex flex-col sm:flex-row gap-3 z-30">
        <button 
          onClick={() => setIsImportModalOpen(true)} 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 py-3.5 rounded-full shadow-2xl flex items-center gap-2 text-sm transition-all transform hover:scale-105"
        >
          <DownloadCloud size={18} /> Importar por URL
        </button>
        <button 
          onClick={() => {
            setFormData({
              category: activeTab,
              type: 'Venta',
              price: '',
              address: '',
              image: '',
              description: '',
              features: defaultFeaturesForCategory(activeTab),
              portals: defaultPortals()
            });
            setIsAddModalOpen(true);
          }} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-2 text-sm transition-all transform hover:scale-105"
        >
          <Plus size={20} /> Agregar propiedad
        </button>
      </div>

      {/* MODAL: NUEVA / EDITAR PROPIEDAD */}
      {(isAddModalOpen || editingProp) && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative my-8">
            <button onClick={() => { setIsAddModalOpen(false); setEditingProp(null); }} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
              <X size={20} />
            </button>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {editingProp ? 'Editar Propiedad' : 'Registrar Nueva Propiedad'}
            </h3>
            
            <form onSubmit={handleSave} className="space-y-4">
              {!editingProp && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Solapa / Categoría</label>
                  <select 
                    value={formData.category} 
                    onChange={e => {
                      const cat = e.target.value;
                      setFormData({...formData, category: cat, features: defaultFeaturesForCategory(cat)});
                    }} 
                    className="w-full p-2.5 border rounded-lg text-sm bg-white"
                  >
                    <option value="viviendas">Viviendas</option>
                    <option value="comercios">Comercios</option>
                    <option value="lotes">Lotes</option>
                  </select>
                </div>
              )}

              {formData.category !== 'lotes' && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Tipo de Operación</label>
                  <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full p-2.5 border rounded-lg text-sm bg-white">
                    <option value="Venta">Venta</option>
                    <option value="Alquiler">Alquiler</option>
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Precio</label>
                  <input required type="text" placeholder="Ej: USD 120,000" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full p-2.5 border rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Dirección / Ubicación</label>
                  <input required type="text" placeholder="Ej: Gorriti 4500, Palermo" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full p-2.5 border rounded-lg text-sm" />
                </div>
              </div>

              {/* CARGA DE IMAGEN LOCAL */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Imagen Principal (Cargar archivo)</label>
                <div className="flex items-center gap-3">
                  <label className="flex-1 flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 bg-gray-50 text-xs text-gray-600 font-medium">
                    <Upload size={16} /> Seleccionar imagen de la computadora
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  {formData.image && <img src={formData.image} alt="Preview" className="w-12 h-12 object-cover rounded-lg border shadow-sm" />}
                </div>
              </div>

              {/* SWITCHES DE CARACTERÍSTICAS */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Características de la Propiedad</label>
                <div className="grid grid-cols-2 gap-2 p-3 bg-gray-50 rounded-lg border">
                  {formData.features.map((feat, idx) => (
                    <div key={feat.name} onClick={() => handleFormFeatureToggle(idx)} className="flex items-center justify-between p-1.5 bg-white rounded border cursor-pointer hover:border-blue-300">
                      <span className="text-xs text-gray-700 font-medium">{feat.name}</span>
                      <div className={`w-7 h-3.5 rounded-full flex items-center px-0.5 transition-colors ${feat.active ? 'bg-blue-600' : 'bg-gray-300'}`}>
                        <div className={`w-2.5 h-2.5 bg-white rounded-full shadow-sm transform transition-transform ${feat.active ? 'translate-x-3.5' : 'translate-x-0'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SWITCHES DE PORTALES DE PUBLICACIÓN */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Publicar en Portales</label>
                <div className="grid grid-cols-2 gap-2 p-3 bg-gray-50 rounded-lg border">
                  {formData.portals.map((portal, idx) => (
                    <div key={portal.name} onClick={() => handleFormPortalToggle(idx)} className="flex items-center justify-between p-1.5 bg-white rounded border cursor-pointer hover:border-blue-300">
                      <span className="text-xs text-gray-700 font-medium">{portal.name}</span>
                      <div className={`w-7 h-3.5 rounded-full flex items-center px-0.5 transition-colors ${portal.active ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <div className={`w-2.5 h-2.5 bg-white rounded-full shadow-sm transform transition-transform ${portal.active ? 'translate-x-3.5' : 'translate-x-0'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESCRIPCIÓN Y BOTÓN IA */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold text-gray-700">Descripción Comercial</label>
                  <button type="button" onClick={handleGenerateAI} className="inline-flex items-center gap-1 text-xs text-purple-700 font-bold hover:underline">
                    <Sparkles size={13} /> Generar con IA
                  </button>
                </div>
                <textarea rows="3" placeholder="Redactá o generá la descripción..." value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-2.5 border rounded-lg text-sm resize-none" />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <button type="button" onClick={() => { setIsAddModalOpen(false); setEditingProp(null); }} className="px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-100 font-medium">Cancelar</button>
                <button type="submit" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-sm">Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: IMPORTAR DESDE URL */}
      {isImportModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button onClick={() => setIsImportModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"><X size={20} /></button>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Importar Propiedad por URL</h3>
            <p className="text-xs text-gray-500 mb-4">Pegá el link de ZonaProp, ArgenProp o Mercado Libre para extraer automáticamente los datos y crear la tarjeta con IA.</p>
            <form onSubmit={handleImportSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Enlace de Publicación</label>
                <input required type="url" placeholder="https://www.zonaprop.com.ar/propiedades/..." value={importUrl} onChange={e => setImportUrl(e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setIsImportModalOpen(false)} className="px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-100">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-bold shadow-sm">Extraer con IA</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}