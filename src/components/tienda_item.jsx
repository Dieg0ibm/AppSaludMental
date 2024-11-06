import React from 'react';
import { FaCoins } from "react-icons/fa";

const TiendaItem = ({ nombre, precio, icono, onComprar }) => {
  return (
    <div className="tienda-item">
      <div className="icono-contenedor">
        <img src={icono} alt={nombre} className="icono" />
      </div>
      <h3>{nombre}</h3>
      <div className="precio">
        <FaCoins size={24} />
        <span>{precio}</span>
      </div>
      <button className="boton-comprar" onClick={onComprar}>Comprar</button>
    </div>
  );
};

export default TiendaItem;
