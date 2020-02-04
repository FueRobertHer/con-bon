import React, { useState } from 'react';

import Item from './item';
import AddItemButton from './addItemButton';

function Board({title}) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  function addTodo(e) {
    e.preventDefault()

    let newItems = items.slice();

    newItems.push(text)
    setItems(newItems)
    
    e.currentTarget.firstChild.value = ''
    setText('')
  };

  function delTodo(idx) {
    let newItems = items.slice()
    newItems.splice(idx, 1)
    setItems(newItems)
  };

  function listItems() {
    return (
      <ul className='item'>
        {items.map((item,idx) => (<Item str={item} key={idx} idx={idx} delTodo={delTodo}/>))}
      </ul>
    )
  }

  function handleInputChange(e) {
    setText(e.currentTarget.value)
  }

  return (
    <div className='board'>
      <h1>{title}</h1>

      <form onSubmit={addTodo}>
        <input type='text' onChange={handleInputChange} />
        <button >
          Add Item 
        </button> 
      </form>

      {listItems()}
    </div>
  )
}

export default Board;