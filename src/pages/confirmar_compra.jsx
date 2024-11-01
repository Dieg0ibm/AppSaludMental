// src/pages/ConfirmarCompra.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ConfirmarCompra = () => {
  const { nombre } = useParams(); // Obtiene el nombre del artículo de los parámetros de la URL
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleConfirm = () => {
    // Aquí puedes agregar la lógica para procesar la compra.
    alert(`¡Has comprado "${nombre}" con éxito!`);
    navigate('/tienda'); // Redirige a la tienda después de la compra
  };

  const handleCancel = () => {
    navigate('/tienda'); // Redirige a la tienda si el usuario cancela
  };

  return (
    <div className="confirmar-compra" style={styles.container}>
      <h2>Confirmar Compra</h2>
      <p>¿Estás seguro de que deseas comprar "{nombre}"?</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleConfirm}>Sí</button>
        <button style={styles.button} onClick={handleCancel}>No</button>
      </div>
    </div>
  );
};

// Estilos en línea para simplificar la presentación
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
