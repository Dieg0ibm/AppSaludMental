import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home_page';
import LightbulbPage from '../pages/lightbulb_page';
import TiendaPage from '../pages/tienda_page';
import ConfigPage from '../pages/config_page';
import FormPage from '../pages/form_page';
import ConfirmarCompra from '../pages/confirmar_compra'; // Importa el nuevo componente
import NavBar from '../components/nav_bar';
import SuenoPage from '../pages/sueno_page';
import AnimoPage from '../pages/animo_page';
import EjercicioPage from '../pages/ejercicio_page';
import EstresPage from '../pages/estres_page';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/tienda' element={<TiendaPage />} />
            <Route path='/configuraciones' element={<ConfigPage />} />
            <Route path='/form' element={<FormPage />} />
            <Route path='/confirmar-compra/:nombre' element={<ConfirmarCompra />} /> {/* Ruta de confirmación */}
            <Route path='/estadistica/sueño' element={<SuenoPage />} />
            <Route path='/estadistica/ánimo' element={<AnimoPage />} />
            <Route path='/estadistica/ejercicio' element={<EjercicioPage />} />
            <Route path='/estadistica/estrés' element={<EstresPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;

