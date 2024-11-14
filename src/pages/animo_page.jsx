import React from 'react';
import { useNavigate } from 'react-router-dom';
import grafico from '../assets/animo.jpg'; 
import mascota from '../assets/mascota.png';
import { IoArrowBackSharp } from "react-icons/io5";

const EstresPage = () => {
  const navigate = useNavigate();

  return (
    <div className='animo'>
      <button className='boton-retroceso' onClick={() => navigate(-1)}>
        <IoArrowBackSharp className="icono" size={40} />
      </button>
      <h2 className='titulo'>Estadística de Animo</h2>
      <img src={grafico} alt="grafico" className='grafico' />
      <p className="burbuja-texto">La ansiedad predomina sobre otros estados. Podrías anotar tres cosas positivas al día para mantener una actitud más optimista ;)</p>
      <img src={mascota} alt="mascota" className='mascota' />
    </div>
  );
};

export default EstresPage;
