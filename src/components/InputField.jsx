import React from 'react';

const InputField = ({ value, onChange, onAdd }) => (
  <div className="input-field">
    <input value={value} onChange={onChange} placeholder="Add an item" />
    <button onClick={onAdd}>Add</button>
  </div>
);

export default InputField;