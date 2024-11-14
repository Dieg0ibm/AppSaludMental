import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecursoItem from '../components/recurso_item';
import { GiMeditation, GiNightSleep } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import mascota from '../assets/mascota.png';
import { IoArrowBackSharp } from "react-icons/io5";

const RecursosPage = () => {
  const navigate = useNavigate();

  const items = [
    { nombre: "Meditación", icono: <GiMeditation size={50} color="#333" /> },
    { nombre: "Mejora tu Sueño", icono: <GiNightSleep size={50} color="#333" /> },
    { nombre: "Ejercicios Físicos", icono: <MdSportsGymnastics size={50} color="#333" /> },
    { nombre: "Ayuda Profesional", icono: <RiMentalHealthLine size={50} color="#333" /> },
  ];

  const handleRecurso = (nombre) => {
    alert('Pronto te redirigiremos a un recurso externo que puede ser útil.');
  };
  
  
  return (
    <div className="recursos">
      <button className='boton-retroceso' onClick={() => navigate(-1)}>
        <IoArrowBackSharp className="icono" size={40} />
      </button>
      <h1 className="recursos-titulo">Recursos de Apoyo</h1>
      {items.map((item, index) => (
        <RecursoItem
          key={index}
          nombre={item.nombre}
          icono={item.icono}
          onPulsar={() => handleRecurso(item.nombre)}
        />
      ))}
      <img src={mascota} alt="mascota" className='mascota' />
    </div>
  );
};

export default RecursosPage;
