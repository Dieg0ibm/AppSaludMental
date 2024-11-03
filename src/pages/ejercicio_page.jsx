import React from 'react';
import grafico from '../assets/ejercicio.jpg'; 
import mascota from '../assets/mascota.png';

const EstresPage = () => (
  <div className='ejercicio'>
    <h2 className='titulo'>Estadística de Actividad Física</h2>
    <img src={grafico} alt="grafico" className='grafico' />
    <p className="burbuja-texto"> En la semana realizas 2 horas de actividad física. Podrías realizar 20-30 minutos diarios, para generar el hábito y disfrutar sus beneficios mentales y físicos. ;) </p>
    <img src={mascota} alt="mascota" className='mascota' />
  </div>
);

export default EstresPage;
