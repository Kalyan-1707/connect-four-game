import React from 'react'

//images
import GamerTimerCard from "../../assets/images/turn-background-yellow.svg";

//styles
import "./GamerTimerButton.css"

const GamerTimerButton = () => {
  return (

    <div id='gamer-timer-button'>
        <p className='heading-xsmall'>player 1's turn</p>
        <p className='heading-large'>15s</p>
    </div>
    
  )
}

export default GamerTimerButton