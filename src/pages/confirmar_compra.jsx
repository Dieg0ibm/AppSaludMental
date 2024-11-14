import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const ConfirmarCompra = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/tienda');
  };

  return (
    <div className="confirmar-compra">

      <div className="texto-titulo">
        <h2>Confirmar Compra</h2>
        <p>Comprarás "{nombre}", confirmar:</p>
      </div>

      <div className="button-container">
        <button className="button" onClick={handleConfirm}>Sí</button>
        <button className="button" onClick={handleCancel}>No</button>
      </div>
      
    </div>
  );
};

export default ConfirmarCompra;
