import React from 'react';
import { useNavigate } from 'react-router-dom';
import grafico from '../assets/ejercicio.jpg'; 
import mascota from '../assets/mascota.png';
import { IoArrowBackSharp } from "react-icons/io5";

const EjercicioPage = () => {
  const navigate = useNavigate();

  return (
    <div className='ejercicio'>
      <button className='boton-retroceso' onClick={() => navigate(-1)}>
        <IoArrowBackSharp className="icono" size={40} />
      </button>
      <h2 className='titulo'>Estadística de Actividad Física</h2>
      <img src={grafico} alt="grafico" className='grafico' />
      <p className="burbuja-texto">En la semana realizas 2 horas de actividad física. Podrías realizar 20-30 minutos diarios, para generar el hábito y disfrutar sus beneficios mentales y físicos. ;)</p>
      <img src={mascota} alt="mascota" className='mascota' />
    </div>
  );
};

export default EjercicioPage;
