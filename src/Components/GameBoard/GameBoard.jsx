import React from 'react'

//styles
import './GameBoard.css'

//images
import WhiteBoard from "../../assets/images/board-layer-white-large.svg";
import BlackBoard from "../../assets/images/board-layer-black-large.svg";
import RedCard from "../../assets/images/counter-red-large.svg";
import YellowCard from "../../assets/images/counter-yellow-large.svg";
const GameBoard = () => {

    let columns = [0,1,2,3,4,5,6];
  return (
    <div className='board black-board'>
        <img src={BlackBoard}/>
        <div className='blocks'>
        {columns.map(() => {
            return (
                <div className='col'>
                    <img className='card' src={RedCard} width="100%" height="100%" />
                    
                    <img className='card' src={YellowCard} width="100%" height="100%" />
                </div>
            )
        })}
        </div>
    <div className='board white-board'>
        <img src={WhiteBoard} />
        
        
    </div>
    </div>
  )
}

export default GameBoard