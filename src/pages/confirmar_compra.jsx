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
    <div className="confirmar-compra" style={styles.container}>
      <h2>Confirmar Compra</h2>
      <p>Comprarás "{nombre}", confirmar:</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleConfirm}>Sí</button>
        <button style={styles.button} onClick={handleCancel}>No</button>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default ConfirmarCompra;
