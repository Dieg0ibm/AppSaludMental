import React from 'react';
import { FaCoins, FaBed} from "react-icons/fa";
import { ImFrustrated, ImHappy } from "react-icons/im";
import { BiRun } from "react-icons/bi";

const EstadisticaItem = ({ nombre, icono, onVer }) => {
  const renderIcon = () => {
    switch (icono) {
      case 'estres':
        return <ImFrustrated className="icono"/>;
      case 'bed':
        return <FaBed className="icono" />;
    case 'animo':
        return <ImHappy className="icono"/>;
    case 'gym':
        return <BiRun className="icono"/>;
      default:
        return <img src={icono} alt={nombre} className="icono" />;
    }
  };

  return (
    <button className="estadistica-item" onClick={onVer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', background: 'none', cursor: 'pointer' }}>
      {renderIcon()} {/* Renderiza el ícono según el valor de la prop */}
      <h3>{nombre}</h3> {/* Nombre dentro del botón */}
    </button>
  );
};

export default EstadisticaItem;
