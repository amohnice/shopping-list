import React, { useState } from 'react';
import InputField from './InputField.jsx';
import ListItem from './ListItem.jsx';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    setItems(
      items.map((item, i) => 
        i === index ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <InputField value={input} onChange={(e) => setInput(e.target.value)} onAdd={addItem} />
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} onRemove={() => removeItem(index)} onToggle={() => toggleDone(index)} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;