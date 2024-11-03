import React, { useState } from 'react';
import '../stylesheets/configpage/ConfigPage.scss';

export const ConfigPage = () => {
  const [notificaciones, setNotificaciones] = useState(false);
  const [idioma, setIdioma] = useState('es');

  const handleToggleNotificaciones = () => {
    setNotificaciones(!notificaciones);
  };

  const handleIdiomaChange = (event) => {
    setIdioma(event.target.value);
  };

  return (
    <div className="config-container">
      <div className="config-options">
        <div className="notification-switch">
          <label className="label-bold">
            Activar Notificaciones
            <div className="switch">
              <input 
                type="checkbox" 
                id="notificaciones"
                checked={notificaciones} 
                onChange={handleToggleNotificaciones} 
              />
              <span className="slider"></span>
            </div>
          </label>
        </div>

        <div className="language-select">
          <label className="label-bold" htmlFor="idioma">Selecciona el idioma:</label>
          <select id="idioma" value={idioma} onChange={handleIdiomaChange}>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ConfigPage;
