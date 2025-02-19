import React from 'react';

const ListItem = ({ item, onRemove, onToggle }) => (
  <li className="list-item">
    <input type="checkbox" checked={item.done} onChange={onToggle} />
    <button onClick={onRemove}>Remove</button>
  </li>
  
);

export default ListItem;