import React from 'react';
import EstadisticaItem from '../components/estadistica_item';
import sombreroIcon from '../assets/gorro-bruja.png';
import lentesIcon from '../assets/lentes.png';
import { useNavigate } from 'react-router-dom';
import { FaCoins } from "react-icons/fa";

const HomePage = () => {
  // Navegador de react-router
  const navigate = useNavigate();

  // Array de elementos estadísticos
  const items = [
    { nombre: "Sueño", icono: 'bed' },
    { nombre: "", icono: 'animo' },
    { nombre: "", icono: 'estres' }, 
    { nombre: "", icono: 'gym' }, 
  ];

  // Manejo del clic en los elementos
  const handleVer = (nombre) => {
    console.log(`Ver detalles de ${nombre}`);
    // Aquí podrías navegar a otra página si lo deseas
    // navigate(`/detalle/${nombre.toLowerCase()}`);
  };

  return (
    <div className="homepage">
      <h1 className="homepage-titulo"> Bienvenido </h1>
      {items.map((item, index) => (
        <EstadisticaItem
          key={index}
          nombre={item.nombre}
          icono={item.icono} // Pasando el icono como string
          onVer={() => handleVer(item.nombre)} // Llamando a la función handleVer con el nombre
        />
      ))}
    </div>
  );
};

export default HomePage;
