import React from 'react';
import grafico from '../assets/sueño.jpg'; 
import mascota from '../assets/mascota.png';

const EstresPage = () => (
  <div className='sueño'>
    <h2 className='titulo'>Estadística de Sueño</h2>
    <img src={grafico} alt="grafico" className='grafico' />
    <p className="burbuja-texto"> Los días jueves y viernes duermes poco, deberías intentar organizarte mejor para recuperar por completo tu energía! 😸 </p>
    <img src={mascota} alt="mascota" className='mascota' />
  </div>
);

export default EstresPage;
