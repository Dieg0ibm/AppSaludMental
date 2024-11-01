import React, { useState } from 'react';

export const FormPage = () => {
  const [emotionalState, setEmotionalState] = useState('');
  const [energyLevel, setEnergyLevel] = useState(0);
  const [physicalActivity, setPhysicalActivity] = useState(false);

  const handleEmotionalChange = (e) => {
    setEmotionalState(e.target.value);
  };

  const handleEnergyChange = (e) => {
    setEnergyLevel(e.target.value);
  };

  const handleActivityChange = () => {
    setPhysicalActivity(!physicalActivity);
  };

  return (
    <div className="form-page">
      <p>¿Cómo te sientes emocionalmente hoy?</p>
      <select value={emotionalState} onChange={handleEmotionalChange}>
        <option value="">Selecciona...</option>
        <option value="feliz">Feliz</option>
        <option value="triste">Triste</option>
      </select>

      <p>¿Cómo calificas tu nivel de energía?</p>
      <input
        type="range"
        min="0"
        max="100"
        value={energyLevel}
        onChange={handleEnergyChange}
      />
      <span>{energyLevel}</span>

      <p>¿Has hecho actividad física hoy?</p>
      <label>
        <input
          type="checkbox"
          checked={physicalActivity}
          onChange={handleActivityChange}
        />
        Sí/No
      </label>

      <div className="button-container">
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default FormPage;
