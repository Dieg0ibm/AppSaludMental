import React from 'react';
import { FaCoins, FaBed } from "react-icons/fa";
import { ImFrustrated, ImHappy } from "react-icons/im";
import { BiRun } from "react-icons/bi";

const EstadisticaItem = ({ nombre, icono, onVer, color }) => {
  const renderIcon = () => {
    switch (icono) {
      case 'estres':
        return <ImFrustrated className="icono" size={24}/>;
      case 'bed':
        return <FaBed className="icono" size={24}/>;
      case 'animo':
        return <ImHappy className="icono" size={24}/>;
      case 'gym':
        return <BiRun className="icono" size={24}/>;
      default:
        return <img src={icono} alt={nombre} className="icono" />;
    }
  };

  return (
    <button 
      className="estadistica-item" 
      onClick={onVer} 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        border: 'none', 
        background: 'none', // Sin fondo para el botón
        cursor: 'pointer' 
      }}
    >
      <h3 style={{ margin: 0, flex: 1, textAlign: 'left' }}>{nombre}</h3>
      <div className='icono-contenedor' style={{ 
          background: color, // Aplica el color de fondo al contenedor del icono
          borderRadius: '50%', // Opcional: hacer el contenedor del icono redondeado
          padding: '8px', // Espaciado interno del contenedor
        }}>
        {renderIcon()} {/* Solo se llama a renderIcon() una vez */}
      </div>
    </button>
  );
};

export default EstadisticaItem;
