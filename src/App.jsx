import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Layout';
import Dashboard from './Dashboard';
import AppInquilino from './AppInquilino';
import AppAgente from './AppAgente';
import AppPropietario from './AppPropietario'; // <-- 1. IMPORTADO AQUÍ

// 1. PANTALLAS REALES (Archivos que ya existen en tu carpeta src)
import Propiedades from './Propiedades';
import Interesados from './Interesados';
import Perfil from './Perfil';
import Metricas from './Metricas';
import Alquileres from './Alquileres';
import Ventas from './Ventas';
import Inquilinos from './Inquilinos';
import Propietarios from './Propietarios';
import Incidencias from './Incidencias';
import Redes from './RedesSociales';
import Configuracion from './Configuracion';

const PantallaEnConstruccion = ({ nombre }) => (
  <div className="flex flex-col items-center justify-center h-full p-8 text-zinc-500 bg-white m-6 rounded-2xl border border-zinc-200 shadow-sm">
    <h2 className="text-2xl font-bold text-zinc-900 mb-2">{nombre}</h2>
    <p>Esta pantalla del sistema aún no tiene su archivo creado.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter basename="/zxcvbnm">
      <Routes>
        {/* APPS MÓVILES INDEPENDIENTES */}
        <Route path="/inquilino" element={<AppInquilino />} />
        <Route path="/agente" element={<AppAgente />} />
        <Route path="/propietario" element={<AppPropietario />} /> {/* <-- 2. RUTA AGREGADA AQUÍ */}

        {/* DASHBOARD WEB */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          
          {/* Vistas conectadas a tus archivos reales */}
          <Route path="propiedades" element={<Propiedades />} />
          <Route path="interesados" element={<Interesados />} />
          <Route path="perfil" element={<Perfil />} />      
          <Route path="metricas" element={<Metricas nombre="Métricas" />} />
          <Route path="alquileres" element={<Alquileres nombre="Alquileres" />} />
          <Route path="ventas" element={<Ventas nombre="Ventas" />} />
          <Route path="inquilinos" element={<Inquilinos nombre="Inquilinos" />} />
          <Route path="propietarios" element={<Propietarios nombre="Propietarios" />} />
          <Route path="incidencias" element={<Incidencias nombre="Incidencias" />} />
          <Route path="redes" element={<Redes nombre="Redes" />} />
          <Route path="configuracion" element={<Configuracion nombre="Configuración" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}