import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCoins } from "react-icons/fa";

const ConfirmarForm = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmar-form">
      <h1 className="titulo">¡Has respondido la encuesta con éxito!</h1>
      <h2 className="recompensa"> + <FaCoins size={30}/> 500</h2>
      <button className='boton-home' onClick={() => navigate('/')}>
        <h2>Volver a la página principal</h2>
      </button>
    </div>
  );
};

export default ConfirmarForm;
