import React from 'react';
import grafico from '../assets/estres.jpg'; 
import mascota from '../assets/mascota.png';

const EstresPage = () => (
  <div className='estres'>
    <h2 className='titulo'>Estadística de Estrés</h2>
    <img src={grafico} alt="grafico" className='grafico' />
    <p className="burbuja-texto"> El estrés es alto de lunes a viernes. Introduce pausas activas o meditación para aliviar tensión diaria durante la semana.</p>
    <img src={mascota} alt="mascota" className='mascota' />
  </div>
);

export default EstresPage;
