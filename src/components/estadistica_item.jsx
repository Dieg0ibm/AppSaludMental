import React from 'react';
import { FaBed } from "react-icons/fa";
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
    <button className="estadistica-item" onClick={onVer}>
      <h3>{nombre}</h3>
      <div className='icono-contenedor' style={{ 
          background: color
        }}>
        {renderIcon()}
      </div>
    </button>
  );
};

export default EstadisticaItem;
