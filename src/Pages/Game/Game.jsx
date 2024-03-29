import React from 'react'

//stlyes
import "./Game.css"

// Components
import Components from '../../Components'

export default Game = () => {
  return (
    <div className='parent-container'>

      <Components.GameBoard/>

      <Components.Footer bgColor="#5C2DD5">
        <div className='footer-body'>
        <Components.GamerTimerButton/>
        </div>
      </Components.Footer>
    </div>
  )
}
