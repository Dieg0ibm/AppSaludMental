import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const questions = {
  estrés: [
    { id: 1, question: "¿Cómo te sientes?", type: "dropdown", options: ["Feliz", "Triste", "Ansioso", "Enojado"] },
    { id: 2, question: "Califica tu nivel de estrés de 1 a 5:", type: "slider" },
    { id: 3, question: "¿Cuál ha sido tu mayor fuente de estrés estos últimos días", type: "dropdown", options: ["Estudio/Trabajo", "Familia", "Salud", "Finanzas", "Otros"] },
  ],
  sueño: [
    { id: 4, question: "¿Cuántas horas dormiste anoche?", type: "input" },
    { id: 5, question: "¿Te despertaste durante la noche?", type: "switch" },
    { id: 6, question: "¿Cómo calificarías la calidad de tu sueño?", type: "dropdown", options: ["Muy mala", "Mala", "Regular", "Buena", "Muy buena"] },
  ],
  ejercicio: [
    { id: 8, question: "¿Cuántas horas dedicaste a hacer ejercicio?", type: "input" },
    { id: 9, question: "¿Qué tipo de ejercicio realizaste?", type: "dropdown", options: ["Fuerza", "Correr", "Deporte"] },
    { id: 10, question: "¿Cuántos pasos llevas hoy?", type: "input" },
  ]
};

export const FormPage = () => {
  const navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState('estrés');
  const [responses, setResponses] = useState({});

  const handleResponseChange = (id, value) => {
    setResponses(prev => ({ ...prev, [id]: value }));
  };

  const handleNextCategory = () => {
    if (currentCategory === 'estrés') setCurrentCategory('sueño');
    else if (currentCategory === 'sueño') setCurrentCategory('ejercicio');
    else {
      navigate('/form/confirmar');
    }
  };

  const handlePreviousCategory = () => {
    if (currentCategory === 'ejercicio') setCurrentCategory('sueño');
    else if (currentCategory === 'sueño') setCurrentCategory('estrés');
    else if (currentCategory === 'estrés') navigate('/');
  };

  return (
    <div className='form-page'>
      <h1>Encuesta Diaria</h1>

      {questions[currentCategory].map(q => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.type === 'input' && <input type="text" onChange={(e) => handleResponseChange(q.id, e.target.value)} />}
          {q.type === 'slider' && (
            <div className="slider-container">
              <input 
                type="range" 
                min="1" 
                max="5" 
                value={responses[q.id] || 1} 
                onChange={(e) => handleResponseChange(q.id, e.target.value)} 
              />
              <span>{responses[q.id] || 1}</span> 
            </div>
          )}

          {q.type === 'switch' && (
            <div className="checkbox-container">
              <input 
                type="checkbox" 
                onChange={(e) => handleResponseChange(q.id, e.target.checked)} 
              />
            </div>
          )}


          {q.type === 'dropdown' && (
            <select onChange={(e) => handleResponseChange(q.id, e.target.value)}>
              <option value="">Selecciona una opción</option>
              {q.options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
          )}
        </div>

      ))}
      <div className="button-container">
        <button onClick={handlePreviousCategory}>Atrás</button>
        <button onClick={handleNextCategory}>Siguiente</button>
      </div>
    </div>
  );
};

export default FormPage;
