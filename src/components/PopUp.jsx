import React from 'react';
import './PopUp.style.css';

const PopUp = ({ text, onClose }) => {

  return (
    <div className="popup">
      <div className="popup-content">
        <p>{text}</p>
        <button onClick={onClose}>Aceptar</button>
      </div>
    </div>
  );
};

export default PopUp;