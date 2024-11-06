import React from 'react';
import TiendaItem from '../components/tienda_item';
import sombreroIcon from '../assets/gorro-bruja.png';
import moñoIcon from '../assets/corbata.png';
import lentesIcon from '../assets/lentes.png';
import cadenaIcon from '../assets/cadena.png';
import { useNavigate } from 'react-router-dom';
import { FaCoins } from "react-icons/fa";


const TiendaPage = () => {
  const navigate = useNavigate();

  const items = [
    { nombre: "Sombrero Bruja", precio: '600', icono: sombreroIcon },
    { nombre: "Moño Rojo", precio: '800', icono: moñoIcon },
    { nombre: "Lentes Oscuros", precio: '1.000', icono: lentesIcon },
    { nombre: "Cadena de Oro", precio: '10.000', icono: cadenaIcon },
  ];

  const handleComprar = (nombre) => {
    navigate(`/confirmar-compra/${nombre}`);
  };

  return (
    <div className="tienda">
      <h1 className="tienda-titulo"> <FaCoins size={24}/> 6.500 </h1>
      {items.map((item, index) => (
        <TiendaItem
          key={index}
          nombre={item.nombre}
          precio={item.precio}
          icono={item.icono}
          onComprar={() => handleComprar(item.nombre, item.precio)}
        />
      ))}
    </div>
  );
};

export default TiendaPage;
