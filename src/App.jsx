import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Propiedades from './Propiedades';
import Alquileres from './Alquileres';
import Ventas from './Ventas';
import Inquilinos from './Inquilinos';
import Propietarios from './Propietarios';
import Interesados from './Interesados';
import Incidencias from './Incidencias';
import Metricas from './Metricas';
import RedesSociales from './RedesSociales';
import Configuracion from './Configuracion';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="metricas" element={<Metricas />} />
          <Route path="propiedades" element={<Propiedades />} />
          <Route path="alquileres" element={<Alquileres />} />
          <Route path="ventas" element={<Ventas />} />
          <Route path="inquilinos" element={<Inquilinos />} />
          <Route path="propietarios" element={<Propietarios />} />
          <Route path="interesados" element={<Interesados />} />
          <Route path="incidencias" element={<Incidencias />} />
          <Route path="redes" element={<RedesSociales />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;