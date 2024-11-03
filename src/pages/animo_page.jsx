import React from 'react';
import grafico from '../assets/animo.jpg'; 
import mascota from '../assets/mascota.png';

const EstresPage = () => (
  <div className='animo'>
    <h2 className='titulo'>Estadística de Ánimo</h2>
    <img src={grafico} alt="grafico" className='grafico' />
    <p className="burbuja-texto"> La ansiedad predomina sobre otros estados. Podrías anotar tres cosas positivas al día para mantener una actitud más optimista ;) </p>
    <img src={mascota} alt="mascota" className='mascota' />
  </div>
);

export default EstresPage;
