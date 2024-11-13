import React from 'react';
import EstadisticaItem from '../components/estadistica_item';
import { useNavigate } from 'react-router-dom';
import mascota from '../assets/mascota.png';

const HomePage = () => {
  const navigate = useNavigate();

  const items = [
    { nombre: "Sueño", icono: 'bed', color: '#B2E0F4' }, // Color azul para Sueño
    { nombre: "Ánimo", icono: 'animo', color: '#F9E79F' }, // Color amarillo para Ánimo
    { nombre: "Estrés", icono: 'estres', color: '#F5B7B1' }, // Color rosa para Estrés
    { nombre: "Actividad Física", icono: 'gym', color: '#A9DFBF' }, // Color verde para Ejercicio
  ];

  const handleVer = (nombre) => {
    if (nombre == 'Ánimo') navigate(`/estadistica/animo`);
    if (nombre == 'Estrés') navigate(`/estadistica/estres`);
    if (nombre == 'Sueño') navigate(`/estadistica/sueno`);
    if (nombre == "Actividad Física") navigate(`/estadistica/actividad_fisica`);
    
  };


  return (
    <div className="homepage">
      <h1 className="burbuja-texto">¡Hola! Soy tu mascota y estoy aquí para ayudarte. Quiero saber cómo te sientes hoy. ¡Pulsa sobre mí para contarme!🐾</h1>
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
          icono={item.icono}
          color={item.color}
          onVer={() => handleVer(item.nombre)}
        />
      ))}
    </div>
  );
};

export default HomePage;
