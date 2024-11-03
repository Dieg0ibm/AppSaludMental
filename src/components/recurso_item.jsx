import React from 'react';

const RecursoItem = ({ nombre, icono, onPulsar }) => {
  return (
    <div className="recurso-item" onClick={onPulsar}>
      <div className="icono-contenedor">
        {icono}
      </div>
      <h3>{nombre}</h3>
    </div>
  );
};

export default RecursoItem;
