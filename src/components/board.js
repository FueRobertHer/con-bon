import React, { useState } from 'react';

import Item from './item';
import AddItemButton from './addItemButton';

function Board(title) {
  const [items, setItems] = useState([]);

  function addTodo(str) {
    setItems(items.push(Item(str)))
  };

  function delTodo(item) {

  };

  return (
    <div>
      <h1>{title}</h1>

      {AddItemButton()}
      <div>
        {items}
      </div>
      
    </div>
  )
}

export default Board;