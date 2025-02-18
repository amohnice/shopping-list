import React from 'react';

const ListItem = ({ item, onRemove }) => (
  <li className="list-item">
    {item} <button onClick={onRemove}>Remove</button>
  </li>
);

export default ListItem;