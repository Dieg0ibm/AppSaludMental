import React from 'react';
import EstadisticaItem from '../components/estadistica_item';
import { useNavigate } from 'react-router-dom';
import mascota from '../assets/mascota.png'; // Asegúrate de que la ruta sea correcta

const HomePage = () => {
  // Navegador de react-router
  const navigate = useNavigate();

  // Array de elementos estadísticos con color de fondo para los iconos
  const items = [
    { nombre: "Sueño", icono: 'bed', color: '#B2E0F4' }, // Color claro para Sueño
    { nombre: "Ánimo", icono: 'animo', color: '#F9E79F' }, // Color amarillo claro para Ánimo
    { nombre: "Estrés", icono: 'estres', color: '#F5B7B1' }, // Color rosa claro para Estrés
    { nombre: "Ejercicio", icono: 'gym', color: '#A9DFBF' }, // Color verde claro para Ejercicio
  ];

  // Manejo del clic en los elementos
  const handleVer = (nombre) => {
    navigate(`/estadistica/${nombre.toLowerCase()}`);
  };


  return (
    <div className="homepage">
      <h1 className="homepage-titulo">¡Hola, humano! 🐾 Soy tu mascota y estoy aquí para ayudarte. Quiero saber cómo te sientes hoy. ¡Presióname y cuéntame!</h1>
      <button className='boton-mascota' onClick={() => navigate('/form')}>
        <img src={mascota} alt="Mascota" className='mascota' />
      </button>
      <button className='apoyo-boton' onClick={() => navigate(`/recursos`)}>
        <h2 className="Recursos-Apoyo"> Recursos de apoyo </h2>
      </button>
      {items.map((item, index) => (
        <EstadisticaItem
          key={index}
          nombre={item.nombre}
          icono={item.icono} // Pasando el icono como string
          color={item.color} // Pasando el color como prop
          onVer={() => handleVer(item.nombre)} // Llamando a la función handleVer con el nombre
        />
      ))}
    </div>
  );
};

export default HomePage;
