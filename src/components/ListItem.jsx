import React from 'react';

const ListItem = ({ item, onRemove }) => (
  <li>
    {item} <button onClick={onRemove}>Remove</button>
  </li>
);

export default ListItem;