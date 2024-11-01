import React from 'react';
import { FaCoins } from "react-icons/fa";

const TiendaItem = ({ nombre, precio, icono, onComprar }) => {
  return (
    <div className="tienda-item">
      <div className="icono-contenedor">
        <img src={icono} alt={nombre} className="icono" />
      </div>
      <h3>{nombre}</h3>
      <button className="boton-comprar" onClick={onComprar}>Comprar</button> {/* Usando la función pasada */}
    </div>
  );
};

export default TiendaItem;
