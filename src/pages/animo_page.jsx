import React from 'react';
import { useNavigate } from 'react-router-dom';
import grafico from '../assets/estres.jpg'; 
import mascota from '../assets/mascota.png';
import { IoArrowBackSharp } from "react-icons/io5";

const EstresPage = () => {
  const navigate = useNavigate();

  return (
    <div className='estres'>
      <button className='boton-retroceso' onClick={() => navigate(-1)}>
        <IoArrowBackSharp className="icono" size={40} />
      </button>
      <h2 className='titulo'>Estadística de Estrés</h2>
      <img src={grafico} alt="grafico" className='grafico' />
      <p className="burbuja-texto">El estrés es alto de lunes a viernes. Introduce pausas activas o meditación para aliviar tensión diaria durante la semana.</p>
      <img src={mascota} alt="mascota" className='mascota' />
    </div>
  );
};

export default EstresPage;
