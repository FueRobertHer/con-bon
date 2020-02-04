import React, { useState } from 'react';

function Item({str, idx, delTodo}) {

  function handleRemove() {
    delTodo(idx)
  }
  

  return (
    <div className='item'>
      <p>{str}</p>
      <button onClick={handleRemove}>
        Remove
      </button>
    </div>
  )
}

export default Item;