import React from 'react';
import { FaCoins } from "react-icons/fa"; // Asegúrate de importar el icono de monedas

const EstadisticaItem = ({ nombre, icono, onVer }) => {
  const renderIcon = () => {
    if (icono === 'coins') {
      return <FaCoins className="icono" />;
    }
    return <img src={icono} alt={nombre} className="icono" />;
  };

  return (
    <button className="estadistica-item" onClick={onVer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', background: 'none', cursor: 'pointer' }}>
      {/* Todo el contenido está dentro del botón */}
      {renderIcon()} {/* Renderiza el ícono según el valor de la prop */}
      <h3>{nombre}</h3> {/* Nombre dentro del botón */}
    </button>
  );
};

export default EstadisticaItem;
