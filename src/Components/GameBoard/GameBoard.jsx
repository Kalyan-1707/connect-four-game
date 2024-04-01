import React, { createElement, useEffect } from 'react'

//styles
import './GameBoard.css'

//images
import WhiteBoard from "../../assets/images/board-layer-white-large.svg";
import BlackBoard from "../../assets/images/board-layer-black-large.svg";
import RedCard from "../../assets/images/counter-red-large.svg";
import YellowCard from "../../assets/images/counter-yellow-large.svg";
import anime from 'animejs';
const GameBoard = () => {

    useEffect(() => {
        anime({
            targets: '',
            translateY: [
                { value: 0, duration: 0 },
                { value: 300, duration: 1000 },
            ],
            easing: 'easeInOutSine',
            loop: true,
        })
    },[])

    function handleSelection(event) {
        
        const container = event.target;
        const parentContainer = container.parentElement;
        console.log(event.target)
        parentContainer.classList.toggle('selected')
        const card = document.createElement('img');
        card.src = RedCard;
        card.className = 'card';
        card.width = 64;
        card.height = 64;
        event.target.appendChild(card)

        // Get the height of the container for animation purposes
  const containerHeight = container.offsetHeight;

  const startPoint = -containerHeight + (64 + 24) * (container.childElementCount -1) + 45;

  // Anime.js animation
  const animation = anime({
    targets: card,
    translateY: [startPoint, 0], // Move from top to its position
    duration: 1000, // Animation duration in milliseconds
    easing: 'linear', // Animation easing function
  })
  animation.finished.then(() => {
  parentContainer.classList.toggle('selected')  
  })
    }


    let columns = [0,1,2,3,4,5,6];
  return (
    <div className='board'>
        <img  className='black-board'/>
        <img  className='white-board'/>
        <div className='blocks'>
        {columns.map(() => {
            return (
                <div className='col' onClick={handleSelection}>
                    {/* <img className='card red' src={RedCard} width="64px" height="64px" />
                    
                    <img className='card' src={YellowCard} width="64px" height="64px" /> */}
                </div>
            )
        })}
        </div>    
    </div>
  )
}

export default GameBoard