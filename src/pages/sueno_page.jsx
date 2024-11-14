import React from 'react';
import { useNavigate } from 'react-router-dom';
import grafico from '../assets/sueño.jpg'; 
import mascota from '../assets/mascota.png';
import { IoArrowBackSharp } from "react-icons/io5";

const SuenoPage = () => {
  const navigate = useNavigate();

  return (
    <div className='sueño'>
      <button className='boton-retroceso' onClick={() => navigate(-1)}>
        <IoArrowBackSharp className="icono" size={40} />
      </button>
      <h2 className='titulo'>Estadística de Sueño</h2>
      <img src={grafico} alt="grafico" className='grafico' />
      <p className="burbuja-texto">Los días jueves y viernes duermes poco, deberías intentar organizarte mejor para recuperar por completo tu energía! 😸</p>
      <img src={mascota} alt="mascota" className='mascota' />
    </div>
  );
};

export default SuenoPage;

