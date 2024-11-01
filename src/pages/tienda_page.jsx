import React from 'react';
import TiendaItem from '../components/tienda_item';
import sombreroIcon from '../assets/gorro-bruja.png';
import lentesIcon from '../assets/lentes.png';
import { useNavigate } from 'react-router-dom';

const TiendaPage = () => {
  const navigate = useNavigate();

  const items = [
    { nombre: "Sombrero Bruja", precio: 500, icono: sombreroIcon },
    { nombre: "Lentes Oscuros", precio: 1000, icono: lentesIcon },
    { nombre: "Escudo Viking", precio: 600, icono: sombreroIcon },
    { nombre: "Botas", precio: 400, icono: sombreroIcon },
    { nombre: "Mapa del Tesoro", precio: 300, icono: sombreroIcon },
    // Agrega más elementos según sea necesario
  ];

  const handleComprar = (nombre, precio) => {
    // Muestra un diálogo de confirmación
    navigate(`/confirmar-compra/${nombre}`);
  };

  return (
    <div className="tienda">
      <h1 className="tienda-titulo">Tienda de Artículos</h1>
      {items.map((item, index) => (
        <TiendaItem
          key={index}
          nombre={item.nombre}
          precio={item.precio}
          icono={item.icono}
          onComprar={() => handleComprar(item.nombre, item.precio)} // Pasa la función de compra
        />
      ))}
    </div>
  );
};

export default TiendaPage;
