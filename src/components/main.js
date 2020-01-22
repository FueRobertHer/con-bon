import React, { useState } from 'react';

import Board from './board'

function Main() {

  const [boards, setBoards] = useState();

  return (
    <div>
      {Board('Ruby')}
      {Board('Python')}
      {Board('JavaScript')}
      {Board('HTML/CSS')}

    </div>
  )

}

export default Main;