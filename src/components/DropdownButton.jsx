import React from 'react';

const Dropdown = ({ options, value, onChange, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <select id={label} value={value} onChange={onChange}>
        <option value="">Selecciona una opción</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;