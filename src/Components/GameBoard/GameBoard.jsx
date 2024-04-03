import React, { createElement, useEffect } from 'react'

//styles
import './GameBoard.css'

//images
import WhiteBoard from "../../assets/images/board-layer-white-large.svg";
import BlackBoard from "../../assets/images/board-layer-black-large.svg";
import RedCard from "../../assets/images/counter-red-large.svg";
import YellowCard from "../../assets/images/counter-yellow-large.svg";
import RedMarker from "../../assets/images/marker-red.svg";
import YellowMarker from "../../assets/images/marker-yellow.svg";

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
        parentContainer.classList.toggle('selected');
        console.log(container)

         // find card height and height for transistion
         const card = document.querySelector('.card');
         const cardHeight = card?card.width:0;
         let rowGap =container?window.getComputedStyle(container)?.rowGap:0;
         if(rowGap){
            rowGap = parseInt(rowGap.replace('px',''));
         }

         // Get the height of the container for animation purposes
  const containerHeight = container.offsetHeight;

        
         // conatiner height + (cardheight + row-gap) * children - 1 + current card height

  const startPoint = -containerHeight + (cardHeight + rowGap)*container.childElementCount + cardHeight/2;
console.log(startPoint);
        // create new card
        const newCard = document.createElement('img');
        newCard.src = RedCard;
        newCard.className = 'card';
        event.target.appendChild(newCard)

        

        
  // Anime.js animation
  const animation = anime({
    targets: newCard,
    translateY: [startPoint, 0], // Move from top to its position
    duration: 3000, // Animation duration in milliseconds
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