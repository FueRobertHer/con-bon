import React, { useState } from 'react';

import Board from './board'

function Main() {

  const [boards, setBoards] = useState();

  return (
    <div className='main'>
      <Board title={'Ruby'}/>
      <Board title={'JS'}/>
      <Board title={'Algos'}/>
      <Board title={'Other'}/>
    </div>
  )

}

export default Main;