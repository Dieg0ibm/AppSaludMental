import React from 'react';
import TiendaItem from './tienda-item';
import sombreroIcon from '../assets/gorro-bruja.png'; // Asegúrate de reemplazarlo con la ruta correcta

const Tienda = () => {
  const items = [
    { nombre: "Sombrero Capitán", precio: 500, icono: sombreroIcon },
    { nombre: "Espada Pirata", precio: 750, icono: sombreroIcon },
    { nombre: "Escudo Viking", precio: 600, icono: sombreroIcon },
    { nombre: "Botas", precio: 400, icono: sombreroIcon },
    { nombre: "Mapa del Tesoro", precio: 300, icono: sombreroIcon },
    // Agrega más elementos según sea necesario
  ];

  return (
    <div className="tienda">
      {items.map((item, index) => (
        <TiendaItem
          key={index}
          nombre={item.nombre}
          precio={item.precio}
          icono={item.icono}
        />
      ))}
    </div>
  );
};

export default Tienda;
