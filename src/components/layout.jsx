import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home_page';
import TiendaPage from '../pages/tienda_page';
import ConfigPage from '../pages/config_page';
import FormPage from '../pages/form_page';
import ConfirmarCompra from '../pages/confirmar_compra';
import NavBar from '../components/nav_bar';
import SuenoPage from '../pages/sueno_page';
import AnimoPage from '../pages/animo_page';
import EjercicioPage from '../pages/ejercicio_page';
import EstresPage from '../pages/estres_page';
import RecursosPage from '../pages/recursos_page';
import ConfirmarForm from '../pages/confirmar_form';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tienda' element={<TiendaPage />} />
            <Route path='/configuraciones' element={<ConfigPage />} />
            <Route path='/form' element={<FormPage />} />
            <Route path='/confirmar-compra/:nombre' element={<ConfirmarCompra />} />
            <Route path='/estadistica/sueno' element={<SuenoPage />} />
            <Route path='/estadistica/animo' element={<AnimoPage />} />
            <Route path='/estadistica/ejercicio' element={<EjercicioPage />} />
            <Route path='/estadistica/estres' element={<EstresPage />} />
            <Route path='/recursos' element={<RecursosPage />} />
            <Route path='/form/confirmar' element={<ConfirmarForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;

